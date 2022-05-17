import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router-dom";
import Config from "../../Config.json";
const Search = (props) => {
  
  const location = useLocation();
  const params = useParams();
  const [searchPageData,setBlogPageData]=useState([]);
  const [postsData,setPostsData]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
      const url = Config.API_BASE + "data-single/" + params.slug;//api url
      fetch(url).then(resp=>resp.json())//calling url by method GET
      .then(resp=>searchPageData(resp))//setting response to state posts
  },[]);
  return (
    <div>Search</div>
  )
}

export default Search