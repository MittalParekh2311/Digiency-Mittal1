import React,{useState} from "react";
import { Container, Row, Col,Image } from "react-bootstrap";
import servicestyle from "../styles/Service.module.css";
import Servicejson from "../json/service.json";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const DeskOurservice = () => {
    const [serviceData] = useState(Servicejson);
  return (
    <>
      <div className={servicestyle.service_section}>
        <Container>
          <div className="service-title text-center mb-5">
            <h5 className={servicestyle.our_heading}>Our Services</h5>
            <AnimationOnScroll animateIn="animate__bounceIn">
            <h4 className={servicestyle.wedo}>What We Do</h4> 
            </AnimationOnScroll>
          </div>
          <Row>
          {serviceData.map((item) => (
                <>
                <Col xl={4} lg={4} md={4} className={servicestyle.service_main}>
                <AnimationOnScroll animateIn="animate__fadeInUp">
              <div className={servicestyle.service_cont}>
                <div className={servicestyle.service_img}>
                  <Image src={item.serviceimg} />
                  <span className={servicestyle.service_number}>{item.number}</span>
                </div>
                <h3 className={servicestyle.design_heading}>{item.serviceheading}</h3>
                <span className={servicestyle.title }>{item.servicetitle}</span>
                <p className={servicestyle.our_prag}>
                {item.serviceprag}
                </p>
              </div>
              </AnimationOnScroll>
            </Col>
           
          
                </>
              ))} 
              
            {/* <Col xl={4} lg={4} md={4} className={servicestyle.service_main}>
              <div className={servicestyle.service_cont}>
                <div className={servicestyle.service_img}>
                  <Image src="ux-interface.png" />
                  <span className={servicestyle.service_number}>01</span>
                </div>
                <h3 className={servicestyle.design_heading}>UX Design</h3>
                <span className={servicestyle.title }> Mobile App, Website</span>
                <p className={servicestyle.our_prag}>
                  Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
                  Accumsan sed faucibu s faucibus augue. Cras ut.
                </p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}  className={servicestyle.service_main}>
              <div className={servicestyle.service_cont}>
                <div className={servicestyle.service_img}>
                  <Image src="ux-interface.png" />
                  <span className={servicestyle.service_number}>01</span>
                </div>
                <h3 className={servicestyle.design_heading}>UX Design</h3>
                <span className={servicestyle.title }> Mobile App, Website</span>
                <p className={servicestyle.our_prag}>
                  Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
                  Accumsan sed faucibu s faucibus augue. Cras ut.
                </p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}  className={servicestyle.service_main}>
              <div className={servicestyle.service_cont}>
                <div className={servicestyle.service_img}>
                  <Image src="ux-interface.png" />
                  <span className={servicestyle.service_number}>01</span>
                </div>
                <h3 className={servicestyle.design_heading}>UX Design</h3>
                <span className={servicestyle.title }> Mobile App, Website</span>
                <p className={servicestyle.our_prag}>
                  Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
                  Accumsan sed faucibu s faucibus augue. Cras ut.
                </p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}  className={servicestyle.service_main}>
              <div className={servicestyle.service_cont}>
                <div className={servicestyle.service_img}>
                  <Image src="ux-interface.png" />
                  <span className={servicestyle.service_number}>01</span>
                </div>
                <h3 className={servicestyle.design_heading}>UX Design</h3>
                <span className={servicestyle.title }> Mobile App, Website</span>
                <p className={servicestyle.our_prag}>
                  Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
                  Accumsan sed faucibu s faucibus augue. Cras ut.
                </p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} className={servicestyle.service_main}>
              <div className={servicestyle.service_cont}>
                <div className={servicestyle.service_img}>
                  <Image src="ux-interface.png" />
                  <span className={servicestyle.service_number}>01</span>
                </div>
                <h3 className={servicestyle.design_heading}>UX Design</h3>
                <span className={servicestyle.title }> Mobile App, Website</span>
                <p className={servicestyle.our_prag}>
                  Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
                  Accumsan sed faucibu s faucibus augue. Cras ut.
                </p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4} className={servicestyle.service_main}>
              <div className={servicestyle.service_cont}>
                <div className={servicestyle.service_img}>
                  <Image src="ux-interface.png" />
                  <span className={servicestyle.service_number}>01</span>
                </div>
                <h3 className={servicestyle.design_heading}>UX Design</h3>
                <span className={servicestyle.title }> Mobile App, Website</span>
                <p className={servicestyle.our_prag}>
                  Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
                  Accumsan sed faucibu s faucibus augue. Cras ut.
                </p>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default DeskOurservice;
