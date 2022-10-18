import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useParams } from "react-router-dom";
import DefaultAuthor from '../../assets/images/blog-author-default.svg';
import clock1 from "../../assets/images/clock1.svg";
import comment1 from "../../assets/images/single-blog-comment.svg";
import Config from "../../Config.json";
import LazyImage from '../LazyImage';
import Loading from '../Loading/Loading';
import Section from '../Section/Section';
import SeoMeta from '../SeoMeta/SeoMeta';
import "./BlogSingle.scss";

const BlogSingle = (props) => {
    const params = useParams();  
    //console.log(params);
    const [pageData,setPageData]=useState([]);
    const [blogPageData,setBlogPageData]=useState([]);
    const [postsData,setPostsData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        setPageData([]);
        setLoading(true);
        const url = Config.API_BASE + "data-single/" + params.slug;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
    },[params.slug]);
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
        "_mosacademy_page_group_sub_titles": ["Related blog"],
        "_mosacademy_page_group_title_description": "<h2>Read more on <strong>our blog</strong></h2><p>Check out the knowledge base collected and distilled by experienced professionals.</p><hr />",
        "_mosacademy_page_group_background_image_id": "",
        "_mosacademy_page_group_background_image": false,
        "_mosacademy_page_group_freature_image_id": "",
        "_mosacademy_page_group_freature_image": false,
        "_mosacademy_page_group_content_width": "container-lg",
        "_mosacademy_page_group_content_layout": "con-top",
        "_mosacademy_page_group_css": "blogs contentCenter",
        "_mosacademy_conditional_checkbox": false,
        "_mosacademy_page_group_component_name": "",
        "_mosacademy_page_group_component_data": "",
        "_mosacademy_page_group_components": "post",
        "_mosacademy_page_group_component_count_total": "6",
        "_mosacademy_page_group_component_layout": "slider",
        "_mosacademy_page_group_component_count_col": "col-lg-4 col-sm-6",
        "_mosacademy_page_group_component_template": "template-1",
        "group_id": "blogs-6",
        "group_slug": "blogs"    
    };
    return (
        loading?
        // <div className="textClrGreen text-center loder-text d-none">loading...</div>
        <Loading cls="page-loader" />:            
        <>                
            <SeoMeta pageData={pageData}/>
            <section className="BlogSingleWrapper secPadding mt-5">
                <div className="container-lg">
                    <div className="blogFeathered">
                        <div className="BlogsSingleHeader">
                            <p className="blogSingleTag textClrGreen fs-15 fwSemiBold mb-20">{pageData?.taxonomy?.category[0].name}</p>
                            <h1 className="fs-48 fw-bold text-white mb-20">{pageData.title}</h1>
                            <div className="meta d-flex gap-4 align-items-center">
                                <span className="single-blog-tags text-decoration-none text-white fs-14 fw-bold d-flex align-items-center">
                                    <div className="adminImg flex-shrink-0">
                                        {
                                            pageData?.author?.image[22] ?
                                                <LazyImage className='author-image' src={pageData?.author?.image[22]} alt={[pageData?.author?.name, 'Image'].join('-')} width="22" height="22" /> :
                                                <LazyImage className='author-image' src={DefaultAuthor} alt={[pageData?.author?.name, 'Image'].join('-')} width="22px" height="22px" />                                        
                                        }
                                    </div>
                                    <span className="AuthorName">{pageData?.author?.name}</span>
                                </span>
                                <span className="single-blog-tags text-decoration-none textClrGray fs-14 fw-medium d-flex align-items-center">
                                    <div className="CalenderIcon flex-shrink-0">
                                        <LazyImage src={clock1} alt="Calender Img" width="20px" height="20px" /> 
                                    </div>
                                    <span className="PostDate">
                                        <Moment format="MMM DD, YYYY">{pageData.date}</Moment>
                                    </span>
                                </span>
                                <span className="single-blog-tags text-decoration-none textClrGray fs-14 fw-medium d-flex align-items-center">
                                    <div className="CalenderIcon flex-shrink-0">
                                        <LazyImage src={comment1} alt="Comment Img" width="20px" height="20px" /> 
                                    </div>
                                    <span className="PostComment">
                                        5 Comment/s
                                    </span>
                                </span>
                            </div>
                            <div className="BlogSingFeatheredImg">
                                {/* <img className='img-fluid img-blog-single' src={pageData.image} alt="FeatheredImg" /> */}
                                <LazyImage className='img-fluid img-blog-single' src={pageData.image} alt={pageData.title} width={[pageData?.featured_image?.image_attributes[1], 'px'].join('')} height={[pageData?.featured_image?.image_attributes[2], 'px'].join('')} />
                            </div>
                        </div>
                    </div>

                    <div className="BlogSingleContentArea position-relative">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="blogInnerContent" dangerouslySetInnerHTML={{__html:pageData.content}} />
                                {
                                    pageData?.author?.image[100] && pageData?.author?.description && 
                                    <div className="authorIntro bgGradient4">
                                        <div className="left-part">
                                        {pageData?.author?.image[100]?
                                            <LazyImage className='author-image mb-1' src={pageData?.author?.image[100]} width="100" height="100" alt={[pageData?.author?.name, 'Image'].join('-')} />:
                                            <LazyImage className='author-image mb-1' src={DefaultAuthor} width="100" height="100" alt={[pageData?.author?.name, 'Image'].join('-')} /> 
                                        }
                                            <div>
                                                <h5 className="fs-6 fwSemiBlod text-white mb-1">{pageData?.author?.name}</h5>
                                                <p className="mb-0 fs-12 textClrGray fwSemiBlod">{pageData?.author?.designation}</p>
                                            </div>
                                        </div>
                                        <div className="right-part fs-14 fw-normal textClrGray" dangerouslySetInnerHTML={{__html:pageData?.author?.description}} />
                                    </div>
                                
                                }
                            </div>
                            {/* <div className="col-xl-4">
                                <div className="SingleSidebar sticky-xl-top">
                                    <p className="fs-16 fwSemiBold">Search</p>
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
                                        <LazyImage  className='author-image' src={pageData?.author?.image[47]} width="47" height="47" alt={[pageData?.author?.name, 'Image'].join('-')} />
                                        <div>
                                            <h5 className="fs-6 fwSemiBlod text-white mb-1">{pageData?.author?.name}</h5>
                                            <p className="mb-0 fs-12 textClrGray fwSemiBlod">{pageData?.author?.designation}</p>
                                        </div>
                                    </div>
                                    <div className="fs-14 fw-normal textClrGray mt-3" dangerouslySetInnerHTML={{__html:pageData?.author?.description}} />
                                    {
                                        pageData?.author?.linkedin && 
                                        <a href={pageData?.author?.linkedin} className="linkedinProfileLink mt-4" target="_blank" rel="noreferrer">
                                            <LazyImage src={linkedinProfile} className="img-fluid" alt="" />
                                            <span>Linkedin</span>
                                        </a>
                                    }
                                    <ul className="socialLink m-0 p-0 list-unstyled d-flex align-items-center gap-3 bgClrBlack mt-4 rounded px-4 py-3">
                                        <li>
                                            <p className="mb-0 fs-14 fw-bold text-white pe-2">Share</p>
                                        </li>
                                        <li>
                                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" title="Share on Facebook" rel='noreferrer'>
                                                <img src={facebook} alt="Facebook" />
                                            </a> 
                                            <FacebookShareButton url={window.location.href} quote={pageData.title} >
                                                <LazyImage src={facebook} alt="Facebook" />
                                            </FacebookShareButton>
                                        </li>
                                        <li>
                                            <a href={`https://twitter.com/share?url=${window.location.href}&text=${pageData.title}`} target="_blank" title="Share on Twitetr" rel='noreferrer'>
                                                <img src={twitterLink} alt="Twitter" />
                                            </a> 
                                            <TwitterShareButton title={pageData.title} url={window.location.href}>
                                                <LazyImage src={twitterLink} alt="Twitter" />
                                            </TwitterShareButton>
                                        </li>
                                        <li>
                                            <LinkedinShareButton title={window.location.href} source={pageData.title}>
                                                <LazyImage src={linkdin} alt="Linkdin" />
                                            </LinkedinShareButton>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>  
            {/* <MainComponent data={blogUpdateComponentData} /> */}
            <Section data={blogUpdateComponentData} newtab={true}/> 
            {
                blogPageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                    <Section data={item} key={index} />                        
                ))
            }          
        </>
    );
};

export default BlogSingle;
