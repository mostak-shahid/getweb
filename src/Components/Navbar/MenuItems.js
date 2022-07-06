import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const MenuItems = ({items,depthLevel, menuOpen, menuOpenToggle}) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();
    //const menuOpen = useRef(0);


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
    const handleClick = useCallback((e) => {
        //e.target.parentElement.classList.add('open-menu-below');
        e.target.parentElement.classList.toggle('open-menu-below');
    }, []);

    return ( 
        /*<li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >*/
        <li className={['menu-items', items.class.join(' ')].join(' ')} ref={ref}>
            {items.image && <img src={items.image} className="menu-image" alt="" />}
            {   
                items.submenu && (items.submenu.length || Object.values(items.submenu).length) ? ( 
                    <>
                        <NavLink className="menu-item-link" to={items.url} /*onClick={linkClick}*/ onClick={(event)=>menuOpenToggle(!menuOpen)} >{items.title}</NavLink>
                        <span className={depthLevel > 0 ? "right-arrow" : "down-arrow" } onClick={handleClick}></span>
                        <div className="dropdown-container"><Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} /></div> 
                    </>
                ) : (
                    <>
                        <NavLink className="menu-item-link" to={items.url} activeclassname="active" onClick={(event)=>menuOpenToggle(!menuOpen)}> {items.title} </NavLink>
                    </>
                )
            } 
        </li>
    );
};

export default MenuItems;