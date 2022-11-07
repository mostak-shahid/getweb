import { Component } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import SingleBlogItems from "../../Components/BlogUpdate/SingleBlogItems";
import Loading from "../../Components/Loading/Loading";
import Pagination from "../../Components/Pagination/Pagination";
import Section from "../../Components/Section/Section";
import SeoMeta from "../../Components/SeoMeta/SeoMeta";
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";
import Config from "../../Config.json";
import "./Blog.scss";
const withNavigateHook = (Component) => {
    return (props) => {
        const navigation = useNavigate();
        return <Component navigation={navigation} {...props} />
    }
}
class Blog extends Component {       
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            postData: null,
            postLoading: true,
            postCountData: 0,
            pageData: null,
            categoriesData: null,
            dataList: 'data-list',
            categoryId: 0,
            startFrom: 0,
            postPerPage: 0,
            value:''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    

    async componentDidMount() {
        const urlPost = Config.API_BASE + this.state.dataList +"/post/" + this.state.categoryId + "/" + this.state.startFrom + "/" + this.state.postPerPage;
        const responsePost = await fetch(urlPost);
        const postResponse = await responsePost.json();

        const urlPostCount = Config.API_BASE+"data-nop/post/" + this.state.categoryId;
        const responsePostCount = await fetch(urlPostCount);
        const postCountResponse = await responsePostCount.json();

        const urlPage = Config.API_BASE + "data-single/" + Config.BLOG_ID;
        const responsePage = await fetch(urlPage);
        const pageResponse = await responsePage.json();

        const urlCategories = Config.API_BASE + "data-taxonomies/category";
        const responseCategories = await fetch(urlCategories);
        const categoriesResponse = await responseCategories.json();
        this.setState({
            postPerPage: Config.POST_PER_PAGE,
            postData: postResponse,
            postCountData: postCountResponse,
            pageData: pageResponse,
            categoriesData: categoriesResponse,
            loading: false,
        });
    }
    async componentDidUpdate() {        
        const urlPost = Config.API_BASE + this.state.dataList +"/post/" + this.state.categoryId + "/" + this.state.startFrom + "/" + this.state.postPerPage;
        const responsePost = await fetch(urlPost);
        const postResponse = await responsePost.json();

        const urlPostCount = Config.API_BASE+"data-nop/post/" + this.state.categoryId;
        const responsePostCount = await fetch(urlPostCount);
        const postCountResponse = await responsePostCount.json();

        this.setState({
            postData: postResponse,   
            postCountData: postCountResponse,        
            loading: false,
            postLoading: false,
        });
        //console.log(postCountResponse);
    }   


    handleChange(event) {
        this.setState({value: event.target.value});
    }    
    handleSubmit(event) {
        event.preventDefault();
        this.props.navigation('/search/' + this.state.value);
    }

    render() {
        if (this.state.loading) {
            return <Loading cls="page-loader" />;
        }
        if (!this.state.postData || !this.state.pageData ) {
            return <div>Didn't get data from API</div>;
        }
        const { postData, postCountData, pageData, categoriesData, startFrom, postPerPage } = this.state;
        return (
            <>
                <SeoMeta pageData={pageData}/>
            {
            !pageData?.meta?._mosacademy_banner_hide && 
            <SubPageBanner tagline={pageData?.meta?._mosacademy_page_banner_tagline} title={pageData?.meta?._mosacademy_page_banner_title} intro={pageData?.meta?._mosacademy_page_banner_intro} bgImg={pageData?.meta?._mosacademy_page_banner_image} btn={pageData?.meta?._mosacademy_page_banner_button} featureImage={pageData?.meta?._mosacademy_page_banner_feature_image} alt={pageData?.meta?._mosacademy_page_banner_feature_image_alt} attributes={pageData?.meta?._mosacademy_page_banner_feature_image_attributes} btn2={pageData?.meta?._mosacademy_page_banner_button_2} />    
            }
                <section id="blogWrapper" className="blogWrapper secPadding">
                    <div className="filterArea pb-5 isBgBorder mb-5">
                        <div className="container-lg">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="filterLeft">
                                        <div className="singleFilter custom-mos-select">
                                            <Form.Select className="bg-transparent rounded-pill px-4" onChange={(event) => this.setState({categoryId:event.target.value, postLoading:true})}>
                                                <option value='0'>All Categories</option>
                                                {
                                                    categoriesData.length && categoriesData.map((item, index) => (
                                                        <option value={item.term_id} key={index}>{item.name}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                        </div>
                                        <div className="singleFilter custom-mos-select">
                                            <Form.Select className="bg-transparent rounded-pill px-4" onChange={(event) => this.setState({categoryId:event.target.value, postLoading:true})}>
                                                <option value="0">Select One</option>
                                                <option value="week">Last 7 day’s</option>
                                                <option value="month">Last Month</option>
                                                <option value="year">Last year</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3"></div>
                                <div className="col-xl-3">
                                    <div className="searchInput">
                                        <form onSubmit={this.handleSubmit}>
                                            <Form.Group className="d-flex justify-content-xl-end" controlId="exampleForm.ControlInputSearch">
                                                <Form.Control name="search" type="search" placeholder="Search" className="bg-transparent rounded-pill" onChange={this.handleChange} value={this.state.value} />
                                            </Form.Group>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-wrapper isBgBorder">
                        <div className="container-lg position-relative">
                            <div className="position-absolute top-0 start-0 bottom-0 end-0 bg-primary d-flex justify-content-center align-items-center text-white d-none">
                                <i className="fad fa-arrows-spin rotate fs-48"></i>
                            </div>
                            <div className="row">
                                {console.log('Post data:', postData)}
                                {console.log('Post Loaded:', this.state.postLoading)}
                                {console.log('Category ID:', this.state.categoryId)}
                                {postData.length && !this.state.postLoading ?
                                    postData.map((item, index) => (
                                        <div className="col-sm-6 col-lg-4 singleBlogWrapper" key={index}>
                                            <SingleBlogItems data={item} />
                                        </div>
                                    ))
                                    : <div className="textClrGreen text-center">No Post Found</div>
                                }
                            </div>
                        </div>
                    </div>
                    {
                        Math.ceil(postCountData / postPerPage) > 1 &&
                        <div className="blog-pagination-wrapper"><Pagination data={Math.ceil(postCountData / postPerPage)} postPerPage={postPerPage} startFrom={startFrom} startFromChange={(value)=>this.setState({startFrom:value})} /></div>
                    }
                </section>           
                {
                    pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                        <Section data={item} key={index} />                       
                    ))
                }
            </>
        );
    }
}
export default withNavigateHook(Blog);