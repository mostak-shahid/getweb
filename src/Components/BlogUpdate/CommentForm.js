import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Config from '../../Config.json';
import './CommentForm.scss';

const CommentForm = (props) => {
    const [formProcessing, setFormPocessing] = useState(false);
    const [ip, setIP] = useState("");
    //const [error, setError] = useState(false);
    useEffect(()=>{
        const url = 'https://api.ipify.org';
        const fetchData = async () => {
            await axios.get(url)
            .then((response) => {
                setIP(response.data);
            })
        }      
        fetchData()
        .catch(console.error);
    },[]);
    const {
        register,
        handleSubmit,
        reset,        
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {        
        const formData = new FormData();
        formData.append('name',data.name);
        formData.append('email',data.email);
        formData.append('message',data.message);
        try {
            setFormPocessing(true);
            //const rawResponse = await axios.post(Config.API_BASE + 'job-apply', JSON.stringify(data),{ 
            const rawResponse = await axios.post(Config.API_BASE + 'contact-data', formData,{ 
                headers: {
                    'content-type': 'multipart/form-data',
                    'Accept': 'application/json',
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            //const content = await rawResponse.json();
            //console.log(rawResponse);
            if(rawResponse.data.req.data.status){
                toast.success('Thank you for submitting this query.');
                reset();
            } else {
                toast.error('Please try again.');
            }
        } catch (error) {
            toast.error('Please try again.');
            //console.log(error);
        }
        setFormPocessing(false);
    }
    return (
        <div className='comment-form form-validation'>
            <div id="reply-title" className="comment-reply-title textClrThemeDark fs-24 fw-bold mb-10">Leave a Reply</div>
            <ToastContainer />
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-sm-6 mb-20">
                        <div className="contactField">
                                <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicName">Name *</label>
                                <input placeholder="Please enter your name" type="text" id="formBasicName" className="rounded-pill px-4 form-control" {...register('name', { required: true, pattern: /^[a-zA-Z-_'. ]*$/ })}/>
                                {errors.name?.type === "required" && <div className='text-danger mt-1'>Name is required.</div>}
                                {errors.name?.type === "pattern" && <div className='text-danger mt-1'>Please enter a valid name.</div>}
                        </div>
                    </div>
                    <div className="col-sm-6 mb-20">
                        <div className="contactField">
                            <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicEmail">Email *</label>
                            <input placeholder="Please enter your email" type="email" id="formBasicEmail" className="rounded-pill px-4 form-control" {...register('email', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/ })}/>
                            {errors.email?.type === "required" && <div className='text-danger mt-1'>Email is required.</div>}
                            {errors.email?.type === "pattern" && <div className='text-danger mt-1'>Please enter a valid email.</div>}
                        </div>
                    </div>
                    <div className="col-lg-12 mb-20">
                        <div className="contactField">
                            <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicMessage">Reply</label>
                            <textarea placeholder="Enter your message here..." id="formBasicMessage" className="isRadius16 p-3 form-control" {...register('message')}></textarea>
                        </div>
                    </div>
                    <div className="sbm-btn text-center text-lg-start">
                        <input {...register('ip', { required: true, pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/ })} type="hidden" value={ip} />
                        <button type="submit" className="bgClrGreen w-auto h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill btn btn-contact" disabled={formProcessing}>{formProcessing? 'Posting Comment...' : 'Post Comment '}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CommentForm