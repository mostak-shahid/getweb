import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import "./SubPageBanner.scss";

const SubPageBanner = (props) => {
    const location = useLocation();
    const bannerCls = location.pathname.replaceAll('/', '_') + '-pageBanner';
    const { tagline, title, intro, bgImg, btn } = props;
    return (
        <section className={["subPageBanner position-relative bgClrDarkLight", bannerCls ].join(' ')} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="container">
                <div className="bannerContent d-flex align-items-center">
                    <div className="bannerInfo w-100 w-lg-60">
                        <h6 className="banner-tag-line textClrGreen fs-6 mb-1 mb-sm-2 mb-lg-3">{tagline}</h6>
                        <div className="banner-heading fs-48 fw-normal  mb-1 mb-sm-2 mb-lg-4" dangerouslySetInnerHTML={{__html:title}}></div>
                        <div className="banner-desc w-100 w-lg-50 fs-18 fw-normal mb-4 mb-fm-5">{intro}</div>
                        {
                            btn?.url &&
                                <Button title={btn.title?btn.title:'Work with Us'} url={btn.url}/> 
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubPageBanner;
