import PortfolioGroup from '../../Page/Portfolio/PortfolioGroup';
import BlogUpdateComponent from "../BlogUpdate/BlogUpdateComponent";
import CompanyBenefits from "../CompanyBenefits/CompanyBenefits";
import ContactPageForm from '../ContactPageForm/ContactPageForm';
import Faq from "../Faq/Faq";
import JobOpening from '../JobOpening/JobOpening';
import OurAward from "../OurAward/OurAward";
import OurFocusIndustriesComponent from "../OurFocusIndustries/OurFocusIndustriesComponent";
import OurMission from '../OurMission/OurMission';
import OurServicesComponent from "../OurServices/OurServicesComponent";
import OurValues from '../OurValues/OurValues';
import PortfolioComponent from "../Portfolio/PortfolioComponent";
import ReadyToMoveComponent from "../ReadyToMove/ReadyToMoveComponent";
import FrontendTechnologies from "../Technologies/FrontendTechnologies";
import TechnologiesComponent from "../Technologies/TechnologiesComponent";
import TestimonialsComponent from "../Testimonials/TestimonialsComponent";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import WhyChooseUsComponent from "../WhyChooseUs/WhyChooseUsComponent";
import "./MainComponent.scss";
/*
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
                    {(_mosacademy_page_group_component_name === 'WhoWeAre') && <WhoWeAre data={this.props.data} />}
                </div>
            </section>
        )
    }
}
*/


const MainComponent = (props) => {

    const {_mosacademy_page_group_content_width = "container", _mosacademy_page_group_css='', _mosacademy_page_group_component_name, group_slug} = props.data;
    return (
        <section className={['wrapper-section', 'secPadding', group_slug, _mosacademy_page_group_css].join(' ')}>
            {/* {console.log(_mosacademy_page_group_component_name)} */}
            <div className={_mosacademy_page_group_content_width}>
                {(_mosacademy_page_group_component_name === 'OurServicesComponent') && <OurServicesComponent data={props.data} />}
                {(_mosacademy_page_group_component_name === 'WhyChooseUsComponent') && <WhyChooseUsComponent data={props.data} />}
                {(_mosacademy_page_group_component_name === 'OurFocusIndustriesComponent') && <OurFocusIndustriesComponent data={props.data} />}
                {(_mosacademy_page_group_component_name === 'TechnologiesComponent') && <TechnologiesComponent data={props.data} />}
                {(_mosacademy_page_group_component_name === 'PortfolioComponent') && <PortfolioComponent data={props.data} />}
                {(_mosacademy_page_group_component_name === 'TestimonialsComponent') && <TestimonialsComponent data={props.data} />}
                {(_mosacademy_page_group_component_name === 'BlogUpdateComponent') && <BlogUpdateComponent data={props.data} />}
                {(_mosacademy_page_group_component_name === 'ReadyToMoveComponent') && <ReadyToMoveComponent data={props.data} />}
                {(_mosacademy_page_group_component_name === 'ContactPageForm') && <ContactPageForm data={props.data} />}
                {(_mosacademy_page_group_component_name === 'WhoWeAre') && <WhoWeAre data={props.data} />}
                {(_mosacademy_page_group_component_name === 'OurMission') && <OurMission data={props.data} />}
                {(_mosacademy_page_group_component_name === 'OurValues') && <OurValues data={props.data} />}
                {(_mosacademy_page_group_component_name === 'OurAward') && <OurAward data={props.data} />}
                {(_mosacademy_page_group_component_name === 'Faq') && <Faq data={props.data} />}
                {(_mosacademy_page_group_component_name === 'CompanyBenefits') && <CompanyBenefits data={props.data} />}
                {(_mosacademy_page_group_component_name === 'JobOpening') && <JobOpening data={props.data} />}
                {(_mosacademy_page_group_component_name === 'PortfolioGroup') && <PortfolioGroup data={props.data} />}
                {(_mosacademy_page_group_component_name === 'FrontendTechnologies') && <FrontendTechnologies data={props.data} />}
            </div>
        </section>
    )
}

export default MainComponent