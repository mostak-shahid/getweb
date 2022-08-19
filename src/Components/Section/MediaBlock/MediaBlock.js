import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './MediaBlock.scss';

const MediaBlock = (props) => {
    //console.log(props);
    const[open, setOpen] = useState(false)
    return (
        <div className={['media-block block-unit', props?.template ].join(' ')}>
            <div className='block-part-one'>        
                {props?.data?.featured_image?.full && 
                    <div className='block-image'>
                        <img src={props?.data?.featured_image?.full} alt={props?.data?.title} />
                    </div>
                }               
                {props?.data?.meta?._mosacademy_custom_html && 
                    <div className='custom-html' dangerouslySetInnerHTML={{__html:props?.data?.meta?._mosacademy_custom_html}} />
                }        
                {props?.data?.title &&  props?.data?.title !== "Untitled" &&
                    <h3 className={['block-title', open ? 'active':''].join(' ')} onClick={()=>setOpen(!open)}>
                        {props?.data?.meta?._mosacademy_blobk_url?.url
                            ? <a href={props?.data?.meta?._mosacademy_blobk_url?.url} className='block-title-link' dangerouslySetInnerHTML={{__html: props?.data?.title}} />
                            : <span className='block-title-text' dangerouslySetInnerHTML={{__html: props?.data?.title}} />
                        }
                    </h3>
                }
                {props?.data?.content &&
                    <div className='block-desc' dangerouslySetInnerHTML={{__html:props?.data?.content}} />
                }
            </div>
            {props?.data?.meta?._mosacademy_blobk_url?.url &&
            <div className='block-part-two'>
                <NavLink to={props?.data?.meta?._mosacademy_blobk_url?.url} className='fs-14 fwSemiBold d-flex align-items-center block-btn mt-3'>
                    <span dangerouslySetInnerHTML={{__html:props?.data?.meta?._mosacademy_blobk_url?.title ? (props?.data?.meta?._mosacademy_blobk_url?.title) : 'Read More'}} />                    
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.05371 15.77L12.2154 10.6083C12.825 9.99873 12.825 9.00123 12.2154 8.39165L7.05371 3.22998" stroke="#6B6E78" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </NavLink>
            </div>
            }
        </div>
    )
}

export default MediaBlock