import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";
import LazyImage from '../../LazyImage';
import './SliderBlock.scss';
const SliderBlock = (props) => {
    //console.log(props);
    const settings = {
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed:2500,
        responsive:{
            0:{
                items:props.noColsm,
            },
            600:{
                items:props.noColmd,
            },
            1000:{
                items:props.noCol,
            }
        }
    };
    return (
        <OwlCarousel className='owl-theme' {...settings}>
        {
            props.groupData.map((item, index) => (
                <div className="item-wrapper" key={item.id}>
                    <div className="content-part">
                    {
                        (item.image)?
                        <div className="blogImage">
                            <Link to={['/blog',item.slug].join('/')} className=" text-decoration-none">
                                <LazyImage src={item.image} alt={item.title}/>
                            </Link>
                        </div>:
                        null                             
                    }

                    <div className="blogInfo p-4 pb-0">
                        <h3 className="blogTitle fs-6 fw-bold mb-2" style={{ maxWidth: "300px", width: "100%" }}>
                            <Link to={['/blog',item.slug].join('/')}  className="text-decoration-none text-white" dangerouslySetInnerHTML={{__html:item.title}} />
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
            ))
        }
        </OwlCarousel>
    )
}

export default SliderBlock