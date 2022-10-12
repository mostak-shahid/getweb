import axios from "axios";
import { Component } from "react";
import { Modal } from "react-bootstrap";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appreciate from "../../assets/images/appriciate.svg";
import companyLogo from "../../assets/images/companyLogo.svg";
import companyRightLogo from "../../assets/images/getwebRightLogo.png";
import like from "../../assets/images/like.svg";
import preview from "../../assets/images/preview.svg";
import Config from '../../Config.json';
import PortfolioUnit from '../../Page/Portfolio/PortfolioUnit/PortfolioUnit';
import LazyImage from "../LazyImage";
import "./PortfolioSlider.scss";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default class MultipleRows extends Component {

    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            loading: true,
            portfolioData: null,
            portfolioDataRaw: null,
            modalData: null,
            isToggleOn: false,
            ip: 0,
        };
        this.handleClick = this.handleClick.bind(this);
        this.likeFunctionality = this.likeFunctionality.bind(this);
     
    }
    
    
    async componentDidMount() {
        //https://getwebinc.com/api/wp-json/mos-getweb-api/v1/data-list/project/141/0
        const url = Config.API_BASE + "data-list/project/141/0/12";
        const response = await fetch(url);
        const portfolioResponse = await response.json();
        const portfolioDataArr = [];
        for (let i = 0; i < Math.ceil(portfolioResponse.length / 2); i++) {
            portfolioDataArr[i] = portfolioResponse.slice(i*2, i * 2 + 2);
        }
        axios.get("https://api.ipify.org")
        .then(res => {
            const ip = res.data;
            this.setState({ ip:ip });
        })
        this.setState({ 
            portfolioDataRaw: portfolioResponse,
            portfolioData: portfolioDataArr,
            //ip:ip,
            loading: false,
        });
        //console.log(newArr);
        //console.log(this.state.portfolioData);
    } 
    likeFunctionality(id) {
        fetch(Config.API_BASE + "post-like/" + this.state.ip + "/" + id)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
            toast.success(response.req.data.message);
        })
        .catch((error) => {
            console.log(error)
        });        
    }
    handleClick(index = 0) {
        //console.log(index);
        if(index){
            this.setState(prevState => ({
                modalData : this.state.portfolioDataRaw.find(item => item.id === index)
            }));            
        }
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        if (this.state.loading) {
            return <div className="textClrGreen text-center d-none">loading...</div>;
        }
        if (!this.state.portfolioData) {
            return <div>Didn't get data from API</div>;
        }
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 2500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                  }
                }
            ]
            /*loop: true,
            //center: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            smartSpeed:2500,
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
        
      
        const {portfolioData, modalData} = this.state;        
        const {_mosacademy_page_banner_button} = this.props.data;
        // console.log('Raw: ', this.state.portfolioDataRaw);
        // console.log('Formated: ', this.state.portfolioData);
        return (
            <div className="slider-wrapper">
                {(portfolioData.length) ?
                <Slider className='portfolio-slider'  {...settings}>
                    {
                        
                        portfolioData.map((item, index) => (
                            <div className={["item item-wrapper", "item-" + index ].join(' ')} key={index}>
                                {
                                    item.map((a,b) => (
                                <div className={["p-7", "portfolio-item", "portfolio-item-" + a.id].join(' ')} key={b} onClick={this.handleClick.bind(this, a.id)}><PortfolioUnit data={a}/></div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </Slider>:''}
                {
                    _mosacademy_page_banner_button?.url &&
                        <div className="gw-btn gw-btn-green d-flex justify-content-center mt-5">
                            <a href={_mosacademy_page_banner_button?.url} className="btn position-relative text-dark border-0 py-2 px-4 rounded-pill fwSemiBold fs-15 h-52 gap-2 d-flex align-items-center justify-content-center">
                                <span>{_mosacademy_page_banner_button?.title}</span>
                                <i className="fa-solid fa-arrow-right-long"></i>
                            </a>
                        </div>
                    
                
                }
                <Modal
                    className="portfolioModalWrapper"
                    show={this.state.isToggleOn}
                    onHide={this.handleClick}
                >
                    <Modal.Header className="p-0 border-0" closeButton></Modal.Header>
                    <Modal.Body className="p-0">
                        {
                        modalData &&
                        
                        <div className="item">
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
                                dangerouslySetInnerHTML={{ __html: modalData.title }}
                                />
                                <div className="d-flex align-items-center gap-3">
                                <p className="companyName mb-0">Getweb</p>
                                <div className="d-flex align-items-center gap-2">
                                    {
                                    modalData?.meta?._mosacademy_project_follow_link && 
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
                                    <a className="followLink" href={modalData.meta._mosacademy_project_follow_link} target="_blank" rel="noreferrer">Follow</a>
                                    </>
                                    }                              
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="modal-body-images">
                            {
                                modalData?.meta?._mosacademy_project_gallery && Object.values(modalData.meta._mosacademy_project_gallery).length &&
                                Object.values(modalData.meta._mosacademy_project_gallery).map((item, index)=>(
                                <LazyImage src={item} className="img-fluid" alt="" key={index} />
                                ))
                            }
                            </div>

                            <div className="modal-body-footer d-flex justify-content-center border-0 rounded-0 p-0 bg-black">
                            <div className="modal-footer d-flex align-items-center justify-content-center">
                                <div>
                                <h5 className="modal-footer-heading" dangerouslySetInnerHTML={{ __html: modalData.title }} />
                                <div className="modal-footer-icons d-flex align-items-center justify-content-center gap-3">
                                    <div className="text-center d-flex align-items-center justify-content-center gap-2">
                                    <LazyImage src={like} alt="" />
                                    <p className="mb-0">{modalData?.meta?._mosacademy_project_like? modalData.meta._mosacademy_project_like.length : 0}</p>
                                    </div>
                                    <div className="text-center d-flex align-items-center justify-content-center gap-2">
                                    <LazyImage src={preview} alt="" />
                                    <p className="mb-0">{modalData?.meta?._mosacademy_project_view_count? modalData.meta._mosacademy_project_view_count : 0}</p>
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
                                modalData?.meta?._mosacademy_project_tool &&
                                <span>
                                <LazyImage src={modalData?.meta?._mosacademy_project_tool} className="img-fluid" alt="" />
                                <p className="rightImageContent">Tools</p>
                                </span>
                            }
                            <span onClick={this.likeFunctionality.bind(this, modalData.id)}>
                                <LazyImage src={appreciate} className="img-fluid" alt="" />
                                <p className="rightImageContent">Appreciate</p>
                            </span>
                            </div>
                        </div>
                        }
                    </Modal.Body>
                </Modal>  
            <ToastContainer />
            </div>
        );
    }
}
