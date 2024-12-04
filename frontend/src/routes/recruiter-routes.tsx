import { RouteObject } from "react-router-dom";
import { recruiterRoutes } from "../constants";
import { RecruiterRegisterPage } from "../pages/recruiter/auth";
import { LoginPage } from "../pages/auth";

export const recruiter_routes: RouteObject[] = [
    { path: recruiterRoutes.AUTH_REGISTER, element: <RecruiterRegisterPage /> },
    { path: recruiterRoutes.AUTH_LOGIN, element: <LoginPage /> }

]