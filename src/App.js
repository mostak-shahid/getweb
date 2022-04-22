import "bootstrap/dist/css/bootstrap.min.css";
import BannerComponents from "./Components/Banner/BannerComponents";
import BlogUpdateComponent from "./Components/BlogUpdate/BlogUpdateComponent";
import FooterComponent from "./Components/Footer/FooterComponent";
import "./Components/Header/header.scss";
import OurFocusIndustriesComponent from "./Components/OurFocusIndustries/OurFocusIndustriesComponent";
import OurServicesComponent from "./Components/OurServices/OurServicesComponent";
import PortfolioComponent from "./Components/Portfolio/PortfolioComponent";
import ReadyToMoveComponent from "./Components/ReadyToMove/ReadyToMoveComponent";
import TechnologiesComponent from "./Components/Technologies/TechnologiesComponent";
import TestimonialsComponent from "./Components/Testimonials/TestimonialsComponent";
import WhyChooseUsComponent from "./Components/WhyChooseUs/WhyChooseUsComponent";
import "./index.scss";
import Header from "./Page/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <BannerComponents />
            <OurServicesComponent />
            <WhyChooseUsComponent />
            <OurFocusIndustriesComponent />
            <TechnologiesComponent />
            <PortfolioComponent />
            <TestimonialsComponent />
            <BlogUpdateComponent />
            <ReadyToMoveComponent />
            <FooterComponent />
        </div>
    );
}

export default App;
