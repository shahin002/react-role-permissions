import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUsersAction} from "../../../redux/admin-dashboard/users/UserAction";

const UserList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.user.isLoading);
    const userList = useSelector((state) => state.user.userList);

    useEffect(() => {
        dispatch(getUsersAction());
    }, []);
    return (
        <>
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
                                            <Link to={`/admin/users/${user.id}/edit`} className="btn ml-1">
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
        </>
    );
};

export default UserList;