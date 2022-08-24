import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";


const Sidebar = () => {
  return (
    <>
      <div className="sidebar_section">
       
            <Col xl={4} lg={4} className="">
              <div className="mb-1">
                <InputGroup className="mb-5 search">
                  <FormControl placeholder="Search here..." />
                  <InputGroup.Text className="search_img">
                    <img src="/search.png" alt="search" />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
       
      </div>
    </>
  );
};
export default Sidebar;
