import React, { useEffect, useState } from 'react';
import MainComponent from '../../Components/MainComponent/MainComponent';
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";
import Config from "../../Config.json";

const About = (props) => {    
    const [pageData,setPageData]=useState([])
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url = Config.API_BASE + "data-single/" + Config.ABOUT_ID;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
        //.then(setLoading(false))
    },[]);
    
    useEffect(() => {
        if (pageData.length !== 0) {
            setLoading(false);
        }
    }, [pageData]);
    
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

export default About;
