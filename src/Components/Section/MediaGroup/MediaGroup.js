import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect, useState } from 'react';
import Config from "../../../Config.json";
import Loading from "../../Loading/Loading";
import FaqBlock from '../FaqBlock/FaqBlock';
import MediaBlock from "../MediaBlock/MediaBlock";
import SliderBlock from "../SliderBlock/SliderBlock";
import TabBlock from "../TabBlock/TabBlock";
import './MediaGroup.scss';
const MediaGroup = (props) => {
    const [groupData,setGroupData]=useState([]);
    const [loading,setLoading]=useState(true); 
     
    const type = (isNaN(parseFloat(props.components)))?props.components:'block';
    const taxonomy = (isNaN(parseFloat(props.components)))?0:props.components;


    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
            let url = Config.API_BASE + 'data-list/'+type+'/'+taxonomy+'/0/' + props.count_total;
            console.log(url);
            // get the data from the api
            await axios.get(url)
            .then((response) => {
                setGroupData(response.data);
                // console.log(response.data);
            })
        }      
        // call the function
        fetchData()
        // make sure to catch any error
        .catch(console.error);
      }, [type, taxonomy, props.count_total])    

    useEffect(() => {
        if (groupData.length !== 0) {
            setLoading(false);                                                                                    
        }
    }, [groupData]);
    return (
        loading ?
        <Loading />:

        <div className="media-group">
            <div className="row">
                {console.log(props)}
                {   
                    props.layout === 'tab' && 
                        <TabBlock groupData={groupData} template={props.template}/>
                }
                {
                    props.layout === 'block' && 
                    groupData?.map((item, index) => (
                        <div className={["mb-4", props.count_col].join(' ')} key={index}>
                            <MediaBlock data={item} template={props.template}/>
                        </div>
                    ))
                }               
                {
                    props.layout === 'accordion' && 
                    <FaqBlock groupData={groupData} components={props.components} count_total={props.count_total} count_col={props.count_col} template={props.template} noCol={props.noCol}/>
                }               
                {
                    props.layout === 'slider' && 
                    <SliderBlock groupData={groupData} components={props.components} count_total={props.count_total} count_col={props.count_col} template={props.template} noCol={props.noCol} noColmd={props.noColmd} noColsm={props.noColsm}/>
                }            
            </div>
        </div>
    )
}

export default MediaGroup