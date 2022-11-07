import React from "react";
import Button from "../Button/Button";
import "./SingleJobPost.scss";

const SingleJobPost = (props) => {
    return (
        <div className="job-post-box">
            <div className="content-box">
                <h4 dangerouslySetInnerHTML={{__html: props.data.title}} />
                <div className="tag">
                    <div className="tag-data tag-name">{props.data?.taxonomy?.job_category[0]?.name}</div>
                    <div className="tag-data tag-position">{props.data?.meta?._mosacademy_job_employment_basis}</div>
                </div>
            </div>
            
            <Button url={`/job/${props.data?.slug}`} title="View Position" alt={true} /> 
        </div>
    );
};

export default SingleJobPost;
