import "bootstrap/dist/css/bootstrap.min.css";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";


import FooterComponent from "./Components/Footer/FooterComponent";
import Header from "./Components/Header/Header";
import "./Components/Header/header.scss";

import "./index.scss";

// import Home from "./Page/Home/Home";
// import Blog from "./Page/Blog/Blog";
// import BlogSingle from "./Components/BlogUpdate/BlogSingle";
// import Single from "./Page/Single/Single";
// import Search from "./Page/Search/Search";
// //import Post from "./Page/Post/Post";
// import JobDetails from "./Components/JobDetails/JobDetails";
// import JobApplicationForm from "./Components/JobApplicationForm/JobApplicationForm";
// import NotFound from "./Page/NotFound/NotFound";

const Home = lazy(() => import("./Page/Home/Home"));
//const Blog = lazy(() => import("./Page/Blog/Blog"));
const Blogs = lazy(() => import("./Page/Blog/Blogs"));
const BlogSingle = lazy(() => import("./Components/BlogUpdate/BlogSingle"));
const Single = lazy(() => import("./Page/Single/Single"));
const Search = lazy(() => import("./Page/Search/Search"));
const JobDetails = lazy(() => import("./Components/JobDetails/JobDetails"));
const JobApplicationForm = lazy(() => import("./Components/JobApplicationForm/JobApplicationForm"));
const NotFound = lazy(() => import("./Page/NotFound/NotFound"));


function App() {    
    //const [pages, setPages] = useState([]);
    //const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState('');
    let {hash} = useLocation();
    /*useEffect(() => {
        async function fetchData() {
            await axios
            .get(Config.API_BASE + "page-list")
            .then(function (response) {
                setPages(response.data);
                //console.log(response)
            });
        }
        fetchData();
    }, []);
    useEffect(() => {
        if (pages.length !== 0) {
            setLoading(false);
        }
    }, [pages]);*/

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '' && location === '') {
            window.scrollTo(0, 0);
            //setLocation('');
        }
        // else scroll to id
        else {
            //console.count();
            setLocation(hash);
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                    //setLocation('');
                }
            }, 0);
        }
    }, [hash,location]);
     
    const pages = [
        {"ID": 358, "post_name": "about"},
        {"ID": 878, "post_name": "android-app-development"},//android-app-development
        {"ID": 447, "post_name": "appis"},
        {"ID": 1023, "post_name": "back-end-developer"},
        {"ID": 386, "post_name": "blog"},
        {"ID": 728, "post_name": "branding"},
        {"ID": 419, "post_name": "careers"},
        {"ID": 341, "post_name": "contact"},
        {"ID": 924, "post_name": "cross-platform-mobile-development"},//Cross Platform Mobile Development
        {"ID": 1012, "post_name": "custom-application-development"},
        {"ID": 986, "post_name": "custom-web-apps"},
        {"ID": 363, "post_name": "elementor-363"},
        {"ID": 948, "post_name": "front-end-developer"},
        {"ID": 1043, "post_name": "front-end-development-services"},
        {"ID": 1032, "post_name": "full-stack-developer"},
        {"ID": 365, "post_name": "gutenberg"},
        {"ID": 82, "post_name": "home"},
        {"ID": 891, "post_name": "ios-app-development"},//iOS App Development
        {"ID": 464, "post_name": "job-application-form"},
        {"ID": 1006, "post_name": "lean-product-development"},
        {"ID": 1026, "post_name": "mobile-app-developer"},
        {"ID": 566, "post_name": "our-process"},
        {"ID": 493, "post_name": "portfolios"},
        {"ID": 603, "post_name": "product-design"},
        {"ID": 764, "post_name": "product-design-sprint"},
        {"ID": 1002, "post_name": "progressive-web-apps"},
        {"ID": 812, "post_name": "research-development"},
        {"ID": 1009, "post_name": "saas-application-development"},
        {"ID": 2, "post_name": "sample-page"},
        {"ID": 834, "post_name": "scoping-session"},
        {"ID": 496, "post_name": "single-job-page"},
        {"ID": 685, "post_name": "ui-design"},
        {"ID": 621, "post_name": "ux-design"},
        {"ID": 793, "post_name": "ux-review"},
        {"ID": 653, "post_name": "ux-writing"},
        {"ID": 1564, "post_name": "magento"},
        {"ID": 569, "post_name": "workshops"},
        {"ID": 1590, "post_name": "wordpress"},
        {"ID": 1595, "post_name": "e-commerce-app"},
        {"ID": 1597, "post_name": "e-commerce-web"},
        {"ID": 1599, "post_name": "aws"},
        {"ID": 1601, "post_name": "azure"},
        {"ID": 1603, "post_name": "google-cloud"},
        {"ID": 1801, "post_name": "app-development"},
        {"ID": 1877, "post_name": "cloud-solutions"},
        {"ID": 1867, "post_name": "ecommerce-cms-development"},
        //{"ID": 1903, "post_name": "product-design-service"},
        {"ID": 1836, "post_name": "product-design-service"},
        {"ID": 1884, "post_name": "web-applications"},
        {"ID": 1892, "post_name": "staff-augmentation"},
        {"ID": 1901, "post_name": "ideation-and-evaluation"},
        {"ID": 1903, "post_name": "product-engineering"},
        {"ID": 2054, "post_name": "quality-assurance"},
        {"ID": 1593, "post_name": "shopify"}
    ]
    return (
    /*loading ? 
    <Loading  cls="page-loader"/>
    :*/
    <div className="App">
        {/* <Router basename="/getweb-react"> */}
            <Header/>
            <Suspense fallback={<div className="textClrGreen text-center loder-text d-none">loading...</div>}>         
                <Routes> 
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/job/:slug" >
                            <Route index element={<JobDetails />} />
                            <Route path="apply" element={<JobApplicationForm />} />
                        </Route> 
                        {/* <Route path="/blogs" element={<Blog/>}/> */}
                        <Route path="/blog" element={<Blogs/>}/>
                        <Route path="/blog/:slug" element={<BlogSingle />} />
                        <Route path="/search" >
                            <Route index element={<Search />} />
                            <Route path=":keyword" element={<Search />} />
                        </Route>
                        {pages.map((item, index) => (
                            <Route path={item.post_name} element={<Single id={item.ID}/>} key={index}/>
                        ))}
                        
                        <Route path="*" element={<NotFound/>}/>
                </Routes>
             </Suspense>
            <FooterComponent/>
        {/* </Router> */}
    </div>
    )
    
}

export default App;
