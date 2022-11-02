import React, { useState } from 'react';
import { useTransition } from 'transition-hook';
import SideBarForm from '../SideBarForm/SideBarForm';
import SideBarInfo from '../SideBarInfo/SideBarInfo';
import './sideBar.scss';

const SideBar = ({ sideBarOpen,setSideBarOpen, optionData }) => {

  const [startProject, setStartProject] = useState(false);

  const { stage, shouldMount } = useTransition(startProject, 300);

  return (
    <div className={`side-bar ${sideBarOpen && "active"}`} >
      {!startProject ? (
        <SideBarInfo setStartProject={setStartProject} optionData={optionData} />
      ) : (
        shouldMount && (
          <SideBarForm
            setStartProject={setStartProject}
            sideBarOpen={sideBarOpen}
            startProject={startProject}
            stage={stage}
            optionData={optionData}
          />
        )
      )}
    </div>
  );
};

export default SideBar;