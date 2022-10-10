import axios from "axios";
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import LazyImage from "../../Components/LazyImage";
import Loading from "../../Components/Loading/Loading";
//import MainComponent from '../../Components/MainComponent/MainComponent';
import SeoMeta from "../../Components/SeoMeta/SeoMeta";
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";
import Config from "../../Config.json";
import "./Blog.scss";
const Blogs = (props) => {
    const [pageID, setPageID]=useState(Config.BLOG_ID);
    const [pageData,setPageData]=useState([]);
    const [posts,setPosts]=useState([]);
    const [categories,setCategories]=useState([]);
    const [showPosts,setShowPosts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [category, setCategory] = useState(0);
    const [startFrom, setStartFrom] = useState(0);
    const [postCount, setPostCount] = useState(6);
    useEffect(() => {
        setPageID(Config.BLOG_ID);
    },[]);
    useEffect(()=>{
        const url = `${Config.API_BASE}data-single/${pageID}`;
        const fetchData = async () => {
            await axios.get(url)
            .then((response) => {
                setPageData(response.data);
            })
        }      
        fetchData()
        .catch(console.error);
    },[pageID]);
    useEffect(()=>{
        const url = `${Config.API_BASE}data-taxonomies/category`;
        const fetchData = async () => {
            await axios.get(url)
            .then((response) => {
                setCategories(response.data);
            })
        }      
        fetchData()
        .catch(console.error);
    },[pageID]);
    useEffect(()=>{
        const url = `${Config.API_BASE}data-list/post/${category}/`;
        const fetchData = async () => {
            await axios.get(url)
            .then((response) => {
                setPosts(response.data);
                //console.log(response.data.slice(startFrom, postCount));
            })
        }      
        fetchData()
        .catch(console.error);
    },[category]);
    
    useEffect(() => {
        if (pageData.length !== 0 && pageID !== 0) {
            setLoading(false);
        }
    }, [pageData,pageID]);
    useEffect(() => {        
        setShowPosts(posts.slice(startFrom, startFrom + postCount));   
        console.log(startFrom);    
    }, [posts,startFrom,postCount]);
    return (
            
        loading
        ?<Loading cls="page-loader" />
        :<>        
            <SeoMeta pageData={pageData}/>
            {/* {console.log(pageData.meta)} */}
            {
            !pageData?.meta?._mosacademy_banner_hide && 
            <SubPageBanner tagline={pageData?.meta?._mosacademy_page_banner_tagline} title={pageData?.meta?._mosacademy_page_banner_title} intro={pageData?.meta?._mosacademy_page_banner_intro} bgImg={pageData?.meta?._mosacademy_page_banner_image} btn={pageData?.meta?._mosacademy_page_banner_button} btn2={pageData?.meta?._mosacademy_page_banner_button_2} featureImage={pageData?.meta?._mosacademy_page_banner_feature_image} alt={pageData?.meta?._mosacademy_page_banner_feature_image_alt} attributes={pageData?.meta?._mosacademy_page_banner_feature_image_attributes} />    
            }
              <section id="blogWrapper" className="blogWrapper secPadding">
                    <div className="filterArea pb-5 isBgBorder mb-5">
                        <div className="container-lg">
                            Search and filter
                        </div>
                    </div>
                    <div className="blog-wrapper isBgBorder">
                        <div className="container-lg position-relative">
                            <div className="position-absolute top-0 start-0 bottom-0 end-0 bg-primary d-flex justify-content-center align-items-center text-white d-none">
                                <i className="fad fa-arrows-spin rotate fs-48"></i>
                            </div>
                            <div className="row">
                                {showPosts.length ?
                                    
                                    showPosts.map((item, index) => (
                                        <div className="col-sm-6 col-lg-4 singleBlogWrapper" key={index}>
                                            <div className="singleBlog isRadius16 d-flex flex-column justify-content-between">
                                                <div className="content-part">
                                                    {
                                                        item?.image &&
                                                        <div className="blogImage">
                                                            <NavLink to={['/blog',item?.slug].join('/')} className=" text-decoration-none">
                                                                <LazyImage src={item?.featured_image?.medium} alt={item.title} className="img-fluid w-100" />
                                                            </NavLink>
                                                        </div>
                                                    }
                                                    <div className="blogInfo p-4">
                                                        <h3 className="blogTitle fs-6 fw-bold mb-2">
                                                            <NavLink to={['/blog',item?.slug].join('/')} className="text-decoration-none text-white" dangerouslySetInnerHTML={{__html:item.title}}/>
                                                        </h3>
                                                        <div className="blogDesc textClrGray fw-normal fs-14">
                                                            <p className="mb-0">{item.excerpt.medium}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="link-part p-4 pt-0">
                                                    <NavLink to={['/blog',item?.slug].join('/')} className="readMore d-flex align-items-center fs-14 fwSemiBold text-decoration-none">
                                                        <span>Read More</span>                    
                                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M3.0625 10.5H17.7887" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            {/* {console.log(item)} */}
                                        </div>
                                    ))
                                    : <div className="textClrGreen text-center">Loading...</div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="pagination-box">
                        <nav>
                            <ul className="pagination justify-content-center gap-3">
                                <li className="page-item">
                                    <span aria-hidden="true">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3184 14.94L6.42836 10.05C5.85086 9.4725 5.85086 8.5275 6.42836 7.95L11.3184 3.06" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </li>
                                <li className="page-item" onClick={() => setStartFrom(0)}><span className="page-link bg-transparent active">1</span></li>
                                <li className="page-item" onClick={() => setStartFrom(6)}><span className="page-link bg-transparent ">2</span></li>
                                <li className="page-item"><span className="page-link bg-transparent ">3</span></li>
                                <li className="page-item">
                                    <span className="page-link bg-transparent" aria-label="Next">
                                        <span aria-hidden="true">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6.68164 14.94L11.5716 10.05C12.1491 9.4725 12.1491 8.5275 11.5716 7.95L6.68164 3.06"
                                                    stroke="#6B6E78"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>       
            {
                // pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                //     <MainComponent data={item} key={index} />                        
                // ))
            }
        </>
    )
}

export default Blogs