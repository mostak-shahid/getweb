import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Config from '../../Config.json';
import TechnologiesBar from './TechnologiesBar/TechnologiesBar';
const GroupTechonologiesbar = (props) => {
    const [technologiesData, setTechnologiesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const tags = (props.data?._mosacademy_page_group_component_data)?props.data?._mosacademy_page_group_component_data:0;

    useEffect(() => {
        // console.log(props.data);
        async function fetchData() {
            await axios
            .get(Config.API_BASE + "data-taxonomies/technology_catagory/" + tags)
            .then(function (response) {
                setTechnologiesData(response.data);
                //console.log(response)
            });
        }
        fetchData();
    }, [tags, props.data]);
    useEffect(() => {
        if (technologiesData.length !== 0) {
            setLoading(false);
        }
    }, [technologiesData]);
    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description='', _mosacademy_page_group_button} = props.data;
    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-lg-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-lg-6':'col-lg-12';
    return loading ? 
    <div className="textClrGreen text-center loder-text d-none">loading...</div> :
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
                                 
                             
                        <div className="singleTechnologyBar">
                            {/* { console.log(technologiesData)} */}
                            {
                                (technologiesData.length) && 
                                technologiesData.map((item, index) => ( 
                                        (item.count!=="0") && <TechnologiesBar data={item} key={index} />                                
                                    )
                                )
                            }
                        </div>

                    
                
                {
                    // (technologiesData.length) &&
                    // <div className="singleTechnology p-2 border-start-0 frontend-development">
                    //     <div className="singleTechLogo d-flex align-items-center justify-content-center flex-wrap gap-2">
                    //     {
                    //             (technologiesData.length) && 
                    //             technologiesData.map((item, index) => ( 
                    //                     (item.count!=="0") && <TechnologiesBar data={item} key={index} />                                
                    //                 )
                    //             )
                    //         }
                    //     </div>
                    // </div>
                }
                
                {
                    _mosacademy_page_group_button?.url &&
                    <div className="allInsightBtn text-center mt-5">
                        <Link to={_mosacademy_page_group_button?.url} className="btn fs-15 fwSemiBold textClrGrayDark text-decoration-none d-inline-flex align-items-center gap-2 justify-content-center">
                            {_mosacademy_page_group_button?.title}
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </Link>
                    </div>
                }
            </div>
        </div>
    </div>
}

export default GroupTechonologiesbar