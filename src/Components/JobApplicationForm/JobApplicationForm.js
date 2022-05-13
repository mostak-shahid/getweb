import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ReadyToMove from "../ReadyToMove/ReadyToMove";
import "./JobApplicationForm.scss";
import FileIcon from "../../assets/images/file.svg";
import SuccessfulModal from "../SuccessfulModal/SuccessfulModal";
// import Select from "react-select";

const JobApplicationForm = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const options = [
        { value: "Front-End Developers", label: "Front-End Developers" },
        { value: "Full Stack Developer", label: "Full Stack Developer" },
        { value: "UI Developer & UX Researcher", label: "UI Developer & UX Researcher" },
        { value: "Art Director & Illustrator", label: "Art Director & Illustrator" },
        { value: "Client Acquisition Specialist", label: "Client Acquisition Specialist" },
        { value: "Junior SEO Specialist", label: "Junior SEO Specialist" },
    ];
    return (
        <section className="JobDetails">
            <div className="JobDetailsBanner bgClrDarkLight">
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
                                <Form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <Form.Group className="selectJobTitle mb-3" controlId="formBasicContactNumber">
                                                <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Job Title</Form.Label>
                                                {/* <Select options={options} /> */}
                                                <Form.Select className="rounded-pill h-42 px-4">
                                                    <option>Position applying for</option>
                                                    <option value="1">Front-End Developers</option>
                                                    <option value="2">Full Stack Developer</option>
                                                    <option value="3">UI Developer & UX Researcher</option>
                                                    <option value="3">Art Director & Illustrator</option>
                                                    <option value="3">Client Acquisition Specialist</option>
                                                    <option value="3">Junior SEO Specialist</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-6">
                                            <Form.Group className="field mb-4" controlId="formBasicFName">
                                                <Form.Label className="textClrThemeDark fs-13 fwSemiBold">First Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your first name" className="rounded-pill h-42 px-4" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-6">
                                            <Form.Group className="field mb-4" controlId="formBasicLName">
                                                <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your last name" className="rounded-pill h-42 px-4" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-6">
                                            <Form.Group className="field mb-4" controlId="formBasicEmail">
                                                <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter your email" className="rounded-pill h-42 px-4" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-6">
                                            <Form.Group className="field mb-4" controlId="formBasicCountry">
                                                <Form.Label className="textClrThemeDark fs-13 fwSemiBold">Country</Form.Label>
                                                <Form.Select className="rounded-pill h-42 px-4">
                                                    <option>Select your country</option>
                                                    <option value="1">Bangladesh</option>
                                                    <option value="2">USA</option>
                                                    <option value="3">UK</option>
                                                    <option value="3">Canada</option>
                                                    <option value="3">India</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-12">
                                            <Form.Group controlId="formFile" className="mb-3">
                                                <Form.Label className="textClrThemeDark fs-13 fwSemiBold d-block">
                                                    <p className="mb-2">Upload CV</p>
                                                    <Form.Control type="file" className="d-none" />
                                                    <div className="fileBody bg-white p-4 isRadius12 d-flex justify-content-center align-items-center gap-3 gap-xl-4">
                                                        <img src={FileIcon} alt="icon" />
                                                        <p className="fs-14 fw-medium textClrGray mb-0">Upload your CV</p>
                                                    </div>
                                                </Form.Label>
                                            </Form.Group>
                                        </div>
                                        <div className="sbm-btn text-end">
                                            <Button onClick={handleShow} className="btn bgClrGreen w-100 h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill">
                                                Submit Application
                                            </Button>
                                        </div>
                                        <SuccessfulModal show={show} handleClose={handleClose} />
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReadyToMove />
        </section>
    );
};

export default JobApplicationForm;
