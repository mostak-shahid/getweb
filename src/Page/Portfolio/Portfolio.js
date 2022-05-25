import "animate.css/animate.css";
import axios from "axios";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import { NavLink } from "react-router-dom";
import appreciate from "../../assets/images/appriciate.svg";
import companyLogo from "../../assets/images/companyLogo.svg";
import companyRightLogo from "../../assets/images/getwebRightLogo.png";
import like from "../../assets/images/like.svg";
import PortfolioBg from "../../assets/images/portfolio-bg.png";
import preview from "../../assets/images/preview.svg";
import Loading from "../../Components/Loading/Loading";
import Pagination from "../../Components/Pagination/Pagination";
import PortfolioComponentModal from "../../Components/Portfolio/PortfolioComponentModal";
import ReadyToMove from "../../Components/ReadyToMove/ReadyToMove";
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";
import Config from "../../Config.json";
import "./Portfolio.scss";
import PortfolioUnit from "./PortfolioUnit/PortfolioUnit";
const Portfolio = () => {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeCatID, setActiveCatID] = useState(0);
  const [startFrom, setStartFrom] = useState(0);
  const [postCountData, setPostCountData] = useState(0);
  //const [postPerPage, setPostPerPage] = useState(4);
  const [ip, setIP] = useState("");
  const [loading, setLoading] = useState([]);
  const postPerPage = 8;
  useEffect(() => {
    axios
      .get(Config.API_BASE + "data-taxonomies/project_category")
      .then(function (response) {
        setCategories(response.data);
        setActiveCatID(response.data[0].term_id);
      })
      .catch(function (error) {
        console.log("Error: ", error);
      });
  }, []);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          Config.API_BASE +
            "data-list/project/" +
            activeCatID +
            "/" +
            startFrom +
            "/" +
            postPerPage
        )
        .then(function (response) {
          setProjects(response.data);
        });
    }
    activeCatID && fetchData();
  }, [activeCatID, startFrom]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(Config.API_BASE + "data-nop/project/" + activeCatID)
        .then(function (response) {
          setPostCountData(response.data);
        });
    }
    activeCatID && fetchData();
  }, [activeCatID]);

  useEffect(() => {
    if (categories.length !== 0 && projects !== 0) {
      setLoading(false);
    }
  }, [categories, projects]);

  const tagline = "Our portfolios";
  const boldTile = "Success stories";
  const title = "- See how we’ve helped our clients";
  const intro =
    "Here are some examples of the excellent products that we’ve helped to send out into the world.";
  const bgImg = PortfolioBg;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onClick = (aCatID, start_From) => {
    if (aCatID) {
      setActiveCatID(aCatID);
      setStartFrom(start_From);
    }
  };

  const getIP = async () => {
    //const res = await axios.get('https://checkip.amazonaws.com/')
    const res = await axios.get('https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0')
    //const res = await axios.get("https://api.ipify.org");
    console.log(res);
    //setIP(res.data.IPv4);
  };
  useEffect(() => {
    getIP();
  }, []);


  //console.log(startFrom);
  const settings = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    //autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 2500,
    items: 1,
    /*animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }*/
  };
  return loading ? (
    <Loading />
  ) : (
    <>
      <div>
        <SubPageBanner
          tagline={tagline}
          title={["<strong>" + boldTile + "</strong>", title].join(" ")}
          intro={intro}
          bgImg={bgImg}
        />

        <div className="portfolio secPadding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h3 className="fs-48 fw-normal mb-3 text-center">
                  Our <span className="fw-bold">portfolios</span> {ip}
                </h3>
                <hr />
                {categories.length && (
                  <ul>
                    {categories.map((item, index) => (
                      <li
                        className={[
                          "portfolioMenu",
                          item.term_id === activeCatID && "active",
                        ].join(" ")}
                        key={index}
                        onClick={() => onClick(item.term_id, 0)}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="portfolio-wrapper">
                  {projects.map((item, index) => (
                    <div
                      className="portfolio-item"
                      key={index}
                      onClick={handleShow}
                    >
                      <PortfolioUnit data={item} />
                    </div>
                  ))}
                </div>
                {Math.ceil(postCountData / postPerPage) > 1 && (
                  <>
                    <div className="bottom-border"></div>
                    <Pagination
                      data={Math.ceil(postCountData / postPerPage)}
                      postPerPage={postPerPage}
                      startFrom={startFrom}
                      startFromChange={(value) => onClick(activeCatID, value)}
                    />
                  </>
                )}
              </div>
            </div>
            <Modal
              className="portfolioModalWrapper"
              show={show}
              onHide={handleClose}
            >
              <Modal.Header className="p-0 border-0" closeButton></Modal.Header>
              <Modal.Body className="p-0">
                <OwlCarousel className="owl-theme" {...settings}>
                  {projects.map((item, index) => (
                    <div className="item" key={index} onClick={handleShow}>
                      <div className="modal-body-top d-flex align-items-center gap-3">
                        <img
                          src={companyLogo}
                          className="modal-top-img img-fluid"
                          alt=""
                          width="40"
                          height="40"
                        />
                        <div>
                          <h5
                            className="templateHeading mb-1"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />
                          <div className="d-flex align-items-center gap-3">
                            <p className="companyName mb-0">Getweb</p>
                            <div className="d-flex align-items-center gap-2">
                              <svg
                                width="3"
                                height="4"
                                viewBox="0 0 3 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="1.5" cy="2" r="1.5" fill="white" />
                              </svg>
                              <NavLink className="followLink" to="#">
                                Follow
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-body-images">
                        {
                          item?.meta?._mosacademy_project_gallery && Object.values(item.meta._mosacademy_project_gallery).length &&
                          Object.values(item.meta._mosacademy_project_gallery).map((item, index)=>(
                            <img src={item} className="img-fluid" alt="" key={index} />
                          ))
                        }
                      </div>

                      <div className="modal-body-footer d-flex justify-content-center border-0 rounded-0 p-0 bg-black">
                        <div className="modal-footer d-flex align-items-center justify-content-center">
                          <div>
                            <h5 className="modal-footer-heading" dangerouslySetInnerHTML={{ __html: item.title }} />
                            <div className="modal-footer-icons d-flex align-items-center justify-content-center gap-3">
                              <div className="text-center d-flex align-items-center justify-content-center gap-2">
                                <img src={like} alt="" />
                                <p className="mb-0">248</p>
                              </div>
                              <div className="text-center d-flex align-items-center justify-content-center gap-2">
                                <img src={preview} alt="" />
                                <p className="mb-0">2.4k</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-body-right">
                        <span>
                          <img
                            src={companyRightLogo}
                            className="img-fluid"
                            alt=""
                          />
                          <p className="rightImageContent">Getweb</p>
                        </span>
                        {
                          item?.meta?._mosacademy_project_tool &&
                          <span>
                            <img src={item?.meta?._mosacademy_project_tool} className="img-fluid" alt="" />
                            <p className="rightImageContent">Tools</p>
                          </span>
                        }
                        <span>
                          <img src={appreciate} className="img-fluid" alt="" />
                          <p className="rightImageContent">Appreciate</p>
                        </span>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </Modal.Body>
            </Modal>
          </div>
          <PortfolioComponentModal />
        </div>
        <ReadyToMove />
      </div>
    </>
  );
};

export default Portfolio;
