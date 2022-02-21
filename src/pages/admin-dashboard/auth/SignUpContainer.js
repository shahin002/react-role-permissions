import React from 'react';
import { Link } from 'react-router-dom';
import { RegistrationForm } from '../../../components/admin/auth/RegistrationForm';
import AuthLayout from '../../../components/admin/layouts/AuthLayout';

const SignUpContainer = () => {
    return (
        <AuthLayout>
            <div className="auth-layout-bg-image bg-image" >
                <div className="hero-static bg-white-95">
                    <div className="content">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 col-xl-4">
                                <div className="block block-themed block-fx-shadow mb-0">
                                    <div className="block-header">
                                        <h3 className="block-title">Sign Up</h3>
                                        <div className="block-options">
                                            <Link className="btn-block-option" to="/login" data-place="left" data-tip="Login">
                                                <i className="fa fa-user-plus"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="block-content">
                                        <div className="p-sm-3 px-lg-4 py-lg-1">
                                            <h1 className="mb-2">OneUI</h1>
                                            <p>Welcome, please Register.</p>

                                            <RegistrationForm />
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

export default SignUpContainer;