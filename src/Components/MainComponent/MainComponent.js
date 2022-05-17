import React, { Component } from 'react';
import BlogUpdateComponent from "../../Components/BlogUpdate/BlogUpdateComponent";
import OurFocusIndustriesComponent from "../../Components/OurFocusIndustries/OurFocusIndustriesComponent";
import OurServicesComponent from "../../Components/OurServices/OurServicesComponent";
import PortfolioComponent from "../../Components/Portfolio/PortfolioComponent";
import ReadyToMoveComponent from "../../Components/ReadyToMove/ReadyToMoveComponent";
import TechnologiesComponent from "../../Components/Technologies/TechnologiesComponent";
import TestimonialsComponent from "../../Components/Testimonials/TestimonialsComponent";
import WhyChooseUsComponent from "../../Components/WhyChooseUs/WhyChooseUsComponent";
import ContactPageForm from '../ContactPageForm/ContactPageForm';
import "./MainComponent.scss";
export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        //console.log(props);
    }

    render() {
        const {_mosacademy_page_group_content_width = "container", _mosacademy_page_group_css='', _mosacademy_page_group_component_name} = this.props.data;
        return (
            <section className={['wrapper-section', 'secPadding', _mosacademy_page_group_css].join(' ')}>
                <div className={_mosacademy_page_group_content_width}>
                    {(_mosacademy_page_group_component_name === 'OurServicesComponent') && <OurServicesComponent data={this.props.data} />}
                    {(_mosacademy_page_group_component_name === 'WhyChooseUsComponent') && <WhyChooseUsComponent data={this.props.data} />}
                    {(_mosacademy_page_group_component_name === 'OurFocusIndustriesComponent') && <OurFocusIndustriesComponent data={this.props.data} />}
                    {(_mosacademy_page_group_component_name === 'TechnologiesComponent') && <TechnologiesComponent data={this.props.data} />}
                    {(_mosacademy_page_group_component_name === 'PortfolioComponent') && <PortfolioComponent data={this.props.data} />}
                    {(_mosacademy_page_group_component_name === 'TestimonialsComponent') && <TestimonialsComponent data={this.props.data} />}
                    {(_mosacademy_page_group_component_name === 'BlogUpdateComponent') && <BlogUpdateComponent data={this.props.data} />}
                    {(_mosacademy_page_group_component_name === 'ReadyToMoveComponent') && <ReadyToMoveComponent data={this.props.data} />}
                    {(_mosacademy_page_group_component_name === 'ContactPageForm') && <ContactPageForm data={this.props.data} />}
                </div>
            </section>
        )
    }
}
