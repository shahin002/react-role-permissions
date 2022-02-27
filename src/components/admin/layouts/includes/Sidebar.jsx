import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import $ from 'jquery';

const Sidebar = () => {
    const currentPath = useLocation().pathname;
    useEffect(() => {
        $(function () {
            $('.nav-main-link').on('click', function () {
                if ($(this).parent('.nav-main-item').hasClass('open')) {
                    $(this).parent('.nav-main-item').removeClass('open');
                } else {
                    $('.nav-main-item').removeClass('open');
                    $(this).parents('.nav-main-item').addClass('open');
                }
            });
            $("button[data-action='sidebar_mini_toggle']").on('click', function () {
                $("#page-container").toggleClass("sidebar-mini");
            });
            $("button[data-action='sidebar_toggle']").on('click', function () {
                $("#page-container").addClass("sidebar-o-xs");
            });
            $("a[data-action='sidebar_close']").on('click', function () {
                $("#page-container").removeClass("sidebar-o-xs");
            });
            $(document).mouseup(function (e) {
                var container = $("#page-header-user-dropdown");
                if (!container.is(e.target) && container.next('.dropdown-menu').hasClass('show')) {
                    container.next('.dropdown-menu').removeClass('show');
                }
            });
            $("#page-header-user-dropdown").on('click', function () {
                $(this).next('.dropdown-menu').addClass('show');
            });
        });
    }, []);
    return (
        <>
            <nav id="sidebar" aria-label="Main Navigation">
                <div className="content-header bg-white-5">
                    <Link className="font-w600 text-dual" to="index.html">
                        <i className="fa fa-circle-notch text-primary"></i>
                        <span className="smini-hide">
                            <span className="font-w700 font-size-h5">ne</span> <span className="font-w400">4.5</span>
                        </span>
                    </Link>

                    <div>
                        <Link className="d-lg-none btn btn-sm btn-dual ml-2" data-toggle="layout"
                              data-action="sidebar_close" to="#">
                            <i className="fa fa-fw fa-times"></i>
                        </Link>
                    </div>
                </div>

                <div className="content-side content-side-full">
                    <ul className="nav-main">
                        <li className="nav-main-item">
                            <Link className={`nav-main-link ${(currentPath === '/admin/dashboard') ? 'active' : ''}`}
                                  to="/admin/dashboard">
                                <i className="nav-main-link-icon si si-speedometer"></i>
                                <span className="nav-main-link-name">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link nav-main-link-submenu" to="#">
                                <i className="nav-main-link-icon si si-user"></i>
                                <span className="nav-main-link-name">Access</span>
                            </Link>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="/admin/users">
                                        <span className="nav-main-link-name">User Management</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="/admin/roles">
                                        <span className="nav-main-link-name"> Role Management</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link nav-main-link-submenu" to="#">
                                <i className="nav-main-link-icon si si-layers"></i>
                                <span className="nav-main-link-name">Content Management</span>
                            </Link>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="#">
                                        <span className="nav-main-link-name">Post Management</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;