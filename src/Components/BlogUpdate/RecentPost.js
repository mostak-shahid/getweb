import React from 'react'
import { NavLink } from 'react-router-dom'
import LazyImage from '../LazyImage'
import './RecentPost.scss'

const RecentPost = (props) => {
  return (
    <div className="RecentBlogPost">
        <NavLink to="#" className="d-flex align-items-center gap-3 text-decoration-none BlogPost">
                <LazyImage src={props.data.featured_image.medium} className="img-fluid recent-blog-img" alt={props.data.title} width="77" height="44" />
                <p className="mb-0 textClrGray fw-medium fs-14">{props.data.title}</p>
        </NavLink>                                
        <div className="gradientBorder my-3"> </div>
    </div>
  )
}

export default RecentPost