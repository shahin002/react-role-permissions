import LoginContainer from "../pages/admin-dashboard/auth/LoginContainer";
import SignUpContainer from "../pages/admin-dashboard/auth/SignUpContainer";
import DashboardContainer from "../pages/admin-dashboard/dashboard/DashboardContainer";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getAuthenticatedProfileInformationAction} from "../redux/admin-dashboard/auth/AuthAction";
import {Routes, Route, Navigate} from "react-router-dom";

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