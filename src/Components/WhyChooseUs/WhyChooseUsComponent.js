import React, { Component } from "react";
import SecLineShape from '../../assets/images/secLineShape.svg';
import './WhyChooseUsComponent.scss';

//const WhyChooseUsComponent = ({data}) => {
export default class WhyChooseUsComponent extends Component { 
    state = {
        loading: true,
        whyChooseItems: null,
    };
    
    async componentDidMount() {
        const url = "http://api.getweb.localhost/wp-json/mos-getweb-api/v1/data-list/step/0/0/4";
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
        const {_mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = this.props.data;
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.whyChooseItems) {
            return <div>didn't get the Services</div>;
        }

        return (
            <section className='whyChooseUs secPadding bgClrDarkLight'>
                <div className='container'>
                    <div className='sectionHeader text-center mb-5'>
                        <span className='secTagLine fs-6 fw-bold textClrGreen mb-3 d-block' dangerouslySetInnerHTML = {{__html: _mosacademy_page_group_sub_titles[0]}}></span>
                        <div className='secTitle fw-normal fs-48 text-white mb-3' dangerouslySetInnerHTML = {{__html: _mosacademy_page_group_title_text}}></div>                    
                        <div className='secIntro textClrGray fs-6 fw-normal mb-2'>
                            <div className='mb-0' dangerouslySetInnerHTML = {{__html: _mosacademy_page_group_title_description}}></div>
                        </div>
                        <div className='lineShape'>
                            <img src={SecLineShape} alt='lineShape' />
                        </div>
                    </div>

                    <div className='row'>

                        {/* whyChooseItems init */}

                        {
                            this.state.whyChooseItems.map((item, index) => (
                                
                                <div className='col-xl-3 col-lg-4 col-sm-6' key={item.id}>
                                    <div className='whyChooseItem p-2'>
                                        <p className='mb-4 ms-2 ms-xl-3'>
                                            <span className='itemsNumber textClrGrayDeep fs-48 fwBlack'>
                                                {'0' + ++index + '.'}
                                            </span>
                                        </p>
                                        <div className='d-flex align-items-start gap-3'>
                                            <span className='lineShape mb-0'>
                                                <svg className='' width="1" height="15" viewBox="0 0 1 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="1" height="15" fill="#00FFA3" />
                                                </svg>
                                            </span>
                                            <div className='itemInfo'>
                                                <h3 className='itemTitle fs-18 fwSemiBold text-white mb-3'>
                                                    {item.title}
                                                </h3>
                                                <div className='itemIntro fs-6 textClrGray fw-normal'>
                                                    <p className='mb-0'>
                                                        {item.excerpt}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
};

