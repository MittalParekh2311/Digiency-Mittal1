import React, { useState } from "react";
import { Container, Row, Col, Image, NavLink } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Teamjson from "../json/team.json";

const Team = (props) => {
  const [teamData] = useState(Teamjson);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
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
      <Row className="myh3">
        <Slider {...settings}>
        
        {teamData.map((item) => (
          <Col xl={4} lg={4} md={4}>
            <div className="slider_cont">
            <div className="team_social">
            <Image src={item.teamfb} className="fb" />
            <Image src={item.teaminsta} />
            <Image src={item.teamtwitter} />
            <Image src={item.teamskype} />
            </div>
              <Image src={item.teamimg} />
              <div className="team_cont">
                <h2>{item.teamheading}</h2>
                <span>{item.teamtitle}</span>
              </div>
            </div>
          </Col>
        ))} 
        </Slider>
      </Row>
    </>
  );
};
export default Team;
