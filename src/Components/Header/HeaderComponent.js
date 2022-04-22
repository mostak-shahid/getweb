import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/images/logo.svg';


const HeaderComponent = () => {
  return (
      <Navbar className="header position-absolute top-0 start-0 w-100 py-4" expand="xl">
          <Container fluid>
              <Navbar.Brand href="#home">
                  <img src={Logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="m-auto">
                      <NavDropdown className="fs-15 fw-bold textClrGray mx-4 active" title="Services" id="basic-nav-dropdown">
                          <NavDropdown.Item className="fs-14 fw-medium" href="#action/3.1">
                              Action
                          </NavDropdown.Item>
                          <NavDropdown.Item className="fs-14 fw-medium" href="#action/3.2">
                              Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item className="fs-14 fw-medium" href="#action/3.3">
                              Something
                          </NavDropdown.Item>
                          <NavDropdown.Item className="fs-14 fw-medium" href="#action/3.4">
                              Separated link
                          </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link className="fs-15 fw-bold mx-4" href="#about">
                          About
                      </Nav.Link>
                      <NavDropdown className="fs-15 fw-bold textClrGray mx-4" title="How We Work" id="basic-nav-dropdown">
                          <NavDropdown.Item className="fs-14 fw-medium" href="#action/3.1">
                              Action
                          </NavDropdown.Item>
                          <NavDropdown.Item className="fs-14 fw-medium" href="#action/3.2">
                              Another action
                          </NavDropdown.Item>
                          <NavDropdown.Item className="fs-14 fw-medium" href="#action/3.3">
                              Something
                          </NavDropdown.Item>
                          <NavDropdown.Item className="fs-14 fw-medium" href="#action/3.4">
                              Separated link
                          </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link className="fs-15 fw-bold mx-4" href="#portfolio">
                          Portfolio
                      </Nav.Link>
                      <Nav.Link className="fs-15 fw-bold mx-4" href="#careers">
                          Careers
                      </Nav.Link>
                      <Nav.Link className="fs-15 fw-bold mx-4" href="#blog">
                          Blog
                      </Nav.Link>
                      <Nav.Link className="fs-15 fw-bold mx-4" href="#contact">
                          Contact
                      </Nav.Link>
                  </Nav>
                  <div className="gw-btn">
                      <button type="button" className="btn bgClrPink text-white border-0 py-2 px-4 rounded-pill fwSemiBold fs-14 h-42">
                          Request a Quote
                      </button>
                  </div>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default HeaderComponent