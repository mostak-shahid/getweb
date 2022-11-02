import React from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton
} from "react-share";
import './SocialShare.scss';
const SocialShare = (props) => {
    return (
        <div className="socialLink d-flex align-items-center">
            <div className="socialLinkTitle">Share</div>
            <div className="socialLinkShare d-flex align-items-center">
                <FacebookShareButton url={window.location.href} quote={props.title} />
                <TwitterShareButton url={window.location.href} title={props.title} />
                <LinkedinShareButton url={window.location.href} title={props.title} />
            </div>
        </div>
    )
}

export default SocialShare