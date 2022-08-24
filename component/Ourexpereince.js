import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Ourexpereince = () => {
  return (
    <>
      <div className="ourexper_section">
        <Container>
          <Row>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
            >
              <div className="our_cont">
                <h5>Our Expereince</h5>
                <h4>
                  We Have Completed<span>150+ Projects</span> Succesfully
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nascetur imperdiet at a augue ullamcorper. Leo faucibus
                  feugiat rutrum aenean. Nisi, lectus aliquet aliquam
                  consectetur augue praesent. Lorem vulputate orci eget mi, sed
                  pulvinar.
                </p>
                <p>
                  Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit
                  faucibus est, dui interdum ut amet. Adipiscing feugiat vel at
                  posuere in. Pellentesque volutpat vestibulum.
                </p>
                <button className="our_btn">Contact Us</button>
              </div>
            </Col>

            <Col
              xl={{ span: 6, order: 2 }}
              lg={{ span: 6, order: 2 }}
              md={{ span: 6, order: 2 }}
              sm={{ span: 12, order: 2 }}
            >
              <Col xl={6} lg={6} md={6} sm={12} xs={12} className="countdown">
                <div className="our_right">
                  <h4>250+</h4>
                  <p>Global Customer</p>
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12} className="countdown">
                <div className="our_right">
                  <h4>156+</h4>
                  <p>Project Completed</p>
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12} className="countdown">
                <div className="our_right">
                  <h4>50+</h4>
                  <p>Team Member</p>
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} sm={12} xs={12} className="countdown">
                <div className="our_right">
                  <h4>15+</h4>
                  <p>Our Company</p>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Ourexpereince;
