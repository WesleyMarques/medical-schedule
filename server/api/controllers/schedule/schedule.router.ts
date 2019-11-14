import express from 'express';
import scheduleController from './schedule.controller';
import scheduleRuleMiddleware from '../schedule-role/schedule-rule.middleware';

export default express.Router()
    .get('/', scheduleController.listSchedules)