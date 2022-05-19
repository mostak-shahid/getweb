import React from "react";
import { Link } from "react-router-dom";
import SecLineShape from "../../assets/images/secLineShape.svg";
import MultipleItems from '../BlogSlider/BlogSlider';
import './BlogUpdateComponent.scss';

const BlogUpdateComponent = (props) => {
    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description='', _mosacademy_page_banner_button} = props.data;
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
                    <div className="lineShape">
                        <img src={SecLineShape} alt="lineShape" />
                    </div>
                </div>
            </div>
            <div className={[widthClass].join(' ')}>
                <div className="part-two">
                    <MultipleItems />
                    {
                        _mosacademy_page_banner_button?.url &&
                        <div className="allInsightBtn text-center mt-5">
                            <Link to={_mosacademy_page_banner_button?.url} className="btn fs-15 fwSemiBold textClrGrayDark text-decoration-none d-inline-flex align-items-center gap-2 justify-content-center">
                                {_mosacademy_page_banner_button?.title}
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogUpdateComponent;
