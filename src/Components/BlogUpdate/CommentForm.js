import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        //watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => { 
        setFormPocessing(true);       
        const formData = new FormData();
        console.log(formData);
        reset();
        /*formData.append('name',data.name);
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
        }*/
        setFormPocessing(false);
    }
    return (
        <div className='comment-form form-validation'>
            <div id="reply-title" className="comment-reply-title textClrThemeDark fs-30 fwBlack mb-10" dangerouslySetInnerHTML={{__html:props.title}} />
            <div className="comment-reply-intro">Your email address will not be published. Required fields are marked *</div>
            <ToastContainer />
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-sm-4 mb-20">
                        <div className="contactField">
                            <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicName">Name *</label>
                            <input placeholder="Enter your name" id="formBasicName" className="rounded-pill px-4 form-control" {...register("name", {required: true,pattern: /^[a-zA-Z-_'. ]*$/,})}/>
                            {errors.name?.type === "required" && (<div className="text-danger mt-1">Name is required.</div>)}
                            {errors.name?.type === "pattern" && (<div className="text-danger mt-1">Please enter a valid name.</div>)}
                        </div>
                    </div>
                    <div className="col-sm-4 mb-20">
                        <div className="contactField">
                            <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicEmail">Email *</label>
                            <input placeholder="Enter your email" id="formBasicEmail" className="rounded-pill px-4 form-control" {...register("email", {required: true,pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,})}/>
                            {errors.email?.type === "required" && (<div className="text-danger mt-1">Email is required.</div>)}
                            {errors.email?.type === "pattern" && (<div className="text-danger mt-1">Please enter a valid email.</div>)}
                        </div>
                    </div>
                    <div className="col-sm-4 mb-20">
                        <div className="contactField">
                            <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicWebsite">Website</label>
                            <input placeholder="Enter your website" id="formBasicWebsite" className="rounded-pill px-4 form-control" {...register("website", {pattern: /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/,})}/>
                            {errors.website?.type === "pattern" && (<div className="text-danger mt-1">Please enter a valid URL.</div>)}
                        </div>
                    </div>
                    <div className="col-lg-12 mb-20">
                        <div className="contactField">
                            <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicMessage">Comment</label>
                            <textarea placeholder="Type your comment here" id="formBasicMessage" className="isRadius16 p-3 form-control" {...register('message')}></textarea>
                        </div>
                    </div>
                    <div className="sbm-btn text-center text-lg-start">
                        <input {...register('comment_author_IP', { required: true})} type="hidden" value={ip} />
                        <input {...register('comment_agent', { required: true})} type="hidden" value={navigator.userAgent} />
                        <input {...register('comment_post_ID', { required: true})} type="hidden" value={props.id} />
                        <input {...register('comment_parent', { required: true})} type="hidden" value={props.replyParent} />
                        <button type="submit" className="bgClrGreen w-auto h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill btn btn-contact" disabled={formProcessing}>{formProcessing? 'Submiting Comment...' : 'Submit Comment'}</button>
                    </div>
                    {/* {console.log(errors)} */}
                </div>
            </form>
        </div>
    )
}

export default CommentForm