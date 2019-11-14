import IRule from "./rule.interface";

export default abstract class Rule implements IRule {
    start:string;
    end:string;
    rule:string;

    constructor(rule:any, start:string, end:string){
        this.rule = rule;
        this.start = start;
        this.end = end;
    }

    abstract toJSON();
}