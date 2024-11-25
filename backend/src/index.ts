import { PingController } from "./entities/ping/ping.controller";
import { App } from "./app";
import "dotenv/config";
import { AuthController } from "./entities/auth/auth.controller";
import { OrganizationController } from "./entities/organization/organization.controller";
import { JobOpeninngController } from "./entities/job-opening/job.opening.controller";
import { applicantOpeninngController } from "./entities/applicants/applicant.controller";

let app = new App([
    new PingController(),
    new AuthController(),
    new OrganizationController(),
    new JobOpeninngController(),
    new applicantOpeninngController()
]);
app.Listen();