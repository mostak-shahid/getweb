import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='position-fixed top-0 start-0 bottom-0 end-0 bgClrDark d-flex h-100hv justify-content-center align-items-center'>
        <Audio
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
          />
    </div>
  )
}

export default Loading