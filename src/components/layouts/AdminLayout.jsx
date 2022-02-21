import React from 'react';
import './AdminLayout.css'
import Header from "./includes/Header";
import Sidebar from "./includes/Sidebar";
import Footer from "./includes/Footer";

const AdminLayout = ({children}) => {
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
            </div>
        </>
    );
};

export default AdminLayout;