import React, { Component } from "react";
import BannerComponents from "../../Components/Banner/BannerComponents";
import MainComponent from "../../Components/MainComponent/MainComponent";
import Config from "../../Config.json";
import './Home.scss';


export default class Home extends Component {  
    state = {
        loading: true,
        pageData: null,
    };
    
    async componentDidMount() {
        //const url = "https://api.randomuser.me/";
        const url = Config.API_BASE + "data-single/" + Config.HOME_ID;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            pageData: data, 
            loading: false,
        });
        //console.log(data);
    }
    render() {
        
        if (this.state.loading) {
            return <div className="textClrGreen text-center">loading...</div>;
        }

        if (!this.state.pageData) {
            return <div>Didn't get data from API</div>;
        }
        return (
            <>          
                <BannerComponents />
                {
                    this.state.pageData.meta._mosacademy_page_group_details_group.map((item, index) => (
                        <MainComponent data={item} key={index} />                        
                    ))
                }
            </>
        );
    }
};