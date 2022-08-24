import React from "react";
import { Container, Form, Row, Col, NavLink ,InputGroup,FormControl } from "react-bootstrap";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Footer = () => {
  return (
    <>
      {/* <h1>Footer section</h1> */}

      <div className="footer_section">
        <Container>
          <Row>
            <Col xl={3} lg={3} md={3} sm={6} className="flogo">
            <AnimationOnScroll animateIn="animate__fadeInLeft"> 
              <img src="/Digiency.png" className="footer_logo" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
                laoreet libero dis eget maecenas bibendum.
              </p>
              <div className="social_icons d-flex">
                <NavLink  xl={3} lg={3} md={3} sm={3} ><img src="/fb.png" className="fb" /></NavLink>
                <NavLink  xl={3} lg={3} md={3} sm={3}><img src="/insta.png"/></NavLink>
                <NavLink  xl={3} lg={3} md={3} sm={3}><img src="/twitter.png"/></NavLink>
                <NavLink  xl={3} lg={3} md={3} sm={3}><img src="/skype.png"/></NavLink>
          </div>
       </AnimationOnScroll>
            </Col>
            <Col className="footer_top" xl={3} lg={3} md={3}  sm={6}>
            <AnimationOnScroll animateIn="animate__fadeInUp">      
              <h5>Company</h5>
              <NavLink href="">About Us</NavLink>
              <NavLink href="">Our Work</NavLink>
              <NavLink href="">Client</NavLink>
              <NavLink href="">Our Blog</NavLink>
              <NavLink href="">Contact US</NavLink>
              </AnimationOnScroll>
            </Col>
            <Col className="footer_top" xl={3} lg={3} md={3}  sm={6}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <h5>Sevices</h5>
              <NavLink href="">Graphic Design</NavLink>
              <NavLink href="">UI/UX Design </NavLink>
              <NavLink href="">Web Development</NavLink>
              <NavLink href="">App Development</NavLink>
              <NavLink href="">Web Hosting</NavLink>
              </AnimationOnScroll>
            </Col>
            <Col className="footer_top" xl={3} lg={3} md={3}  sm={6}>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <h5>Newsletter</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                eget varius viverra in.
              </p>
              <InputGroup className="mt-4">
                <FormControl
                  placeholder="info@gmail.com"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                <img src="/send.png"/>
                </InputGroup.Text>
              </InputGroup>
              </AnimationOnScroll>
            </Col>
          </Row>
        </Container>
      </div>
     
      <div className="footer_bottom">

        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} className="">
            {/* <img src="/copyright.png" className="copyright_icon"/> */}
            <p> Copyright 2021. All Right Reserved By Ojjomedia</p>
            </Col>
            <Col className="arrow" xl={6} lg={6} md={6}>
              <img src="/arrowup.png" />
            </Col>
          </Row>
          </Container>
          </div>
    </>
  );
};
export default Footer;
