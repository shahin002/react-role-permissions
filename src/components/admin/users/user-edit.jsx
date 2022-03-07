import React, {useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";
import {
    emptyUserInfo,
    getPermissionsAction,
    getRolesAction,
    getUserDetailAction,
    handleChangeUserInput,
    storeUserAction
} from "../../../redux/admin-dashboard/users/UserAction";

const UserEdit = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const {
        isLoading,
        userUpdateMessage,
        userUpdateStatus,
        userData,
        all_roles,
        all_permissions
    } = useSelector((state) => state.user);

    const submitHandler = () => {
        dispatch(storeUserAction(userData));
    }

    const handleChangeTextInput = (name, value) => {
        dispatch(handleChangeUserInput(name, value));
    };

    useEffect(() => {
        dispatch(getUserDetailAction(id));
        dispatch(getRolesAction());
        dispatch(getPermissionsAction());
    }, [dispatch, id]);

    useEffect(() => {
        if (userUpdateStatus && Boolean(userUpdateMessage)) {
            dispatch(emptyUserInfo());
            navigate("/admin/users");
        }
    }, [dispatch, userUpdateStatus, userUpdateMessage, navigate]);

    return (
        <>

            <div className="block">
                <div className="block-header d-flex flex-row-reverse">
                    <Link to={`/admin/users`} className="btn btn-primary ">
                        <i className="fa fa-arrow-left"></i> Back
                    </Link>
                </div>

                <div className="block-content block-content-full">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <div className="block-content block-content-narrow">
                                    <form className="form-horizontal push-10-t add-user-form"
                                          onSubmit={handleSubmit(submitHandler)}
                                          method="post">

                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="form-material form-material-primary">
                                                    <label htmlFor="user-name">Name</label>
                                                    <input className="form-control"
                                                           type="text" id="user-name"
                                                           placeholder="User Name"
                                                           aria-required="true"
                                                           value={userData.name}
                                                           {...register('name', {
                                                               required: "Name field is required",
                                                           })}
                                                           onChange={(e) => handleChangeTextInput('name', e.target.value)}
                                                           autoComplete="name"
                                                    />
                                                    <div className="text-danger text-sm">{errors.name?.message}</div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="form-material form-material-primary">
                                                    <label htmlFor="user-email">Email</label>
                                                    <input className="form-control"
                                                           type="email"
                                                           id="user-email"
                                                           placeholder="User Email"
                                                           aria-required="true"
                                                           value={userData.email}
                                                           {...register('email', {
                                                               required: "Email field is required",
                                                               maxLength: 50
                                                           })}
                                                           onChange={(e) => handleChangeTextInput('email', e.target.value)}
                                                           autoComplete="email"
                                                    />
                                                    <div className="text-danger text-sm">{errors.email?.message}</div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="form-material">
                                                    <label htmlFor="roles">Select Role</label>
                                                    <Select
                                                        defaultValue={userData.old_roles}
                                                        isMulti
                                                        getOptionLabel={option => option.display_name}
                                                        getOptionValue={option => option.id}
                                                        options={all_roles}
                                                        onChange={(e) => handleChangeTextInput('roles', e.map(each => each.id))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="form-material">
                                                    <label htmlFor="permissions">Select Extra Permissions</label>
                                                    <Select
                                                        defaultValue={userData.extra_permissions}
                                                        isMulti
                                                        getOptionLabel={option => option.display_name}
                                                        getOptionValue={option => option.id}
                                                        options={all_permissions}
                                                        onChange={(e) => handleChangeTextInput('permissions', e.map(each => each.id))}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-9">
                                                {
                                                    !isLoading &&
                                                    <button className="btn btn-sm btn-primary" type="submit">
                                                        Submit
                                                    </button>
                                                }
                                                {
                                                    isLoading &&
                                                    <button className="btn btn-sm btn-primary" type="button" disabled>
                                                        Submitting ...
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserEdit;