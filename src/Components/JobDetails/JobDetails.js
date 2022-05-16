import React from "react";
import { Link, useParams } from "react-router-dom";
import checkCircle from "../../assets/images/checkCircle.svg";
import { jobs } from "../../data";
import ReadyToMove from "../ReadyToMove/ReadyToMove";
import "./JobDetails.scss";

const JobDetails = () => {
    const { id } = useParams();

    const jobDetails = jobs?.find((job) => job?.id === Number(id));

    return (
        <div className="JobDetails">
            <div className="JobDetailsBanner bgClrDarkLight">
                <div className="container">
                    <div className="JobBannerContent d-flex align-items-center">
                        <div className="content">
                            <h2 className="jobTitle fs-48 fw-bold text-white mb-4">{jobDetails?.title}</h2>
                            <div className="jobIntro fs-18 text-white fw-normal">
                                <p className="mb-0">{jobDetails?.bannerIntro}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="JobOverView secPadding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="overViewContent">
                                <div className="overViewTitle fs-6 fw-bold textClrGreen mb-5">
                                    <p className="mb-0">Overview</p>
                                </div>
                                <div className="singleOverView mb-5">
                                    <h4 className="title fw-bold fs-30 text-white mb-4">Role</h4>
                                    <div className="overViewIntro fs-18 fw-normal textGrayLight">
                                        <p>{jobDetails?.role}</p>
                                    </div>
                                </div>
                                <div className="singleOverView mb-5">
                                    <h4 className="title fw-bold fs-30 text-white mb-4">About The Role</h4>
                                    <div className="overViewIntro fs-18 fw-normal textGrayLight">
                                        <p>{jobDetails?.AboutRole1}</p>
                                    </div>
                                    <div className="overViewIntro fs-18 fw-normal textGrayLight">
                                        <p>{jobDetails?.AboutRole2}</p>
                                    </div>
                                    <div className="overViewIntro fs-18 fw-normal textGrayLight">
                                        <p>{jobDetails?.AboutRole3}</p>
                                    </div>
                                    <div className="overViewIntro fs-18 fw-normal textGrayLight">
                                        <p>{jobDetails?.AboutRole4}</p>
                                    </div>
                                </div>
                                <div className="singleOverView mb-0">
                                    <h4 className="title fw-bold fs-30 text-white mb-4">Typical Daily Duties:</h4>
                                    <div className="overViewIntro fs-18 fw-normal textGrayLight mb-5">
                                        <p>{jobDetails?.dutiesDesc}</p>
                                    </div>
                                    <div className="jobSpecifications">
                                        <ul className="list-unstyled">
                                            <li className="fs-18 fw-normal textGrayLight d-flex align-items-center gap-3 mb-3">
                                                <img src={checkCircle} alt="checkCircle Icon" />
                                                {jobDetails?.duties1}
                                            </li>
                                            <li className="fs-18 fw-normal textGrayLight d-flex align-items-center gap-3 mb-3">
                                                <img src={checkCircle} alt="checkCircle Icon" />
                                                {jobDetails?.duties2}
                                            </li>
                                            <li className="fs-18 fw-normal textGrayLight d-flex align-items-center gap-3 mb-3">
                                                <img src={checkCircle} alt="checkCircle Icon" />
                                                {jobDetails?.duties3}
                                            </li>
                                            <li className="fs-18 fw-normal textGrayLight d-flex align-items-center gap-3 mb-3">
                                                <img src={checkCircle} alt="checkCircle Icon" />
                                                {jobDetails?.duties4}
                                            </li>
                                            <li className="fs-18 fw-normal textGrayLight d-flex align-items-center gap-3 mb-3">
                                                <img src={checkCircle} alt="checkCircle Icon" />
                                                {jobDetails?.duties5}
                                            </li>
                                            <li className="fs-18 fw-normal textGrayLight d-flex align-items-center gap-3 mb-3">
                                                <img src={checkCircle} alt="checkCircle Icon" />
                                                {jobDetails?.duties6}
                                            </li>
                                            <li className="fs-18 fw-normal textGrayLight d-flex align-items-center gap-3 mb-0">
                                                <img src={checkCircle} alt="checkCircle Icon" />
                                                {jobDetails?.duties7}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="jobSideBar bgClrBlack isRadius16">
                                <div className="widget mb-5">
                                    <p className="jobTitle fs-6 textClrGrayDark fw-bold">Job Title</p>
                                    <h4 className="title fw-bold fs-30 text-white mb-4">UI Developer & UX Researcher</h4>
                                </div>
                                <div className="widget mb-5">
                                    <p className="jobCategory fs-6 textClrGrayDark fw-bold">Industry Category</p>
                                    <h4 className="category fw-medium fs-5 text-white mb-4">Design</h4>
                                </div>
                                <div className="widget mb-5">
                                    <p className="EmploymentBasis fs-6 textClrGrayDark fw-bold">Employment Basis</p>
                                    <h4 className="workPlace fw-medium fs-5 text-white mb-4">Remote Position</h4>
                                </div>
                                <div className="gw-btn gw-btn-green mt-5">
                                    <Link to="/JobApplicationForm" className="btn text-dark border-0 px-4 rounded-pill fwSemiBold fs-15 py-0">
                                        <span className="text position-relative d-flex align-items-center justify-content-center h-42">
                                            Apply Now
                                            <svg className="position-absolute end-0 top-0" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112"
                                                    stroke="#121316"
                                                    stroke-width="1.5"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                                <path d="M3.0625 10.5H17.7887" stroke="#121316" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReadyToMove />
        </div>
    );
};

export default JobDetails;
