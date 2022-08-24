import React from "react";
import { Col, Image } from "react-bootstrap";

const Workcard = (props) => {
  const { workimg, worksearch, worktitle, workdesign } = props.data;
  
  return (
    <>
      <Col xl={4} lg={4} md={4} className="workcard_img">
        <Image src={workimg} className="wimg" />
        <div className="overlay">
          <Image src={worksearch} />
          <div className="hover_title">
            <h2>{worktitle}</h2>
            <span>{workdesign}</span>
          </div>
        </div>
      </Col>
    </>
  );
};
export default Workcard;
