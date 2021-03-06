import React from 'react';
import { NavLink } from "react-router-dom";
import goArrow from "../../../assets/images/goArrow-iocn.svg";
import './PortfolioUnit.scss';

const PortfolioUnit = (props) => {
    
    return (
        <div className="unit-item">
            <div className="overLay"></div>
            {
                props?.data?.image && 
                <img src={props?.data?.image} alt={props?.data?.title} />
            }
            
            <div className="afterHover">
                <div className="category">
                {
                        //console.log(item)
                        props?.data?.taxonomy?.project_tag && props?.data?.taxonomy?.project_tag.length &&
                        props?.data.taxonomy.project_tag.slice(0, 2).map((a, b) => (
                        <div className="name" key={b}>{a.name}</div>    
                        ))
                }
                </div>
                <NavLink to="" className="goArrow position-absolute bottom-50 start-50" >
                    <img src={goArrow} alt="go icon" />
                </NavLink>
                <NavLink to="" className="portTitle fs-6 fw-bold text-white position-absolute bottom-0 start-0 p-4 mb-0 text-decoration-none" dangerouslySetInnerHTML={{__html: props?.data?.title}}/>
            </div>
        </div>
    )
}

export default PortfolioUnit