import React, { Component } from 'react';
import "./MainComponent.scss";

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const {_mosacademy_page_group_css='',_mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description='', _mosacademy_page_group_component_name} = this.props.data;
        return (
            <section className={['secPadding', _mosacademy_page_group_css].join(' ')}>
                <div className='container'>
                    <div className='sectionHeader text-center mb-5'>
                        <span className='secTagLine fs-6 fw-bold textClrGreen mb-3 d-block' dangerouslySetInnerHTML ={{__html: _mosacademy_page_group_sub_titles[0]}}></span>
                        <div className='secTitle fw-normal fs-48 text-white mb-3' dangerouslySetInnerHTML = {{__html: _mosacademy_page_group_title_text}}></div>
                        <div className='secIntro textClrGray fs-6 fw-normal mb-2'>
                            <div className='mb-0' dangerouslySetInnerHTML = {{__html: _mosacademy_page_group_title_description}}></div>
                        </div> 
                    </div>
                    
                </div>
            </section>
        )
    }
}
