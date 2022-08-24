
import React from "react";
import { Container, Row, Col ,Image ,NavLink } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <div className="banner_section">
        <Container>
          {/* <h1> Banner section </h1> */}
          <Row>
            <Col xl={{span:6 , order:1}} lg={{span:6 , order:1}} md={{span:6 , order:1}} sm={{span:12 , order:2}} xs={{span:12 , order:2}}  className="banner_cont">
              <h4>We Are The Best <span>Digital Agency</span> for business</h4>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="banner_btn">Contact Us</button>
            </Col>
            <Col xl={{span:6 , order:1}} lg={{span:6 , order:1}} md={{span:6 , order:1}} sm={{span:12, order:1}} xs={{span:12 , order:1}} className="banner_img">
            <Image src="/bannerimg.png"/>
            </Col>
          </Row>
        </Container>
        <div className="social_icons">
                <NavLink  xl={3} lg={3} md={3} sm={3} ><img src="/fb.png" className="fb" /></NavLink>
                <NavLink  xl={3} lg={3} md={3} sm={3}><img src="/insta.png"/></NavLink>
                <NavLink  xl={3} lg={3} md={3} sm={3}><img src="/twitter.png"/></NavLink>
                <NavLink  xl={3} lg={3} md={3} sm={3}><img src="/skype.png"/></NavLink>
       </div>
      </div>
    </>
  );
};
export default Banner;
