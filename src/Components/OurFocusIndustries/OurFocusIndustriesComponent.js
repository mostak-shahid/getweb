import { Component } from "react";
import Config from '../../Config.json';
import './OurFocusIndustriesComponent.scss';


//const OurFocusIndustriesComponent = () => {
export default class OurFocusIndustriesComponent extends Component { 
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            loading: true,
            industryDataOne: null,
            industryDataTwo: null,
        };
    }
    
    
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
    
    render() {
        //const {_mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = this.props.data;
        const {industryDataOne} = this.state;
        if (this.state.loading) {
            return <div className="textClrGreen text-center">loading...</div>;
        }

        if (!this.state.industryDataOne) {
            return <div>Didn't get data from API</div>;
        }
        const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = this.props.data;
        const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-md-last':'';
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
                            <div className="secIntro" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_description}}></div>
                        }
                        
                    </div>
                </div>
                <div className={[widthClass].join(' ')}>
                    <div className="part-two">                 
                        <div className='industriesWrapper'>
                            <div className='row position-relative g-0'>
                                {
                                    (industryDataOne.length) && 
                                    industryDataOne.map((item, index) => (
                                        <div className='col-4 col-md-3 col-xl-2 industriesItem text-end' key={item.id}>
                                            <div className='icon px-3 py-3 text-center'>
                                                {(item.featured_image.full) && 
                                                <div className="wrapper-img"><img className="d-inline-block mb-4" src={item.featured_image.full} alt={item.title} /></div>                                                
                                                }
                                                <div className='iITitle fs-14 fw-bold text-white' dangerouslySetInnerHTML = {{__html: item.title}}></div>
                                            </div>
                                        </div>                             
                                    ))
                                }
                                <div className="industries-border industries-border-1"></div>
                                <div className="industries-border industries-border-2"></div>
                                <div className="industries-border industries-border-3"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
