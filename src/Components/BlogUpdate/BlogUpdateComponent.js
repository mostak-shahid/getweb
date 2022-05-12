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
                    (props.data._mosacademy_page_group_button_url) &&
                    <div className="allInsightBtn text-center mt-5">
                        <Link to="#" className="btn fs-15 fwSemiBold textClrGrayDark text-decoration-none d-inline-flex align-items-center gap-2 justify-content-center">
                            Read More
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                }
            </div>
        </>
    );
};

export default BlogUpdateComponent;
