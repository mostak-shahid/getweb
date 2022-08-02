import { Component } from "react";
import MultipleItems from '../TestimonialsSlider/TestimonialsSlider';

//const TestimonialsComponent = () => {
export default class TestimonialsComponent extends Component { 

    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {}
    }

    render() {
        
        const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = this.props.data;
        const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-lg-last':'';
        const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-lg-6':'col-lg-12';
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
                        <MultipleItems data={this.props.data} />
                    </div>
                </div>
            </div>
        );
    }
};


