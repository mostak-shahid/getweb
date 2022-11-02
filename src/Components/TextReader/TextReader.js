import React from 'react';
import Speech from 'react-speech';
import './TextReader.scss';
const TextReader = (props) => {
    return (
        <div className="textReader">
            <Speech
                text={props?.content}
                stop={true} 
                pause={true} 
                resume={true} 
                // textAsButton={true}    
                // displayText="Hello"
                pitch="1"
                rate="1.5"
                volume="1"
                lang="en-GB"
                voice="Daniel"
            />
        </div>
    )
}

export default TextReader