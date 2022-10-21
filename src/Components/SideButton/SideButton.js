import React from 'react';
import './sideButton.scss'
import CloseIcon from '../../assets/images/button-with-close.svg';
import OpenBtn from "../../assets/images/button-with-text.svg";


const SideButton = ({ sideBarOpen, setSideBarOpen }) => {
  return (
    <div
      className={`side-btn ${sideBarOpen && "active"}`}
      onClick={() => setSideBarOpen(!sideBarOpen)}
    >
      {/* <button className='side-toggle-btn'>Lets Talk</button> */}
      <button className="side-toggle-btn">
          {sideBarOpen ? (
            <img src={CloseIcon} alt={CloseIcon} />
          ) : (
            <img src={OpenBtn} alt={OpenBtn} />
          )}
      </button>

      <button className="mobile-btn">
        {sideBarOpen ? "Close" : "Lets Talk"}
      </button>
    </div>
  );
};

export default SideButton;