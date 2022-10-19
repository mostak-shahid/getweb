// import SimpleSlider from './BrandCarousel';

import { Component } from "react";
import "../Banner/BannerComponents.scss";
import Button from "../Button/Button";
import LazyImage from "../LazyImage";

export default class BannerComponents extends Component {    
    
    constructor(props) {
        super(props);
        this.state = {
        //     loading: false,
        //     pageData: "",
        //     settingsData: "",
        };
    }
    /*state = {
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
    }*/
    render() {
        //console.log(this.props.pageData.meta)
        // if (this.state.loading) {
        //     return <Loading cls="loading page-loader" text="Banner Still Loading" />;
        // }

        // if (!this.state.bannerData) {
        //     return <Loading cls="late-api-response page-loader" text="Banner Delay of API" />;
        // }
        return (
            <section className="banner">
                <div className="container-lg">
                    <div className="bannerContent d-flex align-items-center position-relative">
                        <div className="content text-center">
                            <div className = "bannerTitle text-white fs-72 fw-normal mb-30" dangerouslySetInnerHTML = {{__html: this.props.pageData.meta._mosacademy_page_banner_title}}></div>
                            <div className="bannerIntro fw-normal"  dangerouslySetInnerHTML = {{__html: this.props.pageData.meta._mosacademy_page_banner_intro}}></div>
                            <div className="d-flex justify-content-center gap-3">
                                <Button url={this.props.pageData.meta._mosacademy_page_banner_button.url} title={this.props.pageData.meta._mosacademy_page_banner_button.title}/> 
                                {this?.props?.pageData?.meta?._mosacademy_page_banner_button_3?.url ?                           
                                <Button className="btn-pink" url={this.props.pageData.meta._mosacademy_page_banner_button_3.url} title={this.props.pageData.meta._mosacademy_page_banner_button_3.title}/>:''
                                }                          
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-lg trustedWrapper">
                    <div className="row justify-content-center">
                    {this.props.pageData.meta.banner_image_gallery.map(( value , index)=> {
                        return (
                        <div className="col-4 col-sm-2 col-lg-2 text-center mb-3 mb-sm-0" key={index}>
                            <LazyImage src={value.url} alt={[value.alt, 'Logo'].join(' - ')} className="img-fluid partner-img" width={[value.image_attributes[1], 'px'].join('')} height={[value.image_attributes[2], 'px'].join('')} />
                        </div>
                        )
                    })}  
                    </div>
                </div>
            </section>
        );
    }
};
