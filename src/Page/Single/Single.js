import React, { useEffect, useState } from 'react';
import Loading from "../../Components/Loading/Loading";
//import MainComponent from '../../Components/MainComponent/MainComponent';
import Section from '../../Components/Section/Section';
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";
import Config from "../../Config.json";
import './Single.scss';
const Single = (props) => {    
    const [pageID, setPageID]=useState(0);
    const [pageData,setPageData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        setPageID(props.id);
    },[props.id]);
    useEffect(()=>{
        const url = `${Config.API_BASE}data-single/${pageID}`;//api url`Welcome ${firstName}, ${lastName}!`
        console.log(url);
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
        //.then(setLoading(false))
    },[pageID]);
    
    useEffect(() => {
        if (pageData.length !== 0 && pageID !== 0) {
            setLoading(false);
        }
    }, [pageData,pageID]);
    
    return (    
        loading
        ?<Loading />
        :<>
            <SubPageBanner tagline={pageData?.meta?._mosacademy_page_banner_tagline} title={pageData?.meta?._mosacademy_page_banner_title} intro={pageData?.meta?._mosacademy_page_banner_intro} bgImg={pageData?.meta?._mosacademy_page_banner_image}  btn={pageData?.meta?._mosacademy_page_banner_button} />            
            {
                pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                    <Section data={item} key={index} />                        
                ))
            }
        </>
                
        
    );
};

export default Single;
