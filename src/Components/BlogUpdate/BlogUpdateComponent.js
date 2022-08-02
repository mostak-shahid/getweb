import { Link } from "react-router-dom";
import MultipleItems from '../BlogSlider/BlogSlider';
import './BlogUpdateComponent.scss';

const BlogUpdateComponent = (props) => {
    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description='', _mosacademy_page_group_button} = props.data;
    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-lg-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-lg-6':'col-lg-12';
    //console.log('Blog: ',props.data)
    return (
        <div className="row">
            <div className={[widthClass, orderClass].join(' ')}>
                <div className="part-one mb-4 mb-lg-0">                        
                    {
                        _mosacademy_page_group_sub_titles[0] &&
                        <div className="secTagLine" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_sub_titles[0]}}></div>
                    }
                    {
                        _mosacademy_page_group_title_text &&
                        <div className="secTitle fw-normal fs-48 text-white mb-3" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_text}}></div>
                    }
                    {
                        _mosacademy_page_group_title_description &&
                        <div className="secIntro" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_description}}></div>
                    }
                    
                </div>
            </div>
            <div className={[widthClass].join(' ')}>
                <div className="part-two text-start">
                    <MultipleItems />
                    {
                        _mosacademy_page_group_button?.url &&
                        <div className="allInsightBtn text-center mt-5">
                            <Link to={_mosacademy_page_group_button?.url} className="btn fs-15 fwSemiBold textClrGrayDark text-decoration-none d-inline-flex align-items-center justify-content-center">
                                <span className="mr-8" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_button?.title}} />
                                <span className="btn-arrow"/>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogUpdateComponent;
