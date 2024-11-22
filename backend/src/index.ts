import { PingController } from "./entities/ping/ping.controller";
import { App } from "./app";
import "dotenv/config";

let app = new App([new PingController()]);
app.Listen();