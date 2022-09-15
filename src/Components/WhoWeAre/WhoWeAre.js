import React, { useEffect, useState } from "react";
import Config from "../../Config.json";
import "./WhoWeAre.scss";

const WhoWeAre = (props) => {
    const [sectionData,setSectionData]=useState([])
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url = Config.API_BASE + "data-list/block/32/0/3";//api url
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
    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = props.data;
    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-lg-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-lg-6':'col-sm-12';

    //console.log(props);
    return (
        <div className="row">
            <div className={['mb-5 mb-lg-0',widthClass, orderClass].join(' ')}>
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
            {
                loading
                ?<div className="textClrGreen text-center d-none">loading...</div>
                :
                <div className="activity-grid-container">
                    {sectionData.map((item, index) => (
                        <div className={["items item", (index + 2)].join('')} key={index}>
                            <div className="wrapper">
                                <div className="icon" dangerouslySetInnerHTML={{__html:item.meta._mosacademy_custom_html}} />
                                <div className="title" dangerouslySetInnerHTML={{__html:item.title}}/>
                                <div className="content" dangerouslySetInnerHTML={{__html:item.content}} />
                            </div>
                        </div>
                    ))}
                </div>
            }
            </div>
        </div>
    );
};

export default WhoWeAre;
