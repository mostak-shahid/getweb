import React from "react";
import SecLineShape from "../../assets/images/secLineShape.svg";
import MultipleItems from '../TestimonialsSlider/TestimonialsSlider';

const TestimonialsComponent = () => {
    return (
        <section className="testimonials secPadding">
            <div className="container-fluid">
                <div className="sectionHeader text-center mb-5">
                    <span className="secTagLine fs-6 fw-bold textClrGreen mb-3 d-block">Testimonials</span>
                    <h2 className="secTitle fw-normal fs-48 text-white mb-3">
                        <span className="fw-bold">Client </span> say about us
                    </h2>
                    <div className="secIntro textClrGray fs-6 fw-normal mb-2">
                        <p className="mb-0">
                            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate <br /> exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                        </p>
                    </div>
                    <div className="lineShape">
                        <img src={SecLineShape} alt="lineShape" />
                    </div>
                </div>
                <MultipleItems />
            </div>
        </section>
    );
};

export default TestimonialsComponent;
