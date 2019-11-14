import ScheduleService from '../../services/schedule-role.service';
import { Request, Response } from 'express';

export class ScheduleController {
  listSchedules(req: Request, res: Response): void{
    console.log(req.query);
    res.status(200).send(ScheduleService.getDataRange(req.query["start"],req.query["end"]));
  }
}
export default new ScheduleController();
