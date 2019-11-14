import Rule from "./Rule";
import Days from "./days.enum";

export default class WeeklyRule extends Rule{
    days: Days[];

    constructor(data:Object){
        super(new RegExp(data["rule"], 'i'), data["start"], data["end"]);
    }

    toJSON(){
        return {
            "type": 2,
            "rule": this.rule.toString().split("/")[1],
            "start": this.start,
            "end": this.end
        }
    }
}