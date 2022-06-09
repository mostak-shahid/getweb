import React, { Component } from 'react';
//import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Config from '../../Config.json';
import Navigation from '../Navigation/Navigation';
//const HeaderComponent = () => {
export default class HeaderComponent extends Component { 
    state = {
        loading: true,
        optionData: null,
        menuData: null,
        menuOpen: false
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

    }
 
 
    render() {
        if (this.state.loading) {
            return <div className="textClrGreen text-center">loading...</div>;
        }

        if (!this.state.optionData) {
            return <div>Didn't get data from API</div>;
        }
        //const CANONICAL = Config.SITE_DOMAIN;
        const {optionData, menuOpen} = this.state;
        const menuAlter = () => {
            return this.setState({menuOpen: !menuOpen})
        }
        //console.log(this.state.menuOpen);
        return (
            <header className='main-header position-absolute top-0 start-0 w-100 zindex-fixed'>
                <div className="wrapper d-flex justify-content-between align-items-center">
                    <div className="logo-area">
                        <NavLink to="/" onClick={() => this.setState({menuOpen:false})}><img src={optionData.logo.url} alt="logo" /></NavLink>
                    </div>
                    <div className="menu-area position-static position-xl-relative">
                        <div className="position-static position-xl-relative navbar navbar-expand-xl navbar-light">
                            <button className={['navbar-toggler', !this.state.menuOpen?'collapsed':''].join(' ')} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={menuAlter}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={["collapse navbar-collapse", this.state.menuOpen && 'show'].join(' ')} id="navbarSupportedContent">
                            {Config.MAIN_MENU && <Navigation id={Config.MAIN_MENU} menuOpen={menuOpen} menuOpenToggle={(value) => this.setState({menuOpen:value})} />}
                            </div>
                        </div>                       
                    </div>
                    <div className="button-area d-none d-xl-block">
                        <NavLink to={optionData['contact-request-link']} className="btn bgClrPink text-white border-0 rounded-pill fwSemiBold fs-14">Request a Quote</NavLink>
                    </div>
                </div>
                {/* <ChildComponent menuOpen={(value) =>this.setState({name:value})}/> */}
            </header>
        );
    }
}