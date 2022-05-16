import React from "react";
import { NavLink } from "react-bootstrap";
import "./SubPageBanner.scss";

const SubPageBanner = ({ tagline, boldTile, title, intro, bgImg }) => {
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
                                <NavLink to="/" className="gw-btn text-decoration-none px-0">
                                    <button className="btn position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 gap-2 d-flex align-items-center justify-content-center">
                                        <span className="me-3">Work with Us</span>
                                        <svg className="position-absolute end-0 top-0" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112"
                                                stroke="#121316"
                                                strokeWidth="1.5"
                                                strokeMiterlimit="10"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M3.0625 10.5H17.7887" stroke="#121316" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubPageBanner;
