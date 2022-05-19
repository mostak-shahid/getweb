import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogBannerBg from '../../assets/images/blogBg.png';
import SubPageBanner from '../../Components/SubPageBanner/SubPageBanner';
//import { Navigate } from 'react-router-dom'
const NotFound = () => {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  const tagline = "Page Not Found";
  const title = "<strong>Oops!</strong> We're sorry,";
  const intro = "The page you were looking for doesn't exist anymore.";
  const bgImg = BlogBannerBg;
  return (
    <>    
    <SubPageBanner tagline={tagline} title={title} intro={intro} bgImg={bgImg} />  
    </>
  )
}

export default NotFound