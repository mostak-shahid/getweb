import { Component } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import SingleBlogItems from "../../Components/BlogUpdate/SingleBlogItems";
import Loading from "../../Components/Loading/Loading";
import MainComponent from "../../Components/MainComponent/MainComponent";
import Pagination from "../../Components/Pagination/Pagination";
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
    //const navigate = useNavigate(); 
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            loading: true,
            postData: null,
            postCountData: 0,
            pageData: null,
            categoriesData: null,
            dataList: 'data-list',
            categoryId: 0,
            startFrom: 0,
            postPerPage: 6,
            value:''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    

    async componentDidMount() {

        const urlPost = Config.API_BASE + this.state.dataList +"/post/" + this.state.categoryId + "/" + this.state.startFrom + "/6";
        const responsePost = await fetch(urlPost);
        const postResponse = await responsePost.json();

        const urlPostCount = Config.API_BASE+"data-nop/post/" + this.state.categoryId;
        const responsePostCount = await fetch(urlPostCount);
        const postCountResponse = await responsePostCount.json();

        
        const settingsUrl = Config.API_BASE + "settings";
        const settingsResponse = await fetch(settingsUrl);
        const settingsData = await settingsResponse.json();

        //const urlPage = Config.API_BASE + "data-single/" + Config.BLOG_ID;
        const urlPage = Config.API_BASE + "data-single/" + settingsData.req.data.page_for_posts;
        const responsePage = await fetch(urlPage);
        const pageResponse = await responsePage.json();

        const urlCategories = Config.API_BASE + "data-taxonomies/category";
        const responseCategories = await fetch(urlCategories);
        const categoriesResponse = await responseCategories.json();
        this.setState({
            postData: postResponse,
            postCountData: postCountResponse,
            pageData: pageResponse,
            categoriesData: categoriesResponse,
            loading: false,
        });
        // console.log(this.state.postData);
        // console.count();
    }
    async componentDidUpdate() {        
        const urlPost = Config.API_BASE + this.state.dataList +"/post/" + this.state.categoryId + "/" + this.state.startFrom + "/6";
        const responsePost = await fetch(urlPost);
        const postResponse = await responsePost.json();

        const urlPostCount = Config.API_BASE+"data-nop/post/" + this.state.categoryId;
        const responsePostCount = await fetch(urlPostCount);
        const postCountResponse = await responsePostCount.json();

        this.setState({
            postData: postResponse,   
            postCountData: postCountResponse,        
            loading: false,
        });
        //console.log(postCountResponse);
    }   


    handleChange(event) {
        this.setState({value: event.target.value});
    }    
    handleSubmit(event) {
        /*alert('A name was submitted: ' + this.state.value);*/
        event.preventDefault();
        this.props.navigation('/search/' + this.state.value);
    }

    render() {
        
        //console.log("Categories: ", this.state.categoriesData)
        if (this.state.loading) {
            return <Loading />;
        }
        if (!this.state.postData || !this.state.pageData ) {
            return <div>Didn't get data from API</div>;
        }
        const { postData, postCountData, pageData, categoriesData, startFrom, postPerPage } = this.state;
        return (
            <>
                <SeoMeta pageData={pageData}/>
                <SubPageBanner tagline={pageData?.meta?._mosacademy_page_banner_tagline} boldTile={pageData?.meta?._mosacademy_page_banner_title} title={pageData?.meta?._mosacademy_page_banner_title} intro={pageData?.meta?._mosacademy_page_banner_intro} bgImg={pageData?.meta?._mosacademy_page_banner_image} btn={pageData?.meta?._mosacademy_page_banner_button} />
                <section className="blogWrapper secPadding">
                    <div className="filterArea pb-5 isBgBorder mb-5">
                        <div className="container">
                            <h2 className="text-white fs-30 fw-normal mb-5">
                                All <span className="fw-bold">Resources</span>
                            </h2>
                            <div className="row">
                                <div className="col-xl-6 mb-4 mb-xl-0">
                                    <div className="filterLeft">
                                        <div className="singleFilter">
                                            <Form.Select className="bg-transparent h-52 rounded-pill px-4" onChange={(event) => this.setState({categoryId:event.target.value})}>
                                                <option value='0'>All Categories</option>
                                                {
                                                    categoriesData.length && categoriesData.map((item, index) => (
                                                        <option value={item.term_id} key={index}>{item.name}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                        </div>
                                        <div className="singleFilter">
                                            <Form.Select className="bg-transparent h-52 rounded-pill px-4" onChange={(event) => this.setState({categoryId:event.target.value})}>
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
                                                <Form.Control name="search" type="search" placeholder="Search" className="bg-transparent h-52 rounded-pill" onChange={this.handleChange} value={this.state.value} />
                                            </Form.Group>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper isBgBorder pb-5">
                        <div className="container">
                            <div className="row">
                                {postData.length ?
                                    postData.map((item, index) => (
                                        <div className="col-md-6 col-xl-4 mb-4" key={index}>
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
                        <div className="mt-5"><Pagination data={Math.ceil(postCountData / postPerPage)} postPerPage={postPerPage} startFrom={startFrom} startFromChange={(value)=>this.setState({startFrom:value})} /></div>
                    }
                </section>           
                {
                    pageData?.meta?._mosacademy_page_group_details_group.map((item, index) => (
                        <MainComponent data={item} key={index} />                        
                    ))
                }
            </>
        );
    }
}
export default withNavigateHook(Blog);