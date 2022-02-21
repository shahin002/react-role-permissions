import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer id="page-footer" className="bg-body-light">
                <div className="content py-3">
                    <div className="row font-size-sm">
                        <div className="col-sm-6 order-sm-2 py-1 text-center text-sm-right">
                            Crafted with <i className="fa fa-heart text-danger"></i> by <Link className="font-w600"
                                                                                           to="https://1.envato.market/ydb"
                                                                                           target="_blank">pixelcave</Link>
                        </div>
                        <div className="col-sm-6 order-sm-1 py-1 text-center text-sm-left">
                            <Link className="font-w600" to="https://1.envato.market/AVD6j" target="_blank">OneUI
                                4.5</Link> &copy; <span data-toggle="year-copy"></span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;