import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Clientjson from "../json/client.json";

const Client = () => {
  const [clientData] = useState(Clientjson);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    // autoplay: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
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
      }
    ]
  };
  return (
    <>
      <div className="client_section">
        <Container>
          <div className="client_title text-center">
            <h5>Clients Feedback</h5>
            <h4 className="text-center ">
              Some <span>Great Words</span> From Our Clients
            </h4>
          </div>
          <Row className="myh3">
            <Slider {...settings}>
              {/* {clientData.map((item) => (
                <>
                <Col xl={12} lg={12} md={12}>
                <div className="client_cont">
                <Image src={item.clientimg} className="clientimg"/>
                  <div className="client_info">
                    <h3>{item.clientheading}</h3>
                    <span>{item.clienttitle}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
                </Col>
                </>
              ))} */}
  
              <Col xl={6} lg={6} md={6}>
              <div className="client_cont">
                <Image src="/profile1.png" />
                <div className="client_info">
                <h3>Justin Septimus</h3>
                <span> CEO,word yt</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
                  laoreet libero dis eget maecenas bibendum. Morbi lacinia eu,
                  etiam volutpat morbi et amet, sagittis adipiscing.{" "}
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <div className="client_cont">
                <Image src="/profile2.png" />
                <div className="client_info">
                <h3>Justin Septimus</h3>
                <span> CEO,word yt</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
                  laoreet libero dis eget maecenas bibendum. Morbi lacinia eu,
                  etiam volutpat morbi et amet, sagittis adipiscing.{" "}
                </p>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <div className="client_cont">
                <Image src="/profile1.png" />
                <div className="client_info">
                <h3>Justin Septimus</h3>
                <span> CEO,word yt</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a
                  laoreet libero dis eget maecenas bibendum. Morbi lacinia eu,
                  etiam volutpat morbi et amet, sagittis adipiscing.{" "}
                </p>
              </div>
            </Col>
            </Slider>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Client;
