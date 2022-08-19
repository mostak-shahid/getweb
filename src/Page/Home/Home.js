import React, { Component, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import BannerComponents from "../../Components/Banner/BannerComponents";
import Loading from "../../Components/Loading/Loading";
//import Section from "../../Components/Section/Section";
import ErrorFallback from "../../Components/ErrorBoundary";
import SeoMeta from "../../Components/SeoMeta/SeoMeta";
import Config from "../../Config.json";
import './Home.scss';
const Section = React.lazy(() => import("../../Components/Section/Section"));

export default class Home extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            pageData: "",
            settingsData: "",
        };
    }    
    async componentDidMount() {
        //const url = "https://api.randomuser.me/";
        // const settingsUrl = Config.API_BASE + "settings";
        // const settingsResponse = await fetch(settingsUrl);
        // const settingsData = await settingsResponse.json();

        const url = Config.API_BASE + "data-single/" + Config.HOME_ID;
        //const url = Config.API_BASE + "data-single/" + settingsData.req.data.page_on_front;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            pageData: data, 
            //settingsData: settingsData, 
            loading: false,
        });
        //console.log(data);
    }
    render() {        
        if (this.state.loading) {
            return <Loading cls="loading page-loader" />;
        }
        if (!this.state.pageData ) {
            return <Loading cls="late-api-response page-loader" />;
        }
        const { pageData } = this.state;
        return (
            <>
                {/* {console.log(pageData)} */}
                <SeoMeta pageData={pageData}/>         
                <BannerComponents pageData={pageData}/>
                {
                    pageData.meta._mosacademy_page_group_details_group.map((item, index) => (
                        // <MainComponent data={item} key={index} />
                        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}} key={index}>  
                        <Suspense fallback={<div>Loading...</div>}>
                            <Section data={item} />
                        </Suspense> 
                        </ErrorBoundary>                      
                    ))
                }
            </>
        );
    }
};