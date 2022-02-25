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
                        <Link class="d-lg-none btn btn-sm btn-dual ml-2" data-toggle="layout"
                              data-action="sidebar_close" to="#">
                            <i class="fa fa-fw fa-times"></i>
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
                                    <Link className="nav-main-link nav-main-link-submenu" to="#">
                                        <i className="nav-main-link-icon si si-bag"></i>
                                        <span className="nav-main-link-name">e-Commerce</span>
                                    </Link>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_ecom_dashboard.html">
                                                <span className="nav-main-link-name">Dashboard</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_ecom_orders.html">
                                                <span className="nav-main-link-name">Orders</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_ecom_order.html">
                                                <span className="nav-main-link-name">Order</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_ecom_products.html">
                                                <span className="nav-main-link-name">Products</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_ecom_product_edit.html">
                                                <span className="nav-main-link-name">Product Edit</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_ecom_customer.html">
                                                <span className="nav-main-link-name">Customer</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link nav-main-link-submenu" to="#">
                                        <i className="nav-main-link-icon si si-handbag"></i>
                                        <span className="nav-main-link-name">e-Commerce Store</span>
                                    </Link>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_ecom_store_home.html">
                                                <span className="nav-main-link-name">Home</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_ecom_store_search.html">
                                                <span className="nav-main-link-name">Search Results</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_ecom_store_products.html">
                                                <span className="nav-main-link-name">Products List</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_ecom_store_product.html">
                                                <span className="nav-main-link-name">Product Page</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_ecom_store_checkout.html">
                                                <span className="nav-main-link-name">Checkout</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link nav-main-link-submenu" to="#">
                                        <i className="nav-main-link-icon si si-pencil"></i>
                                        <span className="nav-main-link-name">Blog</span>
                                    </Link>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_blog_classic.html">
                                                <span className="nav-main-link-name">Classic</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_blog_list.html">
                                                <span className="nav-main-link-name">List</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_blog_grid.html">
                                                <span className="nav-main-link-name">Grid</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_blog_story.html">
                                                <span className="nav-main-link-name">Story</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_blog_story_cover.html">
                                                <span className="nav-main-link-name">Story Cover</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link nav-main-link-submenu" to="#">
                                        <i className="nav-main-link-icon si si-graduation"></i>
                                        <span className="nav-main-link-name">e-Learning</span>
                                    </Link>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_elearning_courses.html">
                                                <span className="nav-main-link-name">Courses</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_elearning_course.html">
                                                <span className="nav-main-link-name">Course</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_elearning_lesson.html">
                                                <span className="nav-main-link-name">Lesson</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link nav-main-link-submenu" to="#">
                                        <i className="nav-main-link-icon si si-bubbles"></i>
                                        <span className="nav-main-link-name">Forum</span>
                                    </Link>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_forum_categories.html">
                                                <span className="nav-main-link-name">Categories</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_forum_topics.html">
                                                <span className="nav-main-link-name">Topics</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_pages_forum_discussion.html">
                                                <span className="nav-main-link-name">Discussion</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link nav-main-link-submenu" to="#">
                                        <i className="nav-main-link-icon si si-magnet"></i>
                                        <span className="nav-main-link-name">Boxed Backend</span>
                                    </Link>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="bd_dashboard.html">
                                                <span className="nav-main-link-name">Dashboard</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="bd_search.html">
                                                <span className="nav-main-link-name">Search</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="bd_simple_1.html">
                                                <span className="nav-main-link-name">Simple 1</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="bd_simple_2.html">
                                                <span className="nav-main-link-name">Simple 2</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="bd_image_1.html">
                                                <span className="nav-main-link-name">Image 1</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="bd_image_2.html">
                                                <span className="nav-main-link-name">Image 2</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="bd_video_1.html">
                                                <span className="nav-main-link-name">Video 1</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="bd_video_2.html">
                                                <span className="nav-main-link-name">Video 2</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-heading">User Interface</li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link nav-main-link-submenu" to="#">
                                <i className="nav-main-link-icon si si-energy"></i>
                                <span className="nav-main-link-name">Blocks</span>
                            </Link>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_blocks_styles.html">
                                        <span className="nav-main-link-name">Styles</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_blocks_options.html">
                                        <span className="nav-main-link-name">Options</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_blocks_forms.html">
                                        <span className="nav-main-link-name">Forms</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_blocks_themed.html">
                                        <span className="nav-main-link-name">Themed</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_blocks_api.html">
                                        <span className="nav-main-link-name">API</span>
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