import React from 'react';
import Button from "../Button/Button";
import MainComponent from '../MainComponent/MainComponent';
import MediaGroup from './MediaGroup/MediaGroup';
import './Section.scss';
const Section = (props) => {
    const {_mosacademy_page_group_content_width = "container", _mosacademy_page_group_css='',_mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_description='', _mosacademy_page_group_button, _mosacademy_page_group_freature_image='', _mosacademy_page_group_background_image='', _mosacademy_page_group_components = '', _mosacademy_page_group_component_layout ='', _mosacademy_page_group_component_count_total=0, _mosacademy_page_group_component_count_col=0, _mosacademy_page_group_component_template, group_slug, _mosacademy_page_group_component_name} = props.data;

    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-md-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-md-6':'col-md-12';
    var noCol = 1;
    var noColmd = 1;
    var noColsm = 1;
    if (_mosacademy_page_group_component_count_col === 'col-md-6') {
        noCol = 2;
        noColmd = 1;
        noColsm = 1;
    } else if (_mosacademy_page_group_component_count_col === 'col-xl-4 col-md-6') {
        noCol = 3;
        noColmd = 2;
        noColsm = 1;
    } else if (_mosacademy_page_group_component_count_col === 'col-xl-3 col-md-6') {
        noCol = 4;
        noColmd = 2;
        noColsm = 1;
    } else if (_mosacademy_page_group_component_count_col === 'col-xl-2 col-md-4 col-sm-6') {
        noCol = 6;
        noColmd = 3;
        noColsm = 2;
    }
    return (
        _mosacademy_page_group_component_name ?
        
        <MainComponent  data={props.data} /> :
        
        <section className={['section-wrapper', 'secPadding', group_slug, _mosacademy_page_group_css].join(' ')} style={props?._mosacademy_page_group_background_image && { backgroundImage: `url(${_mosacademy_page_group_background_image})` }}>
            <div className={_mosacademy_page_group_content_width}>
                <div className="row">
                    <div className={[widthClass, orderClass].join(' ')}>
                        <div className="part-one">                        
                            {
                                _mosacademy_page_group_sub_titles[0] &&
                                <div className="secTagLine" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_sub_titles[0]}}></div>
                            }                            
                            {
                                _mosacademy_page_group_title_description &&
                                <div className="secIntro" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_description}}></div>
                            }
                            {
                                _mosacademy_page_group_component_layout !== "slider" &&
                                (_mosacademy_page_group_button?.url) &&
                                <Button title={_mosacademy_page_group_button?.title} url={_mosacademy_page_group_button?.url}/>                                                
                            }
                        </div>
                    </div>
                    <div className={[widthClass].join(' ')}>
                        <div className="part-two text-start">
                            {
                                _mosacademy_page_group_freature_image && 
                                <img src={_mosacademy_page_group_freature_image} alt="" /> 
                            }
                            {
                                _mosacademy_page_group_components && 
                                <MediaGroup components={_mosacademy_page_group_components} count_total={_mosacademy_page_group_component_count_total} count_col={_mosacademy_page_group_component_count_col} template={_mosacademy_page_group_component_template} layout={_mosacademy_page_group_component_layout} noCol={noCol} noColmd={noColmd} noColsm={noColsm}/>
                            } 
                            {
                                _mosacademy_page_group_component_layout === "slider" &&
                                (_mosacademy_page_group_button?.url) &&
                                <div className="part-two-button"><Button title={_mosacademy_page_group_button?.title} url={_mosacademy_page_group_button?.url}/></div>                                                
                            }                          
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Section