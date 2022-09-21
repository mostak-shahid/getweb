import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileIcon from "../../assets/images/file.svg";
import Config from '../../Config.json';
import LazyImage from '../LazyImage';
import './FormValidation.scss';
const FormValidation = (props) => {
    const [formProcessing, setFormPocessing] = useState(false);
    
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
        setFormPocessing(true);
        //formData.append("cv", data.cv[0]);
        const formData = new FormData();
        formData.append('name',data.name);
        formData.append('email',data.email);
        formData.append('code',data.code);
        formData.append('phone',data.phone);
        formData.append('interested',data.interested);
        formData.append('budget',data.budget);
        formData.append('company',data.company);
        formData.append('message',data.message);
        formData.append("cv", data.cv[0]);
        try {
            //const rawResponse = await axios.post(Config.API_BASE + 'job-apply', JSON.stringify(data),{ 
            const rawResponse = await axios.post(Config.API_BASE + 'contact-data', formData,{ 
                headers: {
                    'content-type': 'multipart/form-data',
                    'Accept': 'application/json',
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            //const content = await rawResponse.json();
            console.log(rawResponse);
            if(rawResponse.data.req.data.status){
                toast.success('Thank you for submitting this query.');
                //setShow(true);
                reset();
            }
        } catch (error) {
            toast.error('Please try again.');
            console.log(error);
        }
        /*try {
            const rawResponse = await fetch(Config.API_BASE + 'contact-data/', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            const content = await rawResponse.json();
            //console.log(content);
            if(content.req.data.status){
                toast.success('Thank you for submitting this query.');
                reset();
            }
        } catch (error) {
            toast.error('Please try again.');
            //console.log(error);
            //setError("title", { type: "postAlreadyExists" }, { shouldFocus: true });
        }*/
        setFormPocessing(false);
    };   
    const cv = watch("cv");
    return (
        <div className="contactWrapper bgClrSolitude isRadius12 h-100 form-validation">
            <ToastContainer />
            {(props?.title || props?.intro) &&
                <div className="contactHeader mb-30">
                    {props?.title && 
                        <div className="textClrThemeDark fs-24 fw-bold mb-10" dangerouslySetInnerHTML={{__html:props.title}} />
                    }
                    {props?.intro &&
                        <div className="textClrGrayDark fs-6 fw-normal" dangerouslySetInnerHTML={{__html:props.intro}} />
                    }
                </div>
            }
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    {
                        props?.fields.find((element) => { return element === 'name' } ) === 'name' && 
                        <div className="col-sm-6 mb-20">
                            <div className="contactField">
                                <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicName">Name</label>
                                <input placeholder="Please enter your name" type="text" id="formBasicName" className="rounded-pill px-4 form-control" {...register('name', { required: true, pattern: /^[A-Za-z .]+$/ })}/>
                                {errors.name?.type === "required" && <div className='text-danger mt-1'>Name is required.</div>}
                                {errors.name?.type === "pattern" && <div className='text-danger mt-1'>Please enter a valid name.</div>}
                            </div>
                        </div>
                    }
                    {
                        props?.fields.find((element) => { return element === 'email' } ) === 'email' && 
                        <div className="col-sm-6 mb-20">
                            <div className="contactField">
                                <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicEmail">Email</label>
                                <input placeholder="Please enter your email" type="email" id="formBasicEmail" className="rounded-pill px-4 form-control" {...register('email', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/ })}/>
                                {errors.email?.type === "required" && <div className='text-danger mt-1'>Email is required.</div>}
                                {errors.email?.type === "pattern" && <div className='text-danger mt-1'>Please enter a valid email.</div>}
                            </div>
                        </div>
                    }
                    {
                        props?.fields.find((element) => { return element === 'phone' } ) === 'phone' && 
                        <div className="col-lg-12 mb-3">
                            <div className="contactField">
                                <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicContactNumber">Contact Number</label>
                                <div className="countryCode d-flex align-items-center rounded-pill border overflow-hidden">
                                    <select className="border-0 rounded-0 px-3 form-select" id="formBasicContactNumber" {...register('code')}>
                                        <option value="1">US (+1)</option>
                                        <option value="59">DZ (+59)</option>
                                        <option value="213">DZ (+213)</option>
                                        <option value="376">AD (+376)</option>
                                        <option value="1264">AI (+1264)</option>
                                    </select>
                                    <input placeholder="Please enter your number" name="phone" type="phone" id="formBasicContactNumber" className="rounded-0 border-0 border-start px-3 form-control" {...register('phone')}/>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        props?.fields.find((element) => { return element === 'interestedin' } ) === 'interestedin' && 
                        <div className="col-sm-6 mb-20">
                            <div className="contactField">
                                <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicName">Interested In</label>
                                <select className="rounded-pill px-4 form-control form-select" id="formBasicName" {...register('interested')}>
                                    <option value="">Select</option>
                                    <optgroup label="Ideation and Evaluation">
                                        <option value="Ideation and Evaluation - Product Design Sprint">Product Design Sprint</option>
                                        <option value="Ideation and Evaluation - Scoping Session">Scoping Session</option>
                                        <option value="Ideation and Evaluation - UX Review">UX Review</option>
                                        <option value="Ideation and Evaluation - Research &amp; Development">Research &amp; Development</option>
                                    </optgroup>
                                    <optgroup label="Product Design">
                                        <option value="Product Design - Product Design">Product Design</option>
                                        <option value="Product Design - UI design">UI Design</option>
                                        <option value="Product Design - UX Design">UX Design</option>
                                        <option value="Product Design - Branding">Branding</option>
                                        <option value="Product Design - UX Writing">UX Writing</option>
                                    </optgroup>
                                    <optgroup label="Staff Augmentation">
                                        <option value="Staff Augmentation - Front End Development">Front End Developer</option>
                                        <option value="Staff Augmentation - Back End Developer">Back End Developer</option>
                                        <option value="Staff Augmentation - Mobile App Developer">Mobile App Developer</option>
                                        <option value="Staff Augmentation - Full Stack Developer">Full Stack Developer</option>
                                    </optgroup>
                                    <optgroup label="App Development">
                                        <option value="App Development - Androin App Development">Androin App Development</option>
                                        <option value="App Development - iOS App Development">iOS App Development</option>
                                        <option value="App Development - Cross Platform Mobile Development">Cross Platform Mobile Development</option>
                                    </optgroup>
                                    <optgroup label="Web Applications">
                                        <option value="Web Applications - Custom Web Apps">Custom Web Apps</option>
                                        <option value="Web Applications - Progressive Web Apps">Progressive Web Apps</option>
                                        <option value="Web Applications - Front End Development Services">Front End Development Services</option>
                                    </optgroup>
                                    <optgroup label="Product Engineering">
                                        <option value="Product Engineering - SaaS Application Development">SaaS Application Development</option>
                                        <option value="Product Engineering - Lean Product Development">Lean Product Development</option>
                                        <option value="Product Engineering - Custom Application Development">Custom Application Development</option>
                                    </optgroup>
                                    <optgroup label="eCommerce &amp; CMS Development">
                                        <option value="eCommerce &amp; CMS Development - WordPress">WordPress</option>
                                        <option value="eCommerce &amp; CMS Development - Shopify">Shopify</option>
                                        <option value="eCommerce &amp; CMS Development - Webflow">Webflow</option>
                                        <option value="eCommerce &amp; CMS Development - Drupal">Drupal</option>
                                        <option value="eCommerce &amp; CMS Development - Magento">Magento</option>
                                    </optgroup>
                                    <optgroup label="Quality Assurance">
                                        <option value="Quality Assurance - WordPress">WordPress</option>
                                        <option value="Quality Assurance - Shopify">Shopify</option>
                                        <option value="Quality Assurance - Webflow">Webflow</option>
                                    </optgroup>
                                    <optgroup label="Cloud Solutions">
                                        <option value="Cloud Solutions Aws">AWS</option>
                                        <option value="Cloud Solutions Azure">Azure</option>
                                        <option value="Cloud Solutions Google Cloud">Google Cloud</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    }
                    {
                        props?.fields.find((element) => { return element === 'budget' } ) === 'budget' && 
                        <div className="col-sm-6 mb-20">
                            <div className="contactField">
                                <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicEmail">Select Budget Range</label>
                                <select className="rounded-pill px-4 form-control form-select" id="formBasicEmail" {...register('budget')}>
                                    <option value="">Select</option>
                                    <option value="$500 - $1000">$500 - $1000</option>
                                    <option value="$1001 - $3000">$1001 - $3000</option>
                                    <option value="$3001 - $6000">$3001 - $6000</option>
                                    <option value="$6001 - $10000">$6001 - $10000</option>
                                    <option value="$10001 - $20000">$10001 - $20000</option>
                                    <option value="$20001 - $40000">$20001 - $40000</option>
                                    <option value="More than $40000">More than $40000</option>
                                </select>
                            </div>
                        </div>
                    }
                    {
                        props?.fields.find((element) => { return element === 'company' } ) === 'company' && 
                        <div className="col-lg-12 mb-20">
                            <div className="contactField">
                                <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicName">Company</label>
                                <input placeholder="Please enter your company name" type="text" id="formBasicName" className="rounded-pill px-4 form-control" {...register('company')}/>
                            </div>
                        </div>
                    }
                    {
                        props?.fields.find((element) => { return element === 'message' } ) === 'message' && 
                        <div className="col-lg-12 mb-20">
                            <div className="contactField">
                                <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicMessage">Message</label>
                                <textarea placeholder="Enter your message here..." id="formBasicMessage" className="isRadius16 p-3 form-control" {...register('message')}></textarea>
                            </div>
                        </div>
                    }
                    <div className="mb-20">
                        <label htmlFor="cv" className="textClrThemeDark fs-13 fwSemiBold d-block position-relative">
                            <p className="mb-2">Attach File</p>
                            <input name='cv' id='cv' type="file" className="opacity-0 position-absolute bottom-0 end-0 top-0 start-0 z-index-9"  {...register('cv')}/>
                            <div className="fileBody bg-white p-4 isRadius12 d-flex justify-content-center align-items-center">
                                <LazyImage src={FileIcon} alt="icon" />
                                <p className="fs-14 fw-medium textClrGray mb-0">{(cv && cv[0]?.name)?cv[0].name:'Attach your file'}</p>
                            </div>
                        </label>                                            
                    </div>
                    <div className="col-12">
                    <div className="sbm-btn row justify-content-center justify-content-lg-start">
                        <div className="col-sm-6">
                            <input type="hidden" value={window.location.pathname.replace("/", "")} {...register('source')} />
                            <button type="submit" className="bgClrGreen w-100 h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill btn" disabled={formProcessing}>{formProcessing? 'Sending Mesage...' : 'Send Message '}</button>

                        </div>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormValidation