import "animate.css/animate.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainComponent from "../../Components/MainComponent/MainComponent";
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";
import Config from "../../Config.json";
import "./Portfolio.scss";
const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [pageData,setPageData]=useState([]);

  useEffect(()=>{
    const url = Config.API_BASE + "data-single/" + Config.PORTFOLIO_ID;//api url
    fetch(url).then(resp=>resp.json())//calling url by method GET
    .then(resp=>setPageData(resp))//setting response to state posts
    //.then(setLoading(false))
  },[]);



  useEffect(() => {
    if (pageData.length !== 0) {
      setLoading(false);
    }
  }, [pageData]);


  return loading ? 
    <div className="textClrGreen text-center loder-text d-none">loading...</div>
   : 
    <>
        <SubPageBanner tagline={pageData?.meta?._mosacademy_page_banner_tagline} title={pageData?.meta?._mosacademy_page_banner_title} intro={pageData?.meta?._mosacademy_page_banner_intro} bgImg={pageData?.meta?._mosacademy_page_banner_image}  btn={pageData?.meta?._mosacademy_page_banner_button} btn2={pageData?.meta?._mosacademy_page_banner_button_2}/>         
        {
          pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
            <MainComponent data={item} key={index} />                        
          ))
        }
  <ToastContainer />
    </>
  
};

export default Portfolio;
