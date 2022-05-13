import React from "react";
import LineShape from "../../assets/images/secLineShape.svg";
import valuesIcon1 from "../../assets/images/lovely.svg";
import valuesIcon2 from "../../assets/images/valuesIcon2.svg";
import valuesIcon3 from "../../assets/images/valuesIcon3.svg";
import valuesIcon4 from "../../assets/images/valuesIcon4.svg";
import valuesIcon5 from "../../assets/images/valuesIcon5.svg";
import valuesIcon6 from "../../assets/images/valuesIcon6.svg";
import "./OurValues.scss";

const OurValues = () => {
    const OurValueItems = [
        {
            icon: valuesIcon1,
            title: "Respect",
            intro: "We have due regard for the feelings, wishes, and rights of those around us and ourselves equally",
        },
        {
            icon: valuesIcon2,
            title: "Ownership & Proactivity",
            intro: "We treat teams’ and customers’ objectives as our own. This gives us the foundation to exceed the customers’ expectations",
        },
        {
            icon: valuesIcon3,
            title: "Transparency",
            intro: "We create conditions whereby all parties realize where they are and where they want to be",
        },
        {
            icon: valuesIcon4,
            title: "Collaboration",
            intro: "Our team is a balanced organism in which each member matters and influences the overall",
        },
        {
            icon: valuesIcon5,
            title: "Flexibility",
            intro: "We adapt to the continually evolving business environment to be able to respond to the customer’s needs",
        },
        {
            icon: valuesIcon6,
            title: "Remote Culture",
            intro: "We provide effective workflow from any part of the world with our distributed teams",
        },
    ];
    return (
        <section className="OurValues secPadding">
            <div className="container">
                <div class="sectionHeader text-center mb-5">
                    <div class="secTitle fw-normal fs-48 text-white">
                        Our <strong>values</strong>
                    </div>
                    <div class="lineShape mb-4">
                        <img src={LineShape} alt="LineShape" />
                    </div>
                </div>
                <div className="row">
                    {OurValueItems.map((item) => (
                        <div className="col-xl-4 col-sm-6 mb-4">
                            <div className="singleValues isRadius16 p-4 h-100">
                                <div className="icon mb-4">
                                    <img src={item.icon} alt="icon" />
                                </div>
                                <h3 className="fw-bold fs-5 text-white mb-4">{item.title}</h3>
                                <p className="intro fs-6 fw-normal textClrGray mb-0">{item.intro}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;
