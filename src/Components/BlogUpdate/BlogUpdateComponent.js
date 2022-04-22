import React from "react";
import SecLineShape from "../../assets/images/secLineShape.svg";
import './BlogUpdateComponent.scss';

const BlogUpdateComponent = () => {
    return (
        <section className="blogs secPadding">
            <div className="container">
                <div className="sectionHeader text-center mb-5">
                    <span className="secTagLine fs-6 fw-bold textClrGreen mb-3 d-block">Blog Update</span>
                    <h2 className="secTitle fw-normal fs-48 text-white mb-3">
                        Latest <span className="fw-bold">technology </span> insights
                    </h2>
                    <div className="secIntro textClrGray fs-6 fw-normal mb-2">
                        <p className="mb-0">
                            Stay abreast of what’s trending in the world of software development with our well-researched <br /> and curated technology blogs.
                        </p>
                    </div>
                    <div className="lineShape">
                        <img src={SecLineShape} alt="lineShape" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogUpdateComponent;
