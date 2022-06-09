import React, { useEffect, useState } from 'react';
import MediaBlock from '../MediaBlock/MediaBlock';
import './TabBlock.scss';
const rand = Math.floor(Math.random() * 1000); 
const TabBlock = (props) => {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        //setOffset(window.pageYOffset);
        const onScroll = () => {
            setOffset(window.pageYOffset)
            //setOffset(window.offsetTop)
            var section = document.querySelectorAll(".section");
            var sections = {};
            var i = 0;
            Array.prototype.forEach.call(section, function(e) {
                sections[e.id] = e.offsetTop;
            });
            if (offset) {
                for (i in sections) {
                    //console.log('Curent: ', sections[i])
                    //console.log('Offset: ',offset)
                    if (sections[i] <= offset) {
                        document.querySelector('.list-group-item.active').setAttribute('class', 'list-group-item list-group-item-action');
                        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'list-group-item list-group-item-action active');
                        //console.log(document.querySelector('a[href*=' + i + ']'));
                    }
                }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
    }, [offset]);    
      
    const handleClick = (e) => {
        e.preventDefault()
        // e.target.parentElement.querySelector('.list-group-item.active').classList.remove("active")
        // e.target.classList.add("active")
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop  
        window.scrollTo({
            left: 0,
            //top: location - 64,
            top: location + 100,
        })
        //setOffset(location)
    }
    return (
        <>
            <div className="col-lg-4 tab-anchor-list d-none d-lg-block">
                <div className="list-group position-sticky top-0 start-0" >
                    <h4 className="fs-24">Contents</h4>
                    {props.groupData.map((item, index) => (                        
                        <a onClick={handleClick} href={["#list-item", rand, index].join('-')} className={["list-group-item list-group-item-action", !index?'active':''].join(' ')} key={index}>
                            <span  dangerouslySetInnerHTML={{__html: item.title}}></span>
                        </a>
                    ))}
                </div>
            </div>
            <div className="col-lg-8 tab-content-list">
                {
                    props.groupData.map((item, index) => (
                        <div id={["list-item", rand, index].join('-')} className="section tab-content" key={index}>
                            <MediaBlock data={item} template={props.template}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default TabBlock