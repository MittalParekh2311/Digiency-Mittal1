import React, { useState } from "react";
import { Container, Nav, NavLink, Row } from "react-bootstrap";
import workjson from "../json/work.json";
import Workcard from "./workcard";
import Masonry from 'react-masonry-css'


const Ourwork = () => {
  const [workData, setWorkData] = useState(workjson);

  const filterItem = (categItem) => {
    const updatedItems = workjson.filter((currElem) => {
      return currElem.workType === categItem;
    });
    setWorkData(updatedItems);
  };
  
  const breakpoints = {
    default: 3,
    1199: 3,
    700: 2,
    500: 1
  };
  return (
    <>
      <div className="ourwork_section">
        <Container>
          <div className="ourwork_title text-center">
            <h5>Our Work</h5>
            <h4 className="text-center">
              We Have Some<br/> <span>Designed & Development</span> Projects
            </h4>
          </div>
          <Nav className='casestudy_header mb-5' Nav variant="pills" defaultActiveKey="#home">
                                <Nav.Link href="#home" onClick={() => { setWorkData(workjson) }}>All</Nav.Link>
                                <Nav.Link href="#UX_Design" onClick={() => { filterItem("Graphic Design") }}>Graphic Design</Nav.Link>
                                <Nav.Link href="#Web_Design" onClick={() => filterItem("UI/UX Design")}>UI/UX Design</Nav.Link>
                                <Nav.Link href="#App_Development" onClick={() => filterItem("Web Development")}> Web Development</Nav.Link>
             </Nav>
          <Row>
          <Masonry 
          breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {workData.map((item) => (
              <Workcard data={item} />
            ))}
            </Masonry>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Ourwork;
