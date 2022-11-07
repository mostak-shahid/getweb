import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";


import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./Components/Header/header.scss";
import SideBar from "./Components/SideBar/SideBar";
import SideButton from "./Components/SideButton/SideButton";

import Config from './Config.json';
import "./index.scss";


const Home = lazy(() => import("./Page/Home/Home"));
const Blogs = lazy(() => import("./Page/Blog/Blogs"));
const CategorySingle = lazy(() => import("./Page/Blog/CategorySingle"));
const BlogSingle = lazy(() => import("./Components/BlogUpdate/BlogSingle"));
const Single = lazy(() => import("./Page/Single/Single"));
const Search = lazy(() => import("./Page/Search/Search"));
const JobDetails = lazy(() => import("./Components/JobDetails/JobDetails"));
const JobApplicationForm = lazy(() => import("./Components/JobApplicationForm/JobApplicationForm"));
const NotFound = lazy(() => import("./Page/NotFound/NotFound"));


function App() {    
    const [location, setLocation] = useState('');
    let {hash} = useLocation();
    const [optionData,setOptionData]=useState([]);
    const [categoriesData, setCategoriesData] = useState([]);
    useEffect(() => {
        const optionsRequest = Config.API_BASE + "options";
        const categoriesRequest = `${Config.API_BASE}data-taxonomies/category`;
        const fetchData = async () => {
          await axios
            .all([
              axios.get(optionsRequest),
              axios.get(categoriesRequest),
            ])
            .then(
              axios.spread((optionsDataResponse, categoriesDataResponse) => {
                setOptionData(optionsDataResponse.data);
                setCategoriesData(categoriesDataResponse.data);
              })
            );
        };
        fetchData().catch(console.error);        
      }, []);

    useEffect(() => {
        if (hash === '' && location === '') {
            window.scrollTo(0, 0);
        }
        else {
            setLocation(hash);
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, [hash,location]);     
    const pages = [
        {"ID": 358, "post_name": "about"},
        {"ID": 878, "post_name": "android-app-development"},
        {"ID": 1023, "post_name": "back-end-developer"},
        {"ID": 386, "post_name": "blog"},
        {"ID": 728, "post_name": "branding"},
        {"ID": 419, "post_name": "careers"},
        {"ID": 341, "post_name": "contact"},
        {"ID": 924, "post_name": "cross-platform-mobile-development"},
        {"ID": 1012, "post_name": "custom-application-development"},
        {"ID": 986, "post_name": "custom-web-apps"},
        {"ID": 948, "post_name": "front-end-developer"},
        {"ID": 1043, "post_name": "front-end-development-services"},
        {"ID": 1032, "post_name": "full-stack-developer"},
        {"ID": 365, "post_name": "gutenberg"},
        {"ID": 891, "post_name": "ios-app-development"},
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
        {"ID": 1836, "post_name": "product-design-service"},
        {"ID": 1884, "post_name": "web-applications"},
        {"ID": 1892, "post_name": "staff-augmentation"},
        {"ID": 1901, "post_name": "ideation-and-evaluation"},
        {"ID": 1903, "post_name": "product-engineering"},
        {"ID": 2054, "post_name": "quality-assurance"},
        {"ID": 1593, "post_name": "shopify"}
    ]
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [show, setShow] = useState(false);
    return (
    <div className={`overlay ${sideBarOpen && "active"}`}>
        <Header show={show} setShow={setShow} optionData={optionData}/>
        <SideButton sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
        <SideBar
            sideBarOpen={sideBarOpen}
            setSideBarOpen={setSideBarOpen}
            optionData={optionData}
        />
        <Suspense fallback={<div className="textClrGreen text-center loder-text d-none">loading...</div>}>         
            <Routes> 
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/job/:slug" >
                        <Route index element={<JobDetails />} />
                        <Route path="apply" element={<JobApplicationForm />} />
                    </Route> 
                    <Route path="/blog" element={<Blogs/>}/>
                    <Route path="/category/:slug" element={<CategorySingle/>}/>
                    <Route path="/blog/:slug" element={<BlogSingle optionData={optionData} categoriesData={categoriesData} />} />
                    <Route path="/search" >
                        <Route index element={<Search />} />
                        <Route path=":keyword" element={<Search />} />
                    </Route>
                    {pages.map((item, index) => (
                        <Route path={item.post_name} element={<Single id={item.ID} optionData={optionData}/>} key={index}/>
                    ))}                        
                    <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Suspense>
        <Footer optionData={optionData} />
    </div>
    )    
}

export default App;
