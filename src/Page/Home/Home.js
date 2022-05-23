import React, { Component } from "react";
import { Audio } from 'react-loader-spinner';
import BannerComponents from "../../Components/Banner/BannerComponents";
import Loading from "../../Components/Loading/Loading";
import MainComponent from "../../Components/MainComponent/MainComponent";
import Config from "../../Config.json";
import './Home.scss';

export default class Home extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            pageData: "",
        };
    }
    
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
            return <Audio
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
          />;
        }

        if (!this.state.pageData) {
            return <Loading />;
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