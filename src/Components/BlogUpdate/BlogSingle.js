import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import clock1 from "../../assets/images/clock1.svg";
import facebook from "../../assets/images/Facebook.svg";
import linkdin from "../../assets/images/linkedinLink.svg";
import linkedinProfile from "../../assets/images/linkedinProfile.svg";
import twitterLink from "../../assets/images/TwitterLink.svg";
import Config from "../../Config.json";
import MainComponent from '../MainComponent/MainComponent';
import "./BlogSingle.scss";
import RecentPost from './RecentPost';


const BlogSingle = (props) => {
    const location = useLocation();
    const params = useParams();  
    const navigate = useNavigate();
    //console.log(params);
    const [pageData,setPageData]=useState([]);
    const [blogPageData,setBlogPageData]=useState([]);
    const [postsData,setPostsData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [searchText,setSearchText]=useState([]);
    useEffect(()=>{
        const url = Config.API_BASE + "data-single/" + params.slug;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
    },[]);
    useEffect(()=>{
        const url = Config.API_BASE + "data-single/" + Config.BLOG_ID;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setBlogPageData(resp))//setting response to state posts
    },[]);
    useEffect(()=>{
        const url = Config.API_BASE + "data-list/post/0/0/3";;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPostsData(resp))//setting response to state posts
    },[]);
    useEffect(() => {
        if (pageData.length !== 0) {
            setLoading(false);
        }
        //console.log(pageData);
    }, [pageData, blogPageData, postsData]);
    const blogUpdateComponentData = {
        _mosacademy_page_group_content_width : "container", 
        _mosacademy_page_group_css:'blogs', 
        _mosacademy_page_group_component_name:'BlogUpdateComponent',
        _mosacademy_page_group_content_layout : "con-top",
        _mosacademy_page_group_sub_titles : ['Related blog'],
        _mosacademy_page_group_title_text : 'Read more on our blog',
        _mosacademy_page_group_title_description: 'Check out the knowledge base collected and distilled by experienced professionals.'

    };
    const onChange = (e) => {
        setSearchText(e.target.value);
    }
    const handleSearchSubmit = (e) => {    
        e.preventDefault();            
        if (searchText) {
            alert(searchText);
            navigate('/search/' + searchText);
        }
    }
    return (
        <>
        {
            loading?
            <div className="textClrGreen text-center">loading...</div>:            
            <>
                <section className="BlogSingleWrapper secPadding mt-5">
                    <div className="container">
                        <div className="blogFeathered">
                            <div className="BlogsSingleHeader mb-5 pb-2">
                                <p className="blogSingleTag textClrGreen fs-15 fwSemiBold">{pageData?.taxonomy?.category[0].name}</p>
                                <h2 className="fs-48 fw-bold text-white mb-4 pb-2">{pageData.title}</h2>
                                <div className="meta d-flex gap-4 align-items-center mb-5 pb-2">
                                    <NavLink to={['/user', pageData?.author?.slug].join('/')} className="text-decoration-none text-white fs-14 fw-bold d-flex align-items-center gap-3">
                                        <div className="adminImg flex-shrink-0">
                                            <img className='author-image' src={pageData?.author?.image[22]} alt="Author Img" width="22" height="22" />
                                        </div>
                                        <span className="AuthorName">{pageData?.author?.name}</span>
                                    </NavLink>
                                    <span className="text-decoration-none textClrGray fs-14 fw-medium d-flex align-items-center gap-3">
                                        <div className="CalenderIcon flex-shrink-0">
                                            <img src={clock1} alt="Author Img" />
                                        </div>
                                        <span className="PostDate">
                                            <Moment format="MMM DD, YYYY">{pageData.date}</Moment>
                                        </span>
                                    </span>
                                </div>
                                <div className="BlogSingFeatheredImg">
                                    <img src={pageData.image} alt="FeatheredImg" />
                                </div>
                            </div>
                        </div>

                        <div className="BlogSingleContentArea">
                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="SingleContents" dangerouslySetInnerHTML={{__html:pageData.content}} />
                                </div>
                                <div className="col-xl-4">
                            <div className="SingleSidebar">
                                <p className="fs-16 fwSemiBold">Searchx</p>
                                <div className="searchInput pb-4">
                                <form onSubmit={handleSearchSubmit}>
                                    <input className="form-control" name="search" type="text" onChange={onChange} placeholder="Search here" value={searchText}/>
                                </form>
                                </div>
                                <p className="fs-16 fwSemiBold mt-4">Recent Post</p>
                                {postsData.length && 
                                    postsData.map((item, index) => (
                                        <RecentPost data={item} key={index} />
                                    ))
                                }

                                <div className="gradientBorder2 mt-5 mb-4"></div>
                                <div className="d-flex align-items-center gap-3 borderBottom pb-3">
                                    <img  className='author-image' src={pageData?.author?.image[47]} width="47" height="47" alt={[pageData?.author?.name, 'Image'].join('-')} />
                                    <div>
                                        <h5 className="fs-6 fwSemiBlod text-white mb-1">{pageData?.author?.name}</h5>
                                        <p className="mb-0 fs-12 textClrGray fwSemiBlod">{pageData?.author?.designation}</p>
                                    </div>
                                </div>
                                <div className="fs-14 fw-normal textClrGray mt-3" dangerouslySetInnerHTML={{__html:pageData?.author?.description}} />
                                {
                                    pageData?.author?.linkedin && 
                                    <a href={pageData?.author?.linkedin} className="linkedinProfileLink mt-4" target="_blank" rel="noreferrer">
                                        <img src={linkedinProfile} className="img-fluid" alt="" />
                                        <span>Linkedin</span>
                                    </a>
                                }
                                <ul className="socialLink m-0 p-0 list-unstyled d-flex align-items-center gap-3 bgClrBlack mt-4 rounded px-4 py-3">
                                    <li>
                                        <p className="mb-0 fs-14 fw-bold text-white pe-2">Share</p>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={facebook} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={twitterLink} alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src={linkdin} alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
                <MainComponent data={blogUpdateComponentData} />
                {
                    blogPageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                        <MainComponent data={item} key={index} />                        
                    ))
                }          
            </>
        }        
        </>
    );
};

export default BlogSingle;
