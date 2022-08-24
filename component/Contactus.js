import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

const Contactus = () => {
  return (
    <>
      <div className="constactus_section">
        <Container>
          {/* <h1> Contact US </h1> */}
          <div className="contactus_title text-center mb-5">
            <h5>Contact Us</h5>
            <h4 className="text-center ">
              Feel <span>Free to Contact </span> With Us
            </h4>
          </div>
          <Row>
            <Col xl={4} lg={4} md={4} sm={6} className="contact_info">
              <div className="contact_card">
             <div className="mail_icon">
             <Image src="/mail.png" />
             </div>
                <div className="contact_card_title d-inline-block mb-2">
                  <span> Drop a line</span>
                  <h2>Mail Us</h2>
                </div>
                <p>
                  <a href="#">Support87@gmial.com</a>
                </p>
                <p>
                  <a href="#">ijkuiu874@gmial.com</a>
                </p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6}  className="contact_info">
              <div className="contact_card">
               <div className="phone_icon">
               <Image src="/phone-call.png" />
               </div>
                <div className="contact_card_title d-inline-block mb-2">
                  <span> 24/7 Service</span>
                  <h2>Call Us</h2>
                </div>
                <p>
                  <a href="#">+880 265 98745 </a>
                </p>
                <p>
                  <a href="#">+895 855 85589 </a>
                </p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6}  className="contact_info">
              <div className="contact_card">
               <div className="map_icon">
               <Image src="/map1.png" />
               </div>
                <div className="contact_card_title d-inline-block mb-2">
                  <span>Location</span>
                  <h2> Visit Us</h2>
                </div>
                <p>
                  158 ralegih sit,
                  <br />
                  houston, yk 5896,uk
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xl={6} lg={6} md={6} className="contact_img_form mt-5">
              <div className="contact_img">
                <Image src="/contactimg.png" />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} className="contact_img_form mt-5">
              <h2>Send Your <span> Message To Us</span></h2>
              <div className="contact_form">
                <div class="row formRow">
                  <div class="col-6">
                    <input
                      type="text"
                      name="name"
                      class="form-control formInput"
                      placeholder="Name"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="email"
                      name="email"
                      class="form-control formInput"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="row formRow">
                  <div class="col-6">
                    <input
                      type="text"
                      name="name"
                      class="form-control formInput"
                      placeholder="Mobile No"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="email"
                      name="email"
                      class="form-control formInput"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="row formRow">
                  <div class="col">
                    <textarea
                      rows="5"
                      name="message"
                      class="form-control formInput"
                      placeholder="Send Massage"
                    ></textarea>
                  </div>
                </div>
              </div>
              <button class="contact_btn">Send Massage</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Contactus;
