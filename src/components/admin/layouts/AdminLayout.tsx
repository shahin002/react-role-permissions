import React from 'react';
import "./assets/Admin.css";
import Header from "./includes/Header";
import Sidebar from "./includes/Sidebar";
import Footer from "./includes/Footer";
import ReactTooltip from 'react-tooltip';

const AdminLayout:React.FC<{children: any }> = ({children}) => {
    return (
        <>
            <div id="page-container"
                 className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed">

                <Sidebar/>
                <Header/>

                <main id="main-container">
                    {children}
                </main>

                <Footer/>
                <ReactTooltip effect='solid' />
            </div>
        </>
    );
};

export default AdminLayout;