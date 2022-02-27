import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";
import {
    emptyUserMessage,
    getPermissionsAction,
    getRolesAction, handleChangeUserInput,
    storeUserAction
} from "../../../redux/admin-dashboard/users/UserAction";

const UserCreate = () => {
    const {register, handleSubmit, formState: {errors}, getValues} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoading = useSelector((state) => state.user.isLoading);
    const userAddMessage = useSelector((state) => state.user.userAddMessage);
    const userAddStatus = useSelector((state) => state.user.userAddStatus);
    const userData = useSelector((state) => state.user.userData);
    const all_roles = useSelector((state) => state.user.all_roles);
    const all_permissions = useSelector((state) => state.user.all_permissions);

    const submitHandler = () => {
        dispatch(storeUserAction(userData));
    }

    const handleChangeTextInput = (name, value) => {
        dispatch(handleChangeUserInput(name, value));
    };

    useEffect(() => {
        dispatch(getRolesAction());
        dispatch(getPermissionsAction());
    }, []);

    useEffect(() => {
        if (userAddStatus && Boolean(userAddMessage)) {
            dispatch(emptyUserMessage());
            navigate("/users");
        }
    }, [userAddStatus, userAddMessage]);

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
                                                           required=""
                                                           aria-required="true"
                                                           {...register('name', {
                                                               required: "Name field is required",
                                                           })}
                                                           onChange={(e) => handleChangeTextInput('name', e.target.value)}
                                                           value={userData.name}
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
                                                           type="email" id="user-email"
                                                           placeholder="User Email"
                                                           required=""
                                                           aria-required="true"
                                                           {...register('email', {
                                                               required: "Email field is required",
                                                               maxLength: 50
                                                           })}
                                                           onChange={(e) => handleChangeTextInput('email', e.target.value)}
                                                           value={userData.email}
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
                                            <div className="col-sm-12">
                                                <div className="form-material form-material-primary">
                                                    <label htmlFor="user-password">Password</label>
                                                    <input type="password"
                                                           className="form-control form-control-alt form-control-lg"
                                                           id="password"
                                                           placeholder="Password"
                                                           {...register('password', {
                                                               required: "Password field is required",
                                                               minLength: 6
                                                           })}
                                                           onChange={(e) => handleChangeTextInput('password', e.target.value)}
                                                           value={userData.password}
                                                           autoComplete="current-password"
                                                    />
                                                    <div
                                                        className="text-danger text-sm">{errors.password?.message}</div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="form-material form-material-primary">
                                                    <label htmlFor="user-password_confirmation">Confirm
                                                        Password</label>
                                                    <input type="password"
                                                           className="form-control form-control-alt form-control-lg"
                                                           id="confirm_password"
                                                           placeholder="Confirm Password"
                                                           {...register('confirm_password', {
                                                               required: "Please confirm your password",
                                                               minLength: 6,
                                                               validate: (value) => value === getValues('password') || "Passwords don't match."
                                                           })}
                                                           autoComplete="confirm-password"
                                                    />
                                                    <div
                                                        className="text-danger text-sm">{errors.confirm_password?.message}</div>
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

export default UserCreate;