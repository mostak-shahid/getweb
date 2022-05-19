import axios from 'axios';
import React from 'react';

class FileUploadForm extends React.Component {

    UPLOAD_ENDPOINT = 'http://api.getweb.localhost/api-uploads.php';
    constructor(props) {
        super(props);
        this.state ={
          file:null
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
    }
    async onSubmit(e){
        e.preventDefault() 
        let res = await this.uploadFile(this.state.file);
        console.log(res.data);
    }
    onChange(e) {
        this.setState({file:e.target.files[0]})
    }
    async uploadFile(file){
        

        const formData = new FormData();
        
        formData.append('avatar',file)
        
        return  await axios.post(this.UPLOAD_ENDPOINT, formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
      }
    
      render() {
        return (
            <div className="d-flex align-items-center justify-content-center">
                <form onSubmit={ this.onSubmit }>
                    <h1> React File Upload Example</h1>
                    <input type="file" onChange={ this.onChange } />
                    <button type="submit">Upload File</button>
                </form>
            </div>
       )
      }
        
}

export default FileUploadForm;