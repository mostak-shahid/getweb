import React, { useEffect, useState } from "react";
import CareerBg from "../../assets/images/career-bg.png";
import MainComponent from "../../Components/MainComponent/MainComponent";
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";
import Config from "../../Config.json";
import "./Career.scss";
const Career = () => {
    const [pageData,setPageData]=useState([])
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url = Config.API_BASE + "data-single/" + Config.CAREERS_ID;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
        //.then(setLoading(false))
    },[]);
    
    useEffect(() => {
        if (pageData.length !== 0) {
            setLoading(false);
        }
    }, [pageData]);

    const tagline = "Careers";
    const boldTile = "Careers";
    const title = "with Getweb";
    const intro = "Our hiring process has several steps that may differ depending on the team. We pick our new team members carefully with the company head closely involved.";
    const bgImg = CareerBg;
    return (

        loading
        ?<div className="textClrGreen">loading...</div>
        :<>            
            <SubPageBanner tagline={pageData?.meta?._mosacademy_page_banner_tagline} title={pageData?.meta?._mosacademy_page_banner_title} intro={pageData?.meta?._mosacademy_page_banner_intro} bgImg={pageData?.meta?._mosacademy_page_banner_image}  btn={pageData?.meta?._mosacademy_page_group_button} /> 
         
            {
                pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                    <MainComponent data={item} key={index} />                        
                ))
            }
        </>
    );
};

export default Career;
