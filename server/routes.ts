import { Application } from 'express';
import scheduleRuleRouter from './api/controllers/schedule-role/schedule-rule.router'
export default function routes(app: Application): void {
  app.use('/api/v1/schedule-rule', scheduleRuleRouter);
};