import React from 'react';
import SecLineShape from '../../assets/images/secLineShape.svg';
import './WhyChooseUsComponent.scss';

const WhyChooseUsComponent = ({data}) => {

    const whyChooseItems = [
        {
            number: "01.",
            title: "We employ brilliant IT talents",
            desc: "We are a team of developers, business analysts, and designers experienced in software development projects.",
        },
        {
            number: "02.",
            title: "Helping with go-to market strategy",
            desc: "We make sure you get a product that has only beneficial features and fits the market needs.",
        },
        {
            number: "03.",
            title: "Putting usability and quality first",
            desc: "Our products are developed with attention to detail, user-friendly interface, and meet usability and security requirements.",
        },
        {
            number: "04.",
            title: "We have exceeded many expectations",
            desc: "We tend to go beyond your ecpectations: we can say brutal truths, suggest ways out, and create high-end products.",
        },
    ]

    return (
        <section className='whyChooseUs secPadding bgClrDarkLight'>
            <div className='container'>
                <div className='sectionHeader text-center mb-5'>
                    <span className='secTagLine fs-6 fw-bold textClrGreen mb-3 d-block' dangerouslySetInnerHTML = {{__html: data._mosacademy_page_group_sub_titles[0]}}></span>
                    <div className='secTitle fw-normal fs-48 text-white mb-3' dangerouslySetInnerHTML = {{__html: data._mosacademy_page_group_title_text}}></div>                    
                    <div className='secIntro textClrGray fs-6 fw-normal mb-2'>
                        <div className='mb-0' dangerouslySetInnerHTML = {{__html: data._mosacademy_page_group_title_description}}></div>
                    </div>
                    <div className='lineShape'>
                        <img src={SecLineShape} alt='lineShape' />
                    </div>
                </div>

                <div className='row'>

                    {/* whyChooseItems init */}

                    {
                        whyChooseItems.map((items) => (
                            <div className='col-xl-3 col-lg-4 col-sm-6' key={items.number}>
                                <div className='whyChooseItem p-2'>
                                    <p className='mb-4 ms-2 ms-xl-3'>
                                        <span className='itemsNumber textClrGrayDeep fs-48 fwBlack'>
                                            {items.number}
                                        </span>
                                    </p>
                                    <div className='d-flex align-items-start gap-3'>
                                        <span className='lineShape mb-0'>
                                            <svg className='' width="1" height="15" viewBox="0 0 1 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="1" height="15" fill="#00FFA3" />
                                            </svg>
                                        </span>
                                        <div className='itemInfo'>
                                            <h3 className='itemTitle fs-18 fwSemiBold text-white mb-3'>
                                                {items.title}
                                            </h3>
                                            <div className='itemIntro fs-6 textClrGray fw-normal'>
                                                <p className='mb-0'>
                                                    {items.desc}
                                                </p>
                                            </div>
                                        </div>
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

export default WhyChooseUsComponent;