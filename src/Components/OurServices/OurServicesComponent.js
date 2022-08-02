import { Component } from "react";
import Config from '../../Config.json';
import MediaBlock from "../MediaBlock/MediaBlock";
import './OurServicesComponent.scss';
//const OurServicesComponent = ({data}) => {
export default class OurServicesComponent extends Component {  
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            loading: true,
            serviceData: null,
        };
    }    
    async componentDidMount() {        
        //const url = Config.API_BASE + "data-list/service/0/0/9";
        const url = Config.API_BASE + "data-list/block/19/0/9";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            servicesItems: data, 
            loading: false,
        });
        //console.log(this.state.servicesItems);
    }    
    render() {
        //const {_mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = this.props.data;
        const {servicesItems = []} = this.state;
        //const data = this.props;
        //console.log(this.props);
        //const {servicesItems} = this.state;
        //console.log("New", servicesItems);
        if (this.state.loading) {
            return <div className="textClrGreen text-center">loading...</div>;
        }

        if (!this.state.servicesItems) {
            return <div>Didn't get data from API</div>;
        }
        const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = this.props.data;
        const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-lg-last':'';
        const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-lg-6':'col-lg-12';
        return (
            <div className="row">
                <div className={[widthClass, orderClass].join(' ')}>
                    <div className="part-one mb-4 mb-lg-0">                        
                        {
                            _mosacademy_page_group_sub_titles[0] &&
                            <div className="secTagLine" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_sub_titles[0]}}></div>
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
                        {/* servicesItems init */}                    
                        {
                            servicesItems.length &&
                            <div className="row">
                                {servicesItems.map((item, index) => (
                                    <div className='col-xl-4 col-lg-6 mb-4' key={index}>
                                        <MediaBlock data={item} gradient={true} withRadius={true} cls="p-30 h-100 d-flex flex-column justify-content-between"/>
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

//export default OurServicesComponent;