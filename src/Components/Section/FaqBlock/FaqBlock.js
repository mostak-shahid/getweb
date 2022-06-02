import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import Config from "../../../Config.json";
import "./FaqBlock.scss";

const FaqBlock = (props) => {
    const [sectionData,setSectionData]=useState([]);
    const [groupData,setGroupData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url = Config.API_BASE + "data-list/block/"+props.components+"/0/"+props.count_total;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setSectionData(resp))//setting response to state posts
        //.then(setLoading(false))
    },[props.components,props.count_total ]);
    
    useEffect(() => {
        if (sectionData.length !== 0) {
            setLoading(false);
        }
        //console.log(pageData);
        const breakPoint = Math.ceil(sectionData.length / props.noCol)
        var outputArr = []
        for (let i = 0; i < sectionData.length; i+breakPoint) {
            outputArr.push(sectionData.slice(i, i+breakPoint));
        }
        setGroupData(outputArr);
    }, [sectionData, props.noCol]);


    
    return (

        <div className="faqList">
            {console.log('Main: ', sectionData)}
            {console.log('Grouped: ', groupData)}
            <Accordion defaultActiveKey="0" flush>
                <div className="row">
                    <div className="col-xl-6">                                
                        {
                            loading
                            ?<div className="textClrGreen text-center">loading...</div>
                            :
                                sectionData.map((item, index) => (
                                    <Accordion.Item eventKey={[0, index].join('-')} className="mb-3 isRadius16 overflow-hidden" key={index}>                                            
                                    <Accordion.Header className="fs-6 fw-bold">{item.title}</Accordion.Header>
                                    <Accordion.Body className="fw-normal fs-6" dangerouslySetInnerHTML={{__html:item.content}} />
                                </Accordion.Item>
                                ))
                            
                        } 
                    </div>
                </div>
            </Accordion>
        </div>

    );
};
export default FaqBlock;
