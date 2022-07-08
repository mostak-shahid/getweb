import { Component } from "react";
import BannerComponents from "../../Components/Banner/BannerComponents";
import Loading from "../../Components/Loading/Loading";
import Section from "../../Components/Section/Section";
import SeoMeta from "../../Components/SeoMeta/SeoMeta";
import Config from "../../Config.json";
import './Home.scss';

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
        const settingsUrl = Config.API_BASE + "settings";
        const settingsResponse = await fetch(settingsUrl);
        const settingsData = await settingsResponse.json();

        //const url = Config.API_BASE + "data-single/" + Config.HOME_ID;
        const url = Config.API_BASE + "data-single/" + settingsData.req.data.page_on_front;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            pageData: data, 
            settingsData: settingsData, 
            loading: false,
        });
        //console.log(data);
    }
    render() {
        
        if (this.state.loading) {
            return <Loading cls="loading" />;
        }

        if (!this.state.pageData || !this.state.settingsData ) {
            return <Loading cls="late-api-response" />;
        }
        const { pageData } = this.state;
        return (
            <>
            {/*console.log(settingsData.req.data.page_on_front)*/}
                <SeoMeta pageData={pageData}/>         
                <BannerComponents />
                {
                    pageData.meta._mosacademy_page_group_details_group.map((item, index) => (
                        // <MainComponent data={item} key={index} />  
                        <Section data={item} key={index} />                       
                    ))
                }
            </>
        );
    }
};