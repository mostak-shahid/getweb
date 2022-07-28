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
                {props?.data?.title &&
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
                    <i className="fa-solid fa-angle-right"></i>
                </NavLink>
            </div>
            }
        </div>
    )
}

export default MediaBlock