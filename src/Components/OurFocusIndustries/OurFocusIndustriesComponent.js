import React, { Component } from "react";
import SecLineShape from '../../assets/images/secLineShape.svg';
import Config from '../../Config.json';
import './OurFocusIndustriesComponent.scss';


//const OurFocusIndustriesComponent = () => {
export default class OurFocusIndustriesComponent extends Component { 
    state = {
        loading: true,
        industryDataOne: null,
        industryDataTwo: null,
    };
    
    async componentDidMount() {
        const url1 = Config.API_BASE + "data-list/industry/0/0/12";
        const response1 = await fetch(url1);
        const data1 = await response1.json();
        
        // const url2 = Config.API_BASE + "data-list/industry/0/6/6";
        // const response2 = await fetch(url2);
        // const data2 = await response2.json();
        this.setState({ 
            industryDataOne: data1, 
            //industryDataTwo: data2, 
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
        const {industryDataOne, industryDataTwo} = this.state;
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.industryDataOne) {
            return <div>Didn't get data from API</div>;
        }
        return (            
            <div className='container'>
                <div className='lineShape text-center mb-5'>
                    <img src={SecLineShape} alt='lineShape' />
                </div>

                <div className='industriesWrapper'>
                    <div className='row position-relative g-0'>
                        {
                            (industryDataOne.length)?
                            industryDataOne.map((item, index) => (
                                <div className='col-4 col-md-3 col-xl-2 industriesItem text-end' key={item.id}>
                                    <div className='icon px-3 py-3 text-center'>
                                        {(item.featured_image.full)?<img className="d-inline-block mb-4" src={item.featured_image.full} alt={item.title} />:''}
                                        <div className='iITitle fs-14 fw-bold text-white' dangerouslySetInnerHTML = {{__html: item.title}}></div>
                                    </div>
                                </div>                             
                            )):
                            ''
                        }
                        <div className="industries-border industries-border-1"></div>
                        <div className="industries-border industries-border-2"></div>
                        <div className="industries-border industries-border-3"></div>
                    </div>
                    {/* <div className='bottomWrap'>
                        {
                            (industryDataTwo.length)?
                            industryDataTwo.map((item, index) => (
                                <div className='industriesItem px-3 py-3 text-center' key={item.id}>
                                    <div className='icon mb-4'>
                                        {(item.featured_image.full)?<img src={item.featured_image.full} alt={item.title} />:''}
                                    </div>
                                    <span className='iITitle fs-14 fw-bold text-white' dangerouslySetInnerHTML = {{__html: item.title}}></span>
                                </div>                             
                            )):
                            ''
                        }
                    </div> */}
                </div>

            </div>
        );
    }
}
