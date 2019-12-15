import Rule from "./Rule";

export default class WeeklyRule extends Rule{
    constructor(data:Object){
        super(new RegExp(data["rule"], 'i'), data["start"], data["end"]);
    }

    toJSON(){
        return {
            "id": this.id,
            "type": 2,
            "rule": this.rule.toString().split("/")[1],
            "start": this.start,
            "end": this.end
        }
    }
}