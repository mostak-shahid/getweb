import axios from 'axios';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useParams } from "react-router-dom";
import DefaultAuthor from '../../assets/images/blog-author-default.svg';
import clock1 from "../../assets/images/clock1.svg";
import DefaultAvatar from '../../assets/images/default-comment-avatar.png';
import comment1 from "../../assets/images/single-blog-comment.svg";
import Config from "../../Config.json";
import LazyImage from '../LazyImage';
import Loading from '../Loading/Loading';
import Section from '../Section/Section';
import SeoMeta from '../SeoMeta/SeoMeta';
import "./BlogSingle.scss";
import CommentForm from './CommentForm';

const BlogSingle = (props) => {
    const params = useParams();  
    //console.log(params);
    const [pageData,setPageData]=useState([]);
    const [blogPageData,setBlogPageData]=useState([]);
    const [commentsData,setCommentsData]=useState([]);
    const [firstLevelCommentsData,setFirstLevelCommentsData]=useState([]);
    const [loading,setLoading]=useState(true);
    //const [ip, setIP] = useState("");
    useEffect(()=>{
        setPageData([]);
        setLoading(true);
        const url = Config.API_BASE + "data-single/" + params.slug;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPageData(resp))//setting response to state posts
    },[params.slug]);
    /*useEffect(()=>{
        const url = Config.API_BASE + "data-single/" + Config.BLOG_ID;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setBlogPageData(resp))//setting response to state posts
    },[]);*/

    /*const getIP = async () => {
        //const res = await axios.get('https://checkip.amazonaws.com/')
        //const res = await axios.get('https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0')
        await axios.get("https://api.ipify.org")
        .then(function (response) {
            setIP(response.data);
            //toast('Success');
            console.log(response.data);
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
    };
    useEffect(() => {
        getIP();
    }, []);*/

    useEffect(()=>{        
        //const ipRequest = 'https://api.ipify.org';//Config.API_BASE + "data-single/" + params.slug
        const blogPageRequest = `${Config.API_BASE}data-single/${Config.BLOG_ID}`;//Config.API_BASE + "data-single/" + Config.BLOG_ID;
        const commentsRequest = `https://getwebinc.com/api/wp-json/wp/v2/comments?post=${pageData?.id}`;//https://getwebinc.com/api/wp-json/wp/v2/comments?post=243;
        const fetchData = async () => {
            await axios.all([
                //axios.get(ipRequest), 
                axios.get(blogPageRequest), 
                axios.get(commentsRequest)
            ]).then(axios.spread((blogPageDataResponse, commentsDataResponse) => {  
                //console.log(firstResponse.data,secondResponse.data);
                //setIP(ipDataRequest.data);
                setBlogPageData(blogPageDataResponse.data);
                setCommentsData(commentsDataResponse.data);
                setFirstLevelCommentsData(commentsData.filter(comment=>comment.parent === 0));
            }))
        }    
        if (pageData?.id) { 
            fetchData()
            .catch(console.error);  
        }      
    },[params.slug,pageData.id,commentsData]);
    useEffect(() => {
        if (pageData.length !== 0) {
            setLoading(false);
        }
        //console.log(pageData);
    }, [pageData, blogPageData]);
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
    const childComments = (parent_id) => {
        let child_comments = commentsData.filter(comment=>comment.parent === parent_id);
        if (child_comments.length) {
            return child_comments.length + ' comments';
        } else {
            return '0 comments'
        }
    }
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
                            {
                                commentsData.length ?
                                <span className="single-blog-tags text-decoration-none textClrGray fs-14 fw-medium d-flex align-items-center">
                                    <div className="CalenderIcon flex-shrink-0">
                                        <LazyImage src={comment1} alt="Comment Img" width="20px" height="20px" /> 
                                    </div>
                                    <span className="PostComment">
                                        {commentsData.length} Comment/s
                                    </span>
                                </span>:''
                            }
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
                                {Config.ALLOW_COMMENT?
                                    <div className="comments-wrapper bgClrSolitude isRadius12">
                                    {
                                        firstLevelCommentsData.length ?
                                        <div id="comments" className="comments">
                                            <div id="reply-title" className="comment-reply-title textClrThemeDark fs-24 fw-bold mb-10">{commentsData.length} Comment/s</div>
                                            {
                                            firstLevelCommentsData.map((item, index)=> (
                                                <div className={['comment', 'comment-'+index, 'comment-id'+item.id].join(' ')} key={index}>
                                                    <div className="comment-unit d-flex">
                                                        <div className="comment-avavat">
                                                            <LazyImage src={item.author_avatar_urls[96]?item.author_avatar_urls[96]:DefaultAvatar} width="96px" height="96px" alt={item.author_name}/>
                                                        </div>
                                                        <div className="comment-meta">
                                                            <h6 className="comment-auth textClrGrayDeep fwBold mb-0" dangerouslySetInnerHTML={{__html:item.author_name}} />
                                                            <div className="comment-time fs-12"><Moment format="MMMM DD, YYYY">{item.date}</Moment> at <Moment format="HH:MM a">{item.date}</Moment></div>
                                                            <div className="comment-intro textClrGray" dangerouslySetInnerHTML={{__html:item.content.rendered}} />
                                                        </div>
                                                    </div>
                                                    {/* {childComments(item.id)} */}
                                                </div>
                                            ))
                                            }
                                        </div>: 
                                        ''
                                    }
                                        <CommentForm id={pageData?.id} />
                                    </div>:''
                                }
                            </div>
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
