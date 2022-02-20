import React from 'react';
import {Routes, Route} from 'react-router-dom';
import frontRoutes from "./routes/front-routes";
import adminRoutes from "./routes/admin-routes";

const App = () => {
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
                        <Route key={index} path={route.path} element={route.element}/>
                    ))
                }
            </Routes>
        </>
    );
};

export default App;
