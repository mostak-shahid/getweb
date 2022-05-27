import React, { Component } from "react";
import SecLineShape from "../../assets/images/secLineShape.svg";
import MultipleRows from "../slider/PortfolioSlider";

//const PortfolioComponent = () => {
export default class PortfolioComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
        //console.log(props);
    }
    render() {
        if (this.state.loading) {
            return <div className="textClrGreen text-center">loading...</div>;
        }
        // if (!this.state.taxonomiesData) {
        //     return <div>Didn't get data from API</div>;
        // }
        // const {taxonomiesData} = this.state;
        const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = this.props.data;
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
                        <MultipleRows data={this.props.data} />
                    </div>
                </div>
            </div>
        );
    }
};
