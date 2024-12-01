import { createBrowserRouter, RouteObject } from "react-router-dom";
import { recruiter_routes } from "./recruiter-routes";
import { applicant_routes } from "./applicant-routes";


let all_routes: RouteObject[] = [...recruiter_routes, ...applicant_routes]
export const Router = createBrowserRouter(all_routes)