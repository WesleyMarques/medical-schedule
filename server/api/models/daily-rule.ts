import Rule from "./Rule";
export default class DailyRule extends Rule{

    constructor(data:Object){
        super(new RegExp('.*', 'i'), data["start"], data["end"]);
    }

    toJSON(){
        return {
            "type": 1,
            "rule": '',
            "start": this.start,
            "end": this.end
        }
    }
}