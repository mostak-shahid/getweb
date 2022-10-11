import axios from 'axios';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from "react-router-dom";
import BlogBannerBg from '../../assets/images/Blog-Banner.svg';
import SingleBlogItems from '../../Components/BlogUpdate/SingleBlogItems';
import Loading from '../../Components/Loading/Loading';
import Section from '../../Components/Section/Section';
import SubPageBanner from '../../Components/SubPageBanner/SubPageBanner';
import Config from "../../Config.json";
const Search = (props) => {
  
  //const location = useLocation();
  const params = useParams();  
  const navigate = useNavigate();
  const [pageID, setPageID]=useState(Config.BLOG_ID);
  const [searchPageData,setSearchPageData]=useState([]);
  const [pageData,setPageData]=useState([]);
  //const [postCountData,setPostCountData]=useState(0);
  const [searchText,setSearchText]=useState(params.keyword);
  //const [postsData,setPostsData]=useState([]);
  const [loading,setLoading]=useState(true);
  const [showPosts,setShowPosts]=useState([]);
  const [startFrom,setStartFrom]=useState(0);
  const [currentPage,setCurrentPage]=useState(1);
  const postCount=6;
  useEffect(() => {
      setPageID(Config.BLOG_ID);
  },[]);
  useEffect(()=>{
    const url = `${Config.API_BASE}data-single/${pageID}/`;
    const fetchData = async () => {
        await axios.get(url)
        .then((response) => {
          setPageData(response.data);
            //console.log(response.data.slice(startFrom, postCount));
        })
    }      
    fetchData()
    .catch(console.error);
},[pageID]);
  useEffect(()=>{
      // const url = Config.API_BASE + "data-list/post/0/0/6";//api url
      // fetch(url).then(resp=>resp.json())//calling url by method GET
      // .then(resp=>setSearchPageData(resp))//setting response to state posts
      const formData = new FormData();        
      formData.append('s',searchText);
      axios.post(Config.API_BASE + "search", formData)
      .then(function (response) {
        //console.log('Console log: ', response);
        setSearchPageData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
      
  },[searchText]);
  useEffect(() => {
      if (searchPageData.length !== 0) {
          setLoading(false);
      }
      //console.log(pageData);
  }, [searchPageData]);
  
  const onChange = (e) => {
    //e.preventDefault();
    //const searchText = e.target.value;
    setSearchText(e.target.value);
    //console.log(searchText);
  }
  const handleSearchSubmit = async (e) => {    
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();        
    formData.append('s',searchText);
    await axios.post(Config.API_BASE + "search", formData)
    .then(function (response) {
      console.log('Console log: ', response);
      setSearchPageData(response.data);
      setLoading(false);
    })
    .catch(function (error) {
      console.log('Error: ', error);
    });
    
    if (searchText) navigate('/search/' + searchText);
  }
  //console.log(searchPageData);
  const totalPage = Math.ceil(searchPageData.length / postCount);
  const tagline = "Search Results";
  const title = "Showing results for <br/>\"<strong>"+searchText+"</strong>\"";
  //const intro = "The page you were looking for doesn't exist anymore.";
  useEffect(() => {      
    searchPageData.length ? setShowPosts(searchPageData.slice(startFrom, startFrom + postCount)) :  setShowPosts([])
}, [searchPageData,startFrom,postCount]);
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
  return (
    
      loading ? 
      <Loading cls="page-loader" /> : 
      <>
      <Helmet>
        <title>Search resulr for - {searchText}</title>
      </Helmet>
      <SubPageBanner tagline={tagline} title={title} featureImage={BlogBannerBg} alt="" attributes={[null, 500, 475]} /> 
      <section className="blogWrapper secPadding">
        <div className="blog-wrapper isBgBorder">
        <div className="container-lg"> 
          <div className="filterArea py-5 isBgBorder mb-5">
            <div className="row align-items-center">
              <div className="col-lg-6">
              </div>
              <div className="col-lg-6"> 
                <div className="searchInput">                          
                  <form onSubmit={handleSearchSubmit}>
                    <input className="bg-transparent h-52 rounded-pill form-control text-white" name="search" type="text" onChange={onChange} placeholder="Search here" value={searchText}/>
                  </form>
                </div>       
              </div>
            </div>
          </div>         
          {
            showPosts.length ?
            <div className="row">
            {
              showPosts.map((item, index) => (
                <div className="col-lg-4 mb-4" key={index}>
                  <SingleBlogItems data={item} />
                </div>
              ))
            } 
            </div>
            : <div className="textClrGreen text-center">Sorry no post found</div>
          }
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
                    //<ChildComponent data={item} key={index} />                    
                    <Section data={item} key={index} />                    
                ))
            }
      </>
    
    
  )
}

export default Search