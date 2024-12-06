import { createBrowserRouter, RouteObject } from "react-router-dom";
import { recruiter_routes } from "./recruiter-routes";
import { applicant_routes } from "./applicant-routes";
import { generic_routes } from "./generic-routes";


let all_routes: RouteObject[] = [...applicant_routes, ...generic_routes]
export const Router = createBrowserRouter(all_routes)