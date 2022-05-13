import { Button, Modal } from "react-bootstrap";
import SuccessfulIcon from "../../assets/images/succesful-icon.svg";
import { NavLink } from "react-router-dom";
import "./SuccessfulModal.scss";

const SuccessfulModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Body className="border-0 p-xl-5 p-4">
                <div className="bodyContents text-center">
                    <div className="mb-5">
                        <img src={SuccessfulIcon} alt="icon" className="img" />
                    </div>
                    <h2 className="fs-30 fw-bold text-dark mb-4">Thanks for your application!</h2>
                    <p className="fs-6 fw-normal textClrGray mb-5">A Getweb team member will reach out to schedule a call within 2 days.</p>
                    <div className="sbm-btn">
                        <NavLink to="/" className="btn bgClrGreen h-42 textClrThemeDark fs-14 fwSemiBold border-0 py-2 px-4 rounded-pill d-inline-flex align-items-center">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M13.1244 17.4301L7.41937 11.7251C6.74563 11.0513 6.74563 9.94882 7.41937 9.27507L13.1244 3.57007"
                                    stroke="#121316"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Back to Home
                        </NavLink>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default SuccessfulModal;
