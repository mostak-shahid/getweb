import React from "react";
import { NavLink } from "react-router-dom";
import "./SubPageBanner.scss";


const SubPageBanner = ({ tagline, boldTile, title, intro, bgImg, btn }) => {
    return (
        <div className="subPageBanner position-relative" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bannerContent d-flex align-items-center">
                            <div className="bannerInfo">
                                <h6 className="textClrGreen fs-6 mb-3">{tagline}</h6>
                                <div className="fs-48 fw-normal w-75 mb-4" dangerouslySetInnerHTML={{__html:title}}></div>
                                <p className="w-50 fs-18 mb-5 fw-normal">{intro}</p>
                                {
                                    btn?.url &&
                                    <div className="gw-btn text-decoration-none px-0">
                                        <NavLink to={btn.url} className="btn position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 gap-2 d-flex align-items-center justify-content-center">
                                            <span className="me-3">{btn.title?btn.title:'Work with Us'}</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </NavLink>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubPageBanner;
