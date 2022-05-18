import React, { Component } from "react";
import { Form } from "react-bootstrap";
import SingleBlogItems from "../../Components/BlogUpdate/SingleBlogItems";
import MainComponent from "../../Components/MainComponent/MainComponent";
import Pagination from "../../Components/Pagination/Pagination";
import SubPageBanner from "../../Components/SubPageBanner/SubPageBanner";
import Config from "../../Config.json";
import "./Blog.scss";

export default class Blog extends Component {
    state = {
        loading: true,
        postData: null,
        postCountData: 0,
        pageData: null,
        categoriesData: null,
        dataList: 'data-list',
        categoryId: 0,
        startFrom: 0,
    };

    async componentDidMount() {
        const urlPost = Config.API_BASE + this.state.dataList +"/post/" + this.state.categoryId + "/" + this.state.startFrom + "/6";
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
            postData: postResponse,
            postCountData: postCountResponse,
            pageData: pageResponse,
            categoriesData: categoriesResponse,
            loading: false,
        });
        console.log(this.state.postData);
        console.count();
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
    constructor(props) {
        super(props);
        //console.log(props);
    };
    render() {
        
        //console.log("Categories: ", this.state.categoriesData)
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        if (!this.state.postData || !this.state.pageData ) {
            return <div>Didn't get data from API</div>;
        }
        const { postData, postCountData, pageData, categoriesData, startFrom } = this.state;
        return (
            <>
                <SubPageBanner tagline={pageData?.meta?._mosacademy_page_banner_tagline} boldTile={pageData?.meta?._mosacademy_page_banner_title} title={pageData?.meta?._mosacademy_page_banner_title} intro={pageData?.meta?._mosacademy_page_banner_intro} bgImg={pageData?.meta?._mosacademy_page_banner_image} btn={pageData?.meta?._mosacademy_page_group_button} />
                <section className="blogWrapper secPadding">
                    <div className="filterArea py-5 isBgBorder mb-5">
                        <div className="container">
                            <h2 className="text-white fs-30 fw-normal mb-5">
                                All <span className="fw-bold">Resources</span> {startFrom}
                            </h2>
                            <div className="row">
                                <div className="col-xl-6">
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
                                            <Form.Select className="bg-transparent h-52 rounded-pill px-4">
                                                <option>Last 7 day’s</option>
                                                <option value="1">Last Month</option>
                                                <option value="2">Last year</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="searchFilter">
                                        <Form.Group className="d-flex justify-content-end" controlId="exampleForm.ControlInputSearch">
                                            <Form.Control type="search" placeholder="Search" className="bg-transparent h-52 rounded-pill w-50" />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper isBgBorder pb-5">
                        <div className="container">
                            <div className="row">
                                {postData.length && 
                                    postData.map((item, index) => (
                                          <div className="col-lg-4 mb-4" key={index}>
                                              <SingleBlogItems data={item} />
                                          </div>
                                      ))
                                    }
                            </div>
                        </div>
                    </div>
                    {
                        Math.ceil(postCountData / 6) > 1 &&
                        <Pagination data={Math.ceil(postCountData / 6)} startFrom={startFrom} startFromChange={(value)=>this.setState({startFrom:value})} />
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
