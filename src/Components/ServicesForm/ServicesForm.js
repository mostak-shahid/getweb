import FormValidation from '../FormValidation/FormValidation';

const ServicesForm = (props) => {    
    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = props.data;
    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-lg-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-lg-6':'col-sm-12'; 
    return (
        <div className="row">
            <div className={['mb-30-40-0', widthClass, orderClass].join(' ')}>
                <div className="sectionHeader">
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
                <FormValidation fields={['name', 'email', 'phone', 'company','message']}/>
            </div>
        </div>
    )
}

export default ServicesForm