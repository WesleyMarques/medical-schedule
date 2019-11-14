import Rule from "./Rule";
import Days from "./days.enum";
import { threadId } from "worker_threads";

export default class WeeklyRule extends Rule{
    days: Days[];

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