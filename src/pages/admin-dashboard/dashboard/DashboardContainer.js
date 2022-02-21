import React from 'react';
import AdminLayout from "../../../components/layouts/AdminLayout";

const DashboardContainer = () => {
    return (
        <AdminLayout>
            <div className="bg-body-light">
                <div className="content content-full">
                    <div
                        className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                        <h1 className="flex-sm-fill h3 my-2">
                            Page Layout <small className="font-size-base font-w400 text-muted">Default</small>
                        </h1>
                        <nav className="flex-sm-00-auto ml-sm-3" aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-alt">
                                <li className="breadcrumb-item">Layout</li>
                                <li className="breadcrumb-item">Page</li>
                                <li className="breadcrumb-item" aria-current="page">
                                    <a className="link-fx" href="">Default</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="block">
                    <div className="block-content text-center">
                        <p>
                            Left Sidebar, right Side Overlay and a fixed Header.
                        </p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default DashboardContainer;