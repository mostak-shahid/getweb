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
        const {_mosacademy_page_group_button_title='Read More', _mosacademy_page_group_button_url} = this.props.data;
        return (
            <>
                {
                (_mosacademy_page_group_button_url)?
                    <div className='container'>
                        <div className='sectionHeader text-center mb-0'>
                            <div className="gw-btn gw-btn-green d-flex justify-content-center">
                                <Link to={_mosacademy_page_group_button_url} className="btn position-relative w-auto text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 d-flex align-items-center justify-content-center">
                                    <span className="pe-4">{_mosacademy_page_group_button_title}</span>
                                    <svg className="position-absolute end-0 top-0" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#121316" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M3.0625 10.5H17.7887" stroke="#121316" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>:''                
                }
            </>
        );
    }
};

