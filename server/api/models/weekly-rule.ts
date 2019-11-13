import Rule from "./Rule";
import Days from "./days.enum";

export default class WeeklyRule extends Rule{
    days: Days[];

    toJSON(){}
}