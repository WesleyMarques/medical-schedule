import { Application } from 'express';
import scheduleRuleRouter from './api/controllers/schedule-role/schedule-rule.router'
import scheduleRouter from './api/controllers/schedule/schedule.router'
export default function routes(app: Application): void {
  app.use('/api/v1/schedule-rule', scheduleRuleRouter);
  app.use('/api/v1/schedule', scheduleRouter);
};