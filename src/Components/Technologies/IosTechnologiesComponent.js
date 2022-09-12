import { Component } from "react";
import TechnologiesBar from "./TechnologiesBar/TechnologiesBar";
import "./TechnologiesComponent.scss";





//const IosTechnologiesComponent = () => {
export default class IosTechnologiesComponent extends Component { 
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            loading: false,
            taxonomiesData: [
                {
                    "term_id": "93",
                    "taxonomy": "technology_catagory",
                    "name": "iOS Technologies",
                    "slug": "ios-technologies",
                    "description": "",
                    "parent": "0",
                    "count": "5",
                    "term_group": "0"
                },
                {
                    "term_id": "94",
                    "taxonomy": "technology_catagory",
                    "name": "UI and UX Tools",
                    "slug": "ui-and-ux-tools",
                    "description": "",
                    "parent": "0",
                    "count": "6",
                    "term_group": "0"
                },
                {
                    "term_id": "95",
                    "taxonomy": "technology_catagory",
                    "name": "Backend and Database",
                    "slug": "backend-and-database",
                    "description": "",
                    "parent": "0",
                    "count": "9",
                    "term_group": "0"
                },
                {
                    "term_id": "96",
                    "taxonomy": "technology_catagory",
                    "name": "Programming Languages",
                    "slug": "programming-languages",
                    "description": "",
                    "parent": "0",
                    "count": "9",
                    "term_group": "0"
                }
            ],
        };
    }    
    /*async componentDidMount() {
        const url = Config.API_BASE + "data-taxonomies/technology_catagory";
        const response = await fetch(url);
        const taxonomiesResponse = await response.json();
        //console.log(taxonomiesResponse);
        this.setState({ 
            taxonomiesData: taxonomiesResponse,
            loading: false,
        });
        //console.log(this.state.servicesItems);
    }*/
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
                        <div className="singleTechnologyBar">
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
