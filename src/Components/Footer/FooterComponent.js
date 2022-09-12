import "font-awesome/css/font-awesome.min.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Config from "../../Config.json";
import LazyImage from "../LazyImage";
import Navigation from "../Navigation/Navigation";
import "./FooterComponent.scss";

//const FooterComponent = () => {
export default class FooterComponent extends Component {
  state = {
    loading: true,
    optionData: null,
  };

  async componentDidMount() {
    const url = Config.API_BASE + "options";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      optionData: data,
      loading: false,
    });
    //console.log(this.state.optionData.logo.url);
  }

  render() {
    if (this.state.loading) {
      return <div className="textClrGreen text-center d-none">loading...</div>;
    }

    if (!this.state.optionData) {
      return <div>Didn't get data from API</div>;
    }
    //const CANONICAL = Config.SITE_DOMAIN;
    const { optionData } = this.state;
    //console.log(optionData['sections-footer-gallery']);
    const menu1 = [
      {
        ID: 252,
        title: "About",
        class: [""],
        url: "/about",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 253,
        title: "Our Process",
        class: [""],
        url: "/our-process",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 254,
        title: "Workshops",
        class: [""],
        url: "/workshops",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 255,
        title: "Portfolio",
        class: [""],
        url: "/portfolios",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 256,
        title: "Careers",
        class: [""],
        url: "/careers",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 1392,
        title: "Blog",
        class: [""],
        url: "/blog",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 1393,
        title: "Contact",
        class: [""],
        url: "/contact",
        image: false,
        hover_image: false,
        submenu: [],
      },
    ];
    const menu2 = [
      {
        ID: 257,
        title: "Product Design",
        class: [""],
        url: "/product-design",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 262,
        title: "UX Design",
        class: [""],
        url: "/ux-design",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 261,
        title: "UX Writing",
        class: [""],
        url: "/ux-writing",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 260,
        title: "UI Design",
        class: [""],
        url: "/ui-design",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 259,
        title: "Branding",
        class: [""],
        url: "/branding",
        image: false,
        hover_image: false,
        submenu: [],
      },
    ];
    const menu3 = [
      {
        ID: 264,
        title: "Android App Development",
        class: [""],
        url: "/android",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 265,
        title: "iOS App Development",
        class: [""],
        url: "/ios",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 266,
        title: "Cross Platform Mobile Development",
        class: [""],
        url: "/mobile-development",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 267,
        title: "Custom Web Apps",
        class: [""],
        url: "/custom-web-apps",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 268,
        title: "Progressive Web Apps",
        class: [""],
        url: "/progressive-web-apps",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 269,
        title: "Front End Development Services",
        class: [""],
        url: "/front-end-development-services",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 270,
        title: "SaaS Application Development",
        class: [""],
        url: "/saas-application-development",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 271,
        title: "Lean Product Development",
        class: [""],
        url: "/lean-product-development",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 1394,
        title: "Custom Application Development",
        class: [""],
        url: "/custom-application-development",
        image: false,
        hover_image: false,
        submenu: [],
      },
    ];
    const menu4 = [
      {
        ID: 278,
        title: "Front End Developer",
        class: ["mb-3", "mt-3"],
        url: "/front-end-development",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 279,
        title: "Back End Developer",
        class: ["megamenu"],
        url: "/back-end-developer",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 280,
        title: "Mobile App Developer",
        class: [""],
        url: "/mobile-app-developer",
        image: false,
        hover_image: false,
        submenu: [],
      },
      {
        ID: 281,
        title: "Full Stack Developer",
        class: [""],
        url: "/full-stack-developer",
        image: false,
        hover_image: false,
        submenu: [],
      },
    ];
    
    const handleClick = (e) => {
      e.preventDefault()
      const target = e.target.getAttribute('data-target')
      const location = document.querySelector(target).offsetTop  
      window.scrollTo({
          left: 0,
          top: location,
      })
    }
    return (
      <div className="footer">
        <div className="contactUs isBgBorder pt-120">
          <div className="container-lg">
            <div className="widget">
            <div className="row">
              <div className="col-lg-4 col-sm-6 text-center text-sm-start">
                <div className="contacts">
                  <p className="textClrGray fs-14 fw-medium mb-2">
                    Want to collaborate?
                  </p>
                  <a
                    href={["mailto", optionData["contact-email"][0]].join(":")}
                    className="textClrGreen fs-22 fwSemiBold text-decoration-none"
                  >
                    {optionData["contact-email"][0]}
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 text-center text-sm-start">
                <div className="contacts">
                  <p className="textClrGray fs-14 fw-medium mb-2">
                    Want to join us?
                  </p>
                  <a
                    href={["mailto", optionData["contact-email"][1]].join(":")}
                    className="textClrGreen fs-22 fwSemiBold text-decoration-none"
                  >
                    {optionData["contact-email"][1]}
                  </a>
                </div>
              </div>
              <div className="col-lg-4 text-center text-sm-start">
                <div className="contacts">
                  <p className="textClrGray fs-14 fw-medium mb-2">
                    Want to visit us?
                  </p>
                  <p className="fs-22 fwSemiBold text-white mb-0">
                    {optionData?.contactAddress[0]}
                  </p>
                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
        <div className="footerWidgetArea isBgBorder pt-40 pb-40">
          <div className="container-lg">
            <div className="row">
              <div className="col-xl-4 text-center text-sm-start mb-4">
                <div className="widget">
                  <div className="row">
                    <div className="col-12 col-sm-8 col-xl-12 text-center text-sm-start">
                      <div className="footerLogo mb-4">
                        <NavLink to="/">
                          <LazyImage
                            src={optionData.logo.url}
                            alt="footerLogo"
                            width="101"
                            height="30"
                          />
                        </NavLink>
                      </div>
                      <div
                        className="intro textClrGray fs-14 fw-medium mb-4"
                        dangerouslySetInnerHTML={{
                          __html: optionData["sections-footer-content"],
                        }}
                      ></div>
                      <div className="footerSubLogo d-flex align-items-center gap-3 flex-wrap mb-4 justify-content-center justify-content-sm-start">
                        {Object.values(
                          optionData["sections-footer-gallery"]
                        ).map((value, index) => {
                          return (
                            <LazyImage src={value} key={index} alt="footerSubLogo" />
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-12 col-sm-4 col-xl-12">
                      {optionData["sections-footer-career"] && (
                        <div className="Careers text-center text-sm-start">
                          <p className="text-white fs-14 fw-bold">Careers</p>
                          <a
                            href={optionData["sections-footer-career"]}
                            className="text-decoration-none bgClrPink d-inline-flex px-4 py-2 rounded-pill align-items-center gap-2 text-white fwSemiBold fs-13"
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.9375 5.0625C5.9375 3.37364 7.31114 2 9 2C10.6885 2 12.062 3.37312 12.0625 5.06154C12.0555 6.7186 10.7642 8.05522 9.1184 8.1175H9.11838H9.11835H9.11833H9.1183H9.11828H9.11826H9.11823H9.11821H9.11818H9.11816H9.11814H9.11811H9.11809H9.11806H9.11804H9.11801H9.11799H9.11797H9.11794H9.11792H9.11789H9.11787H9.11784H9.11782H9.11779H9.11777H9.11774H9.11772H9.11769H9.11767H9.11764H9.11761H9.11759H9.11756H9.11754H9.11751H9.11749H9.11746H9.11743H9.11741H9.11738H9.11736H9.11733H9.1173H9.11728H9.11725H9.11722H9.1172H9.11717H9.11714H9.11712H9.11709H9.11706H9.11703H9.11701H9.11698H9.11695H9.11693H9.1169H9.11687H9.11684H9.11681H9.11679H9.11676H9.11673H9.1167H9.11667H9.11665H9.11662H9.11659H9.11656H9.11653H9.1165H9.11647H9.11644H9.11641H9.11639H9.11636H9.11633H9.1163H9.11627H9.11624H9.11621H9.11618H9.11615H9.11612H9.11609H9.11606H9.11603H9.116H9.11597H9.11593H9.1159H9.11587H9.11584H9.11581H9.11578H9.11575H9.11572H9.11568H9.11565H9.11562H9.11559H9.11556H9.11552H9.11549H9.11546H9.11543H9.11539H9.11536H9.11533H9.11529H9.11526H9.11523H9.11519H9.11516H9.11513H9.11509H9.11506H9.11502H9.11499H9.11496H9.11492H9.11489H9.11485H9.11482H9.11478H9.11475H9.11471H9.11468H9.11464H9.1146H9.11457H9.11453H9.1145H9.11446H9.11442H9.11439H9.11435H9.11431H9.11428H9.11424H9.1142H9.11416H9.11413H9.11409H9.11405H9.11401H9.11398H9.11394H9.1139H9.11386H9.11382H9.11378H9.11374H9.1137H9.11367H9.11363H9.11359H9.11355H9.11351H9.11347H9.11343H9.11339H9.11335H9.1133H9.11326H9.11322H9.11318H9.11314H9.1131H9.11306H9.11301H9.11297H9.11293H9.11289H9.11285H9.1128H9.11276H9.11272H9.11267H9.11263H9.11259H9.11254H9.1125H9.11241H9.11232H9.11224H9.11215H9.11206H9.11198H9.11189H9.1118H9.11172H9.11163H9.11154H9.11146H9.11137H9.11129H9.1112H9.11111H9.11103H9.11094H9.11086H9.11078H9.11069H9.11061H9.11052H9.11044H9.11035H9.11027H9.11019H9.1101H9.11002H9.10994H9.10985H9.10977H9.10969H9.10961H9.10952H9.10944H9.10936H9.10928H9.1092H9.10911H9.10903H9.10895H9.10887H9.10879H9.10871H9.10863H9.10855H9.10847H9.10839H9.10831H9.10823H9.10815H9.10807H9.10799H9.10791H9.10783H9.10775H9.10767H9.10759H9.10751H9.10743H9.10735H9.10728H9.10724C9.03457 8.10971 8.96109 8.11063 8.89395 8.11649C7.21116 8.04189 5.9375 6.70623 5.9375 5.0625Z"
                                fill="white"
                                stroke="white"
                              />
                              <path
                                opacity="0.4"
                                d="M12.8102 10.62C10.7177 9.22498 7.30521 9.22498 5.19771 10.62C4.24521 11.25 3.72021 12.1125 3.72021 13.035C3.72021 13.9575 4.24521 14.8125 5.19021 15.4425C6.24021 16.1475 7.62021 16.5 9.00021 16.5C10.3802 16.5 11.7602 16.1475 12.8102 15.4425C13.7552 14.805 14.2802 13.95 14.2802 13.02C14.2727 12.105 13.7552 11.2425 12.8102 10.62Z"
                                fill="white"
                              />
                              <path
                                d="M8.52768 14.445C8.40768 14.445 8.28768 14.3925 8.19768 14.31L7.25268 13.365C7.07268 13.185 7.07268 12.885 7.25268 12.705C7.43268 12.525 7.73268 12.525 7.91268 12.705L8.52768 13.32L10.0877 11.76C10.2677 11.58 10.5677 11.58 10.7477 11.76C10.9277 11.94 10.9277 12.24 10.7477 12.42L8.85768 14.31C8.76768 14.4 8.64768 14.445 8.52768 14.445Z"
                                fill="white"
                              />
                            </svg>
                            <span>We Are Hiring!</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="sm-border"></div>
                <div className="widgetMenu">
                  {menu1 && (
                    <div className="m-widget m-widget-1 mb-4 mb-xl-0 ps-xl-4">
                      <Navigation
                        menuData={menu1}
                        id="0"
                        title="Company"
                        titleCls="widgetTitle fs-14 fw-bold text-white mb-30"
                        listCls="widgetList list-unstyled mb-0"
                        itemCls="fs-14 fw-medium textClrGray text-decoration-none d-block"
                      />
                    </div>
                  )}
                  {menu2 && (
                    <div className="m-widget m-widget-2 mb-4 mb-xl-0 ps-xl-4">
                      <Navigation
                        menuData={menu2}
                        id="0"
                        title="Design"
                        titleCls="widgetTitle fs-14 fw-bold text-white mb-30"
                        listCls="widgetList list-unstyled mb-0"
                        itemCls="fs-14 fw-medium textClrGray text-decoration-none d-block"
                      />
                    </div>
                  )}
                  {menu3 && (
                    <div className="m-widget m-widget-3 mb-0 ps-xl-4">
                      <Navigation
                        menuData={menu3}
                        id="0"
                        title="Development"
                        titleCls="widgetTitle fs-14 fw-bold text-white mb-30"
                        listCls="widgetList list-unstyled mb-0"
                        itemCls="fs-14 fw-medium textClrGray text-decoration-none d-block"
                      />
                    </div>
                  )}
                  {menu4 && (
                    <div className="m-widget m-widget-4 mb-0 ps-xl-4">
                      <Navigation
                        menuData={menu4}
                        id="0"
                        title="Staff Augmentation"
                        titleCls="widgetTitle fs-14 fw-bold text-white mb-30"
                        listCls="widgetList list-unstyled mb-0"
                        itemCls="fs-14 fw-medium textClrGray text-decoration-none d-block"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container-lg">
            <div className="widget">
            <div className="row">
              <div className="col-sm-8">
                <div
                  className="copyrightText text-center text-sm-start d-block d-sm-flex align-items-sm-center"
                  dangerouslySetInnerHTML={{
                    __html: optionData["sections-footer-copyright"],
                  }}
                ></div>
              </div>
              <div className="col-sm-4">
                {optionData["contact-social-links"].length && (
                  <div className="social">
                    <ul className="footer-social-list list-inline text-sm-end text-center p-0 mt-3 mb-0 m-sm-0">
                      {optionData["contact-social-links"].map((item, index) => (
                        <li className="list-inline-item" key={index}>
                            {item.link_url.match(/facebook/gi) && (
                              <a target="_blank" rel="noreferrer" href={item.link_url} className="facebook-icon"><span className="d-none">facebook</span></a>
                            )}
                            {item.link_url.match(/twitter/gi) && (
                              <a target="_blank" rel="noreferrer" href={item.link_url} className="twitter-icon"><span className="d-none">twitter</span></a>
                            )}
                            {item.link_url.match(/dribbble/gi) && (
                              <a target="_blank" rel="noreferrer" href={item.link_url} className="dribbble-icon"><span className="d-none">dribbble</span></a>
                            )}
                            {item.link_url.match(/behance/gi) && (
                              <a target="_blank" rel="noreferrer" href={item.link_url} className="behance-icon"><span className="d-none">behance</span></a>
                            )}
                            {item.link_url.match(/linkedin/gi) && (
                              <a target="_blank" rel="noreferrer" href={item.link_url} className="linkedin-icon"><span className="d-none">linkedin</span></a>
                            )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            </div>
          </div>
        </div>
        
        <div className="back-to-top-con">
            
                <div className="d-flex justify-content-start position-relative">
                    {/* <a href="#root" className="back-to-top">Back to top</a> */}
                    <NavLink className="back-to-top" to="#root" onClick={handleClick} data-target="#root">Back to top</NavLink>
                </div>
            
        </div> 
      </div>
    );
  }
}
