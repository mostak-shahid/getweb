import "animate.css/animate.css";
import axios from "axios";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appreciate from "../../assets/images/appriciate.svg";
import companyLogo from "../../assets/images/companyLogo.svg";
import companyRightLogo from "../../assets/images/getwebRightLogo.png";
import like from "../../assets/images/like.svg";
import preview from "../../assets/images/preview.svg";
import Pagination from "../../Components/Pagination/Pagination";
import Config from "../../Config.json";
import "./Portfolio.scss";
import PortfolioUnit from "./PortfolioUnit/PortfolioUnit";
const PortfolioGroup = (props) => {
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState([]);
    const [activeCatID, setActiveCatID] = useState(0);
    const [startFrom, setStartFrom] = useState(0);
    const [postCountData, setPostCountData] = useState(0);
    //const [postPerPage, setPostPerPage] = useState(4);
    const [ip, setIP] = useState("");
    const [loading, setLoading] = useState(true);
    const [portfolioLoading, setPortfolioLoading] = useState(true);
    const postPerPage = 8;
    const [settings, setSettings] = useState({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 2500,
        items: 1,
        startPosition: 0
    });

    useEffect(() => {
        axios
        .get(Config.API_BASE + "data-taxonomies/project_category")
        .then(function (response) {
            setCategories(response.data);
            //setActiveCatID(response.data[0].term_id);
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
    }, []);
    useEffect(() => {
        setPortfolioLoading(true);
        async function fetchData() {
            var url = Config.API_BASE + "data-list/project/" + activeCatID + "/" + startFrom + "/" + postPerPage;
            //console.log(url);
            await axios
            .get(url)
            .then(function (response) {
                setProjects(response.data);
            });
        }
        fetchData();
    }, [activeCatID, startFrom]);
    useEffect(() => {
        async function fetchData() {
            await axios
            .get(Config.API_BASE + "data-nop/project/" + activeCatID)
            .then(function (response) {
                setPostCountData(response.data);
            });
        }
        fetchData();
    }, [activeCatID]);

    useEffect(() => {
        if (categories.length !== 0 && projects !== 0) {
            setLoading(false);
            setPortfolioLoading(false);
        }
    }, [categories, projects]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setSettings({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed: 2500,
            items: 1,
            startPosition: index
        });
        setShow(true);
    }
    const onClick = (aCatID, start_From) => {
        if (aCatID) {
            setActiveCatID(aCatID);
        } else {
            setActiveCatID(0); 
        }
        setStartFrom(start_From);
    };
    const getIP = async () => {
        //const res = await axios.get('https://checkip.amazonaws.com/')
        //const res = await axios.get('https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0')
        await axios.get("https://api.ipify.org")
        .then(function (response) {
            setIP(response.data);
            //console.log(response.data);
        })
        .catch(function (error) {
            //toast.error(error);
        });
    };
    useEffect(() => {
        getIP();
    }, []);

    const likeFunctionality = async (id) => {
        // console.log('IP: ', ip);
        // console.log('ID: ', id);
        await axios.get(Config.API_BASE + "post-like/" + ip + "/" + id)
        .then(function (response) {
            console.log(response.data);
            toast.success(response.data.req.data.message);
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
    }

    return loading?
    <div className="textClrGreen text-center loder-text">loading...</div>:   
        <div className="row">
            {/* { console.log(projects) } */}
            <div className="col-12">
                <div className="secIntro" dangerouslySetInnerHTML={{__html:props.data._mosacademy_page_group_title_description}} />
                {categories.length && (
                    <ul className="portfolioFilteMenu">
                        <li className={["portfolioMenu",!activeCatID ? "active":""].join(" ")} onClick={() => onClick(0, 0)}>All</li>
                    {categories.map((item, index) => (
                        <li
                        className={[
                            "portfolioMenu",
                            item.term_id === activeCatID ? "active":"",
                        ].join(" ")}
                        key={index}
                        onClick={() => onClick(item.term_id, 0)}
                        >
                        {item.name}
                        </li>
                    ))}
                    </ul>
                )}
                
                    {
                        portfolioLoading?
                        <div className="textClrGreen text-center loder-text">loading...</div>:
                        <div className="portfolio-wrapper">
                            {projects.map((item, index) => (
                            <div className={["portfolio-item", "portfolio-item-" + item.id].join(' ')} key={index} onClick={() => handleShow(index)} >
                                <PortfolioUnit data={item} />
                            </div>
                            ))}
                        </div>
                    }     
                {Math.ceil(postCountData / postPerPage) > 1 && (
                    <>
                    <div className="bottom-border isBgBorder"></div>
                    <Pagination data={Math.ceil(postCountData / postPerPage)} postPerPage={postPerPage} startFrom={startFrom} startFromChange={(value) => onClick(activeCatID, value)} />
                    </>
                )}
            </div>
            <Modal
                className="portfolioModalWrapper"
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton className="d-flex d-sm-none"></Modal.Header>
                <Modal.Body className="p-0">
                    {/* <div className="portfolio-modal-close position-absolute top-0 end-0"><button className="btn btn-danger rounded-circle" onClick={handleClose}>x</button></div> */}
                    <OwlCarousel className="owl-theme" {...settings}>
                        {projects.map((item, index) => (
                        <div className="item" key={index}>
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
                                    <p className="mb-0">{item?.meta?._mosacademy_project_like? item.meta._mosacademy_project_like.length : 0}</p>
                                    </div>
                                    <div className="text-center d-flex align-items-center justify-content-center gap-2">
                                    <img src={preview} alt="" />
                                    <p className="mb-0">{item?.meta?._mosacademy_project_view_count? item.meta._mosacademy_project_view_count : 0}</p>
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
                            <span onClick={() => likeFunctionality(item.id)}>
                                <img src={appreciate} className="img-fluid" alt="" />
                                <p className="rightImageContent">Appreciate</p>
                            </span>
                            </div>
                        </div>
                        ))}
                    </OwlCarousel>
                </Modal.Body>
            </Modal>            
            <ToastContainer />
        </div> 
    
};

export default PortfolioGroup;
