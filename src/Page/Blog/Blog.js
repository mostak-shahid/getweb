import React, { Component } from 'react';
import blog1 from "../../assets/images/blog-img1.png";
import blog2 from "../../assets/images/blog-img2.png";
import blog3 from "../../assets/images/blog-img3.png";

export default class Blog extends Component {
    state = {
        loading: true,
        postData: null,
    };
    
    async componentDidMount() {

        const url = "http://api.getweb.localhost/wp-json/mos-getweb-api/v1/data-list/post/0/0/6";
        const response = await fetch(url);
        const postResponse = await response.json();
        this.setState({ 
            postData: postResponse,
            loading: false,
        });
        //console.log(this.state.postData);
    }

    constructor(props) {
        super(props);
        //console.log(props);
    }
    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        if (!this.state.postData) {
            return <div>Didn't get data from API</div>;
        }
        const blogitems = [
            {
                id: 1,
                image: blog1,
                title: "Salesforce - Leading Player in the Game of Healthcare Management",
                excerpt: "In the healthcare sector, a cyclone of technology is impacting thousands of lives...",
                slug: 'post-1'
            },
            {
                id: 2,
                image: blog2,
                title: "Salesforce - Leading Player in the Game of Healthcare Management",
                excerpt: "In the healthcare sector, a cyclone of technology is impacting thousands of lives...",
                slug: 'post-2'
            },
            {
                id: 3,
                image: blog3,
                title: "Salesforce - Leading Player in the Game of Healthcare Management",
                excerpt: "In the healthcare sector, a cyclone of technology is impacting thousands of lives...",
                slug: 'post-3'
            },
            {
                id: 4,
                image: blog1,
                title: "Salesforce - Leading Player in the Game of Healthcare Management",
                excerpt: "In the healthcare sector, a cyclone of technology is impacting thousands of lives...",
                slug: 'post-4'
            },
            {
                id: 5,
                image: blog2,
                title: "Salesforce - Leading Player in the Game of Healthcare Management",
                excerpt: "In the healthcare sector, a cyclone of technology is impacting thousands of lives...",
                slug: 'post-5'
            },
            {
                id: 6,
                image: blog3,
                title: "Salesforce - Leading Player in the Game of Healthcare Management",
                excerpt: "In the healthcare sector, a cyclone of technology is impacting thousands of lives...",
                slug: 'post-6'
            },
        ];
        const {postData} = this.state;
        return (
            <>
            <section className="page-title">
                <div className="wrapper">
                    <div className="container">
                        <h1 className="text-center">Blogs</h1>
                    </div>
                </div>
            </section>
            <section className="content-area">
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                        {
                            (postData.length)?
                            postData.map((item) => (
                                <div className="col-lg-4 mb-4" key={item.id}>
                                    <div className="card">
                                        {
                                            item.image?
                                            <img src={item.image} alt={item.title} className="card-img-top" />:''
                                        }
                                        <div className="card-body">
                                            <h5 className="card-title text-dark">{item.title}</h5>
                                            <p className="card-text text-dark">{item.excerpt}</p>
                                            <a href={['/blog', item.slug].join('/')} className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            )):''
                        }
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
