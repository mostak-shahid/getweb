import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import blog1 from "../../assets/images/blog-img1.png";
import blog2 from "../../assets/images/blog-img2.png";
import blog3 from "../../assets/images/blog-img3.png";

import "./BlogSlider.scss";

import Slider from "react-slick";
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        };

        const blogitems = [
            {
                img: blog1,
                title: "Salesforce - Leading Player in the Game of Healthcare Management",
                desc: "In the healthcare sector, a cyclone of technology is impacting thousands of lives...",
            },
            {
                img: blog2,
                title: "Salesforce - Leading Player in the Game of Healthcare Management",
                desc: "In the healthcare sector, a cyclone of technology is impacting thousands of lives...",
            },
            {
                img: blog3,
                title: "Salesforce - Leading Player in the Game of Healthcare Management",
                desc: "In the healthcare sector, a cyclone of technology is impacting thousands of lives...",
            },
            {
                img: blog1,
                title: "Salesforce - Leading Player in the Game of Healthcare Management",
                desc: "In the healthcare sector, a cyclone of technology is impacting thousands of lives...",
            },
            {
                img: blog2,
                title: "Salesforce - Leading Player in the Game of Healthcare Management",
                desc: "In the healthcare sector, a cyclone of technology is impacting thousands of lives...",
            },
            {
                img: blog3,
                title: "Salesforce - Leading Player in the Game of Healthcare Management",
                desc: "In the healthcare sector, a cyclone of technology is impacting thousands of lives...",
            },
        ];

        return (
            <div className="blogSlider">
                <Slider {...settings}>
                    {
                        blogitems.map((items) => (
                            <div className="singleBlog isRadius16 bgClrDarkLight" key={items.img}>
                                <div className="blogImage">
                                    <a href="#" className=" text-decoration-none">
                                        <img src={items.img} alt="blog image" className="img-fluid w-100" />
                                    </a>
                                </div>
                                <div className="blogInfo p-4">
                                    <h3 className="blogTitle fs-6 fw-bold mb-2" style={{ maxWidth: "300px", width: "100%" }}>
                                        <a href="#" className="text-decoration-none text-white">
                                            {items.title}
                                        </a>
                                    </h3>
                                    <div className="blogDesc textClrGray fw-normal fs-14 mb-5" style={{ maxWidth: "300px", width: "100%" }}>
                                        <p className="mb-0">
                                            {items.desc}
                                        </p>
                                    </div>
                                    <a href="#" className="readMore d-flex justify-content-between align-items-center textClrGrayDark fs-14 fwSemiBold text-decoration-none">
                                        <span>
                                            Read More
                                        </span>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.0625 10.5H17.7887" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        );
    }
}