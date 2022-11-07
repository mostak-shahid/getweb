import React from "react";
import Modal from 'react-bootstrap/Modal';
import './CalendlyModal.scss';

const CalendlyModal = (props) => {

    const {show, setShow} = props
    
    return (
        <Modal className="calendly-modal" show={show} onHide={()=>setShow(!show)}>
                <span className="calendly-modal-close" onClick={()=>setShow(!show)}>x</span>
                <iframe className="w-100" src="https://calendly.com/getwebinc/discovery-call" title="Book a call now" />
        </Modal>
    )
}
export default CalendlyModal