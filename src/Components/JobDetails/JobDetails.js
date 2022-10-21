import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Config from "../../Config.json";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import Section from "../Section/Section";
import SeoMeta from "../SeoMeta/SeoMeta";
import JobDetailsBanner from "../SubPageBanner/JobDetailsBanner";
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
    },[params.slug]); 
    useEffect(()=>{
        const url = Config.API_BASE + "data-single/" + Config.SINGLE_JOB_ID;//api url
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
        // <div className="textClrGreen text-center loder-text d-none">loading...</div>
        <Loading cls="loading page-loader" />:            
        <>      
            <SeoMeta pageData={pageData}/>
            <div className="JobDetails">
                <JobDetailsBanner title={pageData?.title} content={pageData?.excerpt}/>
                <div className="JobOverView secPadding">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="overViewContent">
                                    <div className="overViewTitle">
                                        <p className="fs-6 fw-bold textClrGreen">Overview</p>
                                    </div>
                                    <div className="jobDetails" dangerouslySetInnerHTML={{__html:pageData.content}} />
                                </div>
                            </div>
                            <div className="col-lg-4 position-relative">
                                <div className="jobSideBar bgClrBlack isRadius16 sticky-lg-top">
                                    <div className="widget mb-30">
                                        <p className="jobTitle fs-6 textClrGrayDark fw-bold mb-15">Job Title</p>
                                        <h4 className="title fw-bold fs-30 text-white mb-0" dangerouslySetInnerHTML={{__html:pageData.title}} />
                                    </div>
                                    <div className="widget mb-30">
                                        <p className="jobCategory fs-6 textClrGrayDark fw-bold mb-10">Industry Category</p>
                                        <h4 className="category fw-medium fs-5 text-white mb-0" dangerouslySetInnerHTML={{__html:pageData.taxonomy?.job_category[0]?.name}} />
                                    </div>
                                    {
                                        pageData?.meta?._mosacademy_job_employment_basis && 
                                        <div className="widget mb-30">
                                            <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold mb-10">Employment Basis</p>
                                            <h4 className="workPlace fw-medium fs-5 text-white mb-0" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_employment_basis}} />
                                        </div>
                                    }
                                    {
                                        pageData?.meta?._mosacademy_job_vacancy && 
                                        <div className="widget mb-30">
                                            <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold mb-10">Vacancy</p>
                                            <h4 className="workPlace fw-medium fs-5 text-white mb-0" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_vacancy}} />
                                        </div>
                                    }
                                    {
                                        pageData?.meta?._mosacademy_job_employment_status && 
                                        <div className="widget mb-30">
                                            <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold mb-10">Employment Status</p>
                                            <h4 className="workPlace fw-medium fs-5 text-white mb-0" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_employment_status}} />
                                        </div>
                                    }
                                    {
                                        pageData?.meta?._mosacademy_job_experience && 
                                        <div className="widget mb-30">
                                            <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold mb-10">Experience</p>
                                            <h4 className="workPlace fw-medium fs-5 text-white mb-0" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_experience}} />
                                        </div>
                                    }
                                    {
                                        pageData?.meta?._mosacademy_job_gender && 
                                        <div className="widget mb-30">
                                            <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold mb-10">Gender</p>
                                            <h4 className="workPlace fw-medium fs-5 text-white mb-0" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_gender}} />
                                        </div>
                                    }
                                    {
                                        pageData?.meta?._mosacademy_job_age && 
                                        <div className="widget mb-30">
                                            <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold mb-10">Age</p>
                                            <h4 className="workPlace fw-medium fs-5 text-white mb-0" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_age}} />
                                        </div>
                                    }
                                    {
                                        pageData?.meta?._mosacademy_job_location && 
                                        <div className="widget mb-30">
                                            <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold mb-10">Job Location</p>
                                            <h4 className="workPlace fw-medium fs-5 text-white mb-0" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_location}} />
                                        </div>
                                    }
                                    {
                                        pageData?.meta?._mosacademy_job_salary && 
                                        <div className="widget mb-30">
                                            <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold mb-10">Salary</p>
                                            <h4 className="workPlace fw-medium fs-5 text-white mb-0" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_salary}} />
                                        </div>
                                    }
                                    {
                                        pageData?.meta?._mosacademy_job_application_deadline && 
                                        <div className="widget mb-30">
                                            <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold mb-10">Application Deadline</p>
                                            <h4 className="workPlace fw-medium fs-5 text-white mb-0" dangerouslySetInnerHTML={{__html:pageData?.meta?._mosacademy_job_application_deadline}} />
                                        </div>
                                    }
                                    <div className="mt-40">                                    
                                        <Button url='apply' title='Apply Now'/>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
                {
                jobPageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                    // <MainComponent data={item} key={index} />
                    <Section data={item} key={index} />                        
                ))
                }
            </div>
        </>
    );
};

export default JobDetails;
