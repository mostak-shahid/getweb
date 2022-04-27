import React, { Component } from "react";
import SecLineShape from '../../assets/images/secLineShape.svg';
import './OurFocusIndustriesComponent.scss';


//const OurFocusIndustriesComponent = () => {
export default class OurFocusIndustriesComponent extends Component { 
    state = {
        loading: true,
        industryDataOne: null,
        industryDataTwo: null,
    };
    
    async componentDidMount() {
        const url1 = "http://api.getweb.localhost/wp-json/mos-getweb-api/v1/data-list/industry/0/0/6";
        const response1 = await fetch(url1);
        const data1 = await response1.json();
        
        const url2 = "http://api.getweb.localhost/wp-json/mos-getweb-api/v1/data-list/industry/0/6/6";
        const response2 = await fetch(url2);
        const data2 = await response2.json();
        this.setState({ 
            industryDataOne: data1, 
            industryDataTwo: data2, 
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
            return <div>didn't get the Industries</div>;
        }
        return (            
            <div className='container'>
                <div className='lineShape text-center mb-5'>
                    <img src={SecLineShape} alt='lineShape' />
                </div>

                <div className='industriesWrapper'>
                    <div className='topWrap'>
                        {
                            (industryDataOne.length)?
                            industryDataOne.map((item, index) => (
                                <div className='industriesItem px-3 py-2 text-center' key={item.id}>
                                    <div className='icon mb-4'>
                                        {(item.featured_image.full)?<img src={item.featured_image.full} alt={item.title} />:''}
                                    </div>
                                    <span className='iITitle fs-14 fw-bold text-white' dangerouslySetInnerHTML = {{__html: item.title}}></span>
                                </div>                             
                            )):
                            ''
                        }
                    </div>
                    <div className='bottomWrap'>
                        {
                            (industryDataTwo.length)?
                            industryDataTwo.map((item, index) => (
                                <div className='industriesItem px-3 py-2 text-center' key={item.id}>
                                    <div className='icon mb-4'>
                                        {(item.featured_image.full)?<img src={item.featured_image.full} alt={item.title} />:''}
                                    </div>
                                    <span className='iITitle fs-14 fw-bold text-white' dangerouslySetInnerHTML = {{__html: item.title}}></span>
                                </div>                             
                            )):
                            ''
                        }
                    </div>
                </div>

            </div>
        );
    }
}
