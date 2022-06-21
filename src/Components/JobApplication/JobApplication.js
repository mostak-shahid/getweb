import axios from 'axios';
import { Component } from 'react';
import { useParams } from "react-router-dom";
import FileIcon from "../../assets/images/file.svg";
import Config from '../../Config.json';
import MainComponent from '../MainComponent/MainComponent';
import JobDetailsBanner from '../SubPageBanner/JobDetailsBanner';
import SuccessfulModal from '../SuccessfulModal/SuccessfulModal';
import "./JobApplication.scss";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class JobApplication extends Component {    
    UPLOAD_ENDPOINT = Config.API_BASE + 'job-apply';
    //UPLOAD_ENDPOINT = Config + 'job-apply';
    //UPLOAD_ENDPOINT = 'http://api.getweb.localhost/api-uploads.php';
    constructor(props) {
        super(props);
        this.state ={
            file:null,
            jobs: null,            
            job_id: 0,
            first_name: "",
            last_name: "",
            email: "",
            country: 0,
            loading: true,
            showModal: false,
            errors: {                    
                first_name: "",
                last_name: "",
                email: "",
                cv:""
            } 
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onChangeFile = this.onChangeFile.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
        this.onBlur = this.onBlur.bind(this)
    }
    
    async componentDidMount() {
        const {slug} = this.props.params;
        //console.log(slug);
        this.setState({ 
            job_id: slug,
            pageData: [],
        });
        await axios.get(Config.API_BASE + "data-list/job/0")
        .then(res => {
            //const persons = res.data;
            this.setState({ 
                jobs: res.data
            });
        });        
        const url = Config.API_BASE + "data-single/" + Config.JOB_APPLICATION_ID;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            pageData: data, 
            loading: false,
        });
    }
    async onSubmit(e){
        e.preventDefault();        
        //const {slug} = this.props.params; 
        if (this.state.file?.name){
            console.log(0);  
            let res = await this.uploadFile(this.state.file);
            if(res.data.req.data.status){
                this.setState({
                    file:null,
                    // jobs: null,            
                    // job_id: slug,
                    first_name: "",
                    last_name: "",
                    email: "",
                    country: 0,
                    showModal:true,
                    errors: {                    
                        first_name: "",
                        last_name: "",
                        email: "",
                        cv:""
                    },
                    errCount : 0
                });
            } else {
                alert('You have already allpied for this job.');
            }
            //console.log(res.data.req.data.status);
        } else {
            this.setState({
                errors: {
                    cv: "CV is required"
                },
                errCount : 1
            })
        }

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
    onBlur(e) {        
        const elementRequired = e.target.required;      
        const elementPattern = e.target.pattern;  
        console.log(e.target.name);  
        console.log(elementRequired);
        console.log(elementPattern);
        var errors = { ...this.state.errors }  
        //var {...errors} = this.state.errors
        errors[e.target.name] = "";
        if(elementPattern && !e.target.value.match(elementPattern)) {
            errors[e.target.name] = this.errorMessages[e.target.name].pattern
            if (!elementRequired && !e.target.value) 
                errors[e.target.name] = ""
        }
        if (elementRequired && !e.target.value) errors[e.target.name] = this.errorMessages[e.target.name].required
        
        /*(elementRequired && !e.target.value)
            ?errors[e.target.name] = this.errorMessages[e.target.name].required
            :(elementPattern && !e.target.value.match(elementPattern)) 
                ?errors[e.target.name] = this.errorMessages[e.target.name].pattern
                :''*/

        this.setState({ errors })
        console.log(errors)
    }
    handleClose = () => this.setState({showModal:false});
    //handleShow = () => this.setState({showModal:true});    
    errorMessages = {
        first_name: {
            required:"First Name is required",
            pattern: "First Name validation Error",
        },
        last_name: {
            required:"Last Name is required",
            pattern: "Last Name validation Error",
        },
        email: {
            required:"Email is required",
            pattern: "Email validation Error",
        }
    };
    render() {
        // console.log('State: ',this.state);
        // console.log('Props: ', this.props);
        // console.log('Jobs: ', this.state.jobs);
        // console.log('Loading: ', this.state.loading);
        if (this.state.loading) {
            return <div className="textClrGreen text-center">loading...</div>;
        }
        if (!this.state.jobs) {
            return <div>Didn't get data from API</div>;
        }
        //console.log(this.state.pageData);
        return (
            <>         
                <JobDetailsBanner title={this.state.pageData.meta._mosacademy_page_banner_title} content={this.state.pageData.meta._mosacademy_page_banner_intro}/>
                <section className="JobApplicationForm secPadding">                
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
                                                <option value="0">Position applying for</option>
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
                                                    <input name="first_name" id="first_name" type="text" className="form-control rounded-pill h-42 px-4" placeholder="Enter your first name" value={this.state.first_name} autoFocus onChange={ this.onChange } onBlur={this.onBlur} required pattern="^[A-Za-z .]+$" />
                                                    {this.state?.errors?.first_name && <div className="text-danger mt-1">{this.state.errors.first_name}</div>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="field mb-4">
                                                    <label htmlFor="country" className="textClrThemeDark fs-13 fwSemiBold">Last Name</label>
                                                    <input name="last_name" id="last_name" type="text" className="form-control rounded-pill h-42 px-4" placeholder="Enter your last name" value={this.state.last_name} onChange={ this.onChange } onBlur={this.onBlur} pattern="^[A-Za-z .]+$"/>
                                                    {this.state?.errors?.last_name && <div className="text-danger mt-1">{this.state.errors.last_name}</div>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="field mb-4">
                                                    <label htmlFor="email" className="textClrThemeDark fs-13 fwSemiBold">Email</label>
                                                    <input name="email" id="email" type="email" className="form-control rounded-pill h-42 px-4" placeholder="Enter your email" value={this.state.email} onChange={ this.onChange } onBlur={this.onBlur} required pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$" />
                                                    {this.state?.errors?.email && <div className="text-danger mt-1">{this.state.errors.email}</div>}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="field mb-4">
                                                    <label htmlFor="country" className="textClrThemeDark fs-13 fwSemiBold">Country</label>
                                                    <select name="country" id="country" className="form-select rounded-pill h-42 px-4" defaultValue={this.state.country} onChange={ this.onChange }>
                                                        <option value="0">Select your country</option>
                                                        <option>Bangladesh</option>
                                                        <option>India</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="cv" className="textClrThemeDark fs-13 fwSemiBold d-block position-relative">
                                                <p className="mb-2">Upload CV</p>
                                                <input name='cv' id='cv' type="file" className="opacity-0 position-absolute bottom-0 end-0 top-0 start-0 z-index-9" onChange={ this.onChangeFile } required/>
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
                                        <SuccessfulModal show={this.state.showModal} handleClose={this.handleClose} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                     
            {
            this.state.pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                <MainComponent data={item} key={index} />                        
            ))
            }
            </>
        )
    }
}

export default withParams(JobApplication);
