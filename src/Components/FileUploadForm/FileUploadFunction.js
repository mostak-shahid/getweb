import axios from 'axios';
import React, { useState } from 'react';

const FileUploadFunction = () => {
    const [file, setFile] = useState(null);
    const UPLOAD_ENDPOINT = 'http://api.getweb.localhost/api-uploads.php';
    const onSubmit = async (e) => {
        e.preventDefault() 
        let res = uploadFile(file);
        console.log(res.data);
    }
    function onChange(e) {
        setFile(e.target.files[0])
    }
    const uploadFile  = async (file) => {
        const formData = new FormData();        
        formData.append('avatar',file)        
        return await axios.post(UPLOAD_ENDPOINT, formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
    }

    return (
        <div className="d-flex align-items-center justify-content-center">
            <form onSubmit={onSubmit}>
                <h1> React File Upload Example</h1>
                <input type="file" onChange={ onChange } />
                <button type="submit">Upload File</button>
            </form>
        </div>
    )
}

export default FileUploadFunction