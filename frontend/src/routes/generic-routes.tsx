import { RouteObject } from "react-router-dom";
import { genericRoutes } from "../constants";
import { LoginPage, RegisterPage } from "../pages/auth";
import { DashboardLayout } from "../layouts";
import { recruiter_routes } from "./recruiter-routes";

export const generic_routes: RouteObject[] = [
    { path: genericRoutes.AUTH_REGISTER, element: <RegisterPage /> },
    { path: genericRoutes.AUTH_LOGIN, element: <LoginPage /> },
    { path: genericRoutes.DASHBOARD, element:<DashboardLayout />, children:[...recruiter_routes]}
]