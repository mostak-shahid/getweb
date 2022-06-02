import React from 'react';
import Button from "../Button/Button";
import MediaGroup from './MediaGroup/MediaGroup';
import './Section.scss';
const Section = (props) => {
    /*
x_mosacademy_page_group_background_image: "http://mdshahalam.design/getwebapi/wp-content/uploads/2022/05/our-process-banner-tinyfied.jpg"
_mosacademy_page_group_background_image_id: 568
x_mosacademy_page_group_button: {title: 'Start a Project', url: '/contact'}
_mosacademy_page_group_component_count_col: "Components Columns Count"
_mosacademy_page_group_component_count_total: "Components Count"
_mosacademy_page_group_component_layout: "standard"
_mosacademy_page_group_component_name: "Component Name"
_mosacademy_page_group_components: "blog"
x_mosacademy_page_group_content_layout: "con-top"
x_mosacademy_page_group_content_width: "container"
x_mosacademy_page_group_css: "newslatter"
x_mosacademy_page_group_freature_image: "http://mdshahalam.design/getwebapi/wp-content/uploads/2022/04/feathured-img.png"
_mosacademy_page_group_freature_image_id: 381
x_mosacademy_page_group_sub_titles: ['Section Sub titles']
x_mosacademy_page_group_title_description: "<h2 style=\"text-align: center\">Ready to <strong>move forward</strong> and get results?</h2>\r\n<p style=\"text-align: center\">Schedule a free consultation with our team to discuss further details about your project.</p>"
x_mosacademy_page_group_title_text: "<p>Section Title</p>"
    */
    const {_mosacademy_page_group_content_width = "container", _mosacademy_page_group_css='',_mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description='', _mosacademy_page_group_button, _mosacademy_page_group_freature_image='', _mosacademy_page_group_background_image='', _mosacademy_page_group_components = '', _mosacademy_page_group_component_layout ='', _mosacademy_page_group_component_count_total=0, _mosacademy_page_group_component_count_col=0, _mosacademy_page_group_component_template} = props.data;

    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-md-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-md-6':'col-md-12';
    var noCol = 1;
    if (_mosacademy_page_group_component_count_col === 'col-md-6') {
        noCol = 2;
    } else if (_mosacademy_page_group_component_count_col === 'col-xl-4 col-md-6') {
        noCol = 3;
    } else if (_mosacademy_page_group_component_count_col === 'col-xl-3 col-md-6') {
        noCol = 4;
    } else if (_mosacademy_page_group_component_count_col === 'col-xl-2 col-md-4 col-sm-6') {
        noCol = 6;
    }
    return (
        <section className={['section-wrapper', 'secPadding', _mosacademy_page_group_css].join(' ')} style={props?._mosacademy_page_group_background_image && { backgroundImage: `url(${_mosacademy_page_group_background_image})` }}>
            {/*console.log(props.data)*/}
            <div className={_mosacademy_page_group_content_width}>
                <div className="row">
                    <div className={[widthClass, orderClass].join(' ')}>
                        <div className="part-one">                        
                            {
                                _mosacademy_page_group_sub_titles[0] &&
                                <div className="secTagLine" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_sub_titles[0]}}></div>
                            }
                            {/* 
                                _mosacademy_page_group_title_text &&
                                <div className="secTitle" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_text}}></div>
                        */}
                            {
                                _mosacademy_page_group_title_description &&
                                <div className="secIntro" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_description}}></div>
                            }
                            {
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
                                <MediaGroup components={_mosacademy_page_group_components} count_total={_mosacademy_page_group_component_count_total} count_col={_mosacademy_page_group_component_count_col} template={_mosacademy_page_group_component_template} layout={_mosacademy_page_group_component_layout} noCol={noCol}/>
                            }                           
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Section