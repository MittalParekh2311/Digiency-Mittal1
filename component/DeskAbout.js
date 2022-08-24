import React from "react";
import { Container , Row ,Col} from "react-bootstrap";
import styleabout from "../styles/About.module.css";
import Image from 'next/image'
import aboutimg from "../public/images/about_img.png";
import right from "../public/images/right.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const DeskAbout = () => {
  return (
    <>
      <div className={styleabout.aboutus_section}>
        <Container>
          <Row>
            <Col
              xl={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              md={{ span: 6, order: 1 }}
              sm={{ span: 12, order: 1 }}
              xs={{ span: 12, order: 1 }}
            >
              <AnimationOnScroll animateIn="animate__fadeIn"> 
              <h6 className={styleabout.about_title}>About Us</h6>
              <h2 className={styleabout.about_heading}>Grow Your Business With<br/> Our Agency</h2> 
              <p className={styleabout.about_prg}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Convallis arcu in tincidunt sed imperdiet etiam fames. Tincidunt
                augue risus mattis eget sem habitant id ultrices augue. Sit
                rhoncus .
              </p>
             <div className={styleabout.about_list}>
             <p className={styleabout.work}>Innovative website design </p>
             <p className={styleabout.work}>UI/UX design with global trends</p>
             <p className={styleabout.work}>Web and email hosting service</p>
             </div>
             </AnimationOnScroll>
            </Col>

            <Col xl={{ span: 6, order: 1 }}  lg={{ span: 6, order: 1 }} md={{ span: 6, order: 1 }}  sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
            <AnimationOnScroll animateIn="animate__bounceInUp"> 
                <Image src={aboutimg} />
                </AnimationOnScroll>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default DeskAbout;
