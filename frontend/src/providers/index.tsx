import { RouterProvider } from "react-router-dom";
import { Router } from "../routes";
import { QueryProvider } from "./query-provider";
import { ReduxProvider } from "./redux-provider";

export const RootProvider = () => {
    return (
        <>
            <ReduxProvider>
                <QueryProvider>
                    <RouterProvider router={Router} />
                </QueryProvider>
            </ReduxProvider>

        </>
    )
}