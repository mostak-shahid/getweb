import React, { useEffect, useState } from 'react';
import Faq from "../../Components/Faq/Faq";
import MainComponent from '../../Components/MainComponent/MainComponent';
import OurAward from "../../Components/OurAward/OurAward";
import OurMission from "../../Components/OurMission/OurMission";
import OurValues from "../../Components/OurValues/OurValues";
import ReadyToMove from "../../Components/ReadyToMove/ReadyToMove";
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import Config from "../../Config.json";

const About = () => {    
    const [pageData,setPageData]=useState([])
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url = Config.API_BASE + "data-single/" + Config.ABOUT_ID;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
    },[]);
    useEffect(() => {
        if (pageData.length !== 0) {
            setLoading(false);
        }
        //console.log(pageData);
    }, [pageData]);
    return (
        
        <>
        {
            loading?
            <div className="textClrGreen">loading...</div>:            
            <>
            <SubPageBanner tagline={pageData?.meta?._mosacademy_page_group_tagline} boldTile={pageData?.meta?._mosacademy_page_group_title} title={pageData?.meta?._mosacademy_page_group_title} intro={pageData?.meta?._mosacademy_page_group_intro} bgImg={pageData?.meta?._mosacademy_page_group_image} />
            
            {
                pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                    <MainComponent data={item} key={index} />                        
                ))
            }
            <WhoWeAre />
            <OurMission />
            <OurValues />
            <OurAward />
            <Faq />
            <ReadyToMove />
            </>
        }        
        </>
    );
};

export default About;
