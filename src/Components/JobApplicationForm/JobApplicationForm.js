import axios from 'axios';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileIcon from "../../assets/images/file.svg";
import Config from "../../Config.json";
import LazyImage from '../LazyImage';
import Section from '../Section/Section';
import SeoMeta from '../SeoMeta/SeoMeta';
import JobDetailsBanner from "../SubPageBanner/JobDetailsBanner";
import SuccessfulModal from '../SuccessfulModal/SuccessfulModal';
import "./JobApplicationForm.scss";
const JobApplicationForm = (props) => {
    //const location = useLocation();
    const params = useParams();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);  

    const [pageData,setPageData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [jobs,setJobs]=useState([]);
    
    const [formProcessing, setFormPocessing] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    useEffect(()=>{
        const url = Config.API_BASE + "data-list/job/0";//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setJobs(resp))//setting response to state posts
    },[]); 

    useEffect(()=>{
        const url = Config.API_BASE + "data-single/" + Config.JOB_APPLICATION_ID;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
    },[]); 
    
    useEffect(() => {
        if (jobs.length !== 0 && pageData.length !== 0) {
            setLoading(false);
        }
    }, [jobs,pageData]);
    const onSubmit = async (data) => {
        setFormPocessing(true);
        const formData = new FormData();
        formData.append('job_id',data.job_id);
        formData.append('first_name',data.first_name);
        formData.append('last_name',data.last_name);
        formData.append('email',data.email);
        formData.append('country',data.country);
        formData.append("cv", data.cv[0]);
        try {
            //const rawResponse = await axios.post(Config.API_BASE + 'job-apply', JSON.stringify(data),{ 
            const rawResponse = await axios.post(Config.API_BASE + 'job-apply', formData,{ 
                headers: {
                    'content-type': 'multipart/form-data',
                    'Accept': 'application/json',
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            //const content = await rawResponse.json();
            console.log(rawResponse);
            if(rawResponse.data.req.data.status){
                //toast.success('Thank you for submitting this query.');
                setShow(true);
                reset();
            }
        } catch (error) {
            toast.error('Please try again.');
            console.log(error);
        }
        setFormPocessing(false);
    };   
    
    /*const onSubmit = (data) => {
        console.log(data);
        reset();
    }*/
    const cv = watch("cv");
    return (
        loading
        ?<div className="textClrGreen text-center loder-text d-none">loading...</div>
        :        
        <>
            <SeoMeta pageData={pageData}/>
            <JobDetailsBanner  title={pageData?.meta?._mosacademy_page_banner_title} content={pageData?.meta?._mosacademy_page_banner_intro}/>
            <section className="JobApplicationForm secPadding">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="ApplicationForm bgClrSolitude isRadius16 p-4 p-lg-5">
                                <div className="contactHeader mb-4">
                                    <h2 className="textClrThemeDark fs-4 fw-bold mb-3">Fillup the Job Application Form</h2>
                                    <p className="textClrGrayDark fs-6 fw-normal mb-0">It usually takes us up to 48 hours to get back to you.</p>
                                </div>
                                
        
                                <form className="" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="selectJobTitle mb-3">
                                        <label htmlFor="job_id" className="textClrThemeDark fs-13 fwSemiBold">Job Title</label>
                                        <select id="job_id" className="form-select rounded-pill h-42 px-4"  {...register('job_id', { required: true })} defaultValue={params.slug?params.slug:0}>
                                            <option value="0">Position applying for</option>
                                            {
                                                jobs.map((item, index) => (
                                                    <option value={item.slug} key={index} dangerouslySetInnerHTML={{__html: item.title}} />
                                                ))                                                    
                                            }
                                        </select>
                                        {errors.job_id?.type === "required" && <div className='text-danger mt-1'>Please select a job.</div>}
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 mb-4">
                                            <div className="field">
                                                <label htmlFor="first_name" className="textClrThemeDark fs-13 fwSemiBold">First Name</label><input id="first_name" type="text" className="form-control rounded-pill h-42 px-4" placeholder="Enter your first name" {...register('first_name', { required: true, pattern: /^[A-Za-z .]+$/ })}/>
                                            </div>
                                            {errors.first_name?.type === "required" && <div className='text-danger mt-1'>First name is required.</div>}
                                            {errors.first_name?.type === "pattern" && <div className='text-danger mt-1'>Please enter a valid name.</div>}
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="field"><label htmlFor="country" className="textClrThemeDark fs-13 fwSemiBold">Last Name</label><input id="last_name" type="text" className="form-control rounded-pill h-42 px-4" placeholder="Enter your last name" {...register('last_name', {pattern: /^[A-Za-z .]+$/ })}/></div>
                                            {errors.last_name?.type === "pattern" && <div className='text-danger mt-1'>Please enter a valid name.</div>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 mb-4">
                                            <div className="field">
                                                <label htmlFor="email" className="textClrThemeDark fs-13 fwSemiBold">Email</label>
                                                <input id="email" type="email" className="form-control rounded-pill h-42 px-4" placeholder="Enter your email" {...register('email', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/ })}/>
                                                {errors.email?.type === "required" && <div className='text-danger mt-1'>Email is required.</div>}
                                                {errors.email?.type === "pattern" && <div className='text-danger mt-1'>Please enter a valid email.</div>}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="field">
                                                <label htmlFor="country" className="textClrThemeDark fs-13 fwSemiBold">Country</label>
                                                <select id="country" className="form-select rounded-pill h-42 px-4" defaultValue="0" {...register('country')}>
                                                    <option value="0">Select your country</option>
                                                    <option>Bangladesh</option>
                                                    <option>India</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="cv" className="textClrThemeDark fs-13 fwSemiBold d-block position-relative">
                                            <p className="mb-2">Upload CV</p>
                                            <input name='cv' id='cv' type="file" className="opacity-0 position-absolute bottom-0 end-0 top-0 start-0 z-index-9"  {...register('cv',{ required: true})}/>
                                            <div className="fileBody bg-white p-4 isRadius12 d-flex justify-content-center align-items-center gap-3 gap-xl-4">
                                                <LazyImage src={FileIcon} alt="icon" />
                                                <p className="fs-14 fw-medium textClrGray mb-0">{(cv && cv[0]?.name)?cv[0].name:'Upload your CV'}</p>
                                            </div>
                                            {errors.cv?.type === "required" && <div className='text-danger mt-1'>CV is required.</div>}
                                        </label>                                            
                                    </div>
                                    <div className="sbm-btn text-end">
                                        <button type="submit" className="btn bgClrGreen w-100 h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill" disabled={formProcessing}>{formProcessing? 'Submitting Application...' : 'Submit Application'}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>               
            {
            pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (                 
                <Section data={item} key={index} />                      
            ))
            }
            <SuccessfulModal show={show} handleClose={handleClose} />
            <ToastContainer /> 
        </>
        
    );
};

export default JobApplicationForm;
