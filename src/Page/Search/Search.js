import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BlogBannerBg from '../../assets/images/blogBg.png';
import SingleBlogItems from '../../Components/BlogUpdate/SingleBlogItems';
import SubPageBanner from '../../Components/SubPageBanner/SubPageBanner';
import Config from "../../Config.json";
const Search = (props) => {
  
  const location = useLocation();
  const params = useParams();  
  const navigate = useNavigate();
  const [searchPageData,setSearchPageData]=useState([]);
  const [searchText,setSearchText]=useState(params.keyword);
  //const [postsData,setPostsData]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
      // const url = Config.API_BASE + "data-list/post/0/0/6";//api url
      // fetch(url).then(resp=>resp.json())//calling url by method GET
      // .then(resp=>setSearchPageData(resp))//setting response to state posts
      const formData = new FormData();        
      formData.append('s',searchText);
      axios.post(Config.API_BASE + "search", formData)
      .then(function (response) {
        console.log('Console log: ', response);
        setSearchPageData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
      
  },[]);
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

  const tagline = "Search Results";
  const title = "Showing results for <strong>"+searchText+"</strong> ";
  const intro = "The page you were looking for doesn't exist anymore.";
  const bgImg = BlogBannerBg;
  return (
    
      loading ? 
      <div className="textClrGreen text-center">loading...</div> : 
      <>
      <SubPageBanner tagline={tagline} title={title} intro={intro} bgImg={bgImg} /> 
      <section className="blogWrapper secPadding">
        <div className="container"> 
          <div className="filterArea py-5 isBgBorder mb-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="searchInput">
                          
                  <form onSubmit={handleSearchSubmit}>
                    <input className="bg-transparent h-52 rounded-pill w-50 form-control text-white" name="search" type="text" onChange={onChange} placeholder="Search here" value={searchText}/>
                  </form>
                </div> 

              </div>
              <div className="col-lg-6">       
              </div>
            </div>
          </div>         
          {
            searchPageData.length ?
            <div className="row">
            {
              searchPageData.map((item, index) => (
                <div className="col-lg-4 mb-4" key={index}>
                  <SingleBlogItems data={item} />
                </div>
              ))
            } 
            </div>
            : <div className="textClrGreen text-center">Sorry No post Found</div>
          }
        </div>
      </section>
      </>
    
    
  )
}

export default Search