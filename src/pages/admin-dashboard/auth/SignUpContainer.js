import React from 'react';
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
                                            <a className="btn-block-option" href="op_auth_signup.html" data-place="left" data-tip="New Account">
                                                Create New Account? <i className="fa fa-user-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="block-content">
                                        <div className="p-sm-3 px-lg-4 py-lg-1">
                                            <h1 className="mb-2">OneUI</h1>
                                            <p>Welcome, please Register.</p>

                                            <form className="js-validation-signin" action="be_pages_auth_all.html" method="POST">
                                                <div className="py-1">
                                                    <div className="form-group">
                                                        <input type="text" class="form-control form-control-alt form-control-lg" id="login-username" name="login-username" placeholder="Username" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" class="form-control form-control-alt form-control-lg" id="login-password" name="login-password" placeholder="Password" />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="login-remember" name="login-remember" />
                                                            <label class="custom-control-label font-w400" for="login-remember">Remember Me</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <div class="col-md-6 col-xl-5">
                                                        <button type="submit" class="btn btn-block btn-primary">
                                                            <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Sign Up
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content content-full font-size-sm text-muted text-center">
                        <strong>OneUI 4.5</strong> &copy; <span data-toggle="year-copy"></span>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default SignUpContainer;