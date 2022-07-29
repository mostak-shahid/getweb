import { NavLink } from "react-router-dom";
import "../BlogUpdate/BlogSingle";
import "./SingleBlogItem.scss";

const SingleBlogItems = (props) => {
    //console.log(props);
    return (
        <div className="singleBlog isRadius16 d-flex flex-column justify-content-between">
            <div className="content-part">
                {
                    props?.data?.image &&
                    <div className="blogImage">
                        <NavLink to={['/blog',props?.data?.slug].join('/')} className=" text-decoration-none">
                            <img src={props?.data?.featured_image?.medium} alt={props.data.title} className="img-fluid w-100" />
                        </NavLink>
                    </div>
                }
                <div className="blogInfo p-4">
                    <h3 className="blogTitle fs-6 fw-bold mb-2">
                        <NavLink to={['/blog',props?.data?.slug].join('/')} className="text-decoration-none text-white">
                            {props.data.title}
                        </NavLink>
                    </h3>
                    <div className="blogDesc textClrGray fw-normal fs-14">
                        <p className="mb-0">{props.data.excerpt.small}</p>
                    </div>
                </div>
            </div>
            <div className="link-part p-4 pt-0">
                <NavLink to={['/blog',props?.data?.slug].join('/')} className="readMore d-flex justify-content-between align-items-center fs-14 fwSemiBold text-decoration-none">
                    <span>Read More</span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                </NavLink>
            </div>
        </div>
    );
};

export default SingleBlogItems;
