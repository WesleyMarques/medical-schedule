import moment from 'moment';

import L from '../../common/logger'
import dao from '../dao';
import Rule from '../models/rule';
import dailyRule from '../models/daily-rule';
import specificRule from '../models/specific-rule';
import weeklyRule from '../models/weekly-rule'; 


export class ScheduleRoleService {
  all(): Promise<Object[]> {
    L.info('fetch all examples');
    dao.getAll();
    return Promise.resolve(dao.getAll());
  }

  // byId(id: number): Promise<Example> {
  //   L.info(`fetch example with id ${id}`);
  //   return this.all().then(r => r[id])
  // }

  deleteById(id: string): Promise<String>{
    const wasDeleted = dao.deleteById(id);
    if(!wasDeleted) return Promise.reject("not found");
    return Promise.resolve("OK");
  }

  create(jsonData:Object, builder: any): Promise<String> {
    L.info(`create role with name`);
    let rule = new builder(jsonData);
    dao.create(rule.toJSON());
    return Promise.resolve("OK");
  }

  getDataRange(startDate:string, endDate:string){
    const rangeInterval = this._getDatesRange(startDate, endDate);
    let resultMap = new Map();
    let rulesObj = dao.getAll();
    let rules:Rule[] = [];
    rulesObj.forEach(ruleJson => rules.push(this._builderRules(ruleJson)));
    
    for (const dateValue of rangeInterval) {
      let dateFormated = dateValue.split(" ")[1];
      for (let ruleValue of rules) {
        if(ruleValue.rule["test"](dateValue)){
          if(!resultMap.has(dateFormated)) resultMap.set(dateFormated, [])
          resultMap.get(dateFormated).push({"start":ruleValue.start,"end":ruleValue.end})
        }
      }
    }
    
    return this._formatScheduleResponse(resultMap);
  }

  _formatScheduleResponse(values){
    let result = [];
    for (let key of values.keys()) {
      result.push({
        "day":key,
        "intervals":values.get(key)
      });
    }
    return result;
  }

  _builderRules(ruleJson:Object){
        switch (ruleJson["type"]) {
            case 1:
                return new dailyRule(ruleJson);
            case 2:
                return new weeklyRule(ruleJson);
            default:
                return new specificRule(ruleJson);
        }
  }

   _getDatesRange(startDate:string, finishDate:string) {
    var dateArray = [];
    var currentDate = moment(startDate, 'DD-MM-YYYY');
    var endDate = moment(finishDate, 'DD-MM-YYYY');
    while (currentDate <= endDate) {
        dateArray.push( moment(currentDate).format('ddd DD-MM-YYYY') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}
}

export default new ScheduleRoleService();