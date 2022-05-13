import React from "react";
import { NavLink } from "react-router-dom";
import AuthorImage from "../../assets/images/authoreImg.svg";
import clock1 from "../../assets/images/clock1.svg";
import FeatheredImg from "../../assets/images/feathured-img.png";
import quoteIcon from "../../assets/images/quoteIcon.svg";
import VerticalGreenLine from "../../assets/images/vertical-greeb-line.svg";
import "./BlogSingle.scss";

const BlogSingle = () => {
    return (
        <section className="BlogSingleWrapper secPadding mt-5">
            <div className="container">
                <div className="blogFeathered">
                    <div className="BlogsSingleHeader mb-5 pb-2">
                        <p className="blogSingleTag textClrGreen fs-15 fwSemiBold">Technology</p>
                        <h2 className="fs-48 fw-bold text-white mb-4 pb-2">Custom ERP software development - ultimate solution for business process automation</h2>
                        <div className="meta d-flex gap-4 align-items-center mb-5 pb-2">
                            <NavLink to="#" className="text-decoration-none text-white fs-14 fw-bold d-flex align-items-center gap-3">
                                <div className="adminImg flex-shrink-0">
                                    <img src={AuthorImage} alt="Author Img" />
                                </div>
                                <span className="AuthorName">Leslie Alexander</span>
                            </NavLink>
                            <NavLink to="#" className="text-decoration-none textClrGray fs-14 fw-medium d-flex align-items-center gap-3">
                                <div className="CalenderIcon flex-shrink-0">
                                    <img src={clock1} alt="Author Img" />
                                </div>
                                <span className="PostDate">Jan 26, 2022</span>
                            </NavLink>
                        </div>
                        <div className="BlogSingFeatheredImg">
                            <img src={FeatheredImg} alt="FeatheredImg" />
                        </div>
                    </div>
                </div>

                <div className="BlogSingleContentArea">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="SingleContents">
                                <div className="blogInnerContent mb-4 pb-2">
                                    <h3 className="innerTitle fs-4 fw-bold text-white mb-4">ERP software's benefits go beyond improving</h3>
                                    <div className="blogInnerDescription fs-6 fw-normal textClrGray">
                                        <p className="mb-4 pb-2">
                                            In the dynamic world of business applications, one fixed solution for the constantly changing environment rarely works. Why buy monolithic ERP software and
                                            then spend years, ransom funds, and a fortune customizing it?
                                        </p>
                                        <p className="mb-4 pb-2">
                                            It is because tailor-made <b>CRM centralizes the business process</b> for you to manage it effectively from anywhere you want. The range of its functions
                                            includes inventory management, order processing, delivery management, production management, warehouse management, payroll management,
                                            <NavLink to="#"> business resources</NavLink> monitoring, providing accurate reports on revenue, expenses, staff, clients, and much more.
                                        </p>
                                        <p className="mb-4 pb-2">
                                            ERP software's benefits go beyond improving a company's and business's everyday operations. Here we will discuss a series of reasons why this transformative
                                            technology in the software development industry is quintessential for start-ups and established enterprises.
                                        </p>
                                    </div>
                                </div>
                                <div className="blogInnerContent mb-5 pb-2">
                                    <h3 className="innerTitle fs-4 fw-bold text-white mb-4">
                                        <span className="Number">1.</span> Standardize business operations
                                    </h3>
                                    <div className="blogInnerDescription fs-6 fw-normal textClrGray">
                                        <p className="mb-5 pb-2">
                                            Custom ERP solutions can streamline repetitive business processes with automation. Leveraging custom-made automated technology at the company's internal
                                            processes puts the tedious processes on autopilot like order processing, delivery management, employee management, masters of clients database,
                                            auto-reminders for repeat orders, etc.
                                        </p>
                                    </div>
                                    <div className="quoteText px-4 px-xl-5 py-4 position-relative">
                                        <h3 className="quoteTitle fs-30 position-relative">
                                            To facilitate these processes, we have a workflow that helps us analyze ideas and ask the right questions.
                                            <div className="">
                                                <img src={quoteIcon} alt="quoteIcon" className="position-absolute end-0 bottom-0" />
                                            </div>
                                        </h3>
                                        <img src={VerticalGreenLine} alt="green line" className="position-absolute start-0 top-0 h-100" />
                                    </div>
                                </div>
                                <div className="blogInnerContent mb-4 pb-2">
                                    <h3 className="innerTitle fs-4 fw-bold text-white mb-4">
                                        <span className="Number">2.</span> Data-oriented decisions
                                    </h3>
                                    <div className="blogInnerDescription fs-6 fw-normal textClrGray">
                                        <p className="mb-4 pb-2">
                                            ERP takes care of end-to-end business processes, including customer ordering details, billing details, daily/monthly/yearly sales data, stock loss, employee
                                            attendance rate, and many more. ERP processes real-time data and provides accurate reports to assist in future decisions. For instance, it is viable for
                                            your staff to give a specific lead analysis feature to take balanced decisions more quickly.
                                        </p>
                                    </div>
                                </div>
                                <div className="blogInnerContent mb-4 pb-2">
                                    <h3 className="innerTitle fs-4 fw-bold text-white mb-4">
                                        <span className="Number">3.</span> Organized cross-department coordination
                                    </h3>
                                    <div className="blogInnerDescription fs-6 fw-normal textClrGray">
                                        <p className="mb-5 pb-2">
                                            The company consists of multi departments. The more closely activities and centralized databases are synchronized across divisions, the less they can
                                            trade-off between coordination and adoption. Staff members can coordinate work between departments and access all the critical company data more
                                            efficiently.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="SingleSidebar">SingleSidebar</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSingle;
