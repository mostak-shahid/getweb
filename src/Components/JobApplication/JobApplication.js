import axios from 'axios';
import React, { Component } from 'react';
import { useParams } from "react-router-dom";
import FileIcon from "../../assets/images/file.svg";
import Config from '../../Config.json';
import ReadyToMove from '../ReadyToMove/ReadyToMove';
import "./JobApplication.scss";
//import axios from 'axios';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class JobApplication extends Component {    
    UPLOAD_ENDPOINT = 'http://mdshahalam.design/getwebapi/wp-json/mos-getweb-api/v1/job-apply';
    //UPLOAD_ENDPOINT = 'http://api.getweb.localhost/api-uploads.php';
    constructor(props) {
        super(props);
        this.state ={
            file:null,
            jobs: null,            
            job_id: '',
            first_name: "",
            last_name: "",
            email: "",
            country: "",
            loading: true 
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onChangeFile = this.onChangeFile.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
    }
    
    async componentDidMount() {
        const {slug} = this.props.params;
        //console.log(slug);
        this.setState({ 
            job_id: slug,
        });
        await axios.get(Config.API_BASE + "data-list/job/0")
        .then(res => {
            //const persons = res.data;
            this.setState({ 
                jobs: res.data,
                loading: false
            });
        })
    }
    async onSubmit(e){
        e.preventDefault() 
        let res = await this.uploadFile(this.state.file);
        console.log(res.data);
        this.setState({
            file:null,
            jobs: null,            
            job_id: '',
            first_name: "",
            last_name: "",
            email: "",
            country: "",
        })
    }
    onChangeFile(e) {
        this.setState({file:e.target.files[0]})
    }
    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }
    async uploadFile(file){
        const formData = new FormData();        
        formData.append('job_id',this.state.job_id);
        formData.append('first_name',this.state.first_name);
        formData.append('last_name',this.state.last_name);
        formData.append('email',this.state.email);
        formData.append('country',this.state.country);
        formData.append('cv',file);
        return  await axios.post(this.UPLOAD_ENDPOINT, formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
    }  
    render() {
        // console.log('State: ',this.state);
        // console.log('Props: ', this.props);
        // console.log('Jobs: ', this.state.jobs);
        // console.log('Loading: ', this.state.loading);
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        if (!this.state.jobs) {
            return <div>Didn't get data from API</div>;
        }
        return (
            <section className="JobDetails">            
                <div className="JobDetailsBanner bgClrDark5">
                    <div className="container">
                        <div className="JobBannerContent d-flex align-items-center">
                            <div className="content">
                                <h2 className="jobTitle fs-48 fw-bold text-white mb-4">Job Application Form</h2>
                                <div className="jobIntro fs-18 text-white fw-normal">
                                    <p className="mb-0">
                                        Working with our clients' point of contact to build low and high-fidelity website wireframes that utilize the most effective strategies and remain within the goals
                                        of our client.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="JobApplicationForm secPadding">                
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="ApplicationForm bgClrSolitude isRadius16 p-4 p-lg-5">
                                    <div className="contactHeader mb-4">
                                        <h2 className="textClrThemeDark fs-4 fw-bold mb-3">Fillup the Job Application Form</h2>
                                        <p className="textClrGrayDark fs-6 fw-normal mb-0">It usually takes us up to 48 hours to get back to you.</p>
                                    </div>
                                    <form onSubmit={ this.onSubmit }>
                                        <div className="selectJobTitle mb-3">
                                            <label htmlFor="job_id" className="textClrThemeDark fs-13 fwSemiBold">Job Title</label>
                                            <select name="job_id" id="job_id" className="form-select rounded-pill h-42 px-4" defaultValue={this.state.job_id} disabled>
                                                <option value="">Position applying for</option>
                                                {
                                                    this.state.jobs.map((item, index) => (
                                                        <option value={item.slug} key={index} dangerouslySetInnerHTML={{__html: item.title}} />
                                                    ))
                                                    
                                                }
                                            </select>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="field mb-4">
                                                    <label htmlFor="first_name" className="textClrThemeDark fs-13 fwSemiBold">First Name</label>
                                                    <input name="first_name" id="first_name" type="text" className="form-control rounded-pill h-42 px-4" placeholder="Enter your first name" value={this.state.first_name}  onChange={ this.onChange } />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="field mb-4">
                                                    <label htmlFor="country" className="textClrThemeDark fs-13 fwSemiBold">Last Name</label>
                                                    <input name="last_name" id="last_name" type="text" className="form-control rounded-pill h-42 px-4" placeholder="Enter your last name" value={this.state.last_name} onChange={ this.onChange } />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="field mb-4">
                                                    <label htmlFor="email" className="textClrThemeDark fs-13 fwSemiBold">Email</label>
                                                    <input name="email" id="email" type="email" className="form-control rounded-pill h-42 px-4" placeholder="Enter your email" value={this.state.email} onChange={ this.onChange } />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="field mb-4">
                                                    <label htmlFor="country" className="textClrThemeDark fs-13 fwSemiBold">Country</label>
                                                    <select name="country" id="country" className="form-select rounded-pill h-42 px-4" defaultValue={this.state.country} onChange={ this.onChange }>
                                                        <option value="">Select your country</option>
                                                        <option>Bangladesh</option>
                                                        <option>India</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="cv" className="textClrThemeDark fs-13 fwSemiBold d-block">
                                                <p className="mb-2">Upload CV</p>
                                                <input name='cv' id='cv' type="file" className="d-none" onChange={ this.onChangeFile } />
                                                <div className="fileBody bg-white p-4 isRadius12 d-flex justify-content-center align-items-center gap-3 gap-xl-4">
                                                    <img src={FileIcon} alt="icon" />
                                                    <p className="fs-14 fw-medium textClrGray mb-0">{this.state.file?.name?this.state.file.name:'Upload your CV'}</p>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="sbm-btn text-end">
                                            <button type="submit" className="btn bgClrGreen w-100 h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill">
                                                Submit Application
                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
                <ReadyToMove />
            </section>
        )
    }
}

export default withParams(JobApplication);
