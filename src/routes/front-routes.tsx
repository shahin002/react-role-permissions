import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomeContainer from "../pages/front-pages/HomeContainer";

const FrontRoutes = () => {
    const frontRoutes = [
        {
            path: "/",
            element: <HomeContainer/>,
            auth: true
        },
    ];
    return (
        <Routes>
            {
                frontRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element}/>
                ))
            }
        </Routes>
    );
};

export default FrontRoutes;