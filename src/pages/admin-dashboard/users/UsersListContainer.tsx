import React from 'react';
import {Link} from 'react-router-dom';
import AdminLayout from "../../../components/admin/layouts/AdminLayout";
import UserList from "../../../components/admin/users/user-list";

const UsersListContainer = () => {

    return (
        <AdminLayout>
            <div className="bg-body-light">
                <div className="content content-full">
                    <div
                        className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center">
                        <h1 className="flex-sm-fill h3 my-2">
                            Users List
                        </h1>
                        <nav className="flex-sm-00-auto ml-sm-3" aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-alt">
                                <li className="breadcrumb-item">Layout</li>
                                <li className="breadcrumb-item">Page</li>
                                <li className="breadcrumb-item" aria-current="page">
                                    <Link className="link-fx" to="#">Default</Link>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="content">
                <UserList />
            </div>
        </AdminLayout>
    );
};

export default UsersListContainer;