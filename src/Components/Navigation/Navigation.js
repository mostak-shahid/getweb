import React, { Component } from 'react';
import Config from '../../Config.json';
import MenuItems from '../Navbar/MenuItems';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        //console.log(props.id);
        this.state = {
            loading: true,
            menuData: null,
        };
    }
    
    
    async componentDidMount() {        
        const url = Config.API_BASE + "menu/" + this.props.id;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ 
            menuData: data, 
            loading: false,
        });
        //console.log(Object.values(this.state.menuData));
    }
    render() {
        if (this.state.loading) {
            return <div className="textClrGreen text-center">loading...</div>;
        }

        if (!this.state.menuData) {
            return <div>Didn't get data from API</div>;
        }
        const {title,menuOpen,menuOpenToggle} = this.props;
        const {menuData} = this.state;
        const items = (!Array.isArray(menuData))?Object.values(menuData):menuData;
        //console.log(menuOpen);
        return (
            <>  
                {
                    (title) &&  <h4 className={['mos-menu-title', this.props.titleCls].join(' ')}>{title}</h4>
                }        
                {
                    
                    (items.length) &&
                        <ul className={[this.props.listCls, 'mos-menu-list'].join(' ')}>                            
                            {
                                items.map((menu, index) => {
                                    const depthLevel=0;
                                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} menuOpen={menuOpen} menuOpenToggle={menuOpenToggle}/>;
                                })
                            } 

                        {/*items.map((item, index) => (
                            <li className={[item.class.join(' '), 'mos-menu-item'].join(' ')} key={item.term_id}>
                                <NavLink to={item.url} className={[this.props.itemCls, 'mos-menu-link'].join(' ')}>{item.title}</NavLink>
                            </li>
                        ))*/}
                        </ul>                   
                    
                }
                
            </>
                       
        )
    }
}
