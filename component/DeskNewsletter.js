import React from "react";
import { Container ,Row,Col,InputGroup,FormControl } from "react-bootstrap";
import stylenews from "../styles/Newsletter.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const DeskNewsletter = () => {
    return(
        <>
        <div className={stylenews.newsletter_section}>
        <Container>
            <Row>
            <div className={stylenews.newsletter_cont}>
                <Col xl={5} lg={5} md={5} sm={12} xs={12} className="newsletter_left" >
                <AnimationOnScroll animateIn="animate__bounceIn">
                <div>
                <h6 className={stylenews.news_subscribe }>Subscribe Newsletter</h6>
                <h2 className={stylenews.news_heading}>Lets Stay In Touch</h2>
                </div>
                </AnimationOnScroll>
                </Col>

                <Col xl={7} lg={7} md={7} sm={12} xs={12}>
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                <InputGroup className="mt-4">
                <FormControl
                  placeholder="Enter your email"
                //   aria-label="Recipient's username"
                //   aria-describedby="basic-addon2"
                  className={stylenews.newsletterinput}
                />
                <button className={stylenews.subscribe_btn}>Subscribe Now</button>
              </InputGroup>
              </AnimationOnScroll>
                </Col>
                </div>
            </Row>
        </Container>
        </div>
        </>
    )

}
export default DeskNewsletter;