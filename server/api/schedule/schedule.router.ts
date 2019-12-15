import express from 'express';
import scheduleController from './schedule.controller';

export default express.Router()
    .get('/', scheduleController.listSchedules)
