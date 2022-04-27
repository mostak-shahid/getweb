import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import blog1 from "../../assets/images/blog-img1.png";
import blog2 from "../../assets/images/blog-img2.png";
import blog3 from "../../assets/images/blog-img3.png";
import "./BlogSlider.scss";


export default class MultipleItems extends Component {
    //http://api.getweb.localhost/wp-json/mos-getweb-api/v1/data-list/post/0/0/6
    state = {
        loading: true,
        postData: null,
    };
    
    async componentDidMount() {

        const url = "http://api.getweb.localhost/wp-json/mos-getweb-api/v1/data-list/post/0/0/6";
        const response = await fetch(url);
        const postResponse = await response.json();
        this.setState({ 
            postData: postResponse,
            loading: false,
        });
        //console.log(this.state.postData);
    }

    constructor(props) {
        super(props);
        //console.log(props);
    }
    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        if (!this.state.postData) {
            return <div>Didn't get data from API</div>;
        }
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            variableWidth: false,
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
        const {postData} = this.state; 
        return (
            <div className="blogSlider">
                <Slider {...settings}>
                    {
                        (postData.length)?
                        postData.map((item) => (
                            <div className="singleBlog isRadius16 bgClrDarkLight" key={item.id}>
                                {/*
                                    (item.image)?
                                    <div className="blogImage">
                                        <Link to={item.slug} className=" text-decoration-none">
                                            <img src={item.image} alt="blog image"/>
                                        </Link>
                                    </div>:''
                                */}

                                <div className="blogInfo p-4">
                                    <h3 className="blogTitle fs-6 fw-bold mb-2" style={{ maxWidth: "300px", width: "100%" }}>
                                        <Link to={item.slug} className="text-decoration-none text-white">
                                            {item.title}
                                        </Link>
                                    </h3>
                                    <div className="blogDesc textClrGray fw-normal fs-14 mb-5" style={{ maxWidth: "300px", width: "100%" }}>
                                        <p className="mb-0" dangerouslySetInnerHTML = {{__html: item.excerpt}}></p>
                                    </div>
                                    <Link to={item.slug} className="readMore d-flex justify-content-between align-items-center textClrGrayDark fs-14 fwSemiBold text-decoration-none">
                                        <span>
                                            Read More
                                        </span>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.0625 10.5H17.7887" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        )):''
                    }
                </Slider>
            </div>
        );
    }
}