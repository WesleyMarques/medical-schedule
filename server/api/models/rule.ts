import IRule from "./rule.interface";
import uuidV1 from 'uuid/v1';


export default abstract class Rule implements IRule {
    id:string;
    start:string;
    end:string;
    rule:string;

    constructor(rule:any, start:string, end:string, id?:string){
        this.rule = rule;
        this.start = start;
        this.end = end;
        if(!Boolean(id)){
            this.generateId();
        }
    }

    generateId(){
        this.id = uuidV1();
    }

    abstract toJSON();
}