import React from "react";
import { Accordion } from "react-bootstrap";
import SecLineShape from "../../assets/images/secLineShape.svg";
import "./Faq.scss";

const Faq = () => {
    return (
        <section className="Faq secPadding">
            <div className="container">
                <div className="sectionHeader text-center mb-5">
                    <span className="secTagLine fs-6 fw-bold textClrGreen mb-3 d-block">Faq</span>
                    <h2 className="secTitle fw-normal fs-48 text-white mb-3">
                        <span className="fw-bold"> Frequently </span> asked questions
                    </h2>
                    <div className="lineShape">
                        <img src={SecLineShape} alt="lineShape" />
                    </div>
                </div>
                <div className="faqList">
                    <Accordion defaultActiveKey="0" flush>
                        <div className="row">
                            <div className="col-xl-6">
                                <Accordion.Item eventKey="0" className="mb-3 isRadius16 overflow-hidden">
                                    <Accordion.Header className="fs-6 fw-bold">Why should I trust your team for my software needs?</Accordion.Header>
                                    <Accordion.Body className="fw-normal fs-6">
                                        HyperSense has been developing software solutions since 2003. We have worked with over 100 clients worldwide, and the reputable D.C.-based research firm
                                        Clutch.co has rated us a top app development provider.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className="mb-3 isRadius16 overflow-hidden">
                                    <Accordion.Header className="fs-6 fw-bold">Can I visit your office and meet with the team?</Accordion.Header>
                                    <Accordion.Body className="fw-normal fs-6">
                                        HyperSense has been developing software solutions since 2003. We have worked with over 100 clients worldwide, and the reputable D.C.-based research firm
                                        Clutch.co has rated us a top app development provider.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className="mb-3 isRadius16 overflow-hidden">
                                    <Accordion.Header className="fs-6 fw-bold">Are you willing to sign an NDA?</Accordion.Header>
                                    <Accordion.Body className="fw-normal fs-6">
                                        HyperSense has been developing software solutions since 2003. We have worked with over 100 clients worldwide, and the reputable D.C.-based research firm
                                        Clutch.co has rated us a top app development provider.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                            <div className="col-xl-6">
                                <Accordion.Item eventKey="4" className="mb-3 isRadius16 overflow-hidden">
                                    <Accordion.Header className="fs-6 fw-bold">What are your main areas of expertise?</Accordion.Header>
                                    <Accordion.Body className="fw-normal fs-6">
                                        HyperSense has been developing software solutions since 2003. We have worked with over 100 clients worldwide, and the reputable D.C.-based research firm
                                        Clutch.co has rated us a top app development provider.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className="mb-3 isRadius16 overflow-hidden">
                                    <Accordion.Header className="fs-6 fw-bold">What pricing models do you work with, and what payment types do you accept?</Accordion.Header>
                                    <Accordion.Body className="fw-normal fs-6">
                                        HyperSense has been developing software solutions since 2003. We have worked with over 100 clients worldwide, and the reputable D.C.-based research firm
                                        Clutch.co has rated us a top app development provider.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className="mb-3 isRadius16 overflow-hidden">
                                    <Accordion.Header className="fs-6 fw-bold">Will we own all of the source files for any software you build for us?</Accordion.Header>
                                    <Accordion.Body className="fw-normal fs-6">
                                        HyperSense has been developing software solutions since 2003. We have worked with over 100 clients worldwide, and the reputable D.C.-based research firm
                                        Clutch.co has rated us a top app development provider.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </div>
                        </div>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};
export default Faq;
