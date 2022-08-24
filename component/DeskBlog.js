import React,{useState} from "react";
import { Container ,Row,Col,Image } from "react-bootstrap";
import styleblog from "../styles/Ourblog.module.css";
import Blogjson from "../json/ourblog.json";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const DeskBlog = () => {
    const [blogData] = useState(Blogjson);
    return(
        <>
        <div className={styleblog.ourblog_section}>
        <Container>
        <div className="ourblog-title text-center mb-5">
          <h5 className={styleblog.ourblog_title}>Our Blog</h5>
          <AnimationOnScroll animateIn="animate__bounceIn">
          <h4 className={styleblog.ourblog_heading}>
          Every Singel Update From Here
          </h4>
          </AnimationOnScroll>
        </div>
        <Row>

        {blogData.map((item) => (
            <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className={styleblog.ourblog_cont}>
        <Image src={item.ourblogimg} className={styleblog.ourblog_img}/>
        <h5 className={styleblog.ourblog_heading }>{item.ourblogheading}</h5>
        <p className={styleblog.ourblog_prag}>{item.ourdescription}</p>
        <button className={styleblog.ourblog_btn}>{item.oublogbtn}</button>
        </div>
        </AnimationOnScroll>
        </Col>
            ))}
        </Row>
        </Container>
        </div>
        </>
    )

}
export default DeskBlog;