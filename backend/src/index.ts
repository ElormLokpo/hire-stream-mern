import { PingController } from "./entities/ping/ping.controller";
import { App } from "./app";
import "dotenv/config";
import { AuthController } from "./entities/auth/auth.controller";
import { OrganizationController } from "./entities/organization/organization.controller";

let app = new App([
    new PingController(),
    new AuthController(),
    new OrganizationController()
]);
app.Listen();