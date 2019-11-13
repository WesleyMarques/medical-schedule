import ScheduleService from '../../services/schedule-role.service';
import { Request, Response } from 'express';

export class ScheduleRuleController {
  // all(req: Request, res: Response): void {
  //   ExamplesService.all().then(r => res.json(r));
  // }

  // byId(req: Request, res: Response): void {
  //   const id = Number.parseInt(req.params['id'])
  //   ExamplesService.byId(id).then(r => {
  //     if (r) res.json(r);
  //     else res.status(404).end();
  //   });
  // }

  create(req: Request, res: Response): void {
    ScheduleService.create(req.body.schedule, req.body._builder).then(r =>
      res
        .status(201)
        .json(r),
    );
  }
}
export default new ScheduleRuleController();
