import React from 'react'
import './JobDetailsBanner.scss'

const JobDetailsBanner = (props) => {
  return (
    <div className="JobDetailsBanner">
        <div className="container">
            <div className="JobBannerContent d-flex align-items-center">
                <div className="content">
                    <h2 className="jobTitle fs-48 fw-bold text-white mb-4" dangerouslySetInnerHTML={{__html:props.title}} />
                    <div className="jobIntro fs-18 text-white fw-normal" dangerouslySetInnerHTML={{__html:props.content}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobDetailsBanner