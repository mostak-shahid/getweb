import React from 'react';
import SecLineShape from '../../assets/images/secLineShape.svg';
import IndustriesIcon1 from '../../assets/images/industries-icon1.svg';
import IndustriesIcon2 from '../../assets/images/industries-icon2.svg';
import IndustriesIcon3 from '../../assets/images/industries-icon3.svg';
import IndustriesIcon4 from '../../assets/images/industries-icon4.svg';
import IndustriesIcon5 from '../../assets/images/industries-icon5.svg';
import IndustriesIcon6 from '../../assets/images/industries-icon6.svg';
import IndustriesIcon7 from '../../assets/images/industries-icon7.svg';
import IndustriesIcon8 from '../../assets/images/industries-icon8.svg';
import IndustriesIcon9 from '../../assets/images/industries-icon9.svg';
import IndustriesIcon10 from '../../assets/images/industries-icon10.svg';
import IndustriesIcon11 from '../../assets/images/industries-icon11.svg';
import IndustriesIcon12 from '../../assets/images/industries-icon12.svg';

import './OurFocusIndustriesComponent.scss'

const OurFocusIndustriesComponent = () => {
    return (
        <section className='ourFocus secPadding'>
            <div className='container'>
                <div className='sectionHeader text-center mb-5'>
                    <span className='secTagLine fs-6 fw-bold textClrGreen mb-3 d-block'>
                        Our Focus Industries
                    </span>
                    <h2 className='secTitle fw-normal fs-48 text-white mb-3'>
                        <span className='fw-bold'>Industries</span> we worked in
                    </h2>
                    <div className='secIntro textClrGray fs-6 fw-normal mb-2'>
                        <p className='mb-0'>
                            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
                            Voluptate <br /> exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                        </p>
                    </div>
                    <div className='lineShape'>
                        <img src={SecLineShape} alt='lineShape' />
                    </div>
                </div>

                <div className='industriesWrapper'>
                    <div className='topWrap'>
                        <div className='industriesItem px-3 py-2 text-center topItem'>
                            <div className='icon mb-4'>
                                <img src={IndustriesIcon1} alt='IndustriesIcon' />
                            </div>
                            <h4 className='iITitle fs-14 fw-bold text-white'>
                                Healthcare
                            </h4>
                        </div>
                        <div className='industriesItem px-3 py-2 text-center topItem'>
                            <div className='icon mb-4'>
                                <img src={IndustriesIcon2} alt='IndustriesIcon' />
                            </div>
                            <h4 className='iITitle fs-14 fw-bold text-white'>
                                eCommerce
                            </h4>
                        </div>
                        <div className='industriesItem px-3 py-2 text-center topItem'>
                            <div className='icon mb-4'>
                                <img src={IndustriesIcon3} alt='IndustriesIcon' />
                            </div>
                            <h4 className='iITitle fs-14 fw-bold text-white'>
                                Education
                            </h4>
                        </div>
                        <div className='industriesItem px-3 py-2 text-center topItem'>
                            <div className='icon mb-4'>
                                <img src={IndustriesIcon4} alt='IndustriesIcon' />
                            </div>
                            <h4 className='iITitle fs-14 fw-bold text-white'>
                                Banking
                            </h4>
                        </div>
                        <div className='industriesItem px-3 py-2 text-center topItem'>
                            <div className='icon mb-4'>
                                <img src={IndustriesIcon5} alt='IndustriesIcon' />
                            </div>
                            <h4 className='iITitle fs-14 fw-bold text-white'>
                                Lifestyle
                            </h4>
                        </div>
                        <div className='industriesItem px-3 py-2 text-center topItem'>
                            <div className='icon mb-4'>
                                <img src={IndustriesIcon6} alt='IndustriesIcon' />
                            </div>
                            <h4 className='iITitle fs-14 fw-bold text-white'>
                                Sports
                            </h4>
                        </div>
                    </div>
                    <div className='bottomWrap'>
                        <div className='industriesItem px-3 pt-3 text-center bottomItem'>
                            <div className='icon mb-4'>
                                <img src={IndustriesIcon7} alt='IndustriesIcon' />
                            </div>
                            <h4 className='iITitle fs-14 fw-bold text-white'>
                                Food & Restaurants
                            </h4>
                        </div>
                        <div className='industriesItem px-3 pt-3 text-center bottomItem'>
                            <div className='icon mb-4'>
                                <img src={IndustriesIcon8} alt='IndustriesIcon' />
                            </div>
                            <h4 className='iITitle fs-14 fw-bold text-white'>
                                Travel
                            </h4>
                        </div>
                        <div className='industriesItem px-3 pt-3 text-center bottomItem'>
                            <div className='icon mb-4'>
                                <img src={IndustriesIcon9} alt='IndustriesIcon' />
                            </div>
                            <h4 className='iITitle fs-14 fw-bold text-white'>
                                Social
                            </h4>
                        </div>
                        <div className='industriesItem px-3 pt-3 text-center bottomItem'>
                            <div className='icon mb-4'>
                                <img src={IndustriesIcon10} alt='IndustriesIcon' />
                            </div>
                            <h4 className='iITitle fs-14 fw-bold text-white'>
                                Entertainment
                            </h4>
                        </div>
                        <div className='industriesItem px-3 pt-3 text-center bottomItem'>
                            <div className='icon mb-4'>
                                <img src={IndustriesIcon11} alt='IndustriesIcon' />
                            </div>
                            <h4 className='iITitle fs-14 fw-bold text-white'>
                                Game
                            </h4>
                        </div>
                        <div className='industriesItem px-3 pt-3 text-center bottomItem'>
                            <div className='icon mb-4'>
                                <img src={IndustriesIcon12} alt='IndustriesIcon' />
                            </div>
                            <h4 className='iITitle fs-14 fw-bold text-white'>
                                Transportation
                            </h4>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default OurFocusIndustriesComponent;