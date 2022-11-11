import { ReactElement } from "react";
import { createBrowserRouter,RouterProvider,Route } from "react-router-dom";
import App from '../App';
import { ErrorPage } from "../pages/ErrorPage";
import { LoginPage } from "../pages/LoginPage";
import { MemberPage } from "../pages/MemberPage";

export const router = createBrowserRouter([
    { // Main page
        path:"/",
        element:<App />,
        errorElement:<ErrorPage />,
        // loader: ,
        // children pages
        children:[
            {
                path:"/login/",
                element: <LoginPage></LoginPage>,
                errorElement:<ErrorPage />,
            },
            {
                path:"/member/",
                element: <MemberPage></MemberPage>,
                errorElement:<ErrorPage />,
            }
        ]
    }
])