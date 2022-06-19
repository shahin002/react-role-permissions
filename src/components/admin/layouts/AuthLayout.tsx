import React from 'react';
import ReactTooltip from 'react-tooltip';
import "./assets/Admin.css";

const AuthLayout:React.FC<{children: any }> = ({children}) => {
    return (
        <>
            <div id="page-container">
                <main id="main-container">
                    {children}
                </main>
            </div>

            <ReactTooltip effect='solid' />
        </>
    );
};

export default AuthLayout;