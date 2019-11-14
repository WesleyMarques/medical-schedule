import L from '../../common/logger'
import dao from '../dao';
import Rule from '../models/rule';




export class ScheduleRoleService {
  // all(): Promise<Example[]> {
  //   L.info(examples, 'fetch all examples');
  //   return Promise.resolve(examples);
  // }

  // byId(id: number): Promise<Example> {
  //   L.info(`fetch example with id ${id}`);
  //   return this.all().then(r => r[id])
  // }

  create(jsonData:Object, builder: any): Promise<String> {
    L.info(`create role with name`);
    let rule = new builder(jsonData);
    dao.create(rule.toJSON());
    return Promise.resolve("OK");
  }
}

export default new ScheduleRoleService();