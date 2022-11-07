import React, { Component, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import BannerComponents from "../../Components/Banner/BannerComponents";
import ErrorFallback from "../../Components/ErrorBoundary";
import Loading from "../../Components/Loading/Loading";
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
        const url = Config.API_BASE + "data-single/" + Config.HOME_ID;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            pageData: data, 
            loading: false,
        });
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
                <SeoMeta pageData={pageData}/>         
                <BannerComponents pageData={pageData}/>
                {
                    pageData.meta._mosacademy_page_group_details_group.map((item, index) => (
                        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}} key={index}>  
                        <Suspense fallback={<div className="textClrGreen text-center loder-text d-none">loading...</div>}>
                            <Section data={item} />
                        </Suspense> 
                        </ErrorBoundary>                      
                    ))
                }
            </>
        );
    }
};