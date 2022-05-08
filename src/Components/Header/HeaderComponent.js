import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Config from '../../Config.json';
import Navigation from '../Navigation/Navigation';



//const HeaderComponent = () => {
export default class HeaderComponent extends Component { 
    state = {
        loading: true,
        optionData: null,
        menuData: null,
    };
    
    async componentDidMount() {
        const url = Config.API_BASE + "options";
        const response = await fetch(url);
        const data = await response.json();
        
        const urlMenu = Config.API_BASE + "menu/17";
        const responseMenu = await fetch(urlMenu);
        const dataMenu = await responseMenu.json();

        this.setState({ 
            optionData: data, 
            menuData: dataMenu,
            loading: false,
        });
        //console.log(this.state.optionData.logo.url);
    }
    
    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.optionData) {
            return <div>Didn't get data from API</div>;
        }
        //const CANONICAL = Config.SITE_DOMAIN;
        const {optionData} = this.state;
        return (
            <header className='main-header position-absolute top-0 start-0 w-100 zindex-fixed'>
                <div className="wrapper d-flex justify-content-between py-4 align-items-center">
                    <div className="logo-area">
                        <NavLink to="/"><img src={optionData.logo.url} alt="logo" /></NavLink>
                    </div>
                    <div className="menu-area position-relative">
                        {Config.MAIN_MENU?<Navigation id={Config.MAIN_MENU} />:''}
                    </div>
                    <div className="button-area">
                        <NavLink to={optionData['contact-request-link']} className="btn bgClrPink text-white border-0 rounded-pill fwSemiBold fs-14">Request a Quote</NavLink>
                    </div>
                </div>
            </header>
        );
    }
}