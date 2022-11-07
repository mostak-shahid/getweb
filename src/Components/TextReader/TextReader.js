import React, { useEffect, useState } from 'react';
import Speech from 'react-speech';
import './TextReader.scss';
const TextReader = (props) => {
    const [speedRate, setSpeedRate] = useState(1);
    useEffect(() => {
        const handler = (event) => {  
            var playBtn = document.querySelector(".rs-play");
            var stopBtn = document.querySelector(".rs-stop");
            var pauseBtn = document.querySelector(".rs-pause");
            var resumeBtn = document.querySelector(".rs-resume");
            var speedRate = document.querySelector(".speed-rate-selector");
            if(event.path[0].className.match('rs-play')) {
                console.log('Play button pressed');
                playBtn.classList.add("d-none");
                pauseBtn.classList.add("d-block");
                stopBtn.classList.add("d-block");
                resumeBtn.classList.remove("d-block");
                speedRate.disabled = true;
            } else if(event.path[0].className.match('rs-stop')) {
                console.log('Stop button pressed');
                playBtn.classList.remove("d-none");
                stopBtn.classList.remove("d-block");
                pauseBtn.classList.remove("d-block");
                resumeBtn.classList.remove("d-block");
                speedRate.disabled = false;
            } else if(event.path[0].className.match('rs-pause')) {
                console.log('Pause button pressed');
                playBtn.classList.add("d-none");
                stopBtn.classList.remove("d-block");
                pauseBtn.classList.remove("d-block");
                resumeBtn.classList.add("d-block");
                speedRate.disabled = true;
            } else if(event.path[0].className.match('rs-resume')) {
                console.log('Pause button pressed');
                playBtn.classList.add("d-none");
                stopBtn.classList.add("d-block");
                pauseBtn.classList.add("d-block");
                resumeBtn.classList.remove("d-block");
                speedRate.disabled = true;      
            }
        };
        document.addEventListener("click", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("click", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, []);
    return (
        <div className="textReader d-flex justify-content-between align-items-center">
            <div className="left-part d-flex justify-content-start align-items-center">
                <Speech
                    text={props?.content}
                    stop={true} 
                    pause={true} 
                    resume={true} 
                    pitch="1"
                    rate={speedRate}
                    volume="1"
                    lang="en-GB"
                    voice="Daniel"
                />
                <div className="text">{props.instraction}</div>
            </div>
            <div className="right-part">
                <div className="speed-rate">
                    <select className="speed-rate-selector" onClick={(e) => setSpeedRate(e.target.value)} defaultValue={speedRate}>
                    {[.5, 1, 1.5, 2, 2.5, 3, 3.5].map((speedOption, i) => (
                        <option key={i} value={speedOption}>
                        {speedOption} x 
                        </option>
                    ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default TextReader