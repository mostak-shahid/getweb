import React from "react";
import SecLineShape from "../../assets/images/secLineShape.svg";
import MultipleItems from '../BlogSlider/BlogSlider';
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
                <MultipleItems />

                <div className="allInsightBtn text-center mt-5">
                    <a href="#" className="btn fs-15 fwSemiBold textClrGrayDark text-decoration-none d-inline-flex align-items-center gap-2 justify-content-center">
                        View All Insights
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.0625 10.5H17.7887" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogUpdateComponent;
