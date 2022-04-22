import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import portfolio1 from "../../assets/images/portfolio-img1.png";
import portfolio2 from "../../assets/images/portfolio-img2.png";
import portfolio3 from "../../assets/images/portfolio-img3.png";
import portfolio4 from "../../assets/images/portfolio-img4.png";
import portfolio5 from "../../assets/images/portfolio-img5.png";
import portfolio6 from "../../assets/images/portfolio-img6.png";
import portfolio7 from "../../assets/images/portfolio-img7.png";
import portfolio8 from "../../assets/images/portfolio-img8.png";
import portfolio9 from "../../assets/images/portfolio-img9.png";
import portfolio10 from "../../assets/images/portfolio-img10.png";
import portfolio11 from "../../assets/images/portfolio-img11.png";
import portfolio12 from "../../assets/images/portfolio-img12.png";
import goArrow from "../../assets/images/goArrow-iocn.svg";

import "./PortfolioSlider.scss";

import Slider from "react-slick";

export default class MultipleRows extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            slidesToShow: 2,
            speed: 3000,
            rows: 1,
            slidesPerRow: 2,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2500,
        };

        const portfolio = [
            {
                img: portfolio1,
                title: "Basil & Sprout - Vietnam Street Food Mobile App",
            },
            {
                img: portfolio2,
                title: "Basil - Vietnam  Mobile App",
            },
            {
                img: portfolio3,
                title: "Basil & Sprout -  App",
            },
            {
                img: portfolio4,
                title: "Basil & Sprout - Vietnam Mobile App",
            },
            {
                img: portfolio5,
                title: "Basil & Sprout - Food Mobile App",
            },
            {
                img: portfolio6,
                title: "Basil & Sprout - Vietnam App",
            },
            {
                img: portfolio7,
                title: "Basil & Sprout - Vietnam  App",
            },
            {
                img: portfolio8,
                title: "Basil & Sprout - Vietnam Street Food Mobile App",
            },
            {
                img: portfolio9,
                title: "Basil & Sprout - Vietnam  Mobile App",
            },
            {
                img: portfolio10,
                title: " Vietnam Street Food Mobile App",
            },
            {
                img: portfolio11,
                title: "Basil & Sprout Mobile App",
            },
            {
                img: portfolio12,
                title: "Basil & Sprout ",
            },
        ];

        return (
            <div className="mx-3">
                <Slider {...settings}>
                    {portfolio.map((item) => (
                        <div className="portSliderItem" key={item.img}>
                            <div className="portSliderImg position-relative">
                                <div className="overLay"></div>
                                <img src={item.img} alt="slider img1" />
                                <div className="afterHover">
                                    <a href="#" className="goArrow position-absolute bottom-50 start-50">
                                        <img src={goArrow} alt="go icon" />
                                    </a>
                                    <a href="#" className="portTitle fs-6 fw-bold text-white position-absolute bottom-0 start-0 p-4 mb-0 text-decoration-none">
                                        {item.title}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="gw-btn d-flex justify-content-center mt-5">
                    <button type="button" className="btn position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 gap-2 d-flex align-items-center justify-content-center">
                        <span className="me-4">Discover our more project</span>
                        <svg className="position-absolute end-0 top-0" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#121316" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M3.0625 10.5H17.7887" stroke="#121316" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}
