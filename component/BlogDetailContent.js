import React, { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import contentstyle from "../styles/Blogcontent.module.css";
import bdetailstyle from "../styles/BlogDetail.module.css";
import Postjson from "../json/post.json";
import Categoriejson from "../json/categorie.json";
import Tagjson from "../json/tag.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const BlogDetailContent = () => {
  const [postData] = useState(Postjson);
  const [categorieData] = useState(Categoriejson);
  const [tagData] = useState(Tagjson);
  return (
    <>
      <div className={contentstyle.blogcontent_section}>
        <Container>
          <Row>
            <Col xl={8} lg={8} md={6}>
              <Col
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className={contentstyle.cotent_part}
              >
                <div className="">
                  <img
                    src="/contentimg1.png"
                    className={bdetailstyle.blogdetail_img}
                  />
                </div>
                <AnimationOnScroll animateIn=" animate__fadeInLeft">
                  <Row>
                    <div className={contentstyle.date_author_comment}>
                      <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                        <p className={contentstyle.cont_date}>
                          {" "}
                          <img
                            src="/Mask.png"
                            className={contentstyle.conte_icon}
                          />{" "}
                          January 25, 2021
                        </p>
                      </Col>
                      <Col xl={4} lg={6} md={6} sm={6} xs={6}>
                        <p className={contentstyle.cont_date}>
                          <img
                            src="/user.png"
                            className={contentstyle.conte_icon}
                          />{" "}
                          Cristofer Westervelt
                        </p>
                      </Col>
                      <Col xl={4}>
                        <p className={contentstyle.cont_date}>
                          {" "}
                          <img
                            src="/comment.png"
                            className={contentstyle.conte_icon}
                          />{" "}
                          10 Comment
                        </p>
                      </Col>
                    </div>
                  </Row>
                  <p className={contentstyle.cont_prag}>
                    {" "}
                    <span className={bdetailstyle.para_t}>T</span>he Memphis
                    Design movement is one of unlikeliest success stories in the
                    history of design. Like so many artistic reactions, it began
                    as an outlet for its creators, a way to rail against and
                    confound elite sensibilities. The result was a style that
                    was revolutionary in its time and whose spirit is a
                    continual source of inspiration to this day.
                  </p>
                  <p className={contentstyle.cont_prag}>
                    As popular and influential as Memphis Design has been over
                    the years, it can sometimes get a bad rap. It is a loud,
                    colorful style that is hard to separate from its era. And
                    when implemented without care, it can make some design
                    projects feel antiquated. On the other hand, a good designer
                    can turn these sins into virtues: obnoxious retro becoming
                    lively nostalgia.
                  </p>
                  <p className={contentstyle.cont_prag}>
                    Memphis Design is a 1980s design aesthetic characterized by
                    scattered, brightly colored shapes and lines. It typically
                    combines circles and triangles with black-and-white graphic
                    patterns such as polka dots and squiggly lines.
                  </p>
                </AnimationOnScroll>
                <Col
                  xl={12}
                  lg={12}
                  md={12}
                  className={contentstyle.cotent_part}
                >
                <AnimationOnScroll animateIn=" animate__fadeInUp"> 
                  <div className={bdetailstyle.card_paint}>
                    <img
                      src="/paint.png"
                      className={bdetailstyle.blogdetail_img}
                    />
                  </div>
                  </AnimationOnScroll>
                  <AnimationOnScroll animateIn=" animate__fadeInLeft"> 
                  <p className={contentstyle.cont_prag}>
                    Imagine you’re at a party, and you’re bored. You’ve been
                    bored for a while—years, it feels like. You wonder how a
                    party, something that is supposed to be fun, can feel like
                    it’s draining the life out of your very soul. As you look
                    around the yawning faces of the guests, you realize it’s
                    going to take drastic measures to salvage any excitement out
                    of this long night. So you sneak a desperate gulp of your
                    drink, slip on your tinted sunglasses and leap atop of the
                    sofa. You’ve sacrificed yourself to karaoke.
                  </p>
                  </AnimationOnScroll>
                </Col>
                <Col xl={12} lg={12} md={12} sm={12} xs={12} className={bdetailstyle.blogdetail_pancil}>
                  <Col xl={6} lg={6} md={6} sm={12} xs={12}  >
                  <AnimationOnScroll animateIn=" animate__bounce"> 
                    <div className={bdetailstyle.card_paint}>
                      <img
                        src="/pancile.png"
                        className={bdetailstyle.blogdetail_img}
                      />
                    </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn=" animate__fadeInDown"> 
                    <p className={bdetailstyle.blogdetail_parg}>
                      The birth of Memphis Design was a lot like this, starting
                      with a gathering of architects and industrial designers in
                      Milan, Italy in 1981. But it wasn’t the party that bored
                      the guests. It was the general state of design—how
                      creativity had stagnated to become corporate and uniform.
                    </p>
                    </AnimationOnScroll>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={12} xs={12} >
                  <AnimationOnScroll animateIn=" animate__bounce"> 
                    <div className={bdetailstyle.card_paint}>
                      <img
                        src="/grap.png"
                        className={bdetailstyle.blogdetail_img}
                      />
                    </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn=" animate__fadeInDown"> 
                    <p className={bdetailstyle.blogdetail_parg}>
                      The birth of Memphis Design was a lot like this, starting
                      with a gathering of architects and industrial designers in
                      Milan, Italy in 1981. But it wasn’t the party that bored
                      the guests. It was the general state of design—how
                      creativity had stagnated to become corporate and uniform.
                    </p>
                    </AnimationOnScroll>
                  </Col>
                </Col>
                <AnimationOnScroll animateIn=" animate__fadeInUp"> 
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <div className={bdetailstyle.user_info}>
                    <Col xl={2} lg={2} md={4} sm={4} xs={4}>
                      <img src="/blogicon1.png" />
                    </Col>
                    <Col xl={10} lg={10} md={8} sm={8} xs={8}>
                      <h5 className={bdetailstyle.user_heading}>
                        Cristofer Westervelt
                      </h5>
                      <span className={bdetailstyle.user_title}>
                        Graphic Design
                      </span>
                      <p className={bdetailstyle.user_prag}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Tempor porttitor est amet, volutpat augue a sodales nec,
                        vitae. Pulvinar vitae eu sed elit vitae.
                      </p>
                    </Col>
                  </div>
                </Col>
                </AnimationOnScroll>
              </Col>
            </Col>

            {/* Search bar start */}
            <Col xl={4} lg={4} md={6}>
              <AnimationOnScroll animateIn=" animate__bounce">
                <div className={contentstyle.searchinput}>
                  <InputGroup className={contentstyle.search}>
                    <FormControl
                      placeholder="Search here..."
                      className={contentstyle.serchform}
                    />
                    <InputGroup.Text className={contentstyle.search_img}>
                      <img src="/search_icon.png" alt="search" />
                    </InputGroup.Text>
                  </InputGroup>
                </div>
              </AnimationOnScroll>
              {/* Search bar end */}

              {/* Latest Post start  */}
              <AnimationOnScroll animateIn=" animate__fadeInDown">
                <div className={contentstyle.post_part}>
                  <h1 className={contentstyle.lates_post}>Letest Post </h1>
                  {postData.map((item) => (
                    <>
                      <div className={contentstyle.postimg_cont}>
                        <Col
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          xs={3}
                          className={contentstyle.postimg}
                        >
                          <img
                            src={item.postimg}
                            className={contentstyle.post_icon}
                          />
                        </Col>
                        <Col
                          xl={9}
                          lg={9}
                          md={9}
                          sm={9}
                          xs={9}
                          className={contentstyle.post_heading}
                        >
                          <h4 className={contentstyle.post_title}>
                            {item.postheading}
                          </h4>
                        </Col>
                      </div>
                    </>
                  ))}
                </div>
              </AnimationOnScroll>
              {/* Latest Post end  */}

              {/* Categories start  */}
              <AnimationOnScroll animateIn=" animate__fadeInLeft">
                <div className={contentstyle.categories_part}>
                  <h4 className={contentstyle.categorie_heading}>
                    Categories{" "}
                  </h4>
                  {categorieData.map((item) => (
                    <>
                      <div className={contentstyle.categorie_cont}>
                        <h4 className={contentstyle.cate_heading}>
                          {item.categorietitle}
                        </h4>
                        <span className={contentstyle.cate_number}>
                          {" "}
                          {item.categorienumber}
                        </span>
                      </div>
                    </>
                  ))}
                </div>
              </AnimationOnScroll>
              {/* Categories end  */}

              {/* Tag start  */}
              <AnimationOnScroll animateIn=" animate__fadeInUp">
                <div className={contentstyle.tag_part}>
                  <h4 className={contentstyle.tag_heading}> Tags</h4>
                  <Row>
                    {tagData.map((item) => (
                      <>
                        {/* <div className="tag_cont"> */}
                        <Col
                          xl={6}
                          lg={12}
                          md={6}
                          sm={6}
                          xs={6}
                          className="d-flex"
                        >
                          <h6 className={contentstyle.tag_title}>
                            {item.tagtitle}
                          </h6>
                        </Col>
                        {/* </div> */}
                      </>
                    ))}
                  </Row>
                </div>
              </AnimationOnScroll>
              {/* Tag start  */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default BlogDetailContent;
