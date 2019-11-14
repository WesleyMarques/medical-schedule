import express from 'express';
import scheduleRuleController from './schedule-rule.controller';
import scheduleRuleMiddleware from './schedule-rule.middleware';

export default express.Router()
    .post('/', scheduleRuleMiddleware.initializeRule, scheduleRuleController.create)
    .get('/', scheduleRuleController.all)
    .delete('/:id', scheduleRuleController.deleteById);