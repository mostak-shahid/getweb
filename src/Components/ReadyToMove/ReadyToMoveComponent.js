import React from 'react';
import SecLineShape from '../../assets/images/secLineShape.svg';
import './ReadyToMoveComponent.scss'

const ReadyToMoveComponent = () => {
    return (
        <section className='newslatter secPadding'>
            <div className='container'>
                <div className='sectionHeader text-center mb-0'>
                    <h2 className='secTitle fw-normal fs-48 text-white mb-3'>
                        Ready to <strong className='fw-bold'>move forward</strong> and get results?
                    </h2>
                    <div className='secIntro textClrGray fs-6 fw-normal mb-4'>
                        <p className='mb-0'>
                            Schedule a free consultation with our team to discuss further details about your project.
                        </p>
                    </div>
                    <div className="gw-btn gw-btn-green d-flex justify-content-center">
                        <button type="button" className="btn position-relative w-auto text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52">
                            <span className="pe-4">Start a Project</span>
                            <svg className="position-absolute end-0 top-0" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6265 5.18872L17.9377 10.5L12.6265 15.8112" stroke="#121316" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M3.0625 10.5H17.7887" stroke="#121316" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadyToMoveComponent;