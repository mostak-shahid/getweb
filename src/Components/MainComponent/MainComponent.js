import PortfolioGroup from "../../Page/Portfolio/PortfolioGroup";
import ContactSection from "../ContactSection/ContactSection";
import Faq from "../Faq/Faq";
import JobOpening from "../JobOpening/JobOpening";
import OurAward from "../OurAward/OurAward";
import OurFocusIndustriesComponent from "../OurFocusIndustries/OurFocusIndustriesComponent";
import PortfolioComponent from "../Portfolio/PortfolioComponent";
import ServicesForm from "../ServicesForm/ServicesForm";
import GroupTechonologiesbar from "../Technologies/GroupTechonologiesbar";
import SingleTechonologyBar from "../Technologies/SingleTechonologyBar";
import WhoWeAre from "../WhoWeAre/WhoWeAre";
import "./MainComponent.scss";
const MainComponent = (props) => {

    const {_mosacademy_page_group_content_width = "container-lg", _mosacademy_page_group_css='', _mosacademy_page_group_component_name, group_slug, group_id} = props.data;
    return (
        <section id={group_id} className={['wrapper-section', 'secPadding', group_slug, _mosacademy_page_group_css].join(' ')}>
            <div className={_mosacademy_page_group_content_width}>
                {(_mosacademy_page_group_component_name === 'OurFocusIndustriesComponent') && <OurFocusIndustriesComponent data={props.data} />}
                {(_mosacademy_page_group_component_name === 'PortfolioComponent') && <PortfolioComponent data={props.data} />}
                {(_mosacademy_page_group_component_name === 'ContactSection') && <ContactSection data={props.data} optionData={props.optionData} />}
                {(_mosacademy_page_group_component_name === 'WhoWeAre') && <WhoWeAre data={props.data} />}
                {(_mosacademy_page_group_component_name === 'OurAward') && <OurAward data={props.data} />}
                {(_mosacademy_page_group_component_name === 'Faq') && <Faq data={props.data} />}
                {(_mosacademy_page_group_component_name === 'JobOpening') && <JobOpening data={props.data} />}
                {(_mosacademy_page_group_component_name === 'PortfolioGroup') && <PortfolioGroup data={props.data} />}
                {(_mosacademy_page_group_component_name === 'ServicesForm') && <ServicesForm data={props.data} />}
                {(_mosacademy_page_group_component_name === 'SingleTechonologyBar') && <SingleTechonologyBar data={props.data} />}
                {(_mosacademy_page_group_component_name === 'GroupTechonologiesbar') && <GroupTechonologiesbar data={props.data} />}
            </div>
        </section>
    )
}

export default MainComponent