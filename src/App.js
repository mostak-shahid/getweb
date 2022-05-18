import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogSingle from "./Components/BlogUpdate/BlogSingle";
import FooterComponent from "./Components/Footer/FooterComponent";
import "./Components/Header/header.scss";
import JobApplicationForm from "./Components/JobApplicationForm/JobApplicationForm";
import JobDetails from "./Components/JobDetails/JobDetails";
import "./index.scss";
import About from "./Page/About/About";
import Blog from "./Page/Blog/Blog";
import Career from './Page/Career/Career';
import Contact from './Page/Contact/Contact';
import Header from "./Page/Header";
import Home from "./Page/Home/Home";
import NotFound from "./Page/NotFound/NotFound";
import Portfolio from './Page/Portfolio/Portfolio';
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
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/careers" element={<Career />} />
                    {/* <Route path="/jobDetails" element={<JobDetails />} /> */}
                    <Route path="/job/:slug" element={<JobDetails />} />
                    <Route path="/apply-job/:slug" element={<JobApplicationForm />} />
                    <Route path="/blogs" element={<Blog/>}/>
                    <Route path="/blog/:slug" element={<BlogSingle />} />
                    <Route path="/search/:search" element={<BlogSingle />} />
                    {/* <Route path="/blog/:slug" element={<Post />} /> */}
                    {/* <Route path="/:slug" element={<Post />} /> */}
                    {/* <Route path="blogSingle" element={<BlogSingle />} /> */}

                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
