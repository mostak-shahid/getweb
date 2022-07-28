import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import MainComponent from "../../Components/MainComponent/MainComponent";
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";
import Config from "../../Config.json";
import "./Career.scss";
const Career = (props) => {
    const [pageData,setPageData]=useState([])
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url = Config.API_BASE + "data-single/" + Config.CAREERS_ID;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
        //.then(setLoading(false));
    },[]);
    
    useEffect(() => {
        if (pageData.length !== 0) {
            setLoading(false);
        }
    }, [pageData]);
    
    return (

        loading
        ?<Loading cls="page-loader" />
        :<>          
            <SubPageBanner tagline={pageData?.meta?._mosacademy_page_banner_tagline} title={pageData?.meta?._mosacademy_page_banner_title} intro={pageData?.meta?._mosacademy_page_banner_intro} bgImg={pageData?.meta?._mosacademy_page_banner_image} btn={pageData?.meta?._mosacademy_page_banner_button} /> 
         
            {
                pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                    <MainComponent data={item} key={index} />                        
                ))
            }
        </>
    );
};

export default Career;
