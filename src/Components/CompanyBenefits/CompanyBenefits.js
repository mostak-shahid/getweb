import React, { useEffect, useState } from 'react';
import Config from "../../Config.json";

const CompanyBenefits = (props) => {
    const [sectionData,setSectionData]=useState([])
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url = Config.API_BASE + "data-list/block/28/0/6";//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setSectionData(resp))//setting response to state posts
        //.then(setLoading(false))
    },[]);
    
    useEffect(() => {
        if (sectionData.length !== 0) {
            setLoading(false);
        }
        //console.log(pageData);
    }, [sectionData]);
    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description='',_mosacademy_page_banner_button} = props.data;
    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-md-6':'col-md-12'; 
    //console.log(props)
    return (
        <div className="row">
            {/* {console.log(props)} */}
            <div className={[widthClass, orderClass].join(' ')}>
                <div className="sectionHeader text-center mb-5">
                    {
                        _mosacademy_page_group_sub_titles[0] &&
                        <div className="secTagLine fs-6 fw-bold textClrGreen mb-3 d-block" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_sub_titles[0]}}></div>
                    }
                    {
                        _mosacademy_page_group_title_text &&
                        <div className="secTitle fw-normal fs-48 text-white mb-3" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_text}}></div>
                    }
                    {
                        _mosacademy_page_group_title_description &&
                        <div className="secIntro textClrGray fs-6 fw-normal" dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_description}}></div>
                    }
                </div>

            </div>
            <div className={[widthClass].join(' ')}>
                {
                    loading
                    ?<div className="textClrGreen">loading...</div>
                    :<div className="row">
                        {sectionData.map((item, index) => (
                            <div className="col-md-4" key={item.id}>
                                <div className="benifit-item">
                                    {item.image && 
                                        <img src={item.image} alt="icon" /> 
                                    }
                                    <h6 dangerouslySetInnerHTML={{__html:item.title}}/>
                                </div>
                            </div>
                        ))}
                    </div>
                }                
            </div>
        </div>
    )
}

export default CompanyBenefits