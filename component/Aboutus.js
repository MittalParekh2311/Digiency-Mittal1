import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Aboutus = () => {
  return (
    <>
      <div className="about_section">
        <Container>
          <Row>
            <Col xl={{span:6 , order:1}} lg={{span:6 , order:1}} md={{span:6 , order:1}} className="about_img">
              <Image src="/about.png" />
            </Col>
            <Col xl={{span:6 , order:1}} lg={{span:6 , order:1}} md={{span:6 , order:1}} className="about_cont">
              <h5>About Us</h5>
              <h4>
                We Are <span>Making Ideas Better</span> For Everyone
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat
                rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue
                praesent. Lorem vulputate orci eget mi, sed pulvinar.
              </p>
              <p>
                Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
                faucibus est, dui interdum ut amet. Adipiscing feugiat vel at
                posuere in. Pellentesque volutpat vestibulum.
              </p>
              <button className="about_btn">Contact Us</button>
            </Col>
          </Row>
          <div className="about_Second">
          <Row>
            <Col xl={3} lg={3} md={3}>
              <div className="about_img_text">
                <Image src="abouticon1.png" />
                <p>World leader in consulting and finance</p>
              </div>
            </Col>
            <Col xl={3} lg={3} md={3}>
              <div className="about_img_text">
                <Image src="abouticon2.png" />
                <p>A focused team with a specialized skill</p>
              </div>
            </Col>
            <Col xl={3} lg={3} md={3}>
              <div className="about_img_text">
                <Image src="abouticon3.png" />
                <p>Trusted and professional advisors for you</p>
              </div>
            </Col>
            <Col xl={3} lg={3} md={3}>
              <div className="about_img_text">
                <Image src="abouticon4.png" />
                <p>Experience to give you a better results</p>
              </div>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Aboutus;
