import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import goArrow from "../../assets/images/goArrow-iocn.svg";
import FilterablePortfolio from '../../Components/FilterablePortfolio/FilterablePortfolio';
import Pagination from '../../Components/Pagination/Pagination';
import ReadyToMove from '../../Components/ReadyToMove/ReadyToMove';
import SubPageBanner from '../../Components/SubPageBanner/SubPageBanner';
import { mobileApp, protoType, webApp, website, wireFrame } from '../../data';
import PortfolioBg from "../../assets/images/portfolio-bg.png";
import './Portfolio.scss';

const Portfolio = () => {
    const [selected, setSelected] = useState("webApp");
    const [data, setData] = useState([]);
    const menu = [
    {
      id: "webApp",
      title: "Web App",
    },
    {
      id: "mobileApp",
      title: "Mobile App",
    },
    {
      id: "website",
      title: "Website",
    },
    {
      id: "wireFrame",
      title: "Wireframe",
    },
    {
      id: "protoType",
      title: "Prototype",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "webApp":
        setData(webApp);
        break;
      case "mobileApp":
        setData(mobileApp);
        break;
      case "website":
        setData(website);
        break;
      case "wireFrame":
        setData(wireFrame);
        break;
      case "protoType":
        setData(protoType);
        break;
      default:
        setData(webApp);
    }
  }, [selected]);

   const tagline = "Our portfolios";
   const boldTile = "Success stories";
   const title = "- See how we’ve helped our clients";
   const intro = "Here are some examples of the excellent products that we’ve helped to send out into the world.";
   const bgImg = PortfolioBg;
    return (
        <div>

            <SubPageBanner tagline={tagline} boldTile={boldTile} title={title} intro={intro} bgImg={bgImg} />

            <div className="portfolio secPadding">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-48 fw-normal mb-3 text-center">
                                Our <span className="fw-bold">portfolios</span>
                            </h3>
                            <hr />
                            <ul>
                                {menu.map((item) => (
                                    <FilterablePortfolio title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} key={item.id} />
                                ))}
                            </ul>
                            <div className="portfolio-wrapper">
                                {data.map((item) => (
                                    <div className="portfolio-item">
                                        <div className="overLay"></div>
                                        <img src={item.img} alt="img" />
                                        <div className="afterHover">
                                            <div className="category">
                                                <div className="category-name">{item.category}</div>
                                                <div className="type-name">{item.type}</div>
                                            </div>
                                            <NavLink to="/" className="goArrow position-absolute bottom-50 start-50">
                                                <img src={goArrow} alt="go icon" />
                                            </NavLink>
                                            <NavLink to="/" className="portTitle fs-6 fw-bold text-white position-absolute bottom-0 start-0 p-4 mb-0 text-decoration-none">
                                                {item.title}
                                            </NavLink>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bottom-border"></div>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
            <ReadyToMove />
        </div>
    );
};

export default Portfolio;