import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './TableofContent.scss';

import { useCallback } from 'react';
import Arrow from "../../assets/images/arrow-top-hover.png";
const TableofContent = (props) => {   
    
    const [tocShow, setTocShow] = useState(true);
    const childToc = (data) => {
        return (
            <ul>
                {data.map((item, index)=>(
                    <li className="toc-row" key={index}>
                        <NavLink to={item.href} data-target={item.href} onClick={handleClick}>{item.title}</NavLink>                 
                        {item?.child &&
                        <>
                        <span className="arrow" onClick={toggleToc}></span>
                        {childToc(item.child)}
                        </>
                        }
                    </li> 
                ))}
            </ul> 
        )   
    }
    const toggleToc = useCallback((e) => {
        e.target.parentElement.classList.toggle("open-this-toc");
    }, []);
    const handleClick = (e) => {
        e.preventDefault()
        let extraSpace = 86;
        // e.target.parentElement.querySelector('.list-group-item.active').classList.remove("active")
        // e.target.classList.add("active")
        //const target = e.target.getAttribute('href')
        const target = e.target.getAttribute('data-target');
        //console.log(distance)
        //console.log(document.querySelector('#' + target))
        const scrollToTop = document.querySelector(target).offsetTop  
        const blogFeatheredHeight = document.querySelector('.blogFeathered').offsetHeight 
        //const mainHeaderHeight = document.querySelector('.main-header').offsetHeight 
        if(window.innerWidth > 991) {
            extraSpace = 177 - 50;
        } else if (window.innerWidth > 575) {
            extraSpace = 96 - 40;
        } else {
            extraSpace = 86 - 30;
        }
        window.scrollTo({
            left: 0,
            //top: location - 64,
            top: scrollToTop + blogFeatheredHeight + extraSpace,
            
        })
    }
    return (
        props?.data && props.data.length ?
        <div  className="blogTOC bgClrDark5">
            <div className="toc-title-wrap d-flex justify-content-between align-items-center cursor-pointer" onClick={() => setTocShow(!tocShow)}>
                <div className="toc-title">{props.title}</div>
                <button className={["toc-toggle-btn",tocShow ? "open" : "close"].join(" ")}>
                    <img width="40px" height="40px" src={Arrow} alt="Table of Content"/>
                </button>
            </div>
            <div className={["toc-wrap",tocShow ? "toc-open" : ""].join(" ")}>
                <div className="toc">
                    <ul>
                    {props.data.map((item, index)=>(
                        <li className="toc-row" key={index}>
                        <NavLink to={item.href} data-target={item.href} onClick={handleClick}>{item.title}</NavLink>
                        {
                            item?.child &&
                            <>
                            <span className="arrow" onClick={toggleToc}></span>
                            {childToc(item.child)}
                            </>
                        }
                        </li>
                    ))}
                    </ul>
                </div> 
            </div>
        </div>: ''
    )
}

export default TableofContent