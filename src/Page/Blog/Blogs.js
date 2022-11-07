import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import SingleBlogItems from "../../Components/BlogUpdate/SingleBlogItems";
import Loading from "../../Components/Loading/Loading";
import Section from "../../Components/Section/Section";
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
    const [searchText, setSearchText] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedTime, setSelectedTime] = useState(0);
    const postCount = 6;    
    const navigate = useNavigate();
    useEffect(() => {
        setPageID(Config.BLOG_ID);
    },[]);

    useEffect(()=>{
        const firstrequest = `${Config.API_BASE}data-single/${pageID}`;
        const secondrequest = `${Config.API_BASE}data-taxonomies/category`;
        const fetchData = async () => {
            await axios.all([axios.get(firstrequest), axios.get(secondrequest)])
                .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {  
                    setPageData(firstResponse.data);
                    setCategories(secondResponse.data);
            }))
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
        posts.length ? setShowPosts(posts.slice(startFrom, startFrom + postCount)) :  setShowPosts([])
    }, [posts,startFrom,postCount]);
    const totalPage = Math.ceil(posts.length / postCount);
    const list = [];
    for (let i = 1; i <= totalPage; i++) {
        var cls = ''; 
        if (currentPage === i ) cls = 'active';
        else cls = '';
        list.push(
            <li className="page-item" key={i} onClick={()=> {setStartFrom((i - 1) * postCount);setCurrentPage(i)}}>
                <span className={["page-link", "bg-transparent", cls].join(" ")}>
                    {i}
                </span>
            </li>
        )
    }
    const handleSubmit = async (e) => {  
        e.preventDefault();      
        if (searchText) navigate('/search/' + searchText);
    }
    return (
            
        loading
        ?<Loading cls="page-loader" />
        :<>        
            <SeoMeta pageData={pageData}/>
            {!pageData?.meta?._mosacademy_banner_hide && 
                <SubPageBanner tagline={pageData?.meta?._mosacademy_page_banner_tagline} title={pageData?.meta?._mosacademy_page_banner_title} intro={pageData?.meta?._mosacademy_page_banner_intro} bgImg={pageData?.meta?._mosacademy_page_banner_image} btn={pageData?.meta?._mosacademy_page_banner_button} btn2={pageData?.meta?._mosacademy_page_banner_button_2} featureImage={pageData?.meta?._mosacademy_page_banner_feature_image} alt={pageData?.meta?._mosacademy_page_banner_feature_image_alt} attributes={pageData?.meta?._mosacademy_page_banner_feature_image_attributes} />    
            }
            <section id="blogWrapper" className="blogWrapper secPadding">
                <div className="filterArea pb-5 isBgBorder mb-5">
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="filterLeft">
                                    <div className="singleFilter custom-mos-select">
                                        <select className="bg-transparent rounded-pill px-4 form-select" onChange={(event) => {setStartFrom(0);setCurrentPage(1);setCategory(event.target.value);setSelectedTime(0);setSelectedCategory(event.target.value)}} defaultValue={selectedCategory}>
                                            <option value="0" selected={selectedTime?true:false}>All Categories</option>
                                            {
                                                categories.length && categories.map((item, index) => (
                                                    <option value={item.term_id} key={index}>{item.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="singleFilter custom-mos-select">
                                        <select className="bg-transparent rounded-pill px-4 form-select" onChange={(event) => {setStartFrom(0);setCurrentPage(1);setCategory(event.target.value);setSelectedCategory(0);setSelectedTime(event.target.value);}} defaultValue={selectedTime}>
                                            <option value="0" selected={selectedCategory?true:false}>Select One</option>
                                            <option value="week">Last 7 day’s</option>
                                            <option value="month">Last Month</option>
                                            <option value="year">Last year</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3"></div>
                            <div className="col-xl-3">
                                <div className="searchInput">
                                    <form onSubmit={handleSubmit}>
                                        <div className="d-flex justify-content-xl-end">
                                            <input name="search" placeholder="Search" type="search" className="bg-transparent rounded-pill form-control" onChange={(event) => setSearchText(event.target.value)} value={searchText}/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
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
                                        <SingleBlogItems data={item} />
                                    </div>
                                ))
                                : <div className="textClrGreen text-center">No post found</div>
                            }
                        </div>
                    </div>
                </div>
                {totalPage > 1 &&
                <div className="blog-pagination-wrapper">
                    <div className="pagination-box">
                        <nav>
                            <ul className="pagination justify-content-center gap-3">
                                <li className="page-item" onClick={()=>{currentPage > 1 && setCurrentPage(currentPage - 1); setStartFrom((currentPage - 2) * postCount)}}>
                                    <span className="page-link bg-transparent" aria-label="Previous">
                                        <span aria-hidden="true">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.3184 14.94L6.42836 10.05C5.85086 9.4725 5.85086 8.5275 6.42836 7.95L11.3184 3.06" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </span>
                                </li>
                                {list}
                                <li className="page-item" onClick={()=> {currentPage < totalPage && setCurrentPage(currentPage + 1); setStartFrom(currentPage * postCount)}}>
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
                </div>
                }
            </section>  
            {
                pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (                   
                    <Section data={item} key={index} />                    
                ))
            }
        </>
    )
}

export default Blogs