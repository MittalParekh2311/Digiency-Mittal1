import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
//import start from "../public/images/start.png";
import teststyle from "../styles/Testimonail.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Testimonailjson from "../json/testimonail.json";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const DeskTestimonial = () => {
    const [testData] = useState(Testimonailjson);
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              adaptiveHeight: true,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              adaptiveHeight: true,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true,
            },
          },
        ],
      };
  return (
    <>
      <div className={teststyle.testimonial_section}>
        <div className="test-title text-center mb-5">
          <h5 className={teststyle.our_test}>Our Testimonial</h5>
          <AnimationOnScroll animateIn="animate__bounce">
          <h4 className={teststyle.testimonail_heading}>
            What Our Client Saying
          </h4>
          </AnimationOnScroll>
        </div>
        <Container>
          <Row className={teststyle.myh3}>
          <Slider {...settings}>

          {testData.map((item) => (
            <Col xl={4} lg={4} md={4}>
            <AnimationOnScroll animateIn="animate__fadeInUp"> 
              <div className={teststyle.test_cont }>
                <img src={item.starimg} />
                <p className={teststyle.test_cont_parg }>
                 {item.description}
                </p>
                <div className={teststyle.ourclient_cont}>
                <div className={teststyle.clientimg }>
                <img src={item.imagetest} className={teststyle.ourimg } />
                  <div className={teststyle.ourclient_heading}>
                    <h5 className={teststyle.heading_levin}>{item.headingname}</h5>
                    <span className={teststyle.ceo_title}>{item.testimonailtitle}</span>
                  </div>
                </div>
                  <img src={item.quoteimg} className={teststyle.quoteimg} />
                </div>
              </div>
              </AnimationOnScroll>
            </Col>
            ))} 
            </Slider>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default DeskTestimonial;
