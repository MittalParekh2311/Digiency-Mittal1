import React from "react";
import commentstyle from "../styles/BlogComment.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import {
  Container,
  Row,
  Col,
  Image,
  NavDropdown,
  FloatingLabel,
  NavLink,
} from "react-bootstrap";
const Blogcomment = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col xl={8} lg={8} md={8} sm={12} xs={12}>
              <div className="blogcomment_section">
              <AnimationOnScroll animateIn=" animate__fadeInLeft">
                <div className={commentstyle.comment_link}>
                  <NavLink className="">3 Comments</NavLink>
                  <NavLink className="">Disqus</NavLink>
                  <NavLink className="">Gwen</NavLink>
                </div>
                <div className={commentstyle.comment_sortby}>
                  <div className="">
                    <Image src="/heart.png" className="heartimg" />
                    <h5 className={commentstyle.comment_rec}>Recommend</h5>
                  </div>
                  <NavDropdown title="Sort By Best" id="basic-nav-dropdown" className={commentstyle.sortby}>
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                </AnimationOnScroll>
                <>
                <AnimationOnScroll animateIn=" animate__bounce">
                  <FloatingLabel controlId="floatingTextarea2" label="">
                    <textarea
                      rows="2"
                      name="message"
                      className={commentstyle.textareabox}
                      placeholder=""
                    ></textarea>
                  </FloatingLabel>
                  </AnimationOnScroll>
                </>
                <AnimationOnScroll animateIn=" animate__fadeInUp">
                <div className={commentstyle.comment_part}>
                <div className={commentstyle.users_comment}>
                  <div className="user_img">
                    <Image src="/commentimg1.png" className={commentstyle.com_img} />
                    </div>
                    <div className={commentstyle.user_description}>
                    <h3 className={commentstyle.comment_heading}>Ruben Vetrovs</h3>
                    <p className={commentstyle.comment_prag}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel
                      ultrices metus ut sed. Sit nunc, in nibh nisi, viverra
                      quis sociis malesuada.
                    </p>
                    </div>           
                </div>
                
                <div className={commentstyle.user_comment1}>
                <div className="user_img">
                    <Image src="/commentimg2.png" className={commentstyle.com_img} />
                    </div>
                    <div className={commentstyle.user_description}>
                    <h3 className={commentstyle.user_heading}>Alfonso Philips</h3>
                    <p className={commentstyle.comment_prag}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel
                      ultrices metus ut sed. Sit nunc, in nibh nisi, viverra
                      quis sociis malesuada.
                    </p>
                    </div>  
                    </div>
                    <div className={commentstyle.user_comment1}>
                <div className="user_img">
                    <Image src="/commentimg2.png" className={commentstyle.com_img} />
                    </div>
                    <div className={commentstyle.user_description}>
                    <h3 className={commentstyle.user_heading}>Alfonso Philips</h3>
                    <p className={commentstyle.comment_prag}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ullamcorper accumsan malesuada sed feugiat. Rhoncus vel
                      ultrices metus ut sed. Sit nunc, in nibh nisi, viverra
                      quis sociis malesuada.
                    </p>
                    </div>  
                    </div>
                    </div>
                    </AnimationOnScroll>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Blogcomment;
