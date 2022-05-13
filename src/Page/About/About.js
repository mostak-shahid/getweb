import React, { useEffect, useState } from 'react';
import AboutBannerBg from "../../assets/images/about-banner-bg.png";
import Faq from "../../Components/Faq/Faq";
import OurAward from "../../Components/OurAward/OurAward";
import OurMission from "../../Components/OurMission/OurMission";
import OurValues from "../../Components/OurValues/OurValues";
import ReadyToMove from "../../Components/ReadyToMove/ReadyToMove";
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import Config from "../../Config.json";

const About = () => {    
    const [pageData,setPageData]=useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        const url = Config.API_BASE + "data-single/" + Config.HOME_ID;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
    },[]);
    useEffect(() => {
        if (pageData.length !== 0) {
          setIsLoading(false);
        }
        console.log(pageData);
    }, [pageData]);

    const tagline = "About Us";
    const boldTile = "Our team";
    const title = "consists of highly motivated and skilled specialists";
    const intro = "Our team consists of highly motivated and skilled specialists who know how to deal with any issue that you may come across.";
    const bgImg = AboutBannerBg;
    return (
        <div>
            <SubPageBanner tagline={tagline} boldTile={boldTile} title={title} intro={intro} bgImg={bgImg} />
            <WhoWeAre />
            <OurMission />
            <OurValues />
            <OurAward />
            <Faq />
            <ReadyToMove />
        </div>
    );
};

export default About;
