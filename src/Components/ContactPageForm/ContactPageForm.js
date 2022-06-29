import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import './ContactPageForm.scss';

function ContactPageForm(props) {  
    const [formProcessing, setFormPocessing] = useState(false); 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    // const [values, setValues] = useState({
    //     name: "",
    //     email: "",
    //     code: "",
    //     phone: "",
    //     interested: "",
    //     budget: "",
    //     message: "",
    // });
    // const [errors, setErrors] = useState({    
    //     name: "",
    //     email: "",
    //     code: "",
    //     phone: "",
    //     interested: "",
    //     budget: "",
    //     message: "",
    // }); 
    // const [resMessage, setResMessage] = useState(''); 
    // const [formProcessing, setFormPocessing] = useState(false);
    // const errorMessages = {
    //     name: {
    //         required:"Name is required",
    //         pattern: "Name validation Error",
    //     },
    //     email: {
    //         required:"Email is required",
    //         pattern: "Email validation Error",
    //     },
    //     phone: {
    //         required:"Phone is required",
    //         pattern: "Phone validation Error",
    //     },
    //     message: {
    //         required:"Message is required",
    //         pattern: "Message validation Error",
    //     },
    // };    
    // const handlerChange = (element) => {
    //     setValues({ ...values, [element.target.name]: element.target.value });
    // };
    // const handlerBlur = (element) => {
    //     const elementRequired = element.target.required;      
    //     const elementPattern = element.target.pattern;  
    //     // console.log(element.target.name);  
    //     // console.log(elementRequired);
    //     // console.log(elementPattern);
    //     (elementRequired && !element.target.value) ? 
    //     setErrors({ ...errors, [element.target.name]: errorMessages[element.target.name]?.required }) : 
    //         (elementPattern && !element.target.value.match(elementPattern)) ? 
    //         setErrors({ ...errors, [element.target.name]:  errorMessages[element.target.name]?.pattern }) : 
    //             setErrors({ ...errors, [element.target.name]: "" });
    // } 
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setFormPocessing(true);
    //     (async () => {
    //         const rawResponse = await fetch(Config.API_BASE + 'contact-data', {
    //             method: 'POST',
    //             headers:{
    //                 'Accept': 'application/json',
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify({ name: values.name, email: values.email, code: values.code, phone: values.phone,  interested: values.interested, budget: values.budget, message: values.message })
                
    //         })
    //         ;//.then(resp=>resp.json())//calling url by method GET
    //         //.then(resp=>setFormResponseData(resp))//setting response to state posts
    //         //.then(setFormResponse(true));
    //         const content = await rawResponse.json();
    //         console.log(content.req.data.status);
    //         if(content.req.data.status) {
    //             setFormPocessing(false);
    //             setValues({
    //                 name: "",
    //                 email: "",
    //                 code: "",
    //                 phone: "",
    //                 message: "",
    //             });
    //             setErrors ({
    //                 name: "",
    //                 email: "",
    //                 code: "",
    //                 phone: "",
    //                 message: "",
    //             })
    //             setResMessage('Your form has beed submitted successfully.')
    //         } else {
    //             setFormPocessing(false);
    //             setResMessage('Please try again.')
    //         }
    //         //console.count();
    //         //const res = await this.uploadForm(this.state.file);
    //     })();
    // }
    // // console.log(loading);
    // // console.log(optionData);
        
    return (
        <div className="contactWrapper bgClrSolitude isRadius12 p-4 p-xl-5 h-100">
            <div className="contactHeader mb-4">
                <h2 className="textClrThemeDark fs-4 fw-bold mb-3">Got a project in mind? We’re all ears.</h2>
                <p className="textClrGrayDark fs-6 fw-normal mb-0">It usually takes us up to 48 hours to get back to you.</p>
            </div>
            {/*
                resMessage &&
                <div className="mb-3 bgClrGreen textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4">{resMessage}</div>
            */}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <Form.Group className="contactField" controlId="formBasicName">
                            <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Name</Form.Label>
                            <Form.Control type="text" placeholder="Please enter your name" className="rounded-pill px-4" {...register('name', { required: true, pattern: /^[A-Za-z .]+$/ })}  />
                        </Form.Group>
                        {errors.name && <div className="text-danger mt-1">{errors.name}</div>}
                    </div>
                    <div className="col-lg-6 mb-4">
                        <Form.Group className="contactField" controlId="formBasicEmail">
                            <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Email</Form.Label>
                            <Form.Control type="email" placeholder="Please enter your email" className="rounded-pill px-4" {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/ })}/>
                        </Form.Group>
                        {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
                    </div>
                    <div className="col-lg-12 mb-3">
                        <Form.Group className="contactField" controlId="formBasicContactNumber">
                            <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Contact Number</Form.Label>
                            <div className="countryCode d-flex align-items-center">
                                <Form.Select className="w-25 border-0 rounded-0 px-3" {...register('code')}>
                                    <option value="1">US (+1)</option>
                                    <option value="59">DZ (+59)</option>
                                    <option value="213">DZ (+213)</option>
                                    <option value="376">AD (+376)</option>
                                    <option value="1264">AI (+1264)</option>
                                </Form.Select>
                                <Form.Control type="phone" placeholder="Please enter your number" className="rounded-0 border-0 px-3 w-75" {...register('phone')} />
                            </div>
                        </Form.Group>
                        {errors.code && <div className="text-danger mt-1">{errors.code}</div>}
                        {errors.phone && <div className="text-danger mt-1">{errors.phone}</div>}
                    </div>                                
                    <div className="col-lg-6 mb-4">
                        <Form.Group className="contactField" controlId="formBasicName">
                            <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Interested In</Form.Label>                                        
                            <Form.Select className="rounded-pill px-4 form-control" {...register('interested')} >
                                <option value="1">US (+1)</option>
                                <option value="59">DZ (+59)</option>
                                <option value="213">DZ (+213)</option>
                                <option value="376">AD (+376)</option>
                                <option value="1264">AI (+1264)</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <Form.Group className="contactField" controlId="formBasicEmail">
                            <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Select Budget Range</Form.Label>                                                                       
                            <Form.Select className="rounded-pill px-4 form-control" {...register('budget')} >
                                <option value="1">US (+1)</option>
                                <option value="59">DZ (+59)</option>
                                <option value="213">DZ (+213)</option>
                                <option value="376">AD (+376)</option>
                                <option value="1264">AI (+1264)</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col-lg-12 mb-4">
                        <Form.Group className="contactField" controlId="formBasicMessage">
                            <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter your message here..." className="isRadius16 p-3" style={{ height: "88px" }} {...register('message')}/>
                        </Form.Group>
                        {errors.message && <div className="text-danger mt-1">{errors.message}</div>}
                    </div>
                    <div className="sbm-btn text-end">
                        <Button className="bgClrGreen w-auto h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill" type="submit" disabled={formProcessing}>
                            {formProcessing? 'Sending Mesage...' : 'Send Message '}
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    )
    
}
export default ContactPageForm