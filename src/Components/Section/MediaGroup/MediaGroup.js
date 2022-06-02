import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect, useState } from 'react';
import Config from "../../../Config.json";
import Loading from "../../Loading/Loading";
import FaqBlock from '../FaqBlock/FaqBlock';
import MediaBlock from "../MediaBlock/MediaBlock";
import './MediaGroup.scss';
const rand = Math.floor(Math.random() * 1000); 
const MediaGroup = (props) => {
    const [groupData,setGroupData]=useState([]);
    const [loading,setLoading]=useState(true); 
     
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

    const [offset, setOffset] = useState(0);
    useEffect(() => {
        //setOffset(window.pageYOffset);
        const onScroll = () => {
            setOffset(window.pageYOffset)
            //setOffset(window.offsetTop)
            var section = document.querySelectorAll(".section");
            var sections = {};
            var i = 0;
            Array.prototype.forEach.call(section, function(e) {
                sections[e.id] = e.offsetTop;
            });
            if (offset) {
                for (i in sections) {
                    //console.log('Curent: ', sections[i])
                    //console.log('Offset: ',offset)
                    if (sections[i] <= offset) {
                        document.querySelector('.active').setAttribute('class', 'list-group-item list-group-item-action');
                        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'list-group-item list-group-item-action active');
                        //console.log(document.querySelector('a[href*=' + i + ']'));
                    }
                }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
    }, [offset]);
      
    const handleClick = (e) => {
        e.preventDefault()
        // e.target.parentElement.querySelector('.list-group-item.active').classList.remove("active")
        // e.target.classList.add("active")
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop  
        window.scrollTo({
            left: 0,
            //top: location - 64,
            top: location + 100,
        })
        //setOffset(location)
    }
    return (
        loading ?
        <Loading />:

        <div className="media-group">
            <div className="row">
                {/*console.log(props.count_col)*/}
                {   
                    props.layout === 'tab' && 
                    <>
                        <div className="col-4">
                            <div className="list-group position-sticky top-0 start-0" >
                                <h4 className="fs-24">Contents</h4>
                                {groupData.map((item, index) => (                        
                                    <a onClick={handleClick} href={["#list-item", rand, index].join('-')} className={["list-group-item list-group-item-action", !index?'active':''].join(' ')} dangerouslySetInnerHTML={{__html: item.title}} key={index}/>
                                ))}
                            </div>
                        </div>
                        <div className="col-8">
                            {
                                groupData.map((item, index) => (
                                    <div id={["list-item", rand, index].join('-')} className="section tab-content" key={index}>
                                        <MediaBlock data={item} template={props.template}/>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                }
                {
                    props.layout === 'block' && 
                    groupData.map((item, index) => (
                        <div className={["mb-4", props.count_col].join(' ')} key={index}>
                            <MediaBlock data={item} template={props.template}/>
                        </div>
                    ))
                }               
                {
                    props.layout === 'accordion' && 
                    //components={_mosacademy_page_group_components} count_total={_mosacademy_page_group_component_count_total} count_col={_mosacademy_page_group_component_count_col} template={_mosacademy_page_group_component_template} layout={_mosacademy_page_group_component_layout}
                    <FaqBlock components={props.components} count_total={props.count_total} count_col={props.count_col} template={props.template} noCol={props.noCol}/>
                }               
            </div>
        </div>
    )
}

export default MediaGroup