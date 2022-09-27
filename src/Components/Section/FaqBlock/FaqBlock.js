import he from 'he';
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import "./FaqBlock.scss";
const FaqBlock = (props) => {
    const [groupData,setGroupData]=useState([]);
    const [loading,setLoading]=useState(true);
    
    useEffect(() => {
        if (props.groupData.length !== 0) {
            setLoading(false);
        }
        //console.log(pageData);
        const breakPoint = Math.ceil(props.groupData.length / props.noCol)
        var outputArr = []
        for (let i = 0; i < props.groupData.length; i+=breakPoint) {
            outputArr.push(props.groupData.slice(i, i+breakPoint));
        }        
        setGroupData(outputArr);
        //console.log(groupData);
    }, [props.groupData, props.noCol]);


    
    return (

        <div className="faqList">
            {/* {console.log('Main: ', props.noCol)} */}
            {/* {console.log('Grouped: ', groupData)} */}
            <Accordion defaultActiveKey="0" flush>
                <div className="row">
                    {                                
                        loading
                        ?<div className="textClrGreen text-center d-none">loading...</div>
                        :                                
                        groupData.map((item, index) => (
                            <div className="col-xl-6" key={index}>
                                {
                                    item.map((i, j)=>(
                                        <Accordion.Item eventKey={[0, index, j].join('-')} className="mb-3 overflow-hidden" key={j}>                                            
                                            <Accordion.Header className="fs-6 fw-bold">{he.decode(i.title)}</Accordion.Header>
                                            <Accordion.Body className="fw-normal fs-6" dangerouslySetInnerHTML={{__html:i.content}} />
                                        </Accordion.Item>
                                    ))
                                }
                            </div>
                        ))}
                            
                    
                </div>
            </Accordion>
        </div>

    );
};
export default FaqBlock;
