import { NavLink } from 'react-router-dom'
import './Button.scss'

const Button = (props) => {
  const handleClick = (e) => {
    e.preventDefault()
    // e.target.parentElement.querySelector('.list-group-item.active').classList.remove("active")
    // e.target.classList.add("active")
    //const target = e.target.getAttribute('href')
    const target = e.target.getAttribute('data-target')
    //console.log(document.querySelector('#' + target))
    const location = document.querySelector(target).offsetTop  
    window.scrollTo({
        left: 0,
        //top: location - 64,
        top: location,
    })
    //setOffset(location)
}
  return (
    <div className="btn-wrapper">
      {/*console.log(props)*/}
        {
            props?.url
            ?<NavLink className={["btn position-relative border-0 rounded-pill d-flex align-items-center justify-content-center", props.className, (props?.alt) && 'btn-alt', props.url.match("#") && 'link-to-id'].join(' ')} to={props.url} onClick={props.url.match("#") && handleClick} data-target={props.url}>
                <span className="mr-8" data-target={props.url}>{props.title}</span>
                <span className="btn-arrow"></span>
            </NavLink>
            :<button type='button' className={["btn position-relative border-0 rounded-pill d-flex align-items-center justify-content-center"].join(' ')} >
                <span className="mr-8">{props.title}</span>
                <span className="btn-arrow"></span>
            </button>
        }
    </div>
  )
}

export default Button