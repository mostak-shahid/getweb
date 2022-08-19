import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import logo from '../../assets/images/loader-logo.svg';
import logo from '../assets/images/loader-logo.svg';
const LazyImage = (props) => {
    return (
        <LazyLoadImage
            className='lazy-load-image'
            alt={props.alt?props.alt:''}
            // height={props.height?props.height:''}
            src={props.src?props.src:''} // use normal <img> attributes as props
            // width={props.width?props.width:''}
            effect="blur"
            visibleByDefault={logo} />
    )
}

export default LazyImage