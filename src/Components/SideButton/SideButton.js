import React from 'react';
import CloseIcon from '../../assets/images/button-with-close.svg';
import OpenBtn from "../../assets/images/button-with-text.svg";
import LazyImage from '../LazyImage';
import './sideButton.scss';


const SideButton = ({ sideBarOpen, setSideBarOpen }) => {
  return (
    <div
      className={`side-btn ${sideBarOpen && "active"}`}
      onClick={() => setSideBarOpen(!sideBarOpen)}
    >
      {/* <button className='side-toggle-btn'>Lets Talk</button> */}
      <button className="side-toggle-btn">
          {sideBarOpen ? (
            // <img src={CloseIcon} alt={CloseIcon} width="89px" height="72px" />
            <LazyImage src={CloseIcon} alt={CloseIcon} width="89px" height="72px" />
          ) : (
            // <img src={OpenBtn} alt={OpenBtn} width="79px" height="72px" />
            <LazyImage src={OpenBtn} alt={OpenBtn} width="89px" height="72px" />
          )}
      </button>

      <button className="mobile-btn">
        {sideBarOpen ? "Close" : "Lets Talk"}
      </button>
    </div>
  );
};

export default SideButton;