import React from "react";
import { NavLink } from "react-router-dom";
import "./SingleJobPost.scss";

const SingleJobPost = ({ id, title, tag1, tag2 }) => {
    return (
        <div className="job-post-box">
            <div className="content-box">
                <h4>{title}</h4>
                <div className="tag">
                    <p>{tag1}</p>
                    <p>{tag2}</p>
                </div>
            </div>
            <NavLink to={`/job/ui-developer-ux-researcher`} className="gw-btn text-decoration-none">
                <button className="btn position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 gap-2 d-flex align-items-center justify-content-center">
                    <span className="me-2">View Position</span>
                    <svg className="position-absolute end-0 top-0" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#121316" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.0625 10.5H17.7887" stroke="#121316" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </NavLink>
        </div>
    );
};

export default SingleJobPost;
