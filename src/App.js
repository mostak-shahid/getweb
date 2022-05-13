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
//import Post from "./Page/Post/Post";
import Contact from './Page/Contact/Contact';
import Header from "./Page/Header";
import Home from "./Page/Home/Home";
import NotFound from "./Page/NotFound/NotFound";
import Portfolio from './Page/Portfolio/Portfolio';

function App() {
    
    return (
        <div className="App">
            {/* <Router basename="/getweb-react"> */}
            <Router>
                <Header/>
                <Routes>          
                    <Route exact path="/" element={<Home/>} />
                    {/* <Route path="/blogs" element={<Blog/>}/> */}
                    {/* <Route path="/blog/:slug" element={<Post />} /> */}
                    <Route path="/blogs" element={<Blog/>}/>
                    <Route path="blogSingle" element={<BlogSingle />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/careers" element={<Career />} />
                    <Route path="/jobDetails" element={<JobDetails />} />
                    <Route path="/jobDetails/:id" element={<JobDetails />} />
                    <Route path="/JobApplicationForm" element={<JobApplicationForm />} />

                    <Route path="*" element={<NotFound/>}/>
                </Routes>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default App;
