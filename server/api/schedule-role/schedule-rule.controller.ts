import ScheduleService from '../schedule-role/schedule-role.service';
import { Request, Response } from 'express';

export class ScheduleRuleController {
  all(req: Request, res: Response): void {
    ScheduleService.all().then(r => res.json(r));
  }

  deleteById(req: Request, res: Response): void {
    const id = req.params['id'];
    ScheduleService.deleteById(id).then(r => 
      res
        .status(200)
        .json(r),
        error => res
        .status(404)
        .json(error));
  }

  create(req: Request, res: Response): void {
    ScheduleService.create(req.body.schedule, req.body._builder).then(r =>
      res
        .status(201)
        .json(r),
    );
  }
}
export default new ScheduleRuleController();
