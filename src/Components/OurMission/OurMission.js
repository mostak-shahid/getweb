import React from "react";
import LineShape from "../../assets/images/secLineShape.svg";
import "./OurMission.scss";

const OurMission = (props) => {
    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description='',_mosacademy_page_banner_button, _mosacademy_page_group_freature_image} = props.data;
    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-md-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-md-6':'col-md-12'; 
    //console.log(props);
    return (

                <div className="row align-items-center">
                    <div className={[widthClass, orderClass].join(' ')}>
                        <div className="sectionHeader">
                            {
                                _mosacademy_page_group_sub_titles[0] &&
                                <div className="secTagLine fs-6 fw-bold textClrGreen mb-3 d-block" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_sub_titles[0]}}></div>
                            }
                            {
                                _mosacademy_page_group_title_text &&
                                <div className="secTitle fw-normal fs-48 text-white mb-3" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_text}}></div>
                            }
                            <div className="lineShape mb-4">
                                <img src={LineShape} alt="LineShape" />
                            </div>
                            {
                                _mosacademy_page_group_title_description &&
                                <div className="secIntro textClrGray fs-6 fw-normal" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_description}}></div>
                            }
                        </div>
                    </div>
                    <div className={[widthClass].join(' ')}>
                        <div className="OurMissionImg">
                            {
                                _mosacademy_page_group_freature_image && 
                                <div className="text-center text-md-start mt-3 mt-md-0"><img className="img-fluid" src={_mosacademy_page_group_freature_image} alt={_mosacademy_page_group_title_text} /></div>
                            }                            
                        </div>
                    </div>
                </div>

    );
};

export default OurMission;
