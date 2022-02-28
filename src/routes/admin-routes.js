import React, {useEffect} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import LoginContainer from "../pages/admin-dashboard/auth/LoginContainer";
import SignUpContainer from "../pages/admin-dashboard/auth/SignUpContainer";
import DashboardContainer from "../pages/admin-dashboard/dashboard/DashboardContainer";
import {getAuthenticatedProfileInformationAction} from "../redux/admin-dashboard/auth/AuthAction";

import UsersListContainer from "../pages/admin-dashboard/users/UsersListContainer";
import RolesListContainer from "../pages/admin-dashboard/roles/RolesListContainer";
import UsersCreateContainer from "../pages/admin-dashboard/users/UsersCreateContainer";
import UsersEditContainer from "../pages/admin-dashboard/users/UsersEditContainer";

const AdminRoutes = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.authUserData);
    const adminRoutes = [
        {
            path: "/login",
            element: <LoginContainer/>,
            auth: false
        },
        {
            path: "/sign-up",
            element: <SignUpContainer/>,
            auth: false
        },
        {
            path: "/admin/dashboard",
            element: <DashboardContainer/>,
            auth: true
        },
        {
            path: "/admin/users",
            element: <UsersListContainer/>,
            auth: true
        },
        {
            path: "/admin/users/create",
            element: <UsersCreateContainer/>,
            auth: true
        },
        {
            path: "/admin/users/:id/edit",
            element: <UsersEditContainer/>,
            auth: true
        },
        {
            path: "/admin/roles",
            element: <RolesListContainer/>,
            auth: true
        },
    ];
    useEffect(() => {
        dispatch(getAuthenticatedProfileInformationAction());
    }, []);
    return (
        <Routes>
            {
                adminRoutes.map((route, index) => (
                    <Route key={index} path={route.path}
                           element={
                               route.auth === Boolean(user) ? route.element
                                   : (Boolean(user) ? <Navigate to="/admin/dashboard"/> : <Navigate to="/login"/>)
                           }/>
                ))
            }
        </Routes>
    );
};

export default AdminRoutes;