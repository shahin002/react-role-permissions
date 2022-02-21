import React from 'react'

export const LoginForm = () => {
    return (
        <>
            <form className="js-validation-signin" method="POST">
                <div className="py-1">
                    <div className="form-group">
                        <input type="text" className="form-control form-control-alt form-control-lg" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control form-control-alt form-control-lg" id="password" name="password" placeholder="Password" />
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
