import axios from "axios";
import { Modal } from "bootstrap";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appreciate from "../../assets/images/appriciate.svg";
import companyLogo from "../../assets/images/companyLogo.svg";
import companyRightLogo from "../../assets/images/getwebRightLogo.png";
import like from "../../assets/images/like.svg";
import preview from "../../assets/images/preview.svg";
import Config from "../../Config.json";
import PortfolioUnit from "../../Page/Portfolio/PortfolioUnit/PortfolioUnit";
import LazyImage from "../LazyImage";
import Pagination from "../Pagination/Pagination";
// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const PortfolioTab = (props) => {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCatID, setActiveCatID] = useState(0);
    const [startFrom, setStartFrom] = useState(0);
    const [ip, setIP] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [postCountData, setPostCountData] = useState(0);
    const [loading, setLoading] = useState(true);
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

    const onClick = (aCatID, start_From) => {
        if (aCatID) {
            setActiveCatID(aCatID);
            setStartFrom(start_From);
        }
    };

    const likeFunctionality = async (id) => {
        await axios.get(Config.API_BASE + "post-like/" + ip + "/" + id)
        .then(function (response) {
          toast.success(response.data.req.data.message);
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
    }

    const getIP = async () => {
        //const res = await axios.get('https://checkip.amazonaws.com/')
        //const res = await axios.get('https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0')
        await axios.get("https://api.ipify.org")
        .then(function (response) {
            setIP(response.data);
            //toast('Success');
            console.log(response.data);
        })
        .catch(function (error) {
            toast.error(error);
            console.log("Error: ", error);
        });
    };
    useEffect(() => {
        getIP();
    }, []);

    const settings = {
      dots: false,
        arrows: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
      /*
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 2500,
        items: 1,
        autoHeight:true,
        */
    };
    const { _mosacademy_page_group_content_layout = "con-top", _mosacademy_page_group_title_text=''} = props.data;
    const orderClass = (_mosacademy_page_group_content_layout === 'con-bottom' || _mosacademy_page_group_content_layout === 'con-right') ? 'order-lg-last':'';
    const widthClass = (_mosacademy_page_group_content_layout === 'con-left' || _mosacademy_page_group_content_layout === 'con-right') ? 'col-lg-6 mb-5 mb-lg-0':'col-sm-12'; 
    return loading ? 
        <div className="textClrGreen text-center loder-text d-none">loading...</div> : 
        <>
            <div className="row">
                <div className={[widthClass, orderClass].join(' ')}>
                <h3 className="fs-48 fw-normal mb-3 text-center"  dangerouslySetInnerHTML={{__html:_mosacademy_page_group_title_text}} /> 
            </div>
            <div className={[widthClass].join(' ')}>
                <hr />
                {categories.length && (
                    <ul>
                    {categories.map((item, index) => (
                        <li
                        className={[
                          "portfolioMenu","portfolioMenu-x",
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
                {
                  projects.length ?
                <Slider className="portfolio-tab-slider" {...settings}>
                  {projects.map((item, index) => (
                    <div className="item" key={index} onClick={handleShow}>
                      <div className="modal-body-top d-flex align-items-center gap-3">
                        <LazyImage
                          src={companyLogo}
                          className="modal-top-img img-fluid"
                          alt=""
                          width="40"
                          height="40"
                        />
                        <div className="w-100">
                          <h5
                            className="templateHeading mb-1"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />
                          <div className="d-flex align-items-center gap-3">
                            <p className="companyName mb-0">Getweb</p>
                            <div className="d-flex align-items-center gap-2">
                              {
                                item?.meta?._mosacademy_project_follow_link && 
                                <>
                                <svg
                                  width="3"
                                  height="4"
                                  viewBox="0 0 3 4"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle cx="1.5" cy="2" r="1.5" fill="white" />
                                </svg>
                                <a className="followLink" href={item.meta._mosacademy_project_follow_link} target="_blank" rel="noreferrer">Follow</a>
                                </>
                              }                              
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-body-images">
                        {
                          item?.meta?._mosacademy_project_gallery && Object.values(item.meta._mosacademy_project_gallery).length &&
                          Object.values(item.meta._mosacademy_project_gallery).map((item, index)=>(
                            <LazyImage src={item} className="img-fluid" alt="" key={index} />
                          ))
                        }
                      </div>

                      <div className="modal-body-footer d-flex justify-content-center border-0 rounded-0 p-0 bg-black">
                        <div className="modal-footer d-flex align-items-center justify-content-center">
                          <div>
                            <h5 className="modal-footer-heading" dangerouslySetInnerHTML={{ __html: item.title }} />
                            <div className="modal-footer-icons d-flex align-items-center justify-content-center gap-3">
                              <div className="text-center d-flex align-items-center justify-content-center gap-2">
                                <LazyImage src={like} alt="" />
                                <p className="mb-0">{item?.meta?._mosacademy_project_like? item.meta._mosacademy_project_like.length : 0}</p>
                              </div>
                              <div className="text-center d-flex align-items-center justify-content-center gap-2">
                                <LazyImage src={preview} alt="" />
                                <p className="mb-0">{item?.meta?._mosacademy_project_view_count? item.meta._mosacademy_project_view_count : 0}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-body-right">
                        <span className="d-none">
                          <LazyImage
                            src={companyRightLogo}
                            className="img-fluid"
                            alt=""
                          />
                          <p className="rightImageContent">Getweb</p>
                        </span>
                        {
                          item?.meta?._mosacademy_project_tool &&
                          <span>
                            <LazyImage src={item?.meta?._mosacademy_project_tool} className="img-fluid" alt="" />
                            <p className="rightImageContent">Tools</p>
                          </span>
                        }
                        <span onClick={() => likeFunctionality(item.id)}>
                          <LazyImage src={appreciate} className="img-fluid" alt="" />
                          <p className="rightImageContent">Appreciate</p>
                        </span>
                      </div>
                    </div>
                  ))}
                </Slider>:''
                }
              </Modal.Body>
            </Modal>
            <ToastContainer />
        </>   
    
}

export default PortfolioTab