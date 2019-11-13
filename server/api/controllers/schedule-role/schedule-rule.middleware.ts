import { Request, Response } from 'express';
import rule from '../../models/rule';
import dailyRule from '../../models/daily-rule';
import specificRule from '../../models/specific-rule';
import weeklyRule from '../../models/weekly-rule'; 

export class ScheduleRuleMiddleware {
     
    initializeRule(req: Request, res: Response, next: any) {
        let jsonData:Object = req.body.schedule;
        let builderSchedule;
        switch (jsonData["type"]) {
            case 1:
                builderSchedule = dailyRule;
                break;
            case 2:
                builderSchedule = weeklyRule;
                break;
            default:
                builderSchedule = specificRule;
                break;
        }
        req.body._builder = builderSchedule;
        next();
    }
}

export default new ScheduleRuleMiddleware();