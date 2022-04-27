import React, { Component } from "react";
import SecLineShape from "../../assets/images/secLineShape.svg";
import MultipleItems from '../TestimonialsSlider/TestimonialsSlider';

//const TestimonialsComponent = () => {
export default class TestimonialsComponent extends Component { 

    constructor(props) {
        super(props);
        //console.log(props);
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="lineShape text-center mb-5">
                        <img src={SecLineShape} alt="lineShape" />
                    </div>
                    <MultipleItems data={this.props.data} />
                </div>
            </>
        );
    }
};


