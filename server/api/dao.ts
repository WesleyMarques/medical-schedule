import * as _ from 'lodash';
import fs from 'fs';
let db = require('./data.json');

export class Dao{

    getAll(){
        return db["schedule-rules"];
    }

    create(jsonData: Object){
        db["schedule-rules"].push(jsonData);
        this._persisteJSON(db);
    }

    deleteById(id:string){
        let tempRules = db["schedule-rules"];
        const valueDeleted = _.remove(tempRules, {"id":id});
        db["schedule-rules"] = tempRules
        this._persisteJSON(db);
        return valueDeleted.length > 0;
    }

    clear(){
        db["schedule-rules"] = []
        this._persisteJSON(db);
    }

    private _persisteJSON(json:Object){
        try {
            fs.writeFileSync('./server/api/data.json', JSON.stringify(json));
          } catch (err) {
            console.error(err);
          }
    }
}

export default new Dao()