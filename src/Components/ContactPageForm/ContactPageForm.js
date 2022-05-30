import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import clockIcon from "../../assets/images/clock.svg";
import locationIcon from "../../assets/images/location-icon.svg";
import skypeIcon from "../../assets/images/ms_skype.png";
import phoneIcon from "../../assets/images/phone.svg";
import { default as secLineShape } from "../../assets/images/secLineShape.svg";
import Config from "../../Config.json";
import './ContactPageForm.scss';

function ContactPageForm(props) {
    //console.log(props);
    // const [name, setName] = useState(''); 
    // const [email, setEmail] = useState(''); 
    // const [code, setCode] = useState(''); 
    // const [phone, setPhone] = useState(''); 
    // const [message, setMessage] = useState('');
    const [optionData,setOptionData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url=Config.API_BASE + "options/";//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setOptionData(resp))//setting response to state posts
        .then(setLoading(false));
    },[]);    
    const [values, setValues] = useState({
        name: "",
        email: "",
        code: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({    
        name: "",
        email: "",
        code: "",
        phone: "",
        message: "",
    }); 
    const [resMessage, setResMessage] = useState(''); 
    const [formProcessing, setFormPocessing] = useState(false);
    const errorMessages = {
        name: {
            required:"Name is required",
            pattern: "Name validation Error",
        },
        email: {
            required:"Email is required",
            pattern: "Email validation Error",
        },
        phone: {
            required:"Phone is required",
            pattern: "Phone validation Error",
        },
        message: {
            required:"Message is required",
            pattern: "Message validation Error",
        },
    };    
    const handlerChange = (element) => {
        setValues({ ...values, [element.target.name]: element.target.value });
    };
    const handlerBlur = (element) => {
        const elementRequired = element.target.required;      
        const elementPattern = element.target.pattern;  
        // console.log(element.target.name);  
        // console.log(elementRequired);
        // console.log(elementPattern);
        (elementRequired && !element.target.value) ? 
        setErrors({ ...errors, [element.target.name]: errorMessages[element.target.name]?.required }) : 
            (elementPattern && !element.target.value.match(elementPattern)) ? 
            setErrors({ ...errors, [element.target.name]:  errorMessages[element.target.name]?.pattern }) : 
                setErrors({ ...errors, [element.target.name]: "" });
    } 
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormPocessing(true);
        (async () => {
            const rawResponse = await fetch(Config.API_BASE + 'contact-data', {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ name: values.name, email: values.email, code: values.code, phone: values.phone, message: values.message })
                
            })
            ;//.then(resp=>resp.json())//calling url by method GET
            //.then(resp=>setFormResponseData(resp))//setting response to state posts
            //.then(setFormResponse(true));
            const content = await rawResponse.json();
            console.log(content.req.data.status);
            if(content.req.data.status) {
                setFormPocessing(false);
                setValues({
                    name: "",
                    email: "",
                    code: "",
                    phone: "",
                    message: "",
                });
                setErrors ({
                    name: "",
                    email: "",
                    code: "",
                    phone: "",
                    message: "",
                })
                setResMessage('Your form has beed submitted successfully.')
            } else {
                setFormPocessing(false);
                setResMessage('Please try again.')
            }
            //console.count();
            //const res = await this.uploadForm(this.state.file);
        })();
    }
    // console.log(loading);
    // console.log(optionData);
    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = props.data;
    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-md-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-md-6':'col-md-12';
        
    return ( 
        <div className="row">
            <div className={[widthClass, orderClass].join(' ')}>
                <div className="part-one">   
                    <div className="sectionHeader mb-30">                   
                        {
                            _mosacademy_page_group_sub_titles[0] &&
                            <div className="secTagLine fs-6 fw-bold textClrGreen mb-3 d-block" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_sub_titles[0]}}></div>
                        }
                        {
                            _mosacademy_page_group_title_text &&
                            <div className="secTitle fw-normal fs-48 text-white mb-3" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_text}}></div>
                        }
                        {
                            _mosacademy_page_group_title_description &&
                            <div className="secIntro textClrGray fs-6 fw-normal" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_description}}></div>
                        }
                        <div className="lineShape">
                            <img src={secLineShape} alt="lineShape" />
                        </div>
                    </div>                    
                    <div className="getInTouch mb-5 mb-xl-0">
                        <div className="row isBgBorder pb-30 mb-30">
                            <div className="col-lg-6">
                                <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center mb-30">
                                    <div className="icon">
                                        <img src={locationIcon} alt="lineShape" />
                                    </div>
                                    <div className="info">
                                        <h4 className="country text-white fw-bold fs-14">USA Office</h4>
                                        <div className="address textClrGray fs-14 fw-medium mb-0">
                                            {
                                                (typeof optionData.contactAddress !== 'undefined') && optionData?.contactAddress[2]
                                                // optionData?.contactAddress.map((item, index) => (
                                                //     <span key={index}>{item}</span>
                                                // ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center mb-30">
                                    <div className="icon">
                                        <img src={locationIcon} alt="lineShape" />
                                    </div>
                                    <div className="info">
                                        <h4 className="country text-white fw-bold fs-14">Saudi Arabia Office</h4>
                                        <div className="address textClrGray fs-14 fw-medium mb-0">
                                            {(typeof optionData.contactAddress !== 'undefined') && optionData?.contactAddress[1]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center">
                                    <div className="icon">
                                        <img src={locationIcon} alt="lineShape" />
                                    </div>
                                    <div className="info">
                                        <h4 className="country text-white fw-bold fs-14">Bangladesh</h4>
                                        <div className="address textClrGray fs-14 fw-medium mb-0">
                                        {(typeof optionData.contactAddress !== 'undefined') && optionData?.contactAddress[0]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row isBgBorder pb-30 mb-30">
                            <div className="col-lg-6 py-3">
                                <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center">
                                    <div className="icon">
                                        <img src={phoneIcon} alt="lineShape" />
                                    </div>
                                    <div className="info">
                                        <h4 className="country text-white fw-bold fs-14">Phone</h4>
                                        <NavLink to={['tel', optionData['contact-phone']].join(':')} className="address textClrGray fs-14 fw-medium mb-0 text-decoration-none">
                                            {optionData['contact-phone']}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 py-3">
                                <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center">
                                    <div className="icon">
                                        <img src={skypeIcon} alt="lineShape" />
                                    </div>
                                    <div className="info">
                                        <h4 className="country text-white fw-bold fs-14">Skype</h4>
                                        <NavLink to={(typeof optionData['contact-social-links'] !== 'undefined') && optionData['contact-social-links'][5].title} className="address textClrGray fs-14 fw-medium mb-0">                                                
                                            {(typeof optionData['contact-social-links'] !== 'undefined') && optionData['contact-social-links'][5].title}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center">
                                    <div className="icon">
                                        <img src={clockIcon} alt="lineShape" />
                                    </div>
                                    <div className="info">
                                        <h4 className="country text-white fw-bold fs-14">Open Hours</h4>
                                        <div className="address textClrGray fs-14 fw-medium mb-0 text-decoration-none" dangerouslySetInnerHTML={{__html:optionData['contact-hour']}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            <div className={[widthClass].join(' ')}>
                <div className="part-two"> 
                    <div className="contactWrapper bgClrSolitude isRadius12 p-4 p-xl-5 h-100">
                        <div className="contactHeader mb-4">
                            <h2 className="textClrThemeDark fs-4 fw-bold mb-3">Got a project in mind? We’re all ears.</h2>
                            <p className="textClrGrayDark fs-6 fw-normal mb-0">It usually takes us up to 48 hours to get back to you.</p>
                        </div>
                        {
                            resMessage &&
                            <div className="mb-3 bgClrGreen textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4">{resMessage}</div>
                        }
                        <Form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <Form.Group className="contactField" controlId="formBasicName">
                                        <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Name</Form.Label>
                                        <Form.Control type="text" placeholder="Please enter your name" className="rounded-pill px-4" name="name" value={values.name} onChange={handlerChange} onBlur={handlerBlur} required pattern="^[A-Za-z .]+$" />
                                    </Form.Group>
                                    {errors.name && <div className="text-danger mt-1">{errors.name}</div>}
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <Form.Group className="contactField" controlId="formBasicEmail">
                                        <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Email</Form.Label>
                                        <Form.Control type="email" placeholder="Please enter your email" className="rounded-pill px-4" name="email" value={values.email} onChange={handlerChange} onBlur={handlerBlur} required pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$"/>
                                    </Form.Group>
                                    {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <Form.Group className="contactField" controlId="formBasicContactNumber">
                                        <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Contact Number</Form.Label>
                                        <div className="countryCode d-flex align-items-center">
                                            <Form.Select className="w-25 border-0 rounded-0 px-3" name="code" value={values.code} onChange={handlerChange} onBlur={handlerBlur} >
                                                <option value="1">US (+1)</option>
                                                <option value="59">DZ (+59)</option>
                                                <option value="213">DZ (+213)</option>
                                                <option value="376">AD (+376)</option>
                                                <option value="1264">AI (+1264)</option>
                                            </Form.Select>
                                            <Form.Control type="phone" placeholder="Please enter your number" className="rounded-0 border-0 px-3 w-75" name="phone" value={values.phone} onChange={handlerChange} onBlur={handlerBlur} />
                                        </div>
                                    </Form.Group>
                                    {errors.code && <div className="text-danger mt-1">{errors.code}</div>}
                                    {errors.phone && <div className="text-danger mt-1">{errors.phone}</div>}
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <Form.Group className="contactField" controlId="formBasicMessage">
                                        <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Message</Form.Label>
                                        <Form.Control as="textarea" placeholder="Enter your message here..." className="isRadius16 p-3" style={{ height: "88px" }} name="message"  value={values.message} onChange={handlerChange} onBlur={handlerBlur} />
                                    </Form.Group>
                                    {errors.message && <div className="text-danger mt-1">{errors.message}</div>}
                                </div>
                                <div className="sbm-btn text-end">
                                    <Button className="bgClrGreen w-auto h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill" type="submit" disabled={formProcessing}>
                                        {formProcessing? 'Sending Mesage...' : 'Send Message '}
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactPageForm