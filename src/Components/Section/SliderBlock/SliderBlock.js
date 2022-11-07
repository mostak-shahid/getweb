import React from 'react';
import Slider from "react-slick";
import SingleBlogItems from '../../BlogUpdate/SingleBlogItems';
import './SliderBlock.scss';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Testimonial from '../../Testimonials/Testimonial/Testimonial';
const SliderBlock = (props) => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 2500,
        slidesToShow: props.noCol,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: props.noColmd,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: props.noColmd,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: props.noColsm,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        
        <div className={["mb-4", "slick-slider-wrapper", props.components + "-slider-wrapper"].join(" ")}>
            <Slider className={["base-slick-slider",props.components + "-slider"].join(" ")} {...settings}>
            {
                props.groupData.map((item, index) => (
                    <div className="item-wrapper" key={item.id}>
                        {
                        props.components === 'testimonial'?
                            <Testimonial data={item} />:
                            <SingleBlogItems data={item} newtab={props?.true && true} />
                        }                    
                    </div>
                ))
            }
            </Slider>
        </div>
    )
}

export default SliderBlock