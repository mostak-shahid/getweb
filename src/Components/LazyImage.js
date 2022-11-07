import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from '../../src/assets/images/loader-logo.svg';
const LazyImage = (props) => {
    return (
        <LazyLoadImage
            className={['lazy-load-image', 'lazyload',props.className].join(' ')}
            src={props.src?props.src:''}
            alt={props.alt?props.alt:''}
            width={props.width?props.width:''}
            height={props.height?props.height:''}
            effect="blur"
            visibleByDefault={logo}
            loading="lazy" />
    )
}
export default LazyImage