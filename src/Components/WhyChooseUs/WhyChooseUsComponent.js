import React, { Component } from "react";
import lineShape from "../../assets/images/secLineShape.svg";
import Config from "../../Config.json";
import MediaBlock from "../MediaBlock/MediaBlock";
import './WhyChooseUsComponent.scss';
//const WhyChooseUsComponent = ({data}) => {
export default class WhyChooseUsComponent extends Component { 
    state = {
        loading: true,
        whyChooseItems: null,
    };
    
    async componentDidMount() {
        //const url = Config.API_BASE + "data-list/step/0/0/4";
        const url = Config.API_BASE + "data-list/block/20/0/4";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            whyChooseItems: data, 
            loading: false,
        });
        //console.log(this.state.servicesItems);
    }

    constructor(props) {
        super(props);
        //console.log(props);
    }
    
    render() {
        const {whyChooseItems = []} = this.state
        if (this.state.loading) {
            return <div className="textClrGreen text-center">loading...</div>;
        }

        if (!this.state.whyChooseItems) {
            return <div>Didn't get data from API</div>;
        }
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
                            <img src={lineShape} alt="lineShape" />
                        </div>
                    </div>
                </div>
                <div className={[widthClass].join(' ')}>
                    <div className="part-two">                 
                        {/* servicesItems init */}                    
                        {
                            whyChooseItems.length &&
                            <div className="row">
                                {whyChooseItems.map((item, index) => (
                                    <div className='col-xl-3 col-sm-6' key={index}>
                                        <MediaBlock data={item}  cls="whyChooseItem p-2"/>
                                    </div>
                                ))}
                            </div>
                        }

                    </div>
                </div>
            </div>            
        );
    }
};

