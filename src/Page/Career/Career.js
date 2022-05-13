import React from "react";
import { NavLink } from "react-router-dom";
import ReadyToMove from "../../Components/ReadyToMove/ReadyToMove";
import SingleJobPost from "../../Components/SingleJobPost/SingleJobPost";
import { companyBenefits, designJob, developmentJob, jobs, marketingJob } from "../../data";
import CareerBg from "../../assets/images/career-bg.png";
import "./Career.scss";
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";

const Career = () => {
    const tagline = "Careers";
    const boldTile = "Careers";
    const title = "with Getweb";
    const intro = "Our hiring process has several steps that may differ depending on the team. We pick our new team members carefully with the company head closely involved.";
    const bgImg = CareerBg;
    return (
        <div>
            
            <SubPageBanner tagline={tagline} boldTile={boldTile} title={title} intro={intro} bgImg={bgImg} />

            <div className="company-benefits secPadding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h6 className="textClrGreen fs-6 mb-3">Our portfolios</h6>
                            <h3 className="fs-48 fw-normal mb-5">
                                Company <span className="fw-bold">benefits</span>
                            </h3>
                        </div>
                        {companyBenefits.map((item) => (
                            <div className="col-md-4" key={item.id}>
                                <div className="benifit-item">
                                    <img src={item.img} alt="icon" />
                                    <h6>{item.title}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="job-opening secPadding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h6 className="textClrGreen fs-6 mb-3">Jobs</h6>
                            <h3 className="fs-48 fw-normal mb-5">
                                Job<span className="fw-bold"> openings</span>
                            </h3>
                        </div>
                        <div className="col-12">
                            <div className="job-post mb-5">
                                <h6 className="mb-3">All Jobs</h6>
                                {jobs.map((i) => (
                                    <SingleJobPost path={i.path} id={i.id} title={i.title} tag1={i.tag1} tag2={i.tag2} key={i.title} />
                                ))}
                            </div>
                            {/* <div className="job-post mb-5">
                                <h6 className="mb-3">Develpoment</h6>
                                {developmentJob.map((i) => (
                                    <SingleJobPost id={i.id} title={i.title} tag1={i.tag1} tag2={i.tag2} key={i.title} />
                                ))}
                            </div>
                            <div className="job-post mb-5">
                                <h6 className="mb-3">Design</h6>
                                {designJob.map((i) => (
                                    <SingleJobPost id={i.id} title={i.title} tag1={i.tag1} tag2={i.tag2} key={i.title} />
                                ))}
                            </div>
                            <div className="job-post mb-5">
                                <h6 className="mb-3">Marketing</h6>
                                {marketingJob.map((i) => (
                                    <SingleJobPost id={i.id} title={i.title} tag1={i.tag1} tag2={i.tag2} key={i.title} />
                                ))}
                            </div> */}
                            <div className="more-btn mx-auto">
                                <NavLink to="/" className="gw-btn text-decoration-none">
                                    <button className="btn position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 gap-2 d-flex align-items-center justify-content-center">
                                        Load More...
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReadyToMove />
        </div>
    );
};

export default Career;
