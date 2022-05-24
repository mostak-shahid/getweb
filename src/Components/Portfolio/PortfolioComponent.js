import React, { Component } from "react";
import SecLineShape from "../../assets/images/secLineShape.svg";
import MultipleRows from "../slider/PortfolioSlider";

//const PortfolioComponent = () => {
export default class PortfolioComponent extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="lineShape text-center mb-5">
                        <img src={SecLineShape} alt="lineShape" />
                    </div>
                </div>
                <MultipleRows data={this.props.data} />
            </>
        );
    }
};
