import React, {useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import frontRoutes from "./routes/front-routes";
import adminRoutes from "./routes/admin-routes";
import {useDispatch, useSelector} from "react-redux";
import {getAuthenticatedProfileInformationAction} from "./redux/admin-dashboard/auth/AuthAction";

const App = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.authUserData);
    useEffect(() => {
        console.log("App useeffect")
        dispatch(getAuthenticatedProfileInformationAction());
    },[]);
    return (
        <>
            <Routes>
                {
                    frontRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element}/>
                    ))
                }
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
        </>
    );
};

export default App;
