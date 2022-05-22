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
        <div className="textClrGreen text-center">loading...</div>:            
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
                                {
                                    pageData?.meta?._mosacademy_job_vacancy && 
                                    <div className="widget mb-5">
                                        <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold">Vacancy</p>
                                        <h4 className="workPlace fw-medium fs-5 text-white mb-4" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_vacancy}} />
                                    </div>
                                }
                                {
                                    pageData?.meta?._mosacademy_job_employment_status && 
                                    <div className="widget mb-5">
                                        <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold">Employment Status</p>
                                        <h4 className="workPlace fw-medium fs-5 text-white mb-4" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_employment_status}} />
                                    </div>
                                }
                                {
                                    pageData?.meta?._mosacademy_job_experience && 
                                    <div className="widget mb-5">
                                        <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold">Experience</p>
                                        <h4 className="workPlace fw-medium fs-5 text-white mb-4" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_experience}} />
                                    </div>
                                }
                                {
                                    pageData?.meta?._mosacademy_job_gender && 
                                    <div className="widget mb-5">
                                        <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold">Gender</p>
                                        <h4 className="workPlace fw-medium fs-5 text-white mb-4" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_gender}} />
                                    </div>
                                }
                                {
                                    pageData?.meta?._mosacademy_job_age && 
                                    <div className="widget mb-5">
                                        <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold">Age</p>
                                        <h4 className="workPlace fw-medium fs-5 text-white mb-4" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_age}} />
                                    </div>
                                }
                                {
                                    pageData?.meta?._mosacademy_job_location && 
                                    <div className="widget mb-5">
                                        <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold">Job Location</p>
                                        <h4 className="workPlace fw-medium fs-5 text-white mb-4" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_location}} />
                                    </div>
                                }
                                {
                                    pageData?.meta?._mosacademy_job_salary && 
                                    <div className="widget mb-5">
                                        <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold">Salary</p>
                                        <h4 className="workPlace fw-medium fs-5 text-white mb-4" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_salary}} />
                                    </div>
                                }
                                {
                                    pageData?.meta?._mosacademy_job_application_deadline && 
                                    <div className="widget mb-5">
                                        <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold">Application Deadline</p>
                                        <h4 className="workPlace fw-medium fs-5 text-white mb-4" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_application_deadline}} />
                                    </div>
                                }
                                <div className="gw-btn gw-btn-green mt-5">
                                    <Link to='apply' className="btn text-dark border-0 px-4 rounded-pill fwSemiBold fs-15 py-0">
                                        <span className="text position-relative d-flex align-items-center justify-content-center h-42">
                                            Apply Now
                                            <i className="fa-solid fa-arrow-right-long"></i>                                            
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
