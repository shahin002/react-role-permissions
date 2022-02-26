import React, {useEffect} from 'react'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {loginSubmitAction} from "../../../redux/admin-dashboard/auth/AuthAction";

export const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    // const isLoading = useSelector((state) => state.auth.isLoading);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const loginMessage = useSelector((state) => state.auth.loginMessage);

    useEffect(() => {
        if (isLoggedIn && Boolean(loginMessage)) {
            window.location.href = "/admin/dashboard";
        }
    }, [isLoggedIn, loginMessage]);

    const submitHandler = (data) => {
        dispatch(loginSubmitAction(data));
    }
    return (
        <>
            <form className="js-validation-signin" onSubmit={handleSubmit(submitHandler)} method="POST">
                <div className="py-1">
                    <div className="form-group">
                        <input type="email" className="form-control form-control-alt form-control-lg"
                               id="email"
                               placeholder="Email"
                               autoComplete="email"
                               {...register('email', {
                                   required: "Email field required",
                               })}
                        />
                        <div className="text-danger text-sm">{errors.email?.message}</div>

                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control form-control-alt form-control-lg"
                               id="password"
                               placeholder="Password"
                               autoComplete="current-password"

                               {...register('password', {
                                   required: "Password field required",
                               })}
                        />

                        <div className="text-danger text-sm">{errors.password?.message}</div>

                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-6 col-xl-5">
                        <button type="submit" className="btn btn-block btn-primary">
                            <i className="fa fa-fw fa-sign-in-alt mr-1"></i> Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
