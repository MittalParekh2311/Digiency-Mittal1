import React, { useState } from "react";
import { Container, Navbar, Row, Nav, NavbarBrand, Col } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

const Header = () => {
  return (
    <>
      {/* <h1> Header section</h1> */}

      <div className="header_section">
        <Container>
          <Row>
            <Navbar expand="lg">
              <Navbar.Brand href="#home">
                <img src="/logo.png" className="img-responsive" />
              </Navbar.Brand>
             
              <Col xl={{ order: "last" }} lg={{ order: "last" }}>
                <img src="/Dark.png" className="header_icon" />
              </Col>
              <NavbarToggle />
              <NavbarCollapse id="responsive-navbar-nav">
                <Nav>
                  <Nav.Link href="Desktop">Home</Nav.Link>
                  <Nav.Link href="">About Us</Nav.Link>
                  <Nav.Link href="">Our Work</Nav.Link>
                  <Nav.Link href="">Clients</Nav.Link>
                  <Nav.Link href="BlogDetail">Our Blog</Nav.Link>
                  <Nav.Link href="">Contact Us</Nav.Link>
                </Nav>
              </NavbarCollapse>
              <div>
                {/* <Col>
                <img src="/Dark.png" />
                </Col> */}
              </div>
            </Navbar>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Header;
