import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Config from '../../Config.json';
import './CommentForm.scss';

const CommentForm = (props) => {
    const [formProcessing, setFormPocessing] = useState(false);
    const [ip, setIP] = useState("");
    const [error, setError] = useState([]);
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
        formData.append('comment_author',data.comment_author);
        formData.append('comment_author_email',data.comment_author_email);
        formData.append('comment_author_url',data.comment_author_url);
        formData.append('comment_author_IP',ip);
        formData.append('comment_agent',navigator.userAgent);
        formData.append('comment_post_ID',props.id);
        formData.append('comment_parent',props.replyParent);
        formData.append('comment_content',data.comment_content);
        try {
            setFormPocessing(true);
            //const rawResponse = await axios.post(Config.API_BASE + 'job-apply', JSON.stringify(data),{ 
            const rawResponse = await axios.post(Config.API_BASE + 'comment-data', formData,{ 
                headers: {
                    'content-type': 'multipart/form-data',
                    'Accept': 'application/json',
                    "Content-type": "application/json; charset=UTF-8",
                    'Authorization': Config.Authorization
                }
            })
            //const content = await rawResponse.json();
            //console.log(rawResponse);
            if(rawResponse.data.req.data.status){
                toast.success('Thank you for submitting your comment. Your comment is awaiting moderation.');
                reset();
            } else {
                toast.error('Please try again.');
                setError(rawResponse.data.req.data.error);
            }
        } catch (error) {
            toast.error('Please try again.');
            //console.log(error);
        }
        setFormPocessing(false);
    }
    const toggleComment = useCallback((e) => {
        //e.target.parentElement.classList.toggle('open-comment-below');
        e.target.closest('.comment-meta').classList.toggle('open-comment-box');
    }, []);
    return (
        <div className='comment-form form-validation'>
            <div className='d-inline-flex align-items-center  mb-10'>
                <div id="reply-title" className="comment-reply-title textClrThemeDark fs-30 fwBold" dangerouslySetInnerHTML={{__html:props.title}} />
                {props?.cencle?<div className="cancel-reply textClrGray" onClick={toggleComment}>Cancel Reply</div>:''}
            </div>
            <div className="comment-reply-intro">Your email address will not be published. Required fields are marked *</div>
            <ToastContainer />
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-sm-4 mb-20">
                        <div className="contactField">
                            <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicName">Name *</label>
                            <input placeholder="Enter your name" id="formBasicName" className="rounded-pill px-4 form-control" {...register("comment_author", {required: true,pattern: /^[a-zA-Z-_'. ]*$/,})}/>
                            {errors.comment_author?.type === "required" && (<div className="text-danger mt-1">Name is required.</div>)}
                            {errors.comment_author?.type === "pattern" && (<div className="text-danger mt-1">Please enter a valid name.</div>)}
                            {error?.comment_author && (<div className="text-danger mt-1" dangerouslySetInnerHTML={{__html:error.comment_author}} />)}
                        </div>
                    </div>
                    <div className="col-sm-4 mb-20">
                        <div className="contactField">
                            <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicEmail">Email *</label>
                            <input placeholder="Enter your email" id="formBasicEmail" className="rounded-pill px-4 form-control" {...register("comment_author_email", {required: true,pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,})}/>
                            {errors.comment_author_email?.type === "required" && (<div className="text-danger mt-1">Email is required.</div>)}
                            {errors.comment_author_email?.type === "pattern" && (<div className="text-danger mt-1">Please enter a valid email.</div>)}
                            {error?.comment_author_email && (<div className="text-danger mt-1" dangerouslySetInnerHTML={{__html:error.comment_author_email}} />)}
                        </div>
                    </div>
                    <div className="col-sm-4 mb-20">
                        <div className="contactField">
                            <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicWebsite">Website</label>
                            <input placeholder="Enter your website" id="formBasicWebsite" className="rounded-pill px-4 form-control" {...register("comment_author_url", {pattern: /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/,})}/>
                            {errors.comment_author_url?.type === "pattern" && (<div className="text-danger mt-1">Please enter a valid URL.</div>)}
                            {error?.comment_author_url && (<div className="text-danger mt-1" dangerouslySetInnerHTML={{__html:error.comment_author_url}} />)}
                        </div>
                    </div>
                    <div className="col-lg-12 mb-20">
                        <div className="contactField">
                            <label className="textClrThemeDark fs-13 fwSemiBold form-label" htmlFor="formBasicMessage">Comment</label>
                            <textarea placeholder="Type your comment here" id="formBasicMessage" className="isRadius16 p-3 form-control" {...register('comment_content')}></textarea>
                            {error?.comment_content && (<div className="text-danger mt-1" dangerouslySetInnerHTML={{__html:error.comment_content}} />)}
                            {error?.comment_post_ID && (<div className="text-danger mt-1" dangerouslySetInnerHTML={{__html:error.comment_post_ID}} />)}
                            {error?.comment_parent && (<div className="text-danger mt-1" dangerouslySetInnerHTML={{__html:error.comment_parent}} />)}
                            {error?.comment_author_IP && (<div className="text-danger mt-1" dangerouslySetInnerHTML={{__html:error.comment_author_IP}} />)}
                        </div>
                    </div>
                    <div className="sbm-btn text-center text-lg-start">
                        <button type="submit" className="bgClrGreen w-auto h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill btn btn-contact" disabled={formProcessing}>{formProcessing? 'Submiting Comment...' : 'Submit Comment'}</button>
                    </div>
                    {/* {console.log(errors)} */}
                </div>
            </form>
        </div>
    )
}

export default CommentForm