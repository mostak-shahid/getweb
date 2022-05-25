import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import Config from '../../Config.json';
import PortfolioUnit from '../../Page/Portfolio/PortfolioUnit/PortfolioUnit';
import "./PortfolioSlider.scss";


export default class MultipleRows extends Component {
    state = {
        loading: true,
        portfolioData: null,
    };
    
    async componentDidMount() {

        const url = Config.API_BASE + "data-list/project/0/0/12";
        const response = await fetch(url);
        const portfolioResponse = await response.json();

        let portfolioOutput = [];
        let newArr = [];
        let tempArr = [];
        var m = 0;
        var n = 0;
        
        portfolioOutput = portfolioResponse.map((item, index) => {
            if (n == 2){
                newArr.push(tempArr);
                n = 0;
                m++;
                tempArr = [];
            }
            n++;    
            tempArr.push(item);
            return tempArr;
        })

        this.setState({ 
            portfolioData: portfolioOutput,
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
            return <div className="textClrGreen text-center">loading...</div>;
        }
        if (!this.state.portfolioData) {
            return <div>Didn't get data from API</div>;
        }
        const settings = {
            loop: true,
            center: true,
            margin: 0,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed:2500,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
        };

        const {portfolioData} = this.state;        
        const {_mosacademy_page_banner_button} = this.props.data;
        return (
            <div className="slider-wrapper">
                <OwlCarousel className='owl-theme'  {...settings}>
                    {
                        (portfolioData.length) && 
                        portfolioData.map((item, index) => (
                            <div className="item item-wrapper" key={index}>
                                <div className="portSliderItem"><div className="portSliderImg"><PortfolioUnit data={item[0]}/></div></div>
                                <div className="portSliderItem"><div className="portSliderImg"><PortfolioUnit data={item[1]}/></div></div>                                
                            </div>
                        ))
                    }
                </OwlCarousel>
                {
                    _mosacademy_page_banner_button?.url &&
                        <div className="gw-btn gw-btn-green d-flex justify-content-center mt-5">
                            <a href={_mosacademy_page_banner_button?.url} className="btn position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 gap-2 d-flex align-items-center justify-content-center">
                                <span>{_mosacademy_page_banner_button?.title}</span>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </div>
                    
                
                }
            </div>
        );
    }
}
