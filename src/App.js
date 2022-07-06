import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import BlogSingle from "./Components/BlogUpdate/BlogSingle";
import FooterComponent from "./Components/Footer/FooterComponent";
import "./Components/Header/header.scss";
import HeaderComponent from "./Components/Header/HeaderComponent";
import JobDetails from "./Components/JobDetails/JobDetails";
import "./index.scss";
import Blog from "./Page/Blog/Blog";
import Home from "./Page/Home/Home";
import NotFound from "./Page/NotFound/NotFound";
import Search from "./Page/Search/Search";
import Single from "./Page/Single/Single";
//import Post from "./Page/Post/Post";
import axios from "axios";
import { useEffect, useState } from "react";
import JobApplicationForm from "./Components/JobApplicationForm/JobApplicationForm";
import Loading from "./Components/Loading/Loading";
import Config from './Config.json';
function App() {    
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [location, setLocation] = useState('');
    let {hash} = useLocation();
    useEffect(() => {
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
    }, [pages]);

    useEffect(() => {
        // if not a hash link, scroll to top
        if (hash === '' && location === '') {
            window.scrollTo(0, 0);
            //setLocation('');
        }
        // else scroll to id
        else {
            console.count();
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
     

    return loading ? 
    <Loading />
    :
    <div className="App">
        {/* <Router basename="/getweb-react"> */}
            <HeaderComponent/>
            <Routes>          
                <Route exact path="/" element={<Home/>} />
                <Route path="/job/:slug" >
                    <Route index element={<JobDetails />} />
                    <Route path="apply" element={<JobApplicationForm />} />
                </Route> 
                <Route path="/blog" element={<Blog/>}/>
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
            <FooterComponent/>
        {/* </Router> */}
    </div>
    
}

export default App;
