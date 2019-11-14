import Rule from "./Rule";
export default class SpecificRule extends Rule{


    constructor(data:Object){
        super(new RegExp(data["rule"], 'i'), data["start"], data["end"]);
    }

    toJSON(){
        return {
            "type": 0,
            "rule": this.rule.toString().split("/")[1],
            "start": this.start,
            "end": this.end
        }
    }
}