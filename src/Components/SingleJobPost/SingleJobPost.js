import React from "react";
import { NavLink } from "react-router-dom";
import "./SingleJobPost.scss";

const SingleJobPost = (props) => {
    return (
        <div className="job-post-box">
            {/* {console.log(props)} */}
            <div className="content-box">
                <h4 dangerouslySetInnerHTML={{__html: props.data.title}} />
                <div className="tag">
                    <p>{props.data?.taxonomy?.job_category[0]?.name}</p>
                    <p>{props.data?.meta?._mosacademy_job_employment_basis}</p>
                </div>
            </div>
            <NavLink to={`/job/${props.data?.slug}`} className="gw-btn text-decoration-none">
                <button className="btn position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 gap-2 d-flex align-items-center justify-content-center">
                    <span className="me-2">View Position</span>                    
                    <i className="fa-solid fa-arrow-right-long"></i>
                </button>
            </NavLink>
        </div>
    );
};

export default SingleJobPost;
