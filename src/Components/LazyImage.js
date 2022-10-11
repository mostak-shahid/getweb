import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from '../../src/assets/images/loader-logo.svg';
//import logo from '../../assets/images/loader-logo.svg';

const handleConvertedImage = (url) => {  
    console.log(url);
}
const LazyImage = (props) => {
    return (
        <LazyLoadImage
            className={['lazy-load-image', 'lazyload',props.className].join(' ')}
            src={props.src?props.src:''} // use normal <img> attributes as props
            alt={props.alt?props.alt:''}
            width={props.width?props.width:''}
            height={props.height?props.height:''}
            effect="blur"
            visibleByDefault={logo}
            loading="lazy" />
        // <LazyLoadComponent>
        //     <img 
        //     className={['lazy-load-image', 'lazyload',props.className].join(' ')}
        //     src={props.src?props.src:''} // use normal <img> attributes as props
        //     alt={props.alt?props.alt:''}
        //     width={props.width?props.width:''}
        //     height={props.height?props.height:''}
        //     />
        //     <ConvertImage
        //         image={props.src?props.src:''}
        //         onConversion={handleConvertedImage}
        //     />
        // </LazyLoadComponent>
    )
}
export default LazyImage