import React, { Component } from "react";
import Button from "../Button/Button";
import './ReadyToMoveComponent.scss';
//const ReadyToMoveComponent = () => {
export default class ReadyToMoveComponent extends Component {  

    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {};
    }
    render() {
        //console.log(this.props);
        const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description='',_mosacademy_page_group_button} = this.props.data;
        const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-md-last':'';
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
                                    <div className="d-flex justify-content-center">
                                        <Button title={_mosacademy_page_group_button?.title} url={_mosacademy_page_group_button?.url}/> 
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

