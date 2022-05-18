import React from "react";
import { NavLink } from "react-router-dom";
import "../BlogUpdate/BlogSingle";
import "./SingleBlogItem.scss";

const SingleBlogItems = (props) => {
    //console.log(props);
    return (
        <div className="singleBlog isRadius16 bgClrDarkLight d-flex flex-column justify-content-between">
            <div className="content-part">
                {
                    props?.data?.image &&
                    <div className="blogImage">
                        <NavLink to={['/blog',props?.data?.slug].join('/')} className=" text-decoration-none">
                            <img src={props?.data?.featured_image?.medium} alt="blog image" className="img-fluid w-100" />
                        </NavLink>
                    </div>
                }
                <div className="blogInfo p-4">
                    <h3 className="blogTitle fs-6 fw-bold mb-2">
                        <NavLink to={['/blog',props?.data?.slug].join('/')} className="text-decoration-none text-white">
                            {props.data.title}
                        </NavLink>
                    </h3>
                    <div className="blogDesc textClrGray fw-normal fs-14">
                        <p className="mb-0">{props.data.excerpt.small}</p>
                    </div>
                </div>
            </div>
            <div className="link-part p-4 pt-0">
                <NavLink to={['/blog',props?.data?.slug].join('/')} className="readMore d-flex justify-content-between align-items-center textClrGrayDark fs-14 fwSemiBold text-decoration-none">
                    <span>Read More</span>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.0625 10.5H17.7887" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </NavLink>
            </div>
        </div>
    );
};

export default SingleBlogItems;
