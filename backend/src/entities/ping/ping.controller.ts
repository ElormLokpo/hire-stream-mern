import { NextFunction, Request, Response, Router } from "express";
import { routes } from "../../constants";
import { IController } from "../../interfaces/icontroller.interface";

export class PingController implements IController {
  public path = routes.PING;
  public router = Router();

  constructor() {
    this.router.get(this.path, this.Ping );
  }

  private Ping(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({message:"Ping successful"})
  }
}
