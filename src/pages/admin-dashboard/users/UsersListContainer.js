import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import AdminLayout from "../../../components/admin/layouts/AdminLayout";
import {useDispatch, useSelector} from "react-redux";
import {getUsersAction} from "../../../redux/admin-dashboard/users/UserAction";

const UsersListContainer = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.user.isLoading);
    const userList = useSelector((state) => state.user.userList);

    useEffect(() => {
        dispatch(getUsersAction());
    }, []);
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
                <div className="block">
                    <div className="block-header d-flex flex-row-reverse">
                        <Link to={`/admin/users/create`} className="btn btn-primary ">
                            <i className="fa fa-plus"></i> New User
                        </Link>
                    </div>

                    <div className="block-content block-content-full">
                        {
                            isLoading &&
                            <p>
                                loading ---
                            </p>
                        }
                        {
                            !isLoading &&
                            <table className="table table-bordered table-striped table-vcenter js-dataTable-full">
                                <thead>
                                <tr>
                                    <th className="text-center" style={{"width": "80px"}}>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Extra Permission</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    userList.map((user, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{Array.prototype.map.call(user.roles, s => s.display_name).join(", ")}</td>
                                            <td>{Array.prototype.map.call(user.extra_permissions, s => s.display_name).join(", ")}</td>
                                            <td>
                                                <button className="btn">
                                                    <i className="fa fa-trash text-danger"></i>
                                                </button>
                                                <Link to={`/admin/users/edit/${user.id}`} className="btn ml-1">
                                                    <i className="fa fa-edit text-success"></i>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default UsersListContainer;