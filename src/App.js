import React, {useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import frontRoutes from "./routes/front-routes";
import adminRoutes from "./routes/admin-routes";

const App = () => {
    const user = Boolean(localStorage.getItem('userData'));
    console.log(user)
    // useEffect(() => {
    //     const user = localStorage.getItem('userData');
    //
    // },[])
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
                                   route.auth === user ? route.element
                                       : (user ? <Navigate to="/admin/dashboard"/> : <Navigate to="/login"/>)
                               }/>
                    ))
                }
            </Routes>
        </>
    );
};

export default App;
