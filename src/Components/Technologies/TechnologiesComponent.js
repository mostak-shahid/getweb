import React, { Component } from "react";
import SecLineShape from "../../assets/images/secLineShape.svg";
import TechnologiesBar from "./TechnologiesBar/TechnologiesBar";
import "./TechnologiesComponent.scss";







//const TechnologiesComponent = () => {
export default class TechnologiesComponent extends Component { 
    state = {
        loading: true,
        taxonomiesData: null,
    };
    
    async componentDidMount() {

        const url = "http://api.getweb.localhost/wp-json/mos-getweb-api/v1/data-taxonomies/technology_catagory";
        const response = await fetch(url);
        const taxonomiesResponse = await response.json();
        //console.log(taxonomiesResponse);

        this.setState({ 
            taxonomiesData: taxonomiesResponse,
            loading: false,
        });
        //console.log(this.state.servicesItems);
    }

    constructor(props) {
        super(props);
        //console.log(props);
    }
    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        if (!this.state.taxonomiesData) {
            return <div>Didn't get data from API</div>;
        }
        const {taxonomiesData} = this.state;
        return (
            <div className="container">
                <div className="lineShape text-center mb-5">
                    <img src={SecLineShape} alt="lineShape" />
                </div>
                <div className="singleTechnologyBar">
                    {
                        (taxonomiesData.length)?
                            taxonomiesData.map((item, index) => ( 
                                (item.count!="0")?
                                <TechnologiesBar data={item} key={item.term_id} />:''
                                
                            )
                        ):''
                    }
                </div>
            </div>
        );
    }
};
