import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import Config from '../../Config.json';
import LazyImage from '../LazyImage';
import "./BlogSlider.scss";



export default class MultipleItems extends Component {
    //Config.API_BASE + "data-list/post/0/0/6
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            loading: true,
            postData: null,
        }; 
    }
       
    async componentDidMount() {

        const url = Config.API_BASE + "data-list/post/0/0/6";
        const response = await fetch(url);
        const postResponse = await response.json();
        this.setState({ 
            postData: postResponse,
            loading: false,
        });
        //console.log(this.state.postData);
    }
    render() {
        if (this.state.loading) {
            return <div className="textClrGreen text-center d-none">loading...</div>;
        }
        if (!this.state.postData) {
            return <div>Didn't get data from API</div>;
        }
        const settings = {
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed:2500,
            responsive:{
                0:{
                    items:1,
                },
                576:{
                    items:2,
                },
                992:{
                    items:3,
                }
            }
        };
        const {postData} = this.state; 
        return (
            <div className="blogSlider">
                <OwlCarousel className='owl-theme' {...settings}>
                    {
                        (postData.length)?
                        postData.map((item, index) => (
                            <div className="item-wrapper singleBlog isRadius16 d-flex flex-column justify-content-between" key={item.id}>
                                <div className="content-part">
                                {
                                    item.image &&
                                    <div className="blogImage">
                                        <Link to={['/blog',item.slug].join('/')} className=" text-decoration-none">
                                            {/* <img src={item.image} alt={item.title}/> */}
                                            <LazyImage src={item.featured_image.medium} alt={item.title} width="300px" height="172px" />
                                        </Link>
                                    </div>                          
                                }

                                <div className="blogInfo p-4 pb-0">
                                    <h3 className="blogTitle fs-6 fw-bold mb-2">
                                        <Link to={['/blog',item.slug].join('/')}  className="text-decoration-none text-white" dangerouslySetInnerHTML={{__html:item.title}}/>
                                    </h3>
                                    <div className="blogDesc textClrGray fw-normal fs-14 mb-30" style={{ maxWidth: "300px", width: "100%" }}>
                                        <p className="mb-0" dangerouslySetInnerHTML = {{__html: item.excerpt.medium}}></p>
                                    </div>
                                </div>
                                </div>
                                <div className='link-part p-4 pt-0'>
                                    <Link to={['/blog',item.slug].join('/')} className="readMore d-flex align-items-center textClrGrayDark fs-14 fwSemiBold text-decoration-none">
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
                        )):null
                    }
                </OwlCarousel>
            </div>
        );
    }
}