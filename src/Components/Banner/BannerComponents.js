// import SimpleSlider from './BrandCarousel';

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Config from "../../Config.json";
import "../Banner/BannerComponents.scss";

export default class BannerComponents extends Component {    
    state = {
        loading: true,
        bannerData: null,
    };
    
    async componentDidMount() {
        const url = "http://api.getweb.localhost/wp-json/mos-getweb-api/v1/data-single/" + Config.HOME_BANNER_ID;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            bannerData: data, 
            loading: false,
        });
        //console.log(this.state.bannerData);
    }
    
    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.bannerData) {
            return <div>didn't get the banner</div>;
        }
        return (
            <section className="banner">
                <div className="container">
                    <div className="bannerContent d-flex align-items-center position-relative">
                        <div className="content text-center">
                            <div className = "bannerTitle text-white fs-72 fw-normal mb-4 pb-2" dangerouslySetInnerHTML = {{__html: this.state.bannerData.meta._mosacademy_banner_title}}></div>
                            <div className="bannerIntro fs-5 fw-normal textClrGray mb-5"  dangerouslySetInnerHTML = {{__html: this.state.bannerData.content}}></div>
                            <div className="gw-btn d-flex justify-content-center">
                                <NavLink to={this.state.bannerData.meta._mosacademy_banner_button_url} className="btn position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 gap-2 d-flex align-items-center justify-content-center">
                                    <span className="me-4">{this.state.bannerData.meta._mosacademy_banner_button_title}</span>
                                    <svg className="position-absolute end-0 top-0" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#121316" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.0625 10.5H17.7887" stroke="#121316" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="trustedWrapper d-flex justify-content-between align-items-center pb-4 flex-wrap gap-2">
                    {Object.values(this.state.bannerData.meta._mosacademy_banner_gallery).map(( value , index)=> {
                        return (
                            <img src={value} key={value} alt="images" />
                        )
                    })}                       
                    </div>
                </div>
            </section>
        );
    }
};
