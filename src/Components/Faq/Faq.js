import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import Config from "../../Config.json";
import "./Faq.scss";

const Faq = (props) => {
    const [sectionData,setSectionData]=useState([]);
    const [sectionDataTwo,setSectionDataTwo]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const url = Config.API_BASE + "data-list/block/27/0/3";//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setSectionData(resp))//setting response to state posts
        //.then(setLoading(false))
    },[]);

    useEffect(()=>{
        const url = Config.API_BASE + "data-list/block/27/3/3";//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setSectionDataTwo(resp))//setting response to state posts
        //.then(setLoading(false))
    },[]);
    
    useEffect(() => {
        if (sectionData.length !== 0 || sectionDataTwo.length !== 0) {
            setLoading(false);
        }
        //console.log(pageData);
    }, [sectionData,sectionDataTwo]);
    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_sub_titles = '', _mosacademy_page_group_title_text='', _mosacademy_page_group_title_description=''} = props.data;
    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-lg-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-lg-6':'col-lg-12'; 


    
    return (
        <div className="row">
            <div className={[widthClass, orderClass].join(' ')}>
                <div className="sectionHeader text-center mb-5">
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
                <div className="faqList">
                    <Accordion defaultActiveKey="0" flush>
                        <div className="row">
                            {
                                // dataOutput.map((item, index)=>(
                                //     <div className="output" key={index}>{index}. {item[0].title}</div>
                                // ))
                            }
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
                            <div className="col-xl-6">
                                                      
                            {
                                    loading
                                    ?<div className="textClrGreen text-center">loading...</div>
                                    :
                                        sectionDataTwo.map((item, index) => (
                                            <Accordion.Item eventKey={[1, index].join('-')} className="mb-3 isRadius16 overflow-hidden" key={index}>
                                            <Accordion.Header className="fs-6 fw-bold">{item.title}</Accordion.Header>
                                            <Accordion.Body className="fw-normal fs-6" dangerouslySetInnerHTML={{__html:item.content}} />
                                        </Accordion.Item>
                                        ))
                                    
                                } 
                            </div>
                        </div>
                    </Accordion>
                </div>
            </div>
        </div>

    );
};
export default Faq;
