import React from 'react';
import secLineShape from "../../assets/images/secLineShape.svg";
import Button from "../Button/Button";
import './Section.scss';
const Section = (props) => {
    /*
 _mosacademy_page_group_background_image: "http://mdshahalam.design/getwebapi/wp-content/uploads/2022/05/our-process-banner-tinyfied.jpg"
_mosacademy_page_group_background_image_id: 568
_mosacademy_page_group_button: {title: 'Start a Project', url: '/contact'}
x_mosacademy_page_group_content_layout: "con-top"
x_mosacademy_page_group_content_width: "container"
x_mosacademy_page_group_css: "newslatter"
_mosacademy_page_group_freature_image: "http://mdshahalam.design/getwebapi/wp-content/uploads/2022/04/feathured-img.png"
_mosacademy_page_group_freature_image_id: 381
_mosacademy_page_group_title_description: "<h2 style=\"text-align: center\">Ready to <strong>move forward</strong> and get results?</h2>\r\n<p style=\"text-align: center\">Schedule a free consultation with our team to discuss further details about your project.</p>"   
    */
    const {_mosacademy_page_group_content_width = "container", _mosacademy_page_group_css='',_mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description='', _mosacademy_page_group_button, _mosacademy_page_group_freature_image='', _mosacademy_page_group_background_image=''} = props.data;

    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-md-last':'';
        const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-md-6':'col-md-12';
    return (
        <section className={['section-wrapper', 'secPadding', _mosacademy_page_group_css].join(' ')} style={{ backgroundImage: `url(${_mosacademy_page_group_background_image})` }}>
            {console.log(props.data)}
            <div className={_mosacademy_page_group_content_width}>
                <div className="row">
                    <div className={[widthClass, orderClass].join(' ')}>
                        <div className="part-one">                        
                            {
                                _mosacademy_page_group_sub_titles[0] &&
                                <div className="secTagLine" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_sub_titles[0]}}></div>
                            }
                            {
                                _mosacademy_page_group_title_text &&
                                <div className="secTitle" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_text}}></div>
                            }
                            {
                                _mosacademy_page_group_title_description &&
                                <div className="secIntro" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_description}}></div>
                            }
                            {
                                (_mosacademy_page_group_button?.url) && 
                                    <div className='container'>
                                        <div className='sectionHeader text-center mb-0'>
                                            <div className="d-flex justify-content-center">
                                                <Button title={_mosacademy_page_group_button?.title} url={_mosacademy_page_group_button?.url}/> 
                                            </div>
                                        </div>
                                    </div>             
                            }
                            <div className="lineShape">
                                <img src={secLineShape} alt="lineShape" />
                            </div>
                        </div>
                    </div>
                    <div className={[widthClass].join(' ')}>
                        <div className="part-two">
                            {
                                _mosacademy_page_group_freature_image && 
                                <img src={_mosacademy_page_group_freature_image} alt="" /> 
                            }                           
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Section