import React, { useEffect, useState } from 'react';
import SingleJobPost from "../../Components/SingleJobPost/SingleJobPost";
import Config from "../../Config.json";
const JobOpening = (props) => {    
    const increament = 6;
    const [jobData,setJobData]=useState([]);
    const [jobCount,setJobCount]=useState(increament);
    const [jobTotal,setJobTotal]=useState(0);
    const [loading,setLoading]=useState(true);
    console.log(jobCount);
    useEffect(()=>{
        const url = Config.API_BASE + "data-list/job/0/0/" + jobCount;//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setJobData(resp))//setting response to state posts
        //.then(setLoading(false))        
        console.count();
    },[jobCount]);

    useEffect(()=>{
        const url = Config.API_BASE + "data-nop/job/0"//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setJobTotal(resp))//setting response to state posts
        //.then(setLoading(false))        
        console.count();
    },[]);
    
    useEffect(() => {
        if (jobData.length !== 0) {
            setLoading(false);
        }
    }, [jobData]);
    return (
        <div className="job-listing">
            <div className="text-center">
                <h6 className="textClrGreen fs-6 mb-3">Jobs</h6>
                <h3 className="fs-48 fw-normal mb-5">
                    Job<span className="fw-bold"> openings</span>
                </h3>
            </div> 
            {
                loading
                ?<div className="textClrGreen">loading...</div>
                :<>                          
                    <div className="jobs mb-5">
                        <h6 className="mb-3">All Jobs</h6>
                        {jobData.map((item, index) => (
                            <SingleJobPost data={item} key={index} />
                        ))}
                    </div>
                    {
                        jobCount < jobTotal &&
                        <div className="more-btn mx-auto">
                            <span className="gw-btn text-decoration-none">
                                <button className="btn position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 gap-2 d-flex align-items-center justify-content-center" onClick={()=>{setJobCount(jobCount + increament)}}>
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