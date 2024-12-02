import {RouterProvider} from "react-router-dom";
import { Router } from "../routes";

export const RootProvider = ()=>{
    return(
       <>
            <RouterProvider router={Router}/>
       </>
    )
}