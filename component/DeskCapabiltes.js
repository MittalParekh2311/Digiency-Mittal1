import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import pana from "../public/images/pana.png";
import styleca from "../styles/Capabilites.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const DeskCapabilites = () => {
  return (
    <>
      <div className={styleca.capabilites_section}>
        <Container>
          <Row>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
            >
             <AnimationOnScroll animateIn="animate__fadeInDown">
              <h6 className={styleca.our_capability}>Our Capabilities</h6>
              <h2 className={styleca.capability_heading}>
                Forward Thinking Team Of <br />
                Designers & Developers
              </h2>
              <p className={styleca.capa_parg}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                ut nisi, amet rhoncus volutpat neque. Ipsum in aliquam eget
                vitae purus felis eget massa felis. Eu mattis in malesuada
                facilisi proin vel.
              </p>

              <Row>
                <Col
                  xl={3}
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  className={styleca.card_main}
                >
                  <div className={styleca.card_per}>
                    <h4 className={styleca.percent}>80%</h4>
                    <p className={styleca.card_title}>Softwer Development</p>
                  </div>
                </Col>
                <Col
                  xl={3}
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  className={styleca.card_main}
                >
                  <div className={styleca.card_per}>
                    <h4 className={styleca.percent}>90%</h4>
                    <p className={styleca.card_title}>Graphic Design</p>
                  </div>
                </Col>
                <Col
                  xl={3}
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  className={styleca.card_main}
                >
                  <div className={styleca.card_per}>
                    <h4 className={styleca.percent}>85%</h4>
                    <p className={styleca.card_title}> Game Deisgn</p>
                  </div>
                </Col>
                <Col
                  xl={3}
                  lg={3}
                  md={3}
                  sm={12}
                  xs={12}
                  className={styleca.card_main}
                >
                  <div className={styleca.card_per}>
                    <h4 className={styleca.percent}>100%</h4>
                    <p className={styleca.card_title}> Web Development</p>
                  </div>
                </Col>
              </Row>
              </AnimationOnScroll>
            </Col>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
              className={styleca.capab_img}
            >
              <AnimationOnScroll animateIn="animate__fadeInUp"> 
              <Image src={pana} />
              </AnimationOnScroll>
            </Col>
          </Row>
          <div className={styleca.our_results}>
            <Row>
              <Col className={styleca.capa_orange} xl={3} lg={3} md={3} sm={6} xs={6}>
              <AnimationOnScroll animateIn="animate__fadeInLeft"> 
                <div>
                  <img src="man.png" />
                  <h4 className={styleca.count_number}>120</h4>
                  <p className={styleca.count_title}>Top Experts</p>
                </div>
                </AnimationOnScroll>
              </Col>
              <Col className={styleca.capa_orange} xl={3} lg={3} md={3} sm={6} xs={6}>
              <AnimationOnScroll animateIn="animate__fadeInLeft"> 
                <div>
                  <img src="man.png" />
                  <h4 className={styleca.count_number}>500</h4>
                  <p className={styleca.count_title}>Strategies</p>
                </div>
                </AnimationOnScroll>
              </Col>
              <Col className={styleca.capa_orange} xl={3} lg={3} md={3} sm={6} xs={6}>
              <AnimationOnScroll animateIn="animate__fadeInRight"> 
                <div>
                  <img src="man.png" />
                  <h4 className={styleca.count_number}>347</h4>
                  <p className={styleca.count_title}>Great Results</p>
                </div>
                </AnimationOnScroll>
              </Col>
              <Col className={styleca.capa_orange} xl={3} lg={3} md={3} sm={6} xs={6}>
              <AnimationOnScroll animateIn="animate__fadeInRight"> 
                <div>
                  <img src="man.png" />
                  <h4 className={styleca.count_number}>120</h4>
                  <p className={styleca.count_title}>Hight Rankings</p>
                </div>
                </AnimationOnScroll>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};
export default DeskCapabilites;
