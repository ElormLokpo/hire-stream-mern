import { NextFunction, Request, Response, Router } from "express";
import { IController } from "../../interfaces/icontroller.interface";

export class PingController implements IController {
  public path = "/api/ping";
  public router = Router();

  constructor() {
    this.router.get(this.path, this.Ping );
  }

  private Ping(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({message:"Ping successful"})
  }
}
