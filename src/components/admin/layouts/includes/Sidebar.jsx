import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const currentPath = useLocation().pathname;
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
                </div>

                <div className="content-side content-side-full">
                    <ul className="nav-main">
                        <li className="nav-main-item">
                            <Link className={`nav-main-link ${(currentPath === '/admin/dashboard') ? 'active' : ''}`} to="/admin/dashboard">
                                <i className="nav-main-link-icon si si-speedometer"></i>
                                <span className="nav-main-link-name">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                aria-haspopup="true" aria-expanded="false" to="#!">
                                <i className="nav-main-link-icon si si-layers"></i>
                                <span className="nav-main-link-name">Page Packs</span>
                            </Link>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                        aria-haspopup="true" aria-expanded="false" to="#">
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
                                    <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                        aria-haspopup="true" aria-expanded="false" to="#">
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
                                    <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                        aria-haspopup="true" aria-expanded="false" to="#">
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
                                    <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                        aria-haspopup="true" aria-expanded="false" to="#">
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
                                    <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                        aria-haspopup="true" aria-expanded="false" to="#">
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
                                    <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                        aria-haspopup="true" aria-expanded="false" to="#">
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
                            <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                aria-haspopup="true" aria-expanded="false" to="#">
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
                        <li className="nav-main-item">
                            <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                aria-haspopup="true" aria-expanded="false" to="#">
                                <i className="nav-main-link-icon si si-badge"></i>
                                <span className="nav-main-link-name">Elements</span>
                            </Link>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_grid.html">
                                        <span className="nav-main-link-name">Grid</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_typography.html">
                                        <span className="nav-main-link-name">Typography</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_icons.html">
                                        <span className="nav-main-link-name">Icons</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_buttons.html">
                                        <span className="nav-main-link-name">Buttons</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_buttons_groups.html">
                                        <span className="nav-main-link-name">Button Groups</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_dropdowns.html">
                                        <span className="nav-main-link-name">Dropdowns</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_tabs.html">
                                        <span className="nav-main-link-name">Tabs</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_navigation.html">
                                        <span className="nav-main-link-name">Navigation</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_navigation_horizontal.html">
                                        <span className="nav-main-link-name">Horizontal Navigation</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_progress.html">
                                        <span className="nav-main-link-name">Progress</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_alerts.html">
                                        <span className="nav-main-link-name">Alerts</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_tooltips.html">
                                        <span className="nav-main-link-name">Tooltips</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_popovers.html">
                                        <span className="nav-main-link-name">Popovers</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_modals.html">
                                        <span className="nav-main-link-name">Modals</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_images.html">
                                        <span className="nav-main-link-name">Images Overlay</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_timeline.html">
                                        <span className="nav-main-link-name">Timeline</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_ribbons.html">
                                        <span className="nav-main-link-name">Ribbons</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_animations.html">
                                        <span className="nav-main-link-name">Animations</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_ui_color_themes.html">
                                        <span className="nav-main-link-name">Color Themes</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                aria-haspopup="true" aria-expanded="false" to="#">
                                <i className="nav-main-link-icon si si-grid"></i>
                                <span className="nav-main-link-name">Tables</span>
                            </Link>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_tables_styles.html">
                                        <span className="nav-main-link-name">Styles</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_tables_responsive.html">
                                        <span className="nav-main-link-name">Responsive</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_tables_helpers.html">
                                        <span className="nav-main-link-name">Helpers</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_tables_pricing.html">
                                        <span className="nav-main-link-name">Pricing</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_tables_datatables.html">
                                        <span className="nav-main-link-name">DataTables</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                aria-haspopup="true" aria-expanded="false" to="#">
                                <i className="nav-main-link-icon si si-note"></i>
                                <span className="nav-main-link-name">Forms</span>
                            </Link>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_forms_elements.html">
                                        <span className="nav-main-link-name">Elements</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_forms_custom_controls.html">
                                        <span className="nav-main-link-name">Custom Controls</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_forms_layouts.html">
                                        <span className="nav-main-link-name">Layouts</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_forms_input_groups.html">
                                        <span className="nav-main-link-name">Input Groups</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_forms_plugins.html">
                                        <span className="nav-main-link-name">Plugins</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_forms_editors.html">
                                        <span className="nav-main-link-name">Editors</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_forms_validation.html">
                                        <span className="nav-main-link-name">Validation</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_forms_wizard.html">
                                        <span className="nav-main-link-name">Wizard</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-heading">Develop</li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                aria-haspopup="true" aria-expanded="false" to="#">
                                <i className="nav-main-link-icon si si-wrench"></i>
                                <span className="nav-main-link-name">Components</span>
                            </Link>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_comp_loaders.html">
                                        <span className="nav-main-link-name">Loaders</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_comp_image_cropper.html">
                                        <span className="nav-main-link-name">Image Cropper</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_comp_appear.html">
                                        <span className="nav-main-link-name">Appear</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_comp_charts.html">
                                        <span className="nav-main-link-name">Charts</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_comp_calendar.html">
                                        <span className="nav-main-link-name">Calendar</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_comp_sliders.html">
                                        <span className="nav-main-link-name">Sliders</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_comp_syntax_highlighting.html">
                                        <span className="nav-main-link-name">Syntax Highlighting</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_comp_rating.html">
                                        <span className="nav-main-link-name">Rating</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_comp_maps_google.html">
                                        <span className="nav-main-link-name">Google Maps</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_comp_maps_vector.html">
                                        <span className="nav-main-link-name">Vector Maps</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_comp_dialogs.html">
                                        <span className="nav-main-link-name">Dialogs</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_comp_notifications.html">
                                        <span className="nav-main-link-name">Notifications</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_comp_gallery.html">
                                        <span className="nav-main-link-name">Gallery</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item open">
                            <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                aria-haspopup="true" aria-expanded="true" to="#">
                                <i className="nav-main-link-icon si si-magic-wand"></i>
                                <span className="nav-main-link-name">Layout</span>
                            </Link>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item open">
                                    <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                        aria-haspopup="true" aria-expanded="true" to="#">
                                        <span className="nav-main-link-name">Page</span>
                                    </Link>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link active" to="be_layout_page_default.html">
                                                <span className="nav-main-link-name">Default</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_layout_page_flipped.html">
                                                <span className="nav-main-link-name">Flipped</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link"
                                                to="be_layout_page_native_scrolling.html">
                                                <span className="nav-main-link-name">Native Scrolling</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                        aria-haspopup="true" aria-expanded="false" to="#">
                                        <span className="nav-main-link-name">Main Content</span>
                                    </Link>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link"
                                                to="be_layout_content_main_full_width.html">
                                                <span className="nav-main-link-name">Full Width</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_layout_content_main_narrow.html">
                                                <span className="nav-main-link-name">Narrow</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_layout_content_main_boxed.html">
                                                <span className="nav-main-link-name">Boxed</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                        aria-haspopup="true" aria-expanded="false" to="#">
                                        <span className="nav-main-link-name">Header</span>
                                    </Link>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-heading">Fixed</li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_layout_header_fixed_light.html">
                                                <span className="nav-main-link-name">Light</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_layout_header_fixed_dark.html">
                                                <span className="nav-main-link-name">Dark</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-heading">Static</li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_layout_header_static_light.html">
                                                <span className="nav-main-link-name">Light</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_layout_header_static_dark.html">
                                                <span className="nav-main-link-name">Dark</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                        aria-haspopup="true" aria-expanded="false" to="#">
                                        <span className="nav-main-link-name">Sidebar</span>
                                    </Link>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_layout_sidebar_mini.html">
                                                <span className="nav-main-link-name">Mini</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_layout_sidebar_light.html">
                                                <span className="nav-main-link-name">Light</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_layout_sidebar_dark.html">
                                                <span className="nav-main-link-name">Dark</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_layout_sidebar_hidden.html">
                                                <span className="nav-main-link-name">Hidden</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                        aria-haspopup="true" aria-expanded="false" to="#">
                                        <span className="nav-main-link-name">Side Overlay</span>
                                    </Link>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="be_layout_side_overlay_visible.html">
                                                <span className="nav-main-link-name">Visible</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link"
                                                to="be_layout_side_overlay_mode_hover.html">
                                                <span className="nav-main-link-name">Hover Mode</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link"
                                                to="be_layout_side_overlay_no_page_overlay.html">
                                                <span className="nav-main-link-name">No Page Overlay</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_layout_api.html">
                                        <span className="nav-main-link-name">API</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                aria-haspopup="true" aria-expanded="false" to="#">
                                <i className="nav-main-link-icon si si-puzzle"></i>
                                <span className="nav-main-link-name">Multi Level Menu</span>
                            </Link>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="#">
                                        <span className="nav-main-link-name">Link 1-1</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="#">
                                        <span className="nav-main-link-name">Link 1-2</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                        aria-haspopup="true" aria-expanded="false" to="#">
                                        <span className="nav-main-link-name">Sub Level 2</span>
                                    </Link>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="#">
                                                <span className="nav-main-link-name">Link 2-1</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link" to="#">
                                                <span className="nav-main-link-name">Link 2-2</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                                aria-haspopup="true" aria-expanded="false" to="#">
                                                <span className="nav-main-link-name">Sub Level 3</span>
                                            </Link>
                                            <ul className="nav-main-submenu">
                                                <li className="nav-main-item">
                                                    <Link className="nav-main-link" to="#">
                                                        <span className="nav-main-link-name">Link 3-1</span>
                                                    </Link>
                                                </li>
                                                <li className="nav-main-item">
                                                    <Link className="nav-main-link" to="#">
                                                        <span className="nav-main-link-name">Link 3-2</span>
                                                    </Link>
                                                </li>
                                                <li className="nav-main-item">
                                                    <Link className="nav-main-link nav-main-link-submenu"
                                                        data-toggle="submenu" aria-haspopup="true"
                                                        aria-expanded="false" to="#">
                                                        <span className="nav-main-link-name">Sub Level 4</span>
                                                    </Link>
                                                    <ul className="nav-main-submenu">
                                                        <li className="nav-main-item">
                                                            <Link className="nav-main-link" to="#">
                                                                <span className="nav-main-link-name">Link 4-1</span>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-main-item">
                                                            <Link className="nav-main-link" to="#">
                                                                <span className="nav-main-link-name">Link 4-2</span>
                                                            </Link>
                                                        </li>
                                                        <li className="nav-main-item">
                                                            <Link className="nav-main-link nav-main-link-submenu"
                                                                data-toggle="submenu" aria-haspopup="true"
                                                                aria-expanded="false" to="#">
                                                                <span
                                                                    className="nav-main-link-name">Sub Level 5</span>
                                                            </Link>
                                                            <ul className="nav-main-submenu">
                                                                <li className="nav-main-item">
                                                                    <Link className="nav-main-link" to="#">
                                                                        <span className="nav-main-link-name">Link 5-1</span>
                                                                    </Link>
                                                                </li>
                                                                <li className="nav-main-item">
                                                                    <Link className="nav-main-link" to="#">
                                                                        <span className="nav-main-link-name">Link 5-2</span>
                                                                    </Link>
                                                                </li>
                                                                <li className="nav-main-item">
                                                                    <Link className="nav-main-link nav-main-link-submenu"
                                                                        data-toggle="submenu" aria-haspopup="true"
                                                                        aria-expanded="false" to="#">
                                                                        <span className="nav-main-link-name">Sub Level 6</span>
                                                                    </Link>
                                                                    <ul className="nav-main-submenu">
                                                                        <li className="nav-main-item">
                                                                            <Link className="nav-main-link" to="#">
                                                                                <span
                                                                                    className="nav-main-link-name">Link 6-1</span>
                                                                            </Link>
                                                                        </li>
                                                                        <li className="nav-main-item">
                                                                            <Link className="nav-main-link" to="#">
                                                                                <span
                                                                                    className="nav-main-link-name">Link 6-2</span>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-heading">Pages</li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                aria-haspopup="true" aria-expanded="false" to="#">
                                <i className="nav-main-link-icon si si-layers"></i>
                                <span className="nav-main-link-name">Generic</span>
                            </Link>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_generic_blank.html">
                                        <span className="nav-main-link-name">Blank</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_generic_blank_block.html">
                                        <span className="nav-main-link-name">Blank (Block)</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_generic_search.html">
                                        <span className="nav-main-link-name">Search</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_generic_profile.html">
                                        <span className="nav-main-link-name">Profile</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_generic_profile_edit.html">
                                        <span className="nav-main-link-name">Profile Edit</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_generic_inbox.html">
                                        <span className="nav-main-link-name">Inbox</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_generic_invoice.html">
                                        <span className="nav-main-link-name">Invoice</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_generic_faq.html">
                                        <span className="nav-main-link-name">FAQ</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_generic_team.html">
                                        <span className="nav-main-link-name">Team</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_generic_contact.html">
                                        <span className="nav-main-link-name">Contact</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_generic_support.html">
                                        <span className="nav-main-link-name">Support</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_generic_upgrade_plan.html">
                                        <span className="nav-main-link-name">Upgrade Plan</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_maintenance.html">
                                        <span className="nav-main-link-name">Maintenance</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_status.html">
                                        <span className="nav-main-link-name">Status</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_coming_soon.html">
                                        <span className="nav-main-link-name">Coming Soon</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                aria-haspopup="true" aria-expanded="false" to="#">
                                <i className="nav-main-link-icon si si-lock"></i>
                                <span className="nav-main-link-name">Authentication</span>
                            </Link>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_auth_all.html">
                                        <span className="nav-main-link-name">All</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_auth_signin.html">
                                        <span className="nav-main-link-name">Sign In</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_auth_signin2.html">
                                        <span className="nav-main-link-name">Sign In 2</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_auth_signup.html">
                                        <span className="nav-main-link-name">Sign Up</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_auth_signup2.html">
                                        <span className="nav-main-link-name">Sign Up 2</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_auth_lock.html">
                                        <span className="nav-main-link-name">Lock Screen</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_auth_lock2.html">
                                        <span className="nav-main-link-name">Lock Screen 2</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_auth_reminder.html">
                                        <span className="nav-main-link-name">Pass Reminder</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_auth_reminder2.html">
                                        <span className="nav-main-link-name">Pass Reminder 2</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link nav-main-link-submenu" data-toggle="submenu"
                                aria-haspopup="true" aria-expanded="false" to="#">
                                <i className="nav-main-link-icon si si-fire"></i>
                                <span className="nav-main-link-name">Error Pages</span>
                            </Link>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="be_pages_error_all.html">
                                        <span className="nav-main-link-name">All</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_error_400.html">
                                        <span className="nav-main-link-name">400</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_error_401.html">
                                        <span className="nav-main-link-name">401</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_error_403.html">
                                        <span className="nav-main-link-name">403</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_error_404.html">
                                        <span className="nav-main-link-name">404</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_error_500.html">
                                        <span className="nav-main-link-name">500</span>
                                    </Link>
                                </li>
                                <li className="nav-main-item">
                                    <Link className="nav-main-link" to="op_error_503.html">
                                        <span className="nav-main-link-name">503</span>
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