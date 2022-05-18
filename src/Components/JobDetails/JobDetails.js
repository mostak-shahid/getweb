import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Config from "../../Config.json";
import ReadyToMove from "../ReadyToMove/ReadyToMove";
import "./JobDetails.scss";

const JobDetails = () => {
    const [pageData,setPageData]=useState([]);
    const [jobPageData,setJobPageData]=useState([]);
    const [loading,setLoading]=useState(true);
    const params = useParams();
    useEffect(()=>{
        const url = Config.API_BASE + "data-single/" + params.slug;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
    },[]); 
    useEffect(()=>{
        const url = Config.API_BASE + "data-single/" + Config.BLOG_ID;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setJobPageData(resp))//setting response to state posts
    },[]);   
    useEffect(() => {
        if (pageData.length !== 0) {
            setLoading(false);
        }
        //console.log(pageData);
    }, [pageData,jobPageData]);

    //const jobDetails = jobs?.find((job) => job?.id === Number(id));

    return (
        loading?
        <div className="textClrGreen">loading...</div>:            
        <>
        <div className="JobDetails">
            <div className="JobDetailsBanner bgClrDarkLight">
                <div className="container">
                    <div className="JobBannerContent d-flex align-items-center">
                        <div className="content">
                            <h2 className="jobTitle fs-48 fw-bold text-white mb-4" dangerouslySetInnerHTML={{__html:pageData.title}} />
                            <div className="jobIntro fs-18 text-white fw-normal" dangerouslySetInnerHTML={{__html:pageData.excerpt}} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="JobOverView secPadding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="overViewContent">
                                <div className="overViewTitle fs-6 fw-bold textClrGreen mb-5">
                                    <p className="mb-0">Overview</p>
                                </div>
                                <div className="jobDetails" dangerouslySetInnerHTML={{__html:pageData.content}} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="jobSideBar bgClrBlack isRadius16">
                                <div className="widget mb-5">
                                    <p className="jobTitle fs-6 textClrGrayDark fw-bold">Job Title</p>
                                    <h4 className="title fw-bold fs-30 text-white mb-4" dangerouslySetInnerHTML={{__html:pageData.title}} />
                                </div>
                                <div className="widget mb-5">
                                    <p className="jobCategory fs-6 textClrGrayDark fw-bold">Industry Category</p>
                                    <h4 className="category fw-medium fs-5 text-white mb-4" dangerouslySetInnerHTML={{__html:pageData.taxonomy?.job_category[0]?.name}} />
                                </div>
                                {
                                    pageData?.meta?._mosacademy_job_employment_basis && 
                                    <div className="widget mb-5">
                                        <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold">Employment Basis</p>
                                        <h4 className="workPlace fw-medium fs-5 text-white mb-4" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_employment_basis}} />
                                    </div>
                                }
                                <div className="gw-btn gw-btn-green mt-5">
                                    <Link to={['/apply-job', pageData.slug].join('/')} className="btn text-dark border-0 px-4 rounded-pill fwSemiBold fs-15 py-0">
                                        <span className="text position-relative d-flex align-items-center justify-content-center h-42">
                                            Apply Now
                                            <svg className="position-absolute end-0 top-0" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112"
                                                    stroke="#121316"
                                                    stroke-width="1.5"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path d="M3.0625 10.5H17.7887" stroke="#121316" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReadyToMove />
        </div>
        </>
    );
};

export default JobDetails;
