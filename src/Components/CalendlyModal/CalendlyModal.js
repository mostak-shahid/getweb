import React from "react";
import Modal from 'react-bootstrap/Modal';
import './CalendlyModal.scss';

const CalendlyModal = (props) => {
    // const [show, setShow] = useState(false);
    // useEffect(()=>{
    //     setShow(props.show?true:false);
    // },[props.show]); 
    
    // const handleClose = () => setShow(false);

    const {show, setShow} = props
    
    return (
        <Modal className="calendly-modal" show={show} onHide={()=>setShow(!show)}>
            {/* <Modal.Body className="p-0"> */}
                <span className="calendly-modal-close" onClick={()=>setShow(!show)}>x</span>
                <iframe className="w-100" src="https://calendly.com/getwebinc/discovery-call" title="Book a call now" />
            {/* </Modal.Body> */}
        </Modal>
    )
}
export default CalendlyModal