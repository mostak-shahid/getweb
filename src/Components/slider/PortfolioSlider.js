import axios from "axios";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Component } from "react";
import { Modal } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appreciate from "../../assets/images/appriciate.svg";
import companyLogo from "../../assets/images/companyLogo.svg";
import companyRightLogo from "../../assets/images/getwebRightLogo.png";
import like from "../../assets/images/like.svg";
import preview from "../../assets/images/preview.svg";
import Config from '../../Config.json';
import PortfolioUnit from '../../Page/Portfolio/PortfolioUnit/PortfolioUnit';
import "./PortfolioSlider.scss";

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

        const url = Config.API_BASE + "data-list/project/0/0/12";
        const response = await fetch(url);
        const portfolioResponse = await response.json();
        let newArr = [];
        let tempArr = [];
        var i = 0;
        for (var index = 0; index < portfolioResponse.length; index++) {
            if (i === 2){
                newArr.push(tempArr);
                i = 0;
                tempArr = [];
            }
            i++;
            //console.log(portfolioResponse[index]);
            tempArr.push(portfolioResponse[index]);
            //console.log(tempArr);
        }
        //console.log(newArr);
        axios.get("https://api.ipify.org")
        .then(res => {
            const ip = res.data;
            this.setState({ ip:ip });
        })
        this.setState({ 
            portfolioDataRaw: portfolioResponse,
            portfolioData: newArr,
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
            return <div className="textClrGreen text-center">loading...</div>;
        }
        if (!this.state.portfolioData) {
            return <div>Didn't get data from API</div>;
        }
        const settings = {
            loop: true,
            center: true,
            margin: 0,
            nav: false,
            dots: false,
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
            }
        };
        
      
        const {portfolioData, modalData} = this.state;        
        const {_mosacademy_page_banner_button} = this.props.data;
        // console.log('Raw: ', this.state.portfolioDataRaw);
        // console.log('Formated: ', this.state.portfolioData);
        return (
            <div className="slider-wrapper">
                <OwlCarousel className='owl-theme'  {...settings}>
                    {
                        (portfolioData.length) && 
                        portfolioData.map((item, index) => (
                            <div className={["item item-wrapper", "item-" + index 
                             ].join(' ')} key={index}>
                                {
                                    item.map((a,b) => (
                                <div className={["portSliderItem", "portSliderItem-" + a.id].join(' ')} key={b} onClick={this.handleClick.bind(this, a.id)}><div className="portSliderImg"><PortfolioUnit data={a}/></div></div>
                                    ))
                                }
                                
                                {/* <div className="portSliderItem"><div className="portSliderImg"><PortfolioUnit data={item[1]}/></div></div>                                 */}
                            </div>
                        ))
                    }
                </OwlCarousel>
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
                                <img src={item} className="img-fluid" alt="" key={index} />
                                ))
                            }
                            </div>

                            <div className="modal-body-footer d-flex justify-content-center border-0 rounded-0 p-0 bg-black">
                            <div className="modal-footer d-flex align-items-center justify-content-center">
                                <div>
                                <h5 className="modal-footer-heading" dangerouslySetInnerHTML={{ __html: modalData.title }} />
                                <div className="modal-footer-icons d-flex align-items-center justify-content-center gap-3">
                                    <div className="text-center d-flex align-items-center justify-content-center gap-2">
                                    <img src={like} alt="" />
                                    <p className="mb-0">{modalData?.meta?._mosacademy_project_like? modalData.meta._mosacademy_project_like.length : 0}</p>
                                    </div>
                                    <div className="text-center d-flex align-items-center justify-content-center gap-2">
                                    <img src={preview} alt="" />
                                    <p className="mb-0">{modalData?.meta?._mosacademy_project_view_count? modalData.meta._mosacademy_project_view_count : 0}</p>
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
                                modalData?.meta?._mosacademy_project_tool &&
                                <span>
                                <img src={modalData?.meta?._mosacademy_project_tool} className="img-fluid" alt="" />
                                <p className="rightImageContent">Tools</p>
                                </span>
                            }
                            <span onClick={this.likeFunctionality.bind(this, modalData.id)}>
                                <img src={appreciate} className="img-fluid" alt="" />
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
