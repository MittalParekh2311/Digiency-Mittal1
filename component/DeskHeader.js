import React from "react";
import { Container, Row ,Navbar,Nav,NavbarBrand , Col} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import styles from  '../styles/Header.module.css'


const DeskHeader = () => {
    return(
        <>
        {/* <h1> Header section component 2 </h1> */}
        <div className={styles.header_section}>
        <Container>
            <Row>
            <Navbar expand="lg" className={styles.header_section .navbar}>
            <Navbar.Brand href="#home">
                <img src="/logo.png" className="img-responsive"/>
              </Navbar.Brand>
              <NavbarToggle />
              <NavbarCollapse id="responsive-navbar-nav" className={styles.navbarcollapse}>
                <Nav>
                  <Nav.Link href="" className={[styles.navlink,styles.active]}>Home</Nav.Link>
                  <Nav.Link href="" className={styles.navlink}>About Us</Nav.Link>
                  <Nav.Link href="" className={styles.navlink }>Services</Nav.Link>
                  <Nav.Link href="" className={styles.navlink }>Portfolio</Nav.Link>
                  <Nav.Link href="Blog" className={styles.navlink }>Blog</Nav.Link>
                  <Nav.Link href="" className={styles.navlink }>Contact Us</Nav.Link>
                  <button className={styles.header_btn}>Let’s Talk</button>
                </Nav>
              </NavbarCollapse>
            </Navbar>
            </Row>
        </Container>
        </div>
        </>
    )
}
export default DeskHeader;