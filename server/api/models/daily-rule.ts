import Rule from "./Rule";
export default class DailyRule extends Rule{

    toJSON(){
        return {
            "type": 1,
            "regex": /abcs/
        }
    }
}