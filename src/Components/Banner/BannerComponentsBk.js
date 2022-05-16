// import SimpleSlider from './BrandCarousel';
import React, {
    Component
} from "react";
import Config from '../../Config.json';
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
        fetch(Config.API_BASE + "banner/35")
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
        const {isLoaded, bannerData,} = this.state;
        //const bannerData = this.state.bannerData;
        return ( 
        <section className="banner">
            <div className="container">
                <div className="bannerContent d-flex align-items-center position-relative">
                    <div className="content text-center"> 
                        {!this.state.isLoaded && <div className="text-info"> Please wait... < /div>}
                        {this.state.isLoaded && 
                            <>
                                <h1 className="bannerTitle text-white fs-72 fw-normal mb-4 pb-2">
                                    <span dangerouslySetInnerHTML={{__html: bannerData.title}}/> 
                                </h1> 
                                <div className="bannerIntro fs-5 fw-normal textClrGray mb-5">
                                        <span dangerouslySetInnerHTML={{__html: bannerData.content}} /> 
                                </div> 
                                <div className="gw-btn d-flex justify-content-center">
                                    <a href="#" className="btn position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 gap-2 d-flex align-items-center justify-content-center">
                                        <span className="me-4">More</span> 
                                        <svg className="position-absolute end-0 top-0" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#121316"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round" />
                                            <path d="M3.0625 10.5H17.7887"
                                            stroke="#121316"
                                            strokeWidth="1.5"
                                            strokeMiterlimit="10"
                                            strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div> 
                            </>
                        } 
                    </div>
                </div> 
            </div>
        </section>
        );
    }
}