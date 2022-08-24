import React, { useState } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import contentstyle from "../styles/Blogcontent.module.css";
import Blogcontentjson from "../json/blogcontent.json";
import Sidebar from "../component/Sidebar";
import Postjson from "../json/post.json";
import Categoriejson from "../json/categorie.json";
import Tagjson from "../json/tag.json";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const BlogContent = () => {
  const [contentData] = useState(Blogcontentjson);
  const [postData] = useState(Postjson);
  const [categorieData] = useState(Categoriejson);
  const [tagData] = useState(Tagjson);

  return (
    <>
      <div className={contentstyle.blogcontent_section}>
        <Container>
          <Row>
            <Col xl={8} lg={8} md={6}>
              {contentData.map((item) => (
                <>
                  <Col
                    xl={12}
                    lg={12}
                    md={12}
                    className={contentstyle.cotent_part}
                  >
                   <AnimationOnScroll animateIn="animate__fadeIn">  
                    <div className={contentstyle.cont_img}>
                      <img src={item.ourblogimg} />
                    </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn=" animate__fadeInLeft"> 
                    <Row> 
                    <div className={contentstyle.date_author_comment}>
                    <Col xl={4} lg={6} md={6} sm={6} xs={6} > 
                    <p className={contentstyle.cont_date}> <img src={item.ourtimeicon} className={contentstyle.conte_icon}/>{item.ourdate}</p>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={6} xs={6}> 
                      <p className={contentstyle.cont_date}><img src={item.ourusericon} className={contentstyle.conte_icon}/> {item.ourtitle}</p>
                      </Col>
                      <Col xl={4}> 
                      <p className={contentstyle.cont_date}> <img src={item.ourcomment} className={contentstyle.conte_icon}/>{item.comment}</p>
                      </Col>
                    </div>
                    </Row>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn=" animate__fadeInUp">  
                    <div className={contentstyle.ourblog_description}>
                      <h1 className={contentstyle.cont_heading}>
                        {item.ourblogheading}
                      </h1>
                      <p className={contentstyle.cont_prag}>
                        {item.ourdescription}
                      </p>
                      <button className={contentstyle.readmore_btn}>
                        {item.oublogbtn}
                      </button>
                    </div>
                    </AnimationOnScroll>
                  </Col>
                </>
              ))}
             
              <AnimationOnScroll animateIn=" animate__bounce">  
              <div className={contentstyle.pagination}>
              <Col xl={12} className="d-flex justify-content-center">
              <p className={contentstyle.pagination_number}> 01</p>
              <p className={contentstyle.pagination_number}> 02</p>
              <p className={contentstyle.pagination_number}> 03</p>
              <p className={contentstyle.pagination_number}> 04</p>
              <p className={contentstyle.pagination_number}> 05</p>
              </Col>
              </div>
              </AnimationOnScroll>
            </Col>

            {/* Search bar start */}
            <Col xl={4} lg={4} md={6}>
            <AnimationOnScroll animateIn=" animate__bounce"> 
              <div className={contentstyle.searchinput}>
                <InputGroup className={contentstyle.search}>
                  <FormControl placeholder="Search here..." className={contentstyle.serchform }/>
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
                      <Col xl={3} lg={3} md={3} sm={3} xs={3} className={contentstyle.postimg}>
                        <img
                          src={item.postimg}
                          className={contentstyle.post_icon}
                        />
                      </Col>
                      <Col xl={9} lg={9} md={9} sm={9} xs={9} className={contentstyle.post_heading}>
                        <h4 className={contentstyle.post_title}>{item.postheading}</h4>
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
                <h4 className={contentstyle.categorie_heading}>Categories </h4>
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
                  <Col xl={6} lg={12} md={6} sm={6} xs={6} className="d-flex">
                  <h6 className={contentstyle.tag_title}>{item.tagtitle}</h6>
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
export default BlogContent;
