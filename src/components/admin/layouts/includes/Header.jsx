import React from 'react';

const Header = () => {
    return (
        <>
            <header id="page-header">
                <div className="content-header">
                    <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-sm btn-dual mr-2 d-lg-none" data-toggle="layout"
                                data-action="sidebar_toggle">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                        <button type="button" className="btn btn-sm btn-dual mr-2 d-none d-lg-inline-block"
                                data-toggle="layout" data-action="sidebar_mini_toggle">
                            <i className="fa fa-fw fa-ellipsis-v"></i>
                        </button>

                    </div>

                    <div className="d-flex align-items-center">
                        <div className="dropdown d-inline-block ml-2">
                            <button type="button" className="btn btn-sm btn-dual" id="page-header-user-dropdown"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="d-none d-sm-inline-block ml-1">Adam</span>
                                <i className="fa fa-fw fa-angle-down d-none d-sm-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right p-0 border-0 font-size-sm"
                                 aria-labelledby="page-header-user-dropdown">
                                <div className="p-3 text-center bg-primary">
                                </div>
                                <div className="p-2">
                                    <h5 className="dropdown-header text-uppercase">User Options</h5>
                                    <a className="dropdown-item d-flex align-items-center justify-content-between"
                                       href="be_pages_generic_inbox.html">
                                        <span>Inbox</span>
                                        <span>
                                            <span className="badge badge-pill badge-primary">3</span>
                                            <i className="si si-envelope-open ml-1"></i>
                                        </span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center justify-content-between"
                                       href="be_pages_generic_profile.html">
                                        <span>Profile</span>
                                        <span>
                                            <span className="badge badge-pill badge-success">1</span>
                                            <i className="si si-user ml-1"></i>
                                        </span>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center justify-content-between"
                                       href="#!">
                                        <span>Settings</span>
                                        <i className="si si-settings"></i>
                                    </a>
                                    <div role="separator" className="dropdown-divider"></div>
                                    <h5 className="dropdown-header text-uppercase">Actions</h5>
                                    <a className="dropdown-item d-flex align-items-center justify-content-between"
                                       href="op_auth_lock.html">
                                        <span>Lock Account</span>
                                        <i className="si si-lock ml-1"></i>
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center justify-content-between"
                                       href="op_auth_signin.html">
                                        <span>Log Out</span>
                                        <i className="si si-logout ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="page-header-search" className="overlay-header bg-white">
                    <div className="content-header">
                        <form className="w-100" action="be_pages_generic_search.html" method="POST">
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                    <button type="button" className="btn btn-danger" data-toggle="layout"
                                            data-action="header_search_off">
                                        <i className="fa fa-fw fa-times-circle"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control" placeholder="Search or hit ESC.."
                                       id="page-header-search-input" name="page-header-search-input"/>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="page-header-loader" className="overlay-header bg-white">
                    <div className="content-header">
                        <div className="w-100 text-center">
                            <i className="fa fa-fw fa-circle-notch fa-spin"></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;