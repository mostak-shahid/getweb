import React, { useEffect, useState } from "react";
import FormApi from "../../Components/Form/FormApi";
import FormValidation from "../../Components/Form/FormValidation";
import MainComponent from "../../Components/MainComponent/MainComponent";
import Config from "../../Config.json";
import "./Contact.scss";

const Contact = () => {
    const [pageData,setPageData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url=Config.API_BASE + "data-single/" + Config.CONTACT_ID;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
        .then(setLoading(false))
    })
    //console.log(pageData?.meta?._mosacademy_page_group_details_group);
    //console.log(loading);
    return (
        <>
        {
            loading?
            <div className="textClrGreen">loading...</div>:
            pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                <MainComponent data={item} key={index} />                        
            ))
        }
        {/*
            !loading && pageData?.meta?._mosacademy_page_group_details_group && (pageData?.meta?._mosacademy_page_group_details_group).length?
            <div className="textClrGreen">Loaded</div>:''
    */}
    <FormValidation />
    <FormApi/>
        
        </>
    );
};

export default Contact;
