// import SimpleSlider from './BrandCarousel';

import React, {
    Component
} from "react";
import "../Banner/BannerComponents.scss";

export default class BannerComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            bannerData: "",
        };
    }
    /*state = {
          welcomeText: '',
      };*/

    componentDidMount() {
        //fetch('http://api.getweb.localhost/wp-json/mos-getweb-api/v1/posts/hello-world')
        fetch("http://api.getweb.localhost/wp-json/mos-getweb-api/v1/banner/35")
            .then((response) => response.json())
            .then((data) => {
                //console.log(data.meta.banner_button_title);
                this.setState({
                    isLoaded: true,
                    bannerData: data
                });
            })
            .catch(err => {
                throw new Error(err)
            });
    }
    render() {
        const {
            isLoaded,
            //bannerData,
        } = this.state;
        const bannerData = this.state.bannerData;
        const objBannerData = {
            "id": 35,
            "title": "Results focused <strong>design</strong> and <strong>development</strong> agency 7427.",
            "content": "<p>We help global brands design enabling seamless user experiences <br class=\"d-none d-lg-inline\" />across all modern platforms and devices.</p>\n",
            "slug": "results-focused-design-and-development-agency-2",
            "featured_image": {
                "thumbnail": "http://api.getweb.localhost/wp-content/uploads/2022/04/rsz_1shutterstock_1029676060.jpg",
                "medium": "http://api.getweb.localhost/wp-content/uploads/2022/04/rsz_1shutterstock_1029676060.jpg",
                "large": "http://api.getweb.localhost/wp-content/uploads/2022/04/rsz_1shutterstock_1029676060.jpg",
                "full": "http://api.getweb.localhost/wp-content/uploads/2022/04/rsz_1shutterstock_1029676060.jpg"
            },
            "meta": {
                "banner_sub_title": [
                    "Sub Title One",
                    "Subtitle Two"
                ],
                "banner_button_title": "Our Services",
                "banner_button_url": "https://www.google.com",
                "banner_gallery": {
                    "37": "http://api.getweb.localhost/wp-content/uploads/2022/04/shutterstock_1776885437.jpg",
                    "38": "http://api.getweb.localhost/wp-content/uploads/2022/04/shutterstock_186501782.jpg",
                    "39": "http://api.getweb.localhost/wp-content/uploads/2022/04/shutterstock_1710022933.jpg",
                    "40": "http://api.getweb.localhost/wp-content/uploads/2022/04/shutterstock_1215636625-2.jpg"
                }
            }
        }
        console.log('objBannerData');
        console.log(objBannerData.meta);
        console.log('bannerData');
        console.log(bannerData.meta);

        // console.log(banner_button_title);
        //console.log(meta['banner_button_title']);
        return ( 
        <section className = "banner">
            <div className = "container">
            <div className = "bannerContent d-flex align-items-center position-relative">


            <div className = "content text-center"> {
                !this.state.isLoaded && ( <div className = "text-info"> Please wait... < /div>
                )
            } {
                this.state.isLoaded && ( <>
                    <h1 className = "bannerTitle text-white fs-72 fw-normal mb-4 pb-2">
                        <>
                        <   span dangerouslySetInnerHTML = {{__html: bannerData.title}}/> 
                        </> 
                    </h1> 
                    <div className = "bannerIntro fs-5 fw-normal textClrGray mb-5">
                        <>
                            <span dangerouslySetInnerHTML = {{__html: bannerData.content}} /> 
                        </> 
                    </div> 
                    <div className = "gw-btn d-flex justify-content-center">
                        <a href = "# " className = "btn position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 gap-2 d-flex align-items-center justify-content-center">
                            <span className = "me-4"> More < /span> 
                            <svg className = "position-absolute end-0 top-0" width = "21" height = "21" viewBox = "0 0 21 21" fill = "none" xmlns = "http://www.w3.org/2000/svg">
                                <path d = "M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke = "#121316"
                    strokeWidth = "1.5"
                    strokeMiterlimit = "10"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" /
                    >
                    <path d = "M3.0625 10.5H17.7887"
                    stroke = "#121316"
                    strokeWidth = "1.5"
                    strokeMiterlimit = "10"
                    strokeLinecap = "round"
                    strokeLinejoin = "round" /
                    >
                    </svg> </a> </div> </>
                )
            } </div> </div> </div> </section>
        );
    }
}