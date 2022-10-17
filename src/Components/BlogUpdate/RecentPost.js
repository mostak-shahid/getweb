import React from 'react'
import { NavLink } from 'react-router-dom'
import LazyImage from '../LazyImage'
import './RecentPost.scss'

const RecentPost = (props) => {
  return (
    <div className="RecentBlogPost">
        <NavLink to={['/blog',props?.data?.slug].join('/')} className="d-flex align-items-center gap-3 text-decoration-none BlogPost">
                <LazyImage src={props.data.featured_image.medium} className="img-fluid recent-blog-img" alt={props.data.title} width="77px" height="44px" />
                <p className="mb-0 textClrGray fw-medium fs-14" dangerouslySetInnerHTML={{__html:props.data.title}}/>
        </NavLink>                                
        <div className="gradientBorder my-3"> </div>
    </div>
  )
}

export default RecentPost