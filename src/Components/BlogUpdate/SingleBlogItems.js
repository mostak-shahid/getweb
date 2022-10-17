import { NavLink, useNavigate } from "react-router-dom";
import "../BlogUpdate/BlogSingle";
import LazyImage from "../LazyImage";
import "./SingleBlogItem.scss";
/*const handleClick = (e) => {
    //e.preventDefault()
    // window.scrollTo(0, 0);
    const target = e.target.getAttribute('data-target')
    const location = document.querySelector(target).offsetTop
    console.log(e.target.getAttribute('href'))  
    window.scrollTo({
        left: 0,
        top: location,
        behavior: 'smooth'
    });
}*/
const SingleBlogItems = (props) => {
    //console.log(props);
    
    const navigate = useNavigate();
    const handleClick = (e) => { 
        //window.location.reload(false)
        //console.log(e.target.getAttribute('href'))   
        // e.preventDefault();            
        // if (e.target.getAttribute('href')) {
        //     console.log(e.target.getAttribute('href')) 
        //     navigate(e.target.getAttribute('href'));
        // }

        const target = e.target.getAttribute('data-target')
        const location = document.querySelector(target).offsetTop
        console.log(e.target.getAttribute('href'))  
        window.scrollTo({
            left: 0,
            top: location,
            behavior: 'smooth'
        });
    }
    return (
        <div className="singleBlog isRadius16 d-flex flex-column justify-content-between">
            <div className="content-part">
                {
                    props?.data?.image &&
                    <div className="blogImage">
                        <NavLink to={['/blog',props?.data?.slug].join('/')} className="text-decoration-none" onClick={handleClick} data-target="#root">
                            <LazyImage src={props?.data?.featured_image?.medium} alt={props.data.title} className="img-fluid w-100"  width="300px" height="172px" />
                        </NavLink>
                    </div>
                }
                <div className="blogInfo p-4">
                    <h3 className="blogTitle fs-6 fw-bold mb-2">
                        <NavLink to={['/blog',props?.data?.slug].join('/')} className="text-decoration-none text-white" dangerouslySetInnerHTML={{__html:props.data.title}} onClick={handleClick} data-target="#root" />
                    </h3>
                    <div className="blogDesc textClrGray fw-normal fs-14">
                        <p className="mb-0">{props.data.excerpt.medium}</p>
                    </div>
                </div>
            </div>
            <div className="link-part p-4 pt-0">
                <NavLink to={['/blog',props?.data?.slug].join('/')} className="readMore d-flex align-items-center fs-14 fwSemiBold text-decoration-none" onClick={handleClick} data-target="#root" >
                    <span>Read More</span>                    
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.0625 10.5H17.7887" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </NavLink>
            </div>
        </div>
    );
};

export default SingleBlogItems;
