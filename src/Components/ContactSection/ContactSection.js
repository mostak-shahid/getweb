import { useEffect, useState } from "react";
import clockIcon from "../../assets/images/clock.svg";
import locationIcon from "../../assets/images/location-icon.svg";
import skypeIcon from "../../assets/images/ms_skype.png";
import phoneIcon from "../../assets/images/phone.svg";
import whatappIcon from '../../assets/images/whatsapp.svg';
import FormValidation from "../FormValidation/FormValidation";
import LazyImage from "../LazyImage";
import './ContactSection.scss';

function ContactSection(props) {
    //const [optionData,setOptionData]=useState([]);
    const [loading,setLoading]=useState(true);
    const {optionData} = props;
    // useEffect(()=>{
    //     const url=Config.API_BASE + "options";//api url
    //     fetch(url).then(resp=>resp.json())//calling url by method GET
    //     .then(resp=>setOptionData(resp))//setting response to state posts
    //     //.then(setLoading(false));
    // },[]);      
    // console.log(loading);
    // console.log(optionData);
    useEffect(() => {
        if (optionData.length !== 0) {
            setLoading(false);                                                                                    
        }
    }, [optionData]);
    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = props.data;
    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-lg-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-lg-6':'col-sm-12';
        
    return (                
        loading
        ?<div cls="d-none"></div>
        : 
        <div className="row">
            <div className={[widthClass, orderClass].join(' ')}>
                <div className="part-one">   
                    <div className="sectionHeader">                   
                        {
                            _mosacademy_page_group_sub_titles[0] &&
                            <div className="secTagLine" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_sub_titles[0]}}></div>
                        }
                        {
                            _mosacademy_page_group_title_text &&
                            <div className="secTitle fw-normal fs-48 text-white mb-3" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_text}}></div>
                        }
                        {
                            _mosacademy_page_group_title_description &&
                            <div className="ContactSecIntro secIntro" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_description}}></div>
                        }
                        
                    </div>                    
                    <div className="getInTouch">
                        <div className="row isBgBorder pb-30 mb-30">
                            <div className="col-sm-6">
                                <div className="contact-page-address singleInfo d-flex gap-3 gap-xl-4 align-items-center mb-30">
                                    <div className="icon">
                                        <LazyImage src={locationIcon} alt="lineShape" />
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
                            <div className="col-sm-6">
                                <div className="contact-page-address singleInfo d-flex gap-3 gap-xl-4 align-items-center mb-30">
                                    <div className="icon">
                                        <LazyImage src={locationIcon} alt="lineShape" />
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
                                <div className="contact-page-address singleInfo d-flex gap-3 gap-xl-4 align-items-center">
                                    <div className="icon">
                                        <LazyImage src={locationIcon} alt="lineShape" />
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
                            <div className="col-6 col-sm-4">
                                <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center">
                                    <div className="icon">
                                        <LazyImage src={phoneIcon} alt="lineShape" />
                                    </div>
                                    <div className="info">
                                        <h4 className="country text-white fw-bold fs-14">Phone</h4>
                                        <a href={['tel', optionData['contact-phone']].join(':')} className="address textClrGray fs-14 fw-medium mb-0 text-decoration-none">
                                            {optionData['contact-phone']}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-4">
                                <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center">
                                    <div className="icon">
                                        <LazyImage src={whatappIcon} alt="lineShape" />
                                    </div>
                                    <div className="info">
                                        <h4 className="country text-white fw-bold fs-14">WhatsApp</h4>
                                        <a href={optionData['contact-social-whatapp']?.text_field_2?optionData['contact-social-whatapp']?.text_field_2:''} className="address textClrGray fs-14 fw-medium mb-0">                                                
                                            {optionData['contact-social-whatapp']?.text_field_1?optionData['contact-social-whatapp']?.text_field_1:''}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 mt-3 mt-sm-0">
                                <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center">
                                    <div className="icon">
                                        <LazyImage src={skypeIcon} alt="lineShape" />
                                    </div>
                                    <div className="info">
                                        <h4 className="country text-white fw-bold fs-14">Skype</h4>
                                        <a href={optionData['contact-social-skype']?.text_field_2?optionData['contact-social-skype']?.text_field_2:''} className="address textClrGray fs-14 fw-medium mb-0">                                                
                                            {optionData['contact-social-skype']?.text_field_1?optionData['contact-social-skype']?.text_field_1:''}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="singleInfo d-flex gap-3 gap-xl-4 align-items-center">
                                    <div className="icon">
                                        <LazyImage src={clockIcon} alt="lineShape" />
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
            <div className={['tab-mobile-margin-top', widthClass].join(' ')}>
                <div className="part-two"> 
                <FormValidation title="Need a digital product or a custom solution? We’re all ears!" fields={['name', 'email', 'phone', 'interestedin','budget','message']}/>
                </div>
            </div>
        </div>
    )
}
export default ContactSection