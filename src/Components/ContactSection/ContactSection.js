import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import clockIcon from "../../assets/images/clock.svg";
import locationIcon from "../../assets/images/location-icon.svg";
import skypeIcon from "../../assets/images/ms_skype.png";
import phoneIcon from "../../assets/images/phone.svg";
import Config from "../../Config.json";
import FormValidation from "../FormValidation/FormValidation";
import './ContactSection.scss';

function ContactSection(props) {
    const [optionData,setOptionData]=useState([]);
    useEffect(()=>{
        const url=Config.API_BASE + "options/";//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setOptionData(resp))//setting response to state posts
        //.then(setLoading(false));
    },[]);      
    // console.log(loading);
    // console.log(optionData);
    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = props.data;
    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-md-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-md-6':'col-md-12';
        
    return ( 
        <div className="row">
            <div className={[widthClass, orderClass].join(' ')}>
                <div className="part-one">   
                    <div className="sectionHeader">                   
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
                            <div className="secIntro" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_description}}></div>
                        }
                        
                    </div>                    
                    <div className="getInTouch mb-5 mb-xl-0">
                        <div className="row isBgBorder pb-20 mb-20">
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
                        <div className="row isBgBorder pb-20 mb-20">
                            <div className="col-6 py-3">
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
                            <div className="col-6 py-3">
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
                <FormValidation title="Got a project in mind? We’re all ears." intro="It usually takes us up to 48 hours to get back to you." fields={['name', 'email', 'phone', 'interestedin','budget','message']}/>
                </div>
            </div>
        </div>
    )
}
export default ContactSection