import express from "express";
import { IController } from "./interfaces/icontroller.interface";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

export class App {
  public app: express.Express;

  constructor(controllers : IController[]) {
    this.app = express();
    this.ConnectDb();
    this.InitializeMiddleware();
    this.InitializeControllers(controllers);
  }

  private InitializeControllers(controllers: IController[]) {
        controllers.forEach(controller=>this.app.use("/", controller.router));
  }

  private InitializeMiddleware(){
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(cors());
  }

  public Listen() {
    let PORT = process.env.PORT;
    this.app.listen(PORT, () => console.log(`Server running on port:${PORT}`));
  }

  private ConnectDb() {
    mongoose.Promise = Promise;
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully");
    mongoose.connection.on("error", (error: Error) => console.log(error));
  }
}
