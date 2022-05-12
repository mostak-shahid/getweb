import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const MenuItems = ({items,depthLevel}) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    /*const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };*/
    // console.log(items);
    // console.count();
    //console.log(items.image);
    const handleClick = useCallback((e) => {
        //e.target.parentElement.classList.add('open-menu-below');
        e.target.parentElement.classList.toggle('open-menu-below');
      }, []);
    return ( 
        /*<li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >*/
        <li className={['menu-items', items.class.join(' ')].join(' ')} ref={ref}>
            {items.image? <img src={items.image} className="menu-image" /> :''}
            {   
                items.submenu && (items.submenu.length || Object.values(items.submenu).length) ? ( 
                    <>
                        <NavLink className="menu-item-link" to={items.url} aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)} >{items.title}</NavLink>
                        <span className={depthLevel > 0 ? "right-arrow" : "down-arrow" } onClick={handleClick}></span>
                        <div className="dropdown-container"><Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} /></div> 
                    </>
                ) : (
                    <>
                        <NavLink className="menu-item-link" to={items.url} activeclassname="active"> {items.title} </NavLink>
                    </>
                )
            } 
        </li>
    );
};

export default MenuItems;