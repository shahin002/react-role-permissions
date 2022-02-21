import React from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../../components/admin/auth/LoginForm';
import AuthLayout from '../../../components/admin/layouts/AuthLayout';

const LoginContainer = () => {
    return (
        <AuthLayout>
            <div className="auth-layout-bg-image bg-image" >
                <div className="hero-static bg-white-95">
                    <div className="content">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 col-xl-4">
                                <div className="block block-themed block-fx-shadow mb-0">
                                    <div className="block-header">
                                        <h3 className="block-title">Sign In</h3>
                                        <div className="block-options">
                                            <Link className="btn-block-option" to="/sign-up" data-place="left" data-tip="New Account">
                                                Create New Account? <i className="fa fa-user-plus"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="block-content">
                                        <div className="p-sm-3 px-lg-4 py-lg-5">
                                            <h1 className="mb-2">OneUI</h1>
                                            <p>Welcome, please login.</p>
                                            <LoginForm />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content content-full font-size-sm text-muted text-center">
                        <strong>OneUI 4.5</strong> &copy; <span data-toggle="year-copy"></span>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default LoginContainer;