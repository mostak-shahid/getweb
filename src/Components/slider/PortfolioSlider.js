import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import goArrow from "../../assets/images/goArrow-iocn.svg";
import "./PortfolioSlider.scss";




export default class MultipleRows extends Component {
    state = {
        loading: true,
        portfolioData: null,
    };
    
    async componentDidMount() {

        const url = "http://api.getweb.localhost/wp-json/mos-getweb-api/v1/data-list/project/0/0/12";
        const response = await fetch(url);
        const portfolioResponse = await response.json();
        this.setState({ 
            portfolioData: portfolioResponse,
            loading: false,
        });
        //console.log(this.state.portfolioData);
    }

    constructor(props) {
        super(props);
        //console.log(props);
    }
    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        if (!this.state.portfolioData) {
            return <div>Didn't get data from API</div>;
        }
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2,
            dots: false,
            arrows: false,
            speed: 3000,
            autoplay: true,
            autoplaySpeed: 2500,
        };

        const {portfolioData} = this.state;        
        const {_mosacademy_page_group_button_title='Read More', _mosacademy_page_group_button_url} = this.props.data;
        return (
            <div className="mx-3">
                <Slider {...settings}>
                    {
                        (portfolioData.length)?
                        portfolioData.map((item) => (
                            <div className="portSliderItem" key={item.id}>
                                <div className="portSliderImg position-relative">
                                    <div className="overLay"></div>
                                    <img src={item.image} alt={item.title} />
                                    <div className="afterHover">
                                        <a href={item.meta._mosacademy_project_url} className="goArrow position-absolute bottom-50 start-50">
                                            <img src={goArrow} alt="go icon" />
                                        </a>
                                        <a href={item.meta._mosacademy_project_url} className="portTitle fs-6 fw-bold text-white position-absolute bottom-0 start-0 p-4 mb-0 text-decoration-none"  dangerouslySetInnerHTML = {{__html: item.title}}></a>
                                    </div>
                                </div>
                            </div>
                        )):''
                    }
                </Slider>
                {
                    (_mosacademy_page_group_button_url)?
                        <div className="gw-btn gw-btn-green d-flex justify-content-center mt-5">
                            <a href={_mosacademy_page_group_button_url} className="btn position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 gap-2 d-flex align-items-center justify-content-center">
                                <span className="me-4">{_mosacademy_page_group_button_title}</span>
                                <svg className="position-absolute end-0 top-0" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#121316" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M3.0625 10.5H17.7887" stroke="#121316" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                    :''
                
                }
            </div>
        );
    }
}
