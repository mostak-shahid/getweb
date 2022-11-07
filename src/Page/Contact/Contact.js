import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import Section from "../../Components/Section/Section";
import Config from "../../Config.json";
import "./Contact.scss";

const Contact = () => {
    const location = useLocation();
    console.log(location);
    const [pageData,setPageData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url=Config.API_BASE + "data-single/" + Config.CONTACT_ID;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
        .then(setLoading(false))
    },[])
    //console.log(pageData?.meta?._mosacademy_page_group_details_group);
    //console.log(loading);
    return (
        <>
        {
            loading?
            <Loading cls="page-loader" />:
            pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                // <MainComponent data={item} key={index} />    
                <Section data={item} key={index} /> 
                //<div key={index}>{item._mosacademy_page_group_title_text}</div>                    
            ))
        }        
        </>
    );
};

export default Contact;
