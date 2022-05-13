import React from 'react'

const ChildComponent = (props) => {
  return (
    <div><input type="text" placeholder='Update Name' onBlur={(event)=>props.menuOpen(event.target.value)}/></div>
  )
}

export default ChildComponent