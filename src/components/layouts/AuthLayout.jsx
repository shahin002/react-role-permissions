import React from 'react';
import "./assets/Admin.css";

const AuthLayout = ({children}) => {
    return (
        <>
            <div id="page-container">
                <main id="main-container">
                    {children}
                </main>
            </div>
        </>
    );
};

export default AuthLayout;