import React from 'react';
import FrontRoutes from "./front-routes";
import AdminRoutes from "./admin-routes";

const AllRoutes = () => {
    return (
        <>
            <FrontRoutes/>
            <AdminRoutes/>
        </>
    );
};

export default AllRoutes;