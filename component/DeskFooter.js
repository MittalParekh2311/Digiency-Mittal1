import Image from "next/image";
import React from "react";
import { Container , Row, Col,NavLink} from "react-bootstrap";
import styles from  '../styles/Header.module.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const DeskFooter = () =>{
    return(
        <>
        <div className={styles.footer_section}>
        <Container>
            <Row>
            <Col xl={3} lg = {{span: 3, order: 1}} md={{span: 6, order: 1}} sm={{span: 12, order: 1}} xs={{span: 12, order: 1}}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
            <img src="/Digiency.png" className="footer_logo" />
            <p className={styles.footer_twotext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor facilisi quis risus egestas ipsum.</p>
            </AnimationOnScroll>
            </Col>
            <Col xl={3} lg = {{span: 3, order: 2}} md={{span: 6, order: 3}} sm={{span: 12, order: 3}} xs={{span: 12, order: 3}}>   
            <AnimationOnScroll animateIn="animate__fadeInUp">         
            <h6 className={styles.footer_title}>Location</h6>
            <p  className={styles.footer_twotext}>
                3517 W. Gray St. Utica, <br/>Pennsylvania 57867
            </p>
            </AnimationOnScroll>
          </Col>
          <Col xl={3} lg = {{span: 3, order: 3}}  md={{span: 6, order: 4}} sm={{span: 12, order: 4}} xs={{span: 12, order: 4}}>
          <AnimationOnScroll animateIn="animate__fadeInUp">   
            <h6 className={styles.footer_title}>Call Us</h6>
            <p>
              <a href="tel:+(252) 555-0126" className={styles.footer_twotext}>(252) 555-0126</a>
            </p>
            <p>
              <a href="mailto:info@youremai.com" className={styles.footer_twotext}>info@youremai.com</a>
            </p>
            </AnimationOnScroll>
          </Col>
          <Col xl={3} lg = {{span: 3, order: 3}}  md={{span: 6, order: 4}} sm={{span: 12, order: 4}} xs={{span: 12, order: 4}}>
          <AnimationOnScroll animateIn="animate__fadeInRight">
          <h6 className={styles.footer_title}>Follow Us</h6>
          <div className={styles.footer_social_icons}>
                <a xl={3} lg={3} md={3} sm={3} ><img src="/facebook_footer.png"/></a>
                <a xl={3} lg={3} md={3} sm={3}><img src="/insta_footer.png"/></a>
                <a xl={3} lg={3} md={3} sm={3}><img src="/twitter_footer.png"/></a>
                <a xl={3} lg={3} md={3} sm={3}><img src="/skype_footer.png"/></a>
          </div>
          </AnimationOnScroll>
          </Col>
            </Row>
            
        </Container>
        </div>
        <div className={styles.footer_bottom}> 
        <Container>
          <Row>
          <div className={styles.footer_line}></div>
            <Col xl={5} lg={5} md={12} className="">
            {/* <img src="/copyright.png" className="copyright_icon"/> */}
            <p> Copyright 2021. All Right Reserved By Ojjomedia</p>
            </Col>
            <Col xl={2} lg = {2} md={4} sm={4} xs={6}>
            <div className={styles.footer_privacy}>
              <p>Privacy Plicy</p>
            </div>
            </Col>
            <Col xl={2} lg = {2} md={4} sm={4} xs={6}>
            <div className={styles.footer_privacy}>
              <p>Therms of Us</p>
            </div>
            </Col>
            <Col  xl={3} lg={3} md={3}>
              <img src="/arrowup.png" className={styles.arrow } />
            </Col>
          </Row>
          </Container>
          </div>
        </>
    )

}
export default DeskFooter;