import React from "react";
import "./OurAward.scss";
import SecLineShape from "../../assets/images/secLineShape.svg";
import OurAwardLogo1 from "../../assets/images/OurAwardLogo1.svg";
import OurAwardLogo2 from "../../assets/images/OurAwardLogo2.svg";
import OurAwardLogo3 from "../../assets/images/OurAwardLogo3.svg";
import OurAwardLogo4 from "../../assets/images/OurAwardLogo4.svg";
import OurAwardLogo5 from "../../assets/images/OurAwardLogo5.svg";
import OurAwardLogo6 from "../../assets/images/OurAwardLogo6.svg";
import OurAwardLogo7 from "../../assets/images/OurAwardLogo7.svg";
import OurAwardLogo8 from "../../assets/images/OurAwardLogo8.svg";

const OurAward = () => {
    const OurAwardItems = [
        {
            OurAwardLogo: OurAwardLogo1,
            CompanyName: "Top 10 at Clutch",
        },
        {
            OurAwardLogo: OurAwardLogo2,
            CompanyName: "Acquia Certified Developers",
        },
        {
            OurAwardLogo: OurAwardLogo3,
            CompanyName: "Best Digital Agency",
        },
        {
            OurAwardLogo: OurAwardLogo4,
            CompanyName: "Top Web Development Companies - 2021",
        },
        {
            OurAwardLogo: OurAwardLogo5,
            CompanyName: "Top Web Development Company",
        },
        {
            OurAwardLogo: OurAwardLogo6,
            CompanyName: "Upwork Top Rated",
        },
        {
            OurAwardLogo: OurAwardLogo7,
            CompanyName: "Basis",
        },
        {
            OurAwardLogo: OurAwardLogo8,
            CompanyName: "Reliable Company",
        },
    ];

    return (
        <section className="ourFocus secPadding bgClrDarkLight">
            <div className="container">
                <div className="sectionHeader text-center mb-5">
                    <span className="secTagLine fs-6 fw-bold textClrGreen mb-3 d-block">Our award</span>
                    <h2 className="secTitle fw-normal fs-48 text-white mb-3">
                        Our global
                        <span className="fw-bold"> impression</span>
                    </h2>
                    <div className="secIntro textClrGray fs-6 fw-normal mb-2">
                        <p className="mb-0">We’re proud of our awards! Look, what we’ve already won.</p>
                    </div>
                    <div className="lineShape">
                        <img src={SecLineShape} alt="lineShape" />
                    </div>
                </div>

                <div className="OurAwardWrapper">
                    {OurAwardItems.map((item) => (
                        <div className="OurAwardItem px-3 py-3 text-center" key={item.OurAwardLogo}>
                            <div className="icon mb-3">
                                <img src={item.OurAwardLogo} alt="OurAwardLogo" />
                            </div>
                            <h4 className="title fs-14 fw-bold text-white">{item.CompanyName}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurAward;
