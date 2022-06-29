// import SimpleSlider from './BrandCarousel';

import { Component } from "react";
import Config from "../../Config.json";
import "../Banner/BannerComponents.scss";
import Button from "../Button/Button";

export default class BannerComponents extends Component {    
    state = {
        loading: true,
        bannerData: null,
    };
    
    async componentDidMount() {
        const url = Config.API_BASE + "data-single/" + Config.HOME_BANNER_ID;
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
            return <div className="textClrGreen text-center">loading...</div>;
        }

        if (!this.state.bannerData) {
            return <div>Didn't get data from API</div>;
        }
        return (
            <section className="banner">
                <div className="container">
                    <div className="bannerContent d-flex align-items-center position-relative">
                        <div className="content text-center">
                            <div className = "bannerTitle text-white fs-72 fw-normal mb-4 pb-2" dangerouslySetInnerHTML = {{__html: this.state.bannerData.meta._mosacademy_banner_title}}></div>
                            <div className="bannerIntro fs-5 fw-normal mb-3 mb-lg-4 mb-xl-5"  dangerouslySetInnerHTML = {{__html: this.state.bannerData.content}}></div>
                            <div className="d-flex justify-content-center">
                                <Button url={this.state.bannerData.meta._mosacademy_banner_button_url} title={this.state.bannerData.meta._mosacademy_banner_button_title}/>                             
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="trustedWrapper d-flex justify-content-center align-items-center pb-4 flex-wrap gap-2">
                    {Object.values(this.state.bannerData.meta._mosacademy_banner_gallery).map(( value , index)=> {
                        return (
                            <img src={value} key={value} alt="Partner Logo" className="img-fluid partner-img" />
                        )
                    })}                       
                    </div>
            </section>
        );
    }
};
