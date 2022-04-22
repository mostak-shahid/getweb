import React from 'react';
import SecLineShape from '../../assets/images/secLineShape.svg';
import ServiceIcon1 from '../../assets/images/service-icon1.svg';
import ServiceIcon2 from '../../assets/images/service-icon2.svg';
import ServiceIcon3 from '../../assets/images/service-icon3.svg';
import ServiceIcon4 from '../../assets/images/service-icon4.svg';
import ServiceIcon5 from '../../assets/images/service-icon5.svg';
import ServiceIcon6 from '../../assets/images/service-icon6.svg';
import ServiceIcon7 from '../../assets/images/service-icon7.svg';
import ServiceIcon8 from '../../assets/images/service-icon8.svg';
import ServiceIcon9 from '../../assets/images/service-icon9.svg';
import './OurServicesComponent.scss'

const OurServicesComponent = () => {

    const servicesItems = [
        {
            img: ServiceIcon1,
            title: "Ideation and Evaluation",
            desc: "Give your product idea a shape. Plan and evaluate the essential features of your product to accomplish your business goals and eliminate possible mistakes.",
        },
        {
            img: ServiceIcon2,
            title: "Product Design",
            desc: "Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results with intuitive and impactful design easy on the eye.",
        },
        {
            img: ServiceIcon3,
            title: "Front-end development",
            desc: "We turn your designs into web standards compliant code. We create code according to W3C standards, and our markup is displayed correctly in all popular modern browsers.",
        },
        {
            img: ServiceIcon4,
            title: "Web Development",
            desc: "Full-stack web development by top-notch tech & experts covered from the beginning to the end.",
        },
        {
            img: ServiceIcon5,
            title: "Mobile App Development",
            desc: "Build well-designed and optimized custom mobile applications with a delightful UX for both iOS and Android.",
        },
        {
            img: ServiceIcon6,
            title: "Software Development",
            desc: "We work with startups, SMBs & world leading enterprises to build customized software solutions.",
        },
        {
            img: ServiceIcon7,
            title: "eCommerce & CMS Development",
            desc: "Our tailor-made enterprise e-commerce solutions comprise a range of products and IT services that gives a dynamic boost to your business.",
        },
        {
            img: ServiceIcon8,
            title: "Quality Assurance",
            desc: "Our QA engineering team makes your product bug-free, bulletproof and performance-driven throughout both automatic and manual testing.",
        },
        {
            img: ServiceIcon9,
            title: "Cloud Solution",
            desc: "We provide scalable, secure and cost-efficient cloud infrastructure with AWS & Google Cloud.",
        },
    ]

    return (
        <section className='ourServices secPadding'>
            <div className='container'>
                <div className='sectionHeader text-center mb-5'>
                    <span className='secTagLine fs-6 fw-bold textClrGreen mb-3 d-block'>
                        Our Services
                    </span>
                    <h2 className='secTitle fw-normal fs-48 text-white mb-3'>
                        What <strong className='fwBlack'>services</strong> do we offer
                    </h2>
                    <div className='secIntro textClrGray fs-6 fw-normal mb-2'>
                        <p className='mb-0'>
                            Building software solutions can be challenging. Opting for Cinnamon means
                            receiving guidance <br />  from experts who cover the entire product lifecycle,
                            from ideation to deployment.
                        </p>
                    </div>
                    <div className='lineShape'>
                        <img src={SecLineShape} alt='lineShape' />
                    </div>
                </div>

                <div className='row'>
                    
                    {/* servicesItems init */}
                    
                    {
                        servicesItems.map((item) => (
                            <div className='col-xl-4 col-md-6 mb-4' key={item.img}>
                                <div className='servicesItems p-4 isRadius16 h-100 d-flex flex-column justify-content-between'>
                                    <div className='serHeader'>
                                        <div className='servicesIcon mb-4'>
                                            <img src={item.img} alt='icon' />
                                        </div>
                                        <h3 className='serTitle fw-bold fs-5 mb-4'>
                                            <a href='#' className='text-white text-decoration-none'>
                                                {item.title}
                                            </a>
                                        </h3>
                                        <div className='serviceIntro fs-6 fw-normal textClrGray mb-4'>
                                            <p className='mb-0'>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='readMoreBtn'>
                                        <a href='#' className='textClrGrayDark fs-14 fwSemiBold text-decoration-none d-flex align-items-center'>
                                            <span>
                                                Read more
                                            </span>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.05371 15.77L12.2154 10.6083C12.825 9.99873 12.825 9.00123 12.2154 8.39165L7.05371 3.22998" stroke="#6B6E78" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default OurServicesComponent;