import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Config from "../../Config.json";
import CalendlyModal from "../CalendlyModal/CalendlyModal";
import LazyImage from "../LazyImage";
import Navigation from "../Navigation/Navigation";
import './header.scss';
const Header = (props) => {
    const [loading,setLoading]=useState(true);
    const [menuOpen,setMenuOpen]=useState(false);
    const {optionData} = props; 

    useEffect(() => {
        if (optionData.length !== 0) {
            setLoading(false);                                                                                    
        }
    }, [optionData]);
    const [show,setShow]=useState(false);
    const menuAlter = () => {
        return setMenuOpen(!menuOpen)
    }
    const menuData = {
        0: {
          ID: 285,
          title: "Services",
          class: ["megamenu"],
          url: "#",
          image: false,
          hover_image: false,
          submenu: {
            1: {
              ID: 286,
              title: "Ideation and Evaluation",
              class: [""],
              url: "/ideation-and-evaluation",
              image:
                "https://getwebinc.com/api/wp-content/uploads/2022/09/menu-ideation-3.svg",
              hover_image:
                "https://getwebinc.com/api/wp-content/uploads/2022/09/menu-ideation-3.svg",
              submenu: {
                1: {
                  ID: 765,
                  title: "Product Design Sprint",
                  class: [""],
                  url: "/product-design-sprint",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                2: {
                  ID: 287,
                  title: "Scoping Session",
                  class: [""],
                  url: "/scoping-session",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                3: {
                  ID: 288,
                  title: "UX Review",
                  class: [""],
                  url: "/ux-review",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                4: {
                  ID: 289,
                  title: "Research & Development",
                  class: [""],
                  url: "/research-development",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
              },
            },
            6: {
              ID: 290,
              title: "Product Design",
              class: ["menu-double-column"],
              url: "/product-design-service",
              image:
                "https://getwebinc.com/api/wp-content/uploads/2022/05/menu-product-design.png",
              hover_image:
                "https://getwebinc.com/api/wp-content/uploads/2022/05/menu-product-design.png",
              submenu: {
                5: {
                  ID: 292,
                  title: "Product Design",
                  class: [""],
                  url: "/product-design",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                6: {
                  ID: 293,
                  title: "UI Design",
                  class: [""],
                  url: "/ui-design",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                7: {
                  ID: 291,
                  title: "UX Design",
                  class: [""],
                  url: "/ux-design",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                8: {
                  ID: 294,
                  title: "Branding",
                  class: [""],
                  url: "/branding",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                9: {
                  ID: 295,
                  title: "UX Writing",
                  class: [""],
                  url: "/ux-writing",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
              },
            },
            12: {
              ID: 932,
              title: "Staff Augmentation",
              class: [""],
              url: "/staff-augmentation",
              image:
                "https://getwebinc.com/api/wp-content/uploads/2022/08/Staff-Augmentation.svg",
              hover_image:
                "https://getwebinc.com/api/wp-content/uploads/2022/08/Staff-Augmentation.svg",
              submenu: {
                10: {
                  ID: 933,
                  title: "Front End Developer",
                  class: [""],
                  url: "/front-end-developer",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                11: {
                  ID: 934,
                  title: "Back End Developer",
                  class: [""],
                  url: "/back-end-developer",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                12: {
                  ID: 935,
                  title: "Mobile App Developer",
                  class: [""],
                  url: "/mobile-app-developer",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                13: {
                  ID: 936,
                  title: "Full Stack Developer",
                  class: [""],
                  url: "/full-stack-developer",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
              },
            },
            17: {
              ID: 296,
              title: "App Development",
              class: [""],
              url: "/app-development",
              image:
                "https://getwebinc.com/api/wp-content/uploads/2022/08/App-Development.svg",
              hover_image:
                "https://getwebinc.com/api/wp-content/uploads/2022/08/App-Development.svg",
              submenu: {
                14: {
                  ID: 299,
                  title: "Android App Development",
                  class: [""],
                  url: "/android-app-development",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                15: {
                  ID: 298,
                  title: "iOS App Development",
                  class: [""],
                  url: "/ios-app-development",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                16: {
                  ID: 297,
                  title: "Cross Platform Mobile Development",
                  class: [""],
                  url: "/cross-platform-mobile-development",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
              },
            },
            21: {
              ID: 302,
              title: "Web Applications",
              class: [""],
              url: "/web-applications",
              image:
                "https://getwebinc.com/api/wp-content/uploads/2022/08/Web-Applications.svg",
              hover_image:
                "https://getwebinc.com/api/wp-content/uploads/2022/08/Web-Applications.svg",
              submenu: {
                17: {
                  ID: 303,
                  title: "Custom Web Apps",
                  class: [""],
                  url: "/custom-web-apps",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                18: {
                  ID: 304,
                  title: "Progressive Web Apps",
                  class: [""],
                  url: "/progressive-web-apps",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                19: {
                  ID: 305,
                  title: "Front End Development Services",
                  class: [""],
                  url: "/front-end-development-services",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
              },
            },
            25: {
              ID: 937,
              title: "Product Engineering",
              class: [""],
              url: "/product-engineering",
              image:
                "https://getwebinc.com/api/wp-content/uploads/2022/06/code.svg",
              hover_image:
                "https://getwebinc.com/api/wp-content/uploads/2022/06/code.svg",
              submenu: {
                20: {
                  ID: 938,
                  title: "SaaS Application Development",
                  class: [""],
                  url: "/saas-application-development",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                21: {
                  ID: 939,
                  title: "Lean Product Development",
                  class: [""],
                  url: "/lean-product-development",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                22: {
                  ID: 940,
                  title: "Custom Application Development",
                  class: [""],
                  url: "/custom-application-development",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
              },
            },
            29: {
              ID: 312,
              title: "eCommerce & CMS Development",
              class: ["menu-double-column"],
              url: "/ecommerce-cms-development",
              image:
                "https://getwebinc.com/api/wp-content/uploads/2022/05/menu-ecommerce.png",
              hover_image:
                "https://getwebinc.com/api/wp-content/uploads/2022/05/menu-ecommerce.png",
              submenu: {
                27: {
                  ID: 317,
                  title: "Magento",
                  class: [""],
                  url: "/magento",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                23: {
                  ID: 313,
                  title: "WordPress",
                  class: [""],
                  url: "/wordpress-2",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                25: {
                  ID: 314,
                  title: "Shopify",
                  class: [""],
                  url: "/shopify",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                24: {
                  ID: 315,
                  title: "E-Commerce App",
                  class: [""],
                  url: "/e-commerce-app",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                26: {
                  ID: 316,
                  title: "E-Commerce Web",
                  class: [""],
                  url: "/e-commerce-web",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
              },
            },
            35: {
              ID: 318,
              title: "Cloud Solutions",
              class: [""],
              url: "/cloud-solutions",
              image:
                "https://getwebinc.com/api/wp-content/uploads/2022/09/Menu-Cloud-Solutions.svg",
              hover_image:
                "https://getwebinc.com/api/wp-content/uploads/2022/09/Menu-Cloud-Solutions.svg",
              submenu: {
                31: {
                  ID: 319,
                  title: "AWS",
                  class: [""],
                  url: "/aws",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                32: {
                  ID: 320,
                  title: "Azure",
                  class: [""],
                  url: "/azure",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
                33: {
                  ID: 321,
                  title: "Google Cloud",
                  class: [""],
                  url: "/google-cloud",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
              },
            },
            39: {
              ID: 2054,
              title: "Quality Assurance",
              class: [""],
              url: "/quality-assurance",
              image:
                "https://getwebinc.com/api/wp-content/uploads/2022/06/Group-140.svg",
              hover_image:
                "https://getwebinc.com/api/wp-content/uploads/2022/06/Group-140.svg",
              submenu: {
                28: {
                  ID: 2054,
                  title: "QA/QC Testing",
                  class: [""],
                  url: "/quality-assurance",
                  image: false,
                  hover_image: false,
                  submenu: [],
                },
              },
            },
          },
        },
        43: {
          ID: 327,
          title: "About",
          class: [""],
          url: "/about",
          image: false,
          hover_image: false,
          submenu: [],
        },
        44: {
          ID: 328,
          title: "How We Work",
          class: ["dropdownmenu"],
          url: "#",
          image: false,
          hover_image: false,
          submenu: {
            45: {
              ID: 329,
              title: "Our Process",
              class: [""],
              url: "/our-process",
              image: false,
              hover_image: false,
              submenu: [],
            },
            46: {
              ID: 330,
              title: "Workshops",
              class: [""],
              url: "/workshops",
              image: false,
              hover_image: false,
              submenu: [],
            },
          },
        },
        47: {
          ID: 331,
          title: "Portfolio",
          class: [""],
          url: "/portfolios",
          image: false,
          hover_image: false,
          submenu: [],
        },
        48: {
          ID: 332,
          title: "Careers",
          class: [""],
          url: "/careers",
          image: false,
          hover_image: false,
          submenu: [],
        },
        49: {
          ID: 333,
          title: "Blog",
          class: [""],
          url: "/blog",
          image: false,
          hover_image: false,
          submenu: [],
        },
        50: {
          ID: 334,
          title: "Contact",
          class: [""],
          url: "/contact",
          image: false,
          hover_image: false,
          submenu: [],
        },
    };
    return (         
        loading
        ?<div cls="d-none"></div>
        : 
        <>     
        <header className='main-header'>
            <div className="wrapper d-flex justify-content-between align-items-center">
                <div className="logo-area">
                    <NavLink to="/" onClick={() => {setMenuOpen(false)}}><LazyImage src={props.optionData.logo.url} alt="Getweb Inc - logo" width="140px" height="42px" /></NavLink>
                </div>
                <div className="menu-area position-static position-xl-relative">
                    <div className="position-static position-xl-relative navbar navbar-expand-xl navbar-dark">
                        <button className={['navbar-toggler', !menuOpen?'collapsed':''].join(' ')} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={menuAlter}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={["collapse navbar-collapse", menuOpen && 'show'].join(' ')} id="navbarSupportedContent">
                        {Config.MAIN_MENU && <Navigation menuData={menuData} id={Config.MAIN_MENU} menuOpen={menuOpen} menuOpenToggle={(value) => this.setState({menuOpen:value})} />}
                          
                        </div>
                    </div>                       
                </div>
                <div className="button-area d-none d-xl-flex align-items-sm-center btn-wrapper">
                    <span className={["btn btn-pink position-relative border-0 rounded-pill d-flex align-items-center justify-content-center fwSemiBold fs-14 d-none"].join(' ')} rel="noreferrer" onClick={()=>setShow(true)}>
                        <span className="mr-8">Book a call now</span>
                        <span className="btn-arrow"></span>
                    </span>
                    {props.optionData['contact-request-link'] &&
                    <a href={props.optionData['contact-request-link']} className={["btn btn-pink position-relative border-0 rounded-pill d-flex align-items-center justify-content-center fwSemiBold fs-14"].join(' ')} rel="noreferrer" target="_blank">
                        <span className="mr-8">Book a call now</span>
                        <span className="btn-arrow"></span>
                    </a>
                    }
                </div>
            </div>
        </header>
        <CalendlyModal show={show} setShow={setShow}/>
        </> 
    );
};

export default Header;
