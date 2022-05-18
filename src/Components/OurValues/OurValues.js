import React, { useEffect, useState } from "react";
import LineShape from "../../assets/images/secLineShape.svg";
import Config from "../../Config.json";
import MediaBlock from "../MediaBlock/MediaBlock";
import "./OurValues.scss";

const OurValues = (props) => {    
    const [sectionData,setSectionData]=useState([])
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url = Config.API_BASE + "data-list/block/25/0/6";//api url
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

    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description='',_mosacademy_page_group_button} = props.data;
        const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-last':'';
        const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-md-6':'col-md-12'; 
    return (
        <div className="row">
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
                    <div className="lineShape mb-4">
                        <img src={LineShape} alt="LineShape" />
                    </div>
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
                            <div className="col-xl-4 col-sm-6 mb-4" key={index}>
                                <MediaBlock data={item} gradient={true} withRadius={true} cls="p-30 h-100 d-flex flex-column justify-content-between"/>
                            </div>
                        ))}
                    </div>
                }                
            </div>
        </div>
    );
};

export default OurValues;
