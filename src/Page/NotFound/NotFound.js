import React from 'react';
import image from '../../assets/images/404.svg';
import Button from '../../Components/Button/Button';
import LazyImage from '../../Components/LazyImage';
import '../../Components/SubPageBanner/SubPageBanner.scss';
import './NotFound.scss';
//import { Navigate } from 'react-router-dom'
const NotFound = () => {
  /*let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);*/
  return (
    <section className='notFound-banner text-center subPageBanner position-relative bgClrDarkLight'>
      <div className="container-lg">
        <div className="bannerContent d-flex align-items-center justify-content-center">
          <div className="wrapper">
            <LazyImage src={image} alt="404 Page" className="img-fluid img-404-page" />
            <div class="banner-heading fs-48 fw-normal"><h2>Oops! This Page <strong>Not Found</strong></h2></div>
            <div class="banner-desc">The page you are looking for might have been removed its name, changed or is temporary unavailable.</div>
            <Button title="Back to Home" url="/"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound