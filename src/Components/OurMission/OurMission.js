import React from "react";
import OurMissionImg from "../../assets/images/OurMissionImg.png";
import LineShape from "../../assets/images/secLineShape.svg";
import "./OurMission.scss";

const OurMission = () => {
    return (
        <section className="OurMission secPadding bgClrDarkLight">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="sectionHeader">
                            <span className="secTagLine fs-6 fw-bold textClrGreen mb-3 d-block">Our mission</span>
                            <div className="secTitle fw-normal fs-48 text-white mb-3">
                                <strong>Our mission </strong>
                                is to help customers achieve stunning results
                            </div>
                            <div className="lineShape mb-4">
                                <img src={LineShape} alt="LineShape" />
                            </div>
                            <div className="secIntro textClrGray fs-6 fw-normal mb-4 pb-2">
                                <p className="mb-0">We are one of the older web development companies on the Polish market. We have been in business since 2008.</p>
                            </div>
                            <div className="secIntro textClrGray fs-6 fw-normal mb-0">
                                <p className="mb-0">At GOGOmedia, we have specialists professionally dealing with creating dedicated web apps who constantly improve their competencies and knowledge.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="OurMissionImg">
                            <img src={OurMissionImg} alt="OurMissionImg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMission;
