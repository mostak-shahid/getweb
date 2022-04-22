import React from "react";
import MultipleRows from "../slider/PortfolioSlider";
import SecLineShape from "../../assets/images/secLineShape.svg";

const PortfolioComponent = () => {
    return (
        <section className="portfolio secPadding isBgBorder">
            <div className="container">
                <div className="sectionHeader text-center mb-5">
                    <span className="secTagLine fs-6 fw-bold textClrGreen mb-3 d-block">Portfolio</span>
                    <h2 className="secTitle fw-normal fs-48 text-white mb-3">
                        Some <span className="fw-bold">projects</span> we’ve done
                    </h2>
                    <div className="secIntro textClrGray fs-6 fw-normal mb-2">
                        <p className="mb-0">
                            We believe in providing transparent process that we follow for exponential results and <br /> building stronger bonds with our clients
                        </p>
                    </div>
                    <div className="lineShape">
                        <img src={SecLineShape} alt="lineShape" />
                    </div>
                </div>
            </div>
            <MultipleRows />
        </section>
    );
};

export default PortfolioComponent;
