import React from "react";
import { Container } from "react-bootstrap";
import bannerstyale from "../styles/Blogbanner.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const BlogBanner = () => {
  return (
    <>
      <div className={bannerstyale.blogbanner_section}>
        <Container>
        <AnimationOnScroll animateIn="animate__fadeInDown">  
          <div className={bannerstyale.blogbanner_cont}>
            <h1 className={bannerstyale.blog_heading}> Our Blog</h1>
            <span className={bannerstyale.blog_title}>Home - Blog Page </span>
          </div>
          </AnimationOnScroll>
        </Container>
      </div>
    </>
  );
};
export default BlogBanner;
