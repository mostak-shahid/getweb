import React, { Component } from "react";
import SecLineShape from '../../assets/images/secLineShape.svg';
import Config from '../../Config.json';
import './OurServicesComponent.scss';
//const OurServicesComponent = ({data}) => {
export default class OurServicesComponent extends Component {  
    state = {
        loading: true,
        serviceData: null,
    };
    
    async componentDidMount() {        
        const url = Config.API_BASE + "data-list/service/0/0/9";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            servicesItems: data, 
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
        const {servicesItems = []} = this.state;
        //const data = this.props;
        //console.log(this.props);
        //const {servicesItems} = this.state;
        //console.log("New", servicesItems);
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.servicesItems) {
            return <div>Didn't get data from API</div>;
        }
        return (
            <div className="container">
                <div className='lineShape text-center mb-5'>
                    <img src={SecLineShape} alt='lineShape' />
                </div>
                <div className='row'>                    
                    {/* servicesItems init */}                    
                    {
                        (servicesItems.length)?
                        servicesItems.map((item) => (
                            <div className='col-xl-4 col-md-6 mb-4' key={item.id + '-' + Math.random()}>
                                <div className='servicesItems p-4 isRadius16 h-100 d-flex flex-column justify-content-between'>
                                    <div className='serHeader'>
                                        <div className='servicesIcon mb-4'>
                                            {(item.featured_image.full)?<img src={item.featured_image.full} alt='icon' />:''}
                                        </div>
                                        <h3 className='serTitle fw-bold fs-5 mb-4'>
                                            <a href='#' className='text-white text-decoration-none' dangerouslySetInnerHTML={{__html: item.title}}></a>
                                        </h3>
                                        <div className='serviceIntro fs-6 fw-normal textClrGray mb-4'>
                                            <div className='mb-0' dangerouslySetInnerHTML={{__html:item.content}}></div>
                                        </div>
                                    </div>
                                    <div className='readMoreBtn'>
                                        <a href='#' className='textClrGrayDark fs-14 fwSemiBold text-decoration-none d-flex align-items-center'>
                                            <span>
                                                Read more
                                            </span>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.05371 15.77L12.2154 10.6083C12.825 9.99873 12.825 9.00123 12.2154 8.39165L7.05371 3.22998" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )):''
                    }
                </div>
            </div>
        );
    }
};

//export default OurServicesComponent;