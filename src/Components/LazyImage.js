import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
//import logo from '../../assets/images/loader-logo.svg';
import { useEffect, useState } from "react";
import logo from '../assets/images/loader-logo.svg';

const loadImage = (setImageDimensions, imageUrl) => {
    const img = new Image();
    img.src = imageUrl;
  
    img.onload = () => {
      setImageDimensions({
        height: img.height,
        width: img.width
      });
    };
    img.onerror = (err) => {
      console.log("img error");
      console.error(err);
    };
  };




const LazyImage = (props) => {

    const [imageDimensions, setImageDimensions] = useState({});
    const imageUrl = props.src?props.src:'';
    
    useEffect(() => {
    loadImage(setImageDimensions, imageUrl);
    //console.log(imageDimensions);
  }, [imageUrl]);

    return (
        <LazyLoadImage
            className={['lazy-load-image', 'lazyload',props.className].join(' ')}
            alt={props.alt?props.alt:''}            
            src={props.src?props.src:''} // use normal <img> attributes as props
            width={imageDimensions.width}  
            height={imageDimensions.height}        
            effect="blur"
            visibleByDefault={logo}
            loading="lazy" />
    )
}

export default LazyImage