import { Component } from "react";
import TechnologiesBar from "./TechnologiesBar/TechnologiesBar";
import "./TechnologiesComponent.scss";





//const HomeTechnologiesComponent = () => {
export default class HomeTechnologiesComponent extends Component { 
    constructor(props) {
        super(props);
        //console.log(props);        
        this.state = {
            loading: false,
            taxonomiesData: [
                {
                    "term_id": "6",
                    "taxonomy": "technology_catagory",
                    "name": "Product Design",
                    "slug": "product-design",
                    "description": "",
                    "parent": "0",
                    "count": "6",
                    "term_group": "0"
                },
                {
                    "term_id": "7",
                    "taxonomy": "technology_catagory",
                    "name": "Frontend Development",
                    "slug": "frontend-development",
                    "description": "",
                    "parent": "0",
                    "count": "9",
                    "term_group": "0"
                },
                {
                    "term_id": "8",
                    "taxonomy": "technology_catagory",
                    "name": "Backend Development",
                    "slug": "backend-development",
                    "description": "",
                    "parent": "0",
                    "count": "6",
                    "term_group": "0"
                },
                {
                    "term_id": "9",
                    "taxonomy": "technology_catagory",
                    "name": "Mobile App Development",
                    "slug": "mobile-app-development",
                    "description": "",
                    "parent": "0",
                    "count": "6",
                    "term_group": "0"
                },
                {
                    "term_id": "10",
                    "taxonomy": "technology_catagory",
                    "name": "CMS Development",
                    "slug": "cms-development",
                    "description": "",
                    "parent": "0",
                    "count": "5",
                    "term_group": "0"
                },
                {
                    "term_id": "11",
                    "taxonomy": "technology_catagory",
                    "name": "Database",
                    "slug": "database",
                    "description": "",
                    "parent": "0",
                    "count": "5",
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
            return <div className="textClrGreen text-center">loading...</div>;
        }
        if (!this.state.taxonomiesData) {
            return <div>Didn't get data from API</div>;
        }
        const {taxonomiesData} = this.state;
        const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = this.props.data;
        const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-md-last':'';
        const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-md-6':'col-md-12';
        return (                
            <div className="row">
                <div className={[widthClass, orderClass].join(' ')}>
                    <div className="part-one mb-4 mb-md-0">                        
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
