import React from 'react'
import { NavLink } from 'react-router-dom'
import './Button.scss'

const Button = (props) => {
  return (
    <div className="btn-wrapper">
        {
            props?.url
            ?<NavLink className={["btn position-relative border-0 rounded-pill gap-2 d-flex align-items-center justify-content-center", (props?.alt) && 'btn-alt'].join(' ')} to={props.url}>
                <span className="me-3">{props.title}</span>
                <i className="fa-solid fa-arrow-right-long"></i>
            </NavLink>
            :<button type='button' className="btn position-relative border-0 rounded-pill gap-2 d-flex align-items-center justify-content-center" >
                <span className="me-3">{props.title}</span>
                <i className="fa-solid fa-arrow-right-long"></i>
            </button>
        }
    </div>
  )
}

export default Button