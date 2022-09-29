import { useEffect, useState } from 'react';
import SingleJobPost from "../../Components/SingleJobPost/SingleJobPost";
import Config from "../../Config.json";
import './JobOpening.scss';
const JobOpening = (props) => {    
    const increament = 6;
    const [jobData,setJobData]=useState([]);
    const [jobCount,setJobCount]=useState(increament);
    const [jobTotal,setJobTotal]=useState(0);
    const [loading,setLoading]=useState(true);
    //console.log(jobCount);
    useEffect(()=>{
        const url = Config.API_BASE + "data-list/job/0/0/" + jobCount;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setJobData(resp))//setting response to state posts
        //.then(setLoading(false))        
        //console.count();
    },[jobCount]);

    useEffect(()=>{
        const url = Config.API_BASE + "data-nop/job/0"//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setJobTotal(resp))//setting response to state posts
        //.then(setLoading(false))        
        //console.count();
    },[]);
    
    useEffect(() => {
        if (jobData.length !== 0) {
            setLoading(false);
        }
    }, [jobData]);
    
    return (
        <div className="job-listing">
            <div className="text-center">               
                {
                    props.data._mosacademy_page_group_sub_titles[0] &&
                    <div className="secTagLine" dangerouslySetInnerHTML={{__html:props.data._mosacademy_page_group_sub_titles[0]}}></div>
                }                            
                {
                    props.data._mosacademy_page_group_title_description &&
                    <div className="secIntro" dangerouslySetInnerHTML={{__html:props.data._mosacademy_page_group_title_description}}></div>
                }
            </div> 
            {
                loading
                ?<div className="textClrGreen text-center d-none">loading...</div>
                :<>                          
                    <div className="jobs-wrapper text-start">
                        <h6 className="mb-3">All Jobs</h6>
                        {jobData.map((item, index) => (
                            <SingleJobPost data={item} key={index} />
                        ))}
                    </div>
                    {
                        jobCount < jobTotal &&
                        <div className="more-btn mx-auto">
                            <span className="gw-btn text-decoration-none d-flex align-items-center justify-content-center">
                                <button className="btn bgClrGreen position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-sm-52 h-42 gap-2 d-flex align-items-center justify-content-center" onClick={()=>{setJobCount(jobCount + increament)}}>
                                    Load More...
                                </button>
                            </span>
                        </div>
                    }
                </> 
            }
            
        </div>
    )
}

export default JobOpening