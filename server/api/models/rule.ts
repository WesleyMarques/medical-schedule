import IRule from "./rule.interface";

export default abstract class Rule implements IRule {
    start:string;
    finish:string;

    abstract toJSON();
}