import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blogjson from "../json/blog.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Carousel from 'react-bootstrap/Carousel'

const Blog = () => {
  const [blogData] = useState(Blogjson);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 767,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
  };
  
  return (
    <>
      {/* <h1>Blog section </h1> */}
      <div className="blog_section">
        <Container>
          <div className="blog_title text-center">
            <h5>Our Blog</h5>
            <h4 className="text-center ">
              Our Latest <span>Blogs Will Keep </span> <br />
              Everyone Updated
            </h4>
          </div>
          <Row className="myh3">
            <Slider {...settings}>
            <Col xl={6} lg={6} md={6}>
              <div className="blog_slider">
                <div className="blog_cont mt-5">
                  <span> Graphic Design</span>
                  <h2>
                    {" "}
                    35 Stellar Graphic <br /> Design Blogs to Keep You
                    <br /> Educated and Inspired
                  </h2>
                  <Image src="/blogimg1.png" className="blogimg" />
                  <div className="blog_info">
                    <Image src="/blogicon1.png" />
                    <div className="blog_desc">
                      <h3 className="mb-2">Cristofer Westervelt</h3>
                      <span className="blogdate">
                        {" "}
                        January 25, 2021 5 min Read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </Col>

              <Col xl={6} lg={6} md={6}>
              <div className="blog_slider">
                <div className="blog_cont mt-5">
                  <span> Graphic Design</span>
                  <h2>
                    {" "}
                    35 Stellar Graphic <br /> Design Blogs to Keep You
                    <br /> Educated and Inspired
                  </h2>
                  <Image src="/blogimg1.png" className="blogimg" />
                  <div className="blog_info">
                    <Image src="/blogicon1.png" />
                    <div className="blog_desc">
                      <h3 className="mb-2">Cristofer Westervelt</h3>
                      <span className="blogdate">
                        {" "}
                        January 25, 2021 5 min Read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </Col>
              <Col xl={6} lg={6} md={6}>
              <div className="blog_slider">
            
                <div className="blog_cont mt-5">
                  <span> Graphic Design</span>
                  <h2>
                    {" "}
                    35 Stellar Graphic <br /> Design Blogs to Keep You
                    <br /> Educated and Inspired
                  </h2>
                  <Image src="/blogimg1.png" className="blogimg" />
                  <div className="blog_info">
                    <Image src="/blogicon1.png" />
                    <div className="blog_desc">
                      <h3 className="mb-2">Cristofer Westervelt</h3>
                      <span className="blogdate">
                        {" "}
                        January 25, 2021 5 min Read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </Col>
              <Col xl={6} lg={6} md={6}>
              <div className="blog_slider">
                <div className="blog_cont mt-5">
                  <span> Graphic Design</span>
                  <h2>
                    {" "}
                    35 Stellar Graphic <br /> Design Blogs to Keep You
                    <br /> Educated and Inspired
                  </h2>
                  <Image src="/blogimg1.png" className="blogimg" />
                  <div className="blog_info">
                    <Image src="/blogicon1.png" />
                    <div className="blog_desc">
                      <h3 className="mb-2">Cristofer Westervelt</h3>
                      <span className="blogdate">
                        {" "}
                        January 25, 2021 5 min Read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </Col>
            </Slider>
            {/* <Slider {...settings}> */}

            {/* {blogData.map((item) => 
            (
                <Col xl={12} lg={12} md={12} className="blog_slider">
                <div className="blog_cont mt-4">
                  <span>{item.blogtitle}</span>
                  <Col xl={6} lg={6} className="blog_heding">
                  <h2>
                   {item.blogheading}
                  </h2>
                  </Col>
                  <Col xl={6} lg={6} className="blog_img">
                  <Image src={item.blogimg} className="blogimg" />
                  </Col>
                 
                  <div className="blog_info">
                    <Image src={item.blogicon} />
                    <div className="blog_desc">
                      <h3 className="mb-2">{item.blogsubheading}</h3>
                      <span className="blogdate">
                        {item.blogdate}
                      </span>
                    </div>
                  </div>
                </div>
                </Col>
              )
              )}
             */}

            {/* <Col xl={6} lg={6} md={6} className="blog_slider">
                <div className="blog_cont mt-5">
                  <span> Graphic Design</span>
                  <h2>
                    {" "}
                    35 Stellar Graphic <br /> Design Blogs to Keep You
                    <br /> Educated and Inspired
                  </h2>
                  <Image src="/blogimg1.png" className="blogimg" />
                  <div className="blog_info">
                    <Image src="/blogicon1.png" />
                    <div className="blog_desc">
                      <h3 className="mb-2">Cristofer Westervelt</h3>
                      <span className="blogdate">
                        {" "}
                        January 25, 2021 5 min Read
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={6} lg={6} md={6} className="blog_slider">
                <div className="blog_cont mt-5">
                  <span>Managing Director</span>
                  <h2>
                  Ridiculously powerful <br/> 2021 iPad Pro may drop this<br/> month
                  </h2>
                  <Image src="/blogimg2.png" className="blogimg" />
                  <div className="blog_info">
                    <Image src="/blogicon2.png" />
                    <div className="blog_desc">
                      <h3 className="mb-2">Haylie Mango</h3>
                      <span className="blogdate">
                        {" "}
                        January 25, 2021 5 min Read
                      </span>
                    </div>
                  </div>
                </div>
              </Col> */}
            {/* <Col xl={6} lg={6} md={6} className="blog_slider">
                <div className="blog_cont mt-5">
                  <span>Managing Director</span>
                  <h2>
                  Ridiculously powerful <br/> 2021 iPad Pro may drop this<br/> month
                  </h2>
                  <Image src="/blogimg2.png" className="blogimg" />
                  <div className="blog_info">
                    <Image src="/blogicon2.png" />
                    <div className="blog_desc">
                      <h3 className="mb-2">Haylie Mango</h3>
                      <span className="blogdate">
                        {" "}
                        January 25, 2021 5 min Read
                      </span>
                    </div>
                  </div>
                </div>
              </Col> */}
            {/* </Slider> */}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Blog;
