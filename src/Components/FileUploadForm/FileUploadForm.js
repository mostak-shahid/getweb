import axios from 'axios';
import React from 'react';

class FileUploadForm extends React.Component {
    UPLOAD_ENDPOINT = 'http://mdshahalam.design/getwebapi/wp-json/mos-getweb-api/v1/job-apply';
    //UPLOAD_ENDPOINT = 'http://api.getweb.localhost/api-uploads.php';
    constructor(props) {
        super(props);
        this.state ={
            file:null,            
            job_id: '',
            first_name: "",
            last_name: "",
            email: "",
            country: "",
            
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onChangeFile = this.onChangeFile.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
    }
    async onSubmit(e){
        e.preventDefault() 
        let res = await this.uploadFile(this.state.file);
        console.log(res.data);
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
        console.log(this.state);
        return (
            <div className="d-flex align-items-center justify-content-center h-100vh">
                <form onSubmit={ this.onSubmit }>
                    <h1> React File Upload Example</h1>
                    <div className="wrapper">
                        <label htmlFor="job_id">Job Title</label>
                        <input id="job_id" name="job_id" type="text" onChange={ this.onChange } value={this.state.job_id} />
                    </div>
                    <div className="wrapper">
                        <label htmlFor="first_name">First name</label>
                        <input id="first_name" name="first_name" type="text" onChange={ this.onChange } value={this.state.first_name} />
                    </div>
                    <div className="wrapper">
                        <label htmlFor="last_name">Last name</label>
                        <input id="last_name" name="last_name" type="text" onChange={ this.onChange } value={this.state.last_name} />
                    </div>
                    <div className="wrapper">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" onChange={ this.onChange } value={this.state.email} />
                    </div>
                    <div className="wrapper">
                        <label htmlFor="country">Country</label>
                        <input id="country" name="country" type="text" onChange={ this.onChange } value={this.state.country} />
                    </div>
                    <div className="wrapper">
                        <label htmlFor="cv">CV</label>
                        <input id="cv" type="file" onChange={ this.onChangeFile } />
                    </div>
                    <button type="submit">Upload File</button>
                </form>
            </div>
        )
    }        
}
export default FileUploadForm;