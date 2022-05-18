import React, { Component } from "react";
import { Link } from "react-router-dom";
import './ReadyToMoveComponent.scss';
//const ReadyToMoveComponent = () => {
export default class ReadyToMoveComponent extends Component {  

    constructor(props) {
        super(props);
        //console.log(props);
    }
    render() {
        //console.log(this.props);
        const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description='',_mosacademy_page_group_button} = this.props.data;
        const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-last':'';
        const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-md-6':'col-md-12';        
        return (
            
            <div className="row">
                <div className={[widthClass, orderClass].join(' ')}>
                    <div className="part-one">                        
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
                        
                    </div>
                </div>
                <div className={[widthClass].join(' ')}>
                    <div className="part-two">                 
                        {
                        (_mosacademy_page_group_button?.url) && 
                            <div className='container'>
                                <div className='sectionHeader text-center mb-0'>
                                    <div className="gw-btn gw-btn-green d-flex justify-content-center">
                                        <Link to={_mosacademy_page_group_button?.url} className="btn position-relative w-auto text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 d-flex align-items-center justify-content-center">
                                            <span className="pe-4">{_mosacademy_page_group_button?.title}</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>             
                        }

                    </div>
                </div>
            </div>
        );
    }
};

