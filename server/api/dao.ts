import * as _ from 'lodash';
import fs from 'fs';
let db = require('./data.json');

export class Dao{

    getAll(){
        return db;
    }

    create(jsonData: Object){
        this.clear();
        db["schedule-rules"].push(jsonData);
        this._persisteJSON(db);
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