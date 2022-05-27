import React from "react";
import Button from "../Button/Button";
import "./SubPageBanner.scss";

const SubPageBanner = (props) => {
    const { tagline, title, intro, bgImg, btn } = props;
    return (
        <div className="subPageBanner position-relative" style={{ backgroundImage: `url(${bgImg})` }}>
            {/*console.log(props)*/}
            <div className="container">
                <div className="bannerContent d-flex align-items-center">
                    <div className="bannerInfo w-100 w-lg-75">
                        <h6 className="banner-tag-line textClrGreen fs-6 mb-1 mb-sm-2 mb-lg-3">{tagline}</h6>
                        <div className="banner-heading fs-48 fw-normal  mb-1 mb-sm-2 mb-lg-4" dangerouslySetInnerHTML={{__html:title}}></div>
                        <div className="banner-desc w-100 w-lg-50 fs-18 fw-normal mb-4 mb-fm-5">{intro}</div>
                        {
                            btn?.url &&
                            <div className="">
                                <Button title={btn.title?btn.title:'Work with Us'} url={btn.url}/> 
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubPageBanner;
