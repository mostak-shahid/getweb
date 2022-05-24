import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import appreciate from "../../assets/images/appriciate.svg";
import companyLogo from "../../assets/images/companyLogo.svg";
import companyRightLogo from "../../assets/images/getwebRightLogo.png";
import goArrow from "../../assets/images/goArrow-iocn.svg";
import like from "../../assets/images/like.svg";
import PortfolioBg from "../../assets/images/portfolio-bg.png";
import sliderImg1 from "../../assets/images/portfolioSlider1.png";
import sliderImg2 from "../../assets/images/portfolioSlider2.png";
import sliderImg3 from "../../assets/images/portfolioSlider3.png";
import sliderImg4 from "../../assets/images/portfolioSlider4.png";
import sliderImg5 from "../../assets/images/portfolioSlider5.png";
import preview from "../../assets/images/preview.svg";
import tools from "../../assets/images/tools.png";
import Pagination from "../../Components/Pagination/Pagination";
import PortfolioComponentModal from "../../Components/Portfolio/PortfolioComponentModal";
import ReadyToMove from "../../Components/ReadyToMove/ReadyToMove";
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";
import Config from "../../Config.json";
import "./Portfolio.scss";

const Portfolio = () => {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeCatID, setActiveCatID] = useState(0);
  const [startFrom, setStartFrom] = useState(4);
  const [postCountData, setPostCountData] = useState(0);
  const [postPerPage, setPostPerPage] = useState(4);
  const [loading, setLoading] = useState([]);
  useEffect(()=>{
      axios.get(Config.API_BASE + "data-taxonomies/project_category")
      .then(function (response) {
        setCategories(response.data);
        setActiveCatID(response.data[0].term_id);
      })
      .catch(function (error) {
        console.log('Error: ', error);
      });
      
  },[]);
  useEffect(() => {
    async function fetchData() {
      await axios.get(Config.API_BASE + "data-list/project/" + activeCatID + '/' + startFrom + '/' + 4)
      .then(function (response) {
        setProjects(response.data);
      });
    }
    activeCatID && fetchData();
  }, [activeCatID]);

  useEffect(() => {
    async function fetchData() {
      await axios.get(Config.API_BASE + "data-nop/project/" + activeCatID)
      .then(function (response) {
        setPostCountData(response.data);
      })
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
    
  } 
  //console.log(startFrom);
  return (    
    loading ? 
    <div className="textClrGreen text-center">loading...</div> : 
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
                Our <span className="fw-bold">portfolios</span>  {activeCatID} - {startFrom} - {postCountData} - {postPerPage}
              </h3>
              <hr />
              {
                categories.length && 
                <ul>
                  {
                  categories.map((item, index) => (
                    <li className={["portfolioMenu", item.term_id === activeCatID && 'active'].join(' ')} key={index} onClick={() => onClick(item.term_id, 0)}>{item.name}</li>
                  ))
                  }
                </ul>
              }
              <div className="portfolio-wrapper">
                {projects.map((item, index) => (
                  <div className="portfolio-item" key={index}>
                    <div className="overLay"></div>
                    <img src={item.image} alt="img" />
                    <div className="afterHover">
                      <div className="category">
                        <div className="category-name">One</div>
                        <div className="type-name">Two</div>
                      </div>
                      <NavLink
                        to=""
                        className="goArrow position-absolute bottom-50 start-50"
                        onClick={handleShow}
                      >
                        <img src={goArrow} alt="go icon" />
                      </NavLink>
                      <NavLink
                        to=""
                        className="portTitle fs-6 fw-bold text-white position-absolute bottom-0 start-0 p-4 mb-0 text-decoration-none" dangerouslySetInnerHTML={{__html: item.title}}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="bottom-border"></div>
              {
                Math.ceil(postCountData / postPerPage) > 1 &&
                <Pagination data={Math.ceil(postCountData / postPerPage)} postPerPage={postPerPage} startFrom={startFrom} startFromChange={(value)=>onClick(activeCatID,value)} />
              }
            </div>
          </div>
          <Modal
            className="portfolioModalWrapper"
            show={show}
            onHide={handleClose}
          >
            <Modal.Header className="p-0 border-0" closeButton></Modal.Header>
            <Modal.Body className="p-0 ">
              <div>
                <img src={sliderImg1} className="img-fluid" alt="" />
                <img src={sliderImg2} className="img-fluid" alt="" />
                <img src={sliderImg3} className="img-fluid" alt="" />
                <img src={sliderImg4} className="img-fluid" alt="" />
                <img src={sliderImg5} className="img-fluid" alt="" />
              </div>

              <div className="modalTop d-flex align-items-center gap-3">
                <img src={companyLogo} className="img-fluid" alt="" />
                <div>
                  <h5 className="templateHeading mb-1">
                    Avni - Jewellery eCommerce website
                  </h5>
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
                      <a className="followLink" href="#">
                        Follow
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modalRight">
                <a href="#">
                  <img src={companyRightLogo} className="img-fluid" alt="" />
                  <p className="rightImageContent">Getweb</p>
                </a>
                <a href="#">
                  <img src={tools} className="img-fluid" alt="" />
                  <p className="rightImageContent">Tools</p>
                </a>
                <a href="#">
                  <img src={appreciate} className="img-fluid" alt="" />
                  <p className="rightImageContent">Appreciate</p>
                </a>
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center border-0 rounded-0 p-0 bg-black">
              {/* <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button> */}
              <div className="modalFooter d-flex align-items-center justify-content-center">
                <div>
                  <h5 className="modalFooterHeading">
                    Avni - Jewellery eCommerce website
                  </h5>
                  <div className="d-flex align-items-center justify-content-center gap-3">
                    <div className="text-center">
                      <img src={like} alt="" />
                      <p className="mb-0">248</p>
                    </div>
                    <div className="text-center">
                      <img src={preview} alt="" />
                      <p className="mb-0">2.4k</p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Footer>
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
