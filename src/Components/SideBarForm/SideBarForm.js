import React from 'react';
import Divider from '../Divider/Divider';
import FormValidation from '../FormValidation/FormValidation';
import './sideBarForm.scss';

const SideBarForm = ({ setStartProject, startProject, sideBarOpen, stage, optionData }) => {
  return (
    <div
      className="side-bar-form"
      style={{
        transition: "all 2s",
        opacity: stage === "enter" ? 1 : 0,
      }}
    >
      <button className="back-btn" onClick={() => setStartProject(false)}>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.7362 13.0366C7.38473 13.3881 6.81488 13.3881 6.46341 13.0366L1.06341 7.63659C0.711937 7.28512 0.711937 6.71527 1.06341 6.3638L6.46341 0.9638C6.81488 0.612327 7.38473 0.612327 7.7362 0.9638C8.08767 1.31527 8.08767 1.88512 7.7362 2.23659L3.8726 6.1002H14.2998C14.7969 6.1002 15.1998 6.50314 15.1998 7.0002C15.1998 7.49725 14.7969 7.9002 14.2998 7.9002L3.8726 7.9002L7.7362 11.7638C8.08767 12.1153 8.08767 12.6851 7.7362 13.0366Z"
            fill="#00FFA3"
          />
        </svg>
        Back
      </button>
      {typeof optionData['contact-sidebar-title'] !== 'undefined' && optionData['contact-sidebar-title'] ? 
      <h3 className="form-title" dangerouslySetInnerHTML={{__html:optionData['contact-sidebar-title']}} /> : ''}
      {typeof optionData['contact-sidebar-intro'] !== 'undefined' && optionData['contact-sidebar-intro'] ? 
      <p dangerouslySetInnerHTML={{__html:optionData['contact-sidebar-intro']}} /> : ''}

      <Divider />
      <div className="mb-10"></div>
      <FormValidation
        title=""
        fields={["name", "email", "phone", "interestedin", "budget", "message"]}
        startProject={startProject}
      />
    </div>
  );
};

export default SideBarForm;