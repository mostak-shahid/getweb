import axios from "axios";
import { useEffect, useState } from 'react';
import Loading from "../../Components/Loading/Loading";
//import MainComponent from '../../Components/MainComponent/MainComponent';
import Section from '../../Components/Section/Section';
import SeoMeta from "../../Components/SeoMeta/SeoMeta";
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";
import Config from "../../Config.json";
import './Single.scss';
const Single = (props) => {    
    const [pageID, setPageID]=useState(props.id);
    const [pageData,setPageData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        setPageID(props.id);
    },[props.id]);
    useEffect(()=>{
        const url = `${Config.API_BASE}data-single/${pageID}`;//api url`Welcome ${firstName}, ${lastName}!`
        //console.log(url);
        //fetch(url).then(resp=>resp.json())//calling url by method GET
        //.then(resp=>setPageData(resp))//setting response to state posts
        //.then(setLoading(false))


        // declare the async data fetching function
        const fetchData = async () => {
            // get the data from the api
            await axios.get(url)
            .then((response) => {
                setPageData(response.data);
            })
        }      
        // call the function
        fetchData()
        // make sure to catch any error
        .catch(console.error);


    },[pageID]);
    
    useEffect(() => {
        if (pageData.length !== 0 && pageID !== 0) {
            setLoading(false);
        }
    }, [pageData,pageID]);
    
    return (    
        loading
        ?<Loading cls="page-loader" />
        :<>        
            <SeoMeta pageData={pageData}/>
            {/* {console.log(pageData?.meta)} */}
            {
            !pageData?.meta?._mosacademy_banner_hide && 
            <SubPageBanner tagline={pageData?.meta?._mosacademy_page_banner_tagline} title={pageData?.meta?._mosacademy_page_banner_title} intro={pageData?.meta?._mosacademy_page_banner_intro} bgImg={pageData?.meta?._mosacademy_page_banner_image} btn={pageData?.meta?._mosacademy_page_banner_button} featureImage={pageData?.meta?._mosacademy_page_banner_feature_image} alt={pageData?.meta?._mosacademy_page_banner_feature_image_alt} btn2={pageData?.meta?._mosacademy_page_banner_button_2} />    
            }
                    
            {
                pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                    <Section data={item} key={index} />                    
                ))
            }
        </>
                
        
    );
};

export default Single;
