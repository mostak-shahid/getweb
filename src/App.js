import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogSingle from "./Components/BlogUpdate/BlogSingle";
import FileUploadForm from "./Components/FileUploadForm/FileUploadForm";
import FileUploadFunction from "./Components/FileUploadForm/FileUploadFunction";
import FooterComponent from "./Components/Footer/FooterComponent";
import "./Components/Header/header.scss";
import JobApplication from "./Components/JobApplication/JobApplication";
import JobApplicationForm from "./Components/JobApplicationForm/JobApplicationForm";
import JobDetails from "./Components/JobDetails/JobDetails";
import "./index.scss";
import Blog from "./Page/Blog/Blog";
import Career from './Page/Career/Career';
import Contact from './Page/Contact/Contact';
import Header from "./Page/Header";
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
                <Header/>
                <Routes>          
                    {/* <Route exact path="/" element={<Home/>} /> */}
                    <Route index element={<Home/>} />
                    <Route path="/about" element={<Single id="358" />} />
                    {/* <Route path="/portfolio" element={<Portfolio />} /> */}
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/careers" element={<Career />} />
                    {/* <Route path="/jobDetails" element={<JobDetails />} /> */}
                    <Route path="/job/:slug" >
                        <Route index element={<JobDetails />} />
                        {/* <Route path="apply" element={<JobApplicationForm />} /> */}
                        <Route path="apply" element={<JobApplication />} />
                    </Route> 
                    <Route path="/apply-job/:slug" element={<JobApplicationForm />} />
                    <Route path="/blogs" element={<Blog/>}/>
                    <Route path="/blog/:slug" element={<BlogSingle />} />

                    <Route path="/form-upload" element={<FileUploadForm />} />
                    <Route path="/form-upload-function" element={<FileUploadFunction />} />
                    <Route path="/search" >
                        <Route index element={<Search />} />
                        <Route path=":keyword" element={<Search />} />
                    </Route>
                    {/* <Route path="/blog/:slug" element={<Post />} /> */}
                    {/* <Route path="/:slug" element={<Post />} /> */}
                    {/* <Route path="blogSingle" element={<BlogSingle />} /> */}
                    <Route path="/portfolio" element={<Single id="493"/>}/>
                    <Route path="/our-process" element={<Single id="566"/>}/>
                    <Route path="/workshops" element={<Single id="569"/>}/>
                    <Route path="/product-design" element={<Single id="603"/>}/>
                    <Route path="/ux-design" element={<Single id="621"/>}/>
                    <Route path="/ux-writing" element={<Single id="653"/>}/>
                    <Route path="/ui-design" element={<Single id="685"/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
