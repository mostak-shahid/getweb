import React from 'react';
import { NavLink } from "react-router-dom";
import goArrow from "../../../assets/images/goArrow-iocn.svg";
import LazyImage from '../../../Components/LazyImage';
import './PortfolioUnit.scss';

const PortfolioUnit = (props) => {
    
    return (
        <div className="unit-item">
            <div className="overLay"></div>
            {
                props.imageSize === 'portfolio_home'?
                <LazyImage src={props?.data?.featured_image['portfolio-home']} alt={props?.data?.title} width="613px" height="460px" /> :                
                <LazyImage src={props?.data?.image} alt={props?.data?.title} width={[props?.data?.featured_image?.image_attributes[1], 'px'].join('')} height={[props?.data?.featured_image?.image_attributes[2], 'px'].join('')} />                
            }
            <div className="afterHover">
                <div className="category">
                </div>
                <NavLink to="" className="goArrow position-absolute bottom-50 start-50" >
                    <img src={goArrow} alt="go icon" width="42px" height="42px" />
                </NavLink>
                <NavLink to="" className="portTitle fs-6 fw-bold text-white position-absolute bottom-0 start-0 p-4 mb-0 text-decoration-none" dangerouslySetInnerHTML={{__html: props?.data?.title}}/>
            </div>
        </div>
    )
}

export default PortfolioUnit