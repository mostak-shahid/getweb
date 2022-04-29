import React from "react";
import { Link } from "react-router-dom";
import SecLineShape from "../../assets/images/secLineShape.svg";
import MultipleItems from '../BlogSlider/BlogSlider';
import './BlogUpdateComponent.scss';

const BlogUpdateComponent = (props) => {
    const {_mosacademy_page_group_button_url, _mosacademy_page_group_button_title} = props.data;
    return (
        <>
            <div className="container">
                <div className="lineShape text-center mb-5">
                    <img src={SecLineShape} alt="lineShape" />
                </div>
                <MultipleItems />
                {
                    (props.data._mosacademy_page_group_button_url)?
                    <div className="allInsightBtn text-center mt-5">
                        <Link to="#" className="btn fs-15 fwSemiBold textClrGrayDark text-decoration-none d-inline-flex align-items-center gap-2 justify-content-center">
                            Read More
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.0625 10.5H17.7887" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                    :null
                }
            </div>
        </>
    );
};

export default BlogUpdateComponent;
