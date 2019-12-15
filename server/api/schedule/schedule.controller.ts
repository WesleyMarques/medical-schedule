import ScheduleService from '../schedule-role/schedule-role.service';
import { Request, Response } from 'express';

export class ScheduleController {
  listSchedules(req: Request, res: Response): void{
    res.status(200).send(ScheduleService.getDataRange(req.query["start"],req.query["end"]));
  }
}
export default new ScheduleController();
