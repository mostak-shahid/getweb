import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogSingle from "./Components/BlogUpdate/BlogSingle";
import FooterComponent from "./Components/Footer/FooterComponent";
import "./Components/Header/header.scss";
import HeaderComponent from "./Components/Header/HeaderComponent";
import JobApplication from "./Components/JobApplication/JobApplication";
import JobApplicationForm from "./Components/JobApplicationForm/JobApplicationForm";
import JobDetails from "./Components/JobDetails/JobDetails";
import "./index.scss";
import Blog from "./Page/Blog/Blog";
import Career from './Page/Career/Career';
import Contact from './Page/Contact/Contact';
import Home from "./Page/Home/Home";
import NotFound from "./Page/NotFound/NotFound";
import Search from "./Page/Search/Search";
import Single from "./Page/Single/Single";
//import Post from "./Page/Post/Post";


function App() {
    
    return (
        <div className="App">
            {/* <Router basename="/getweb-react"> */}
            <Router>
                <HeaderComponent/>
                <Routes>          
                    {/* <Route exact path="/" element={<Home/>} /> */}
                    <Route index element={<Home/>} />
                    {/* <Route path="/portfolio" element={<Portfolio />} /> */}
                    {/* <Route path="/jobDetails" element={<JobDetails />} /> */}

                    {/* <Route path="/form-upload" element={<FileUploadForm />} />
                    <Route path="/form-upload-function" element={<FileUploadFunction />} /> */}
                    {/* <Route path="/blog/:slug" element={<Post />} /> */}
                    {/* <Route path="/:slug" element={<Post />} /> */}
                    {/* <Route path="blogSingle" element={<BlogSingle />} /> */}
                    <Route path="/scoping-session" element={<Single id="834"/>}/>
                    <Route path="/research-development" element={<Single id="812"/>}/>
                    <Route path="/product-design-sprint" element={<Single id="764"/>}/>
                    <Route path="/product-design" element={<Single id="603"/>}/>
                    <Route path="/ux-design" element={<Single id="621"/>}/>
                    <Route path="/ux-writing" element={<Single id="653"/>}/>
                    <Route path="/ui-design" element={<Single id="685"/>}/>
                    <Route path="/branding" element={<Single id="728"/>}/>
                    <Route path="/ux-review" element={<Single id="793"/>}/>
                    <Route path="/about" element={<Single id="358" />} />
                    <Route path="/our-process" element={<Single id="566"/>}/>
                    <Route path="/workshops" element={<Single id="569"/>}/>
                    <Route path="/portfolio" element={<Single id="493"/>}/>
                    <Route path="/careers" element={<Career />} />
                    <Route path="/job/:slug" >
                        <Route index element={<JobDetails />} />
                        {/* <Route path="apply" element={<JobApplicationForm />} /> */}
                        <Route path="apply" element={<JobApplication />} />
                    </Route> 
                    <Route path="/apply-job/:slug" element={<JobApplicationForm />} />
                    <Route path="/blogs" element={<Blog/>}/>
                    <Route path="/blog/:slug" element={<BlogSingle />} />
                    <Route path="/search" >
                        <Route index element={<Search />} />
                        <Route path=":keyword" element={<Search />} />
                    </Route>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
