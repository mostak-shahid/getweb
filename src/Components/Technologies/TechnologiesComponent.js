import { Component } from "react";
import Config from '../../Config.json';
import TechnologiesBar from "./TechnologiesBar/TechnologiesBar";
import "./TechnologiesComponent.scss";





//const TechnologiesComponent = () => {
export default class TechnologiesComponent extends Component { 
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            loading: true,
            taxonomiesData: null,
        };
    }    
    async componentDidMount() {
        const url = Config.API_BASE + "data-taxonomies/technology_catagory";
        const response = await fetch(url);
        const taxonomiesResponse = await response.json();
        //console.log(taxonomiesResponse);
        this.setState({ 
            taxonomiesData: taxonomiesResponse,
            loading: false,
        });
        //console.log(this.state.servicesItems);
    }
    render() {
        if (this.state.loading) {
            return <div className="textClrGreen text-center d-none">loading...</div>;
        }
        if (!this.state.taxonomiesData) {
            return <div>Didn't get data from API</div>;
        }
        const {taxonomiesData} = this.state;
        const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = this.props.data;
        const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-lg-last':'';
        const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-lg-6 mb-5 mb-lg-0':'col-sm-12';
        return (                
            <div className="row">
                <div className={[widthClass, orderClass].join(' ')}>
                    <div className="part-one">                        
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
                        <div className="singleTechnologyBar mb-4">
                            {
                                (taxonomiesData.length) && 
                                    taxonomiesData.map((item, index) => ( 
                                        (item.count!=="0") && <TechnologiesBar data={item} key={index} />                                
                                    )
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        );
    }
};
