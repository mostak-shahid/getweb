import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Moment from "react-moment";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import DefaultAuthor from "../../assets/images/blog-author-default.svg";
import clock1 from "../../assets/images/clock1.svg";
import DefaultAvatar from "../../assets/images/default-comment-avatar.png";
import comment1 from "../../assets/images/single-blog-comment.svg";
import Config from "../../Config.json";
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import LazyImage from "../LazyImage";
import Loading from "../Loading/Loading";
import Section from "../Section/Section";
import SeoMeta from "../SeoMeta/SeoMeta";
import "./BlogSingle.scss";
import CommentForm from "./CommentForm";

import SocialShare from "../SocialShare/SocialShare";
import TableofContent from "../TableofContent/TableofContent";
import TextReader from "../TextReader/TextReader";


const BlogSingle = (props) => {
  //const UserContext = createContext();
  const params = useParams();
  //console.log(params);
  const [pageData, setPageData] = useState([]);
  const [blogPageData, setBlogPageData] = useState([]);
  const [commentsData, setCommentsData] = useState([]);
  //const [categoriesData, setCategoriesData] = useState([]);
  const [showCommentsCount, setShowCommentsCount] = useState(3);
  const [firstLevelCommentsData, setFirstLevelCommentsData] = useState([]);
  const [loadMoreComment, setLoadMoreComment] = useState(true);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    window.speechSynthesis.cancel();
  }, []);
  useEffect(() => {
    setPageData([]);
    setLoading(true);
    const url = Config.API_BASE + "data-single/" + params.slug + '/post';
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setPageData(resp));
  }, [params.slug]);

  useEffect(() => {
    const blogPageRequest = `${Config.API_BASE}data-single/${Config.BLOG_ID}`;
    const commentsRequest = `https://getwebinc.com/api/wp-json/wp/v2/comments?post=${pageData?.id}`;
    const fetchData = async () => {
      await axios
        .all([
          axios.get(blogPageRequest),
          axios.get(commentsRequest),
        ])
        .then(
          axios.spread((blogPageDataResponse, commentsDataResponse, categoriesDataResponse) => {
            setBlogPageData(blogPageDataResponse.data);
            setCommentsData(commentsDataResponse.data);
          })
        );
    };
    if (pageData?.id) {
      fetchData().catch(console.error);
    }
  }, [pageData.id]);

  useEffect(() => {
    setFirstLevelCommentsData(
      commentsData
        .filter((comment) => comment.parent === 0)
        .slice(0, showCommentsCount)
    );
  }, [commentsData, showCommentsCount]);
  useEffect(() => {
    if (pageData.length !== 0 && blogPageData.length !== 0) {
      setLoading(false);
    }
  }, [pageData, blogPageData]);
  const blogUpdateComponentData = {
    _mosacademy_page_group_sub_titles: [typeof props?.optionData['single-blog-related-post-title'] !== 'undefined' && props?.optionData['single-blog-related-post-title'] ? props?.optionData['single-blog-related-post-title']: ''],
    _mosacademy_page_group_title_description: typeof props?.optionData['single-blog-related-post-intro'] !== 'undefined' && props?.optionData['single-blog-related-post-intro'] ? props?.optionData['single-blog-related-post-intro']: '',
    _mosacademy_page_group_background_image_id: "",
    _mosacademy_page_group_background_image: false,
    _mosacademy_page_group_freature_image_id: "",
    _mosacademy_page_group_freature_image: false,
    _mosacademy_page_group_content_width: "container-lg",
    _mosacademy_page_group_content_layout: "con-top",
    _mosacademy_page_group_css: "blogs contentCenter",
    _mosacademy_conditional_checkbox: false,
    _mosacademy_page_group_component_name: "",
    _mosacademy_page_group_component_data: "",
    _mosacademy_page_group_components: "post",
    _mosacademy_page_group_component_count_total: "6",
    _mosacademy_page_group_component_layout: "slider",
    _mosacademy_page_group_component_count_col: "col-lg-4 col-sm-6",
    _mosacademy_page_group_component_template: "template-1",
    group_id: "blogs-6",
    group_slug: "blogs",
  };
  
  const childComments = (parent_id) => {
    let child_comments = commentsData.filter(
      (comment) => comment.parent === parent_id
    );
    if (child_comments.length) {
      return child_comments.map((item, index) => (
        <div
          className={[
            "comment",
            "comment-" + index,
            "comment-id" + item.id,
          ].join(" ")}
          key={index}
        >
          <div className="comment-unit d-sm-flex">
            <div className="comment-avavat">
              <LazyImage
                className="img-fluid img-comment-avavat rounded-circle"
                src={
                  item.author_avatar_urls[96]
                    ? item.author_avatar_urls[96]
                    : DefaultAvatar
                }
                width="60px"
                height="60px"
                alt={item.author_name}
              />
            </div>
            <div className="comment-meta">
              <div className="d-sm-flex justify-content-between align-items-center mb-15">
                <h6
                  className="comment-auth"
                  dangerouslySetInnerHTML={{ __html: item.author_name }}
                />
                <div className="comment-time">
                  <Moment format="DD MMMM, YYYY">{item.date}</Moment> at
                  <Moment format="HH:MM a">{item.date}</Moment>
                </div>
              </div>
              <div
                className="comment-intro mb-20"
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
              />
              <span className="reply" data-id={item.id} onClick={toggleComment}>
                Reply
              </span>
              <div className="comments-wrapper bgClrSolitude isRadius12">
                <CommentForm
                  cencle={true}
                  title={`Reply to ${item.author_name}`}
                  id={pageData?.id}
                  replyParent={item.id}
                />
              </div>
              {childComments(item.id)}
            </div>
          </div>
        </div>
      ));
    } else {
      return "";
    }
  };
  const toggleComment = useCallback((e) => {
    //e.target.parentElement.classList.toggle('open-comment-below');
    e.target.parentElement.classList.toggle("open-comment-box");
  }, []);

  const handleSubmit = async (e) => {  
    e.preventDefault();      
    if (searchText) navigate('/search/' + searchText);
}
  return loading ? (
    <Loading cls="page-loader" />
  ) : (
    <>
      <SeoMeta pageData={pageData} />
      <section className="BlogSingleWrapper secPadding pb-0">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-8">
              
              <div className="blogFeathered">
                <div className="BlogsSingleHeader">
                  <p className="blogSingleTag textClrGreen fs-15 fwSemiBold mb-20">
                    {pageData?.taxonomy?.category[0].name}
                  </p>
                  <h1 className="fs-38 fw-bold text-white mb-20">
                    {pageData.title}
                  </h1>
                  <div className="meta d-sm-flex gap-4 align-items-center">
                    <span className="single-blog-tags text-decoration-none text-white fs-14 fw-bold d-flex align-items-center">
                      <div className="adminImg flex-shrink-0">
                        {pageData?.author?.image[22] ? (
                          <LazyImage
                            className="author-image"
                            src={pageData?.author?.image[22]}
                            alt={[pageData?.author?.name, "Image"].join("-")}
                            width="22"
                            height="22"
                          />
                        ) : (
                          <LazyImage
                            className="author-image"
                            src={DefaultAuthor}
                            alt={[pageData?.author?.name, "Image"].join("-")}
                            width="22px"
                            height="22px"
                          />
                        )}
                      </div>
                      <span className="AuthorName">{pageData?.author?.name}</span>
                    </span>
                    <span className="single-blog-tags text-decoration-none textClrGray fs-14 fw-medium d-flex align-items-center">
                      <div className="CalenderIcon flex-shrink-0">
                        <LazyImage
                          src={clock1}
                          alt="Calender Img"
                          width="20px"
                          height="20px"
                        />
                      </div>
                      <span className="PostDate">
                        <Moment format="MMM DD, YYYY">{pageData.date}</Moment>
                      </span>
                    </span>
                    {commentsData.length ? (
                      <span className="single-blog-tags text-decoration-none textClrGray fs-14 fw-medium d-flex align-items-center">
                        <div className="CalenderIcon flex-shrink-0">
                          <LazyImage
                            src={comment1}
                            alt="Comment Img"
                            width="20px"
                            height="20px"
                          />
                        </div>
                        <span className="PostComment">
                          {commentsData.length} Comment/s
                        </span>
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="BlogSingFeatheredImg">
                    <LazyImage
                      className="img-fluid img-blog-single"
                      src={pageData.image}
                      alt={pageData.title}
                      width={[
                        pageData?.featured_image?.image_attributes[1],
                        "px",
                      ].join("")}
                      height={[
                        pageData?.featured_image?.image_attributes[2],
                        "px",
                      ].join("")}
                    />
                  </div>
                </div>
              </div>

              <div className="BlogSingleContentArea position-relative">
                <div className="row">
                  <div className="col-xl-12">
                    {
                      pageData?.meta?._mosacademy_blog_details_audio_option === 'tts' ?
                      <TextReader content={pageData.modified_content} instraction={typeof props?.optionData['single-blog-audio-instraction'] !== 'undefined' && props?.optionData['single-blog-audio-instraction'] ? props?.optionData['single-blog-audio-instraction']: 'Click play to listen to the blog'} />:''
                    }
                    {
                      pageData?.meta?._mosacademy_blog_details_audio_option === 'ga' && pageData?.meta?._mosacademy_blog_details_audio ?
                      <AudioPlayer className="blog-audio-player mb-40" audio={pageData.meta._mosacademy_blog_details_audio} instraction={typeof props?.optionData['single-blog-audio-instraction'] !== 'undefined' && props?.optionData['single-blog-audio-instraction'] ? props?.optionData['single-blog-audio-instraction']: 'Click play to listen to the blog'} /> : ''
                    }                    
                    <TableofContent data={pageData.tocArray} title={typeof props?.optionData['single-blog-toc-title'] !== 'undefined' && props?.optionData['single-blog-toc-title'] ? props?.optionData['single-blog-toc-title']: 'Table of Contents'} /> 
                  
                    <div
                      className="blogInnerContent"
                      dangerouslySetInnerHTML={{
                        __html: pageData.modified_content,
                      }}
                    />
                    <hr className="whiteBorder" />
                    {pageData?.author?.image[120] && pageData?.author?.description && (
                      <>
                        <div className="authorIntro bgClrDarkLight">
                          <div className="left-part">
                            {pageData?.author?.image[120] ? (
                              <LazyImage
                                className="author-image mb-1"
                                src={pageData?.author?.image[120]}
                                width="120px"
                                height="120px"
                                alt={[pageData?.author?.name, "Image"].join("-")}
                              />
                            ) : (
                              <LazyImage
                                className="author-image mb-1"
                                src={DefaultAuthor}
                                width="120px"
                                height="120px"
                                alt={[pageData?.author?.name, "Image"].join("-")}
                              />
                            )}
                          </div>
                          <div className="right-part">
                            <div className="contributor-title">VIP Contributor</div>
                            <div className="d-sm-flex justify-content-start align-items-center mb-15">
                              <div className="fs-24 authoredBy">
                                
                                <strong>{pageData?.author?.name}</strong>
                              </div>
                              <div className="authorDesignation">
                                <div className="d-inline-block">
                                  {pageData?.author?.designation}
                                </div>
                              </div>
                            </div>
                            <div
                              className="fs-6 fw-normal textClrGray authorDesc"
                              dangerouslySetInnerHTML={{
                                __html: pageData?.author?.description,
                              }}
                            />
                          </div>
                        </div>
                        <hr className="whiteBorder" />
                      </>
                    )}
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="blogSingle-sidebar pb-5 position-sticky">
                <div className="widget">
                  <div className="searchInput">
                    <form  onSubmit={handleSubmit}>
                        <div className="d-flex justify-content-xl-end">
                            <input name="search" placeholder="Search" type="search" className="bg-transparent rounded-pill form-control"  onChange={(event) => setSearchText(event.target.value)} value={searchText}/>
                        </div>
                    </form>
                  </div>
                </div>
                <div className="widget">
                  <span className="widget-title">Categories</span>
                  <div className="widget-content">
                    {
                    props.categoriesData.length ?
                    <ul className="widget-category-list">
                    {props.categoriesData.map((item, index)=>(
                      parseInt(item.count)!==0?
                      <li key={index}><NavLink to={['/category',item.slug].join('/')}><span className="title">{item.name}</span> <span className="count">({item.count})</span></NavLink></li>:''
                    ))}
                    </ul>: ''
                    }
                  </div>
                </div>
                <div className="widget d-none">                  
                  {pageData?.author?.image[47] && pageData?.author?.description && !1 && 
                      <div className="sidebar-author-wrap">
                        <div className="sidebar-author d-flex  align-items-center">
                          <div className="part-img">
                            <LazyImage
                              className="author-image"
                              src={pageData?.author?.image[47]}
                              width="47px"
                              height="47px"
                              alt={[pageData?.author?.name, "Image"].join("-")}
                            />
                          </div>
                          <div className="part-content">
                            <h5 className="fs-6 fwSemiBlod text-white mb-1">{pageData?.author?.name}</h5>
                            <p className="mb-0 fs-12 textClrGray fwSemiBlod">{pageData?.author?.designation}</p>
                          </div>
                        </div>
                        <div className="fs-6 fw-normal textClrGray authorDesc" dangerouslySetInnerHTML={{__html: pageData?.author?.description}}/>
                      </div>
                    }
                </div>
                <div className="widget">                  
                  <SocialShare title={props.title}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {Config.ALLOW_COMMENT && pageData?.comments_open ? (
        <section className="commentArea secPadding pt-0">
          <div className="container-lg">
            {firstLevelCommentsData.length ? (
              <div id="comments" className="comments">
                <div
                  id="reply-title"
                  className="all-comments-reply-title text-white fs-30 fwBold"
                >
                  All comments
                </div>
                {firstLevelCommentsData.map((item, index) => (
                  <div
                    className={[
                      "comment",
                      "comment-" + index,
                      "comment-id" + item.id,
                    ].join(" ")}
                    key={index}
                  >
                    <div className="comment-unit d-sm-flex">
                      <div className="comment-avavat">
                        <LazyImage
                          className="img-fluid img-comment-avavat rounded-circle"
                          src={
                            item.author_avatar_urls[96]
                              ? item.author_avatar_urls[96]
                              : DefaultAvatar
                          }
                          width="60px"
                          height="60px"
                          alt={item.author_name}
                        />
                      </div>
                      <div className="comment-meta">
                        <div className="d-sm-flex justify-content-between align-items-center mb-15">
                          <h6
                            className="comment-auth"
                            dangerouslySetInnerHTML={{
                              __html: item.author_name,
                            }}
                          />
                          <div className="comment-time">
                            <Moment format="DD MMMM, YYYY">{item.date}</Moment>
                            at <Moment format="HH:MM a">{item.date}</Moment>
                          </div>
                        </div>
                        <div
                          className="comment-intro mb-20"
                          dangerouslySetInnerHTML={{
                            __html: item.content.rendered,
                          }}
                        />
                        <span
                          className="reply"
                          data-id={item.id}
                          onClick={toggleComment}
                        >
                          Reply
                        </span>
                        <div className="comments-wrapper bgClrSolitude isRadius12">
                          <CommentForm
                            cencle={true}
                            title={`Reply to ${item.author_name}`}
                            id={pageData?.id}
                            replyParent={item.id}
                          />
                        </div>
                        {childComments(item.id)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            {loadMoreComment &&
              commentsData.filter((comment) => comment.parent === 0).length >
                3 && (
                <div
                  className="d-inline-flex align-items-center cursor-pointer"
                  onClick={() => {
                    setShowCommentsCount(commentsData.length);
                    setLoadMoreComment(false);
                  }}
                >
                  <span className="view-all-comment">View All Comments</span>
                  <span className="view-all-comment-icon"></span>
                </div>
              )}
            <hr className="whiteBorder" />
            <div className="comments-wrapper bgClrSolitude isRadius12">
              <CommentForm
                title="Leave a comment"
                id={pageData?.id}
                replyParent="0"
              />
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
      <Section data={blogUpdateComponentData} newtab={true} />
      {blogPageData?.meta?._mosacademy_page_group_details_group.map(
        (item, index) => (
          <Section data={item} key={index} />
        )
      )}
    </>
  );
};

export default BlogSingle;
