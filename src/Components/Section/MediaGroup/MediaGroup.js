import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect, useState } from 'react';
import Config from "../../../Config.json";
import Loading from "../../Loading/Loading";
import MediaBlock from "../MediaBlock/MediaBlock";
import './MediaGroup.scss';
const MediaGroup = (props) => {
    const [groupData,setGroupData]=useState([]);
    const [loading,setLoading]=useState(true); 
    const rand = Math.floor(Math.random() * 1000);  
    const type = (isNaN(parseFloat(props.components)))?props.components:'block';
    const taxonomy = (isNaN(parseFloat(props.components)))?0:props.components;
    
    useEffect(() => {
        async function fetchData() {
            await axios.get(Config.API_BASE + 'data-list/'+type+'/'+taxonomy+'/0/' + props.count_total)
            .then((response) => {
                setGroupData(response.data);
                // console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        fetchData();        
    }, [type, taxonomy, props.count_total]);
    

    useEffect(() => {
        if (groupData.length !== 0) {
            setLoading(false);                                                                                    
        }
    }, [groupData]);

    (function() {        
      
        var section = document.querySelectorAll(".section");
        var sections = {};
        var i = 0;
      
        Array.prototype.forEach.call(section, function(e) {
            sections[e.id] = e.offsetTop;
        });
      
        window.onscroll = function() {
            var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      
            for (i in sections) {
                if (sections[i] <= scrollPosition) {
                    document.querySelector('.active').setAttribute('class', 'list-group-item list-group-item-action');
                    document.querySelector('a[href*=' + i + ']').setAttribute('class', 'list-group-item list-group-item-action active');
                    console.log(document.querySelector('a[href*=' + i + ']'));
                }
            }
        };
      })();
      


    return (
        loading ?
        <Loading />:

        <div className="media-group">
            <div className="row">
                {/*console.log(props.count_col)*/}
                {   
                    props.layout === 'tab' 
                    ? 
                    <>
                        <div className="col-4">
                            <div className="list-group position-sticky top-0 start-0" >
                                {groupData.map((item, index) => (                        
                                    <a className={["list-group-item list-group-item-action", !index?'active':''].join(' ')} href={["#list-item", rand, index].join('-')} dangerouslySetInnerHTML={{__html: item.title}}key={index}/>
                                ))}
                            </div>
                        </div>
                        <div className="col-8">
                            {
                                groupData.map((item, index) => (
                                    <div id={["list-item", rand, index].join('-')} className="section" key={index}>
                                        <MediaBlock data={item} template={props.template}/>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                    : groupData.map((item, index) => (
                        <div className={["mb-4", props.count_col].join(' ')} key={index}>
                            <MediaBlock data={item} template={props.template}/>
                        </div>
                    ))
                }               
            </div>
        </div>
    )
}

export default MediaGroup