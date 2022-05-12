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
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                </Link>
                            </div>
                        </div>
                    </div>:''                
                }
            </>
        );
    }
};

