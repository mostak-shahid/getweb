import React from "react";
import { NavLink } from "react-router-dom";
import "./SingleJobPost.scss";
import Button from "../Button/Button";

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
            
            <Button url={`/job/${props.data?.slug}`} title="View Position" alt={true} /> 
        </div>
    );
};

export default SingleJobPost;
