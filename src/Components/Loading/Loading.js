//import { Audio } from 'react-loader-spinner';
import logo from '../../assets/images/loader-logo.svg'
import './Loading.scss'
const Loading = (props) => {
  return (
    <div className={['position-fixed top-0 start-0 bottom-0 end-0 bgClrDark d-flex h-100hv justify-content-center align-items-center bgClrDark z-index-999', props.cls].join(' ')}>
        {/* <Audio
            height="100"
            width="100"
            color='#00ffa3'
            ariaLabel='loading'
          /> */}
              <img src={logo} alt=""/>
              <div className="rotating-border"></div>
          <div className="text-center text-white">{props.text}</div>
    </div>
  )
}

export default Loading