import express from 'express';
import scheduleController from './schedule-rule.controller';
import scheduleRuleMiddleware from './schedule-rule.middleware';

export default express.Router()
    .post('/', scheduleRuleMiddleware.initializeRule, scheduleController.create);
    // .get('/', controller.all)
    // .get('/:id', controller.byId);