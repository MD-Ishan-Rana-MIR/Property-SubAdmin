import { createBrowserRouter } from "react-router";
import NotFoundPage from "../components/not-found-page/NotFoundPage";

import SubAdminSidebar from "../sidebar/SubAdminSidebar";
import LoginPage from "../auth/admin-auth/LoginPage";
import Profile from "../pages/profile/Profile";
import PasswordChange from "../pages/profile/PasswordChange";

export const router = createBrowserRouter([
    {
        path : "/",
        element : <LoginPage/>
    },
   
    {
        path : "/sub-admin-dashboard",
        element : <SubAdminSidebar></SubAdminSidebar>,
        children : [
            {
                path : "",
                element : <>Home page</>
            },
            {
                path : "account",
                element : <Profile></Profile>
            },
            {
                path : "password-changes",
                element : <PasswordChange></PasswordChange>
            }
        ]
    },






    {
        path : "*",
        element : <NotFoundPage></NotFoundPage>
    }

])