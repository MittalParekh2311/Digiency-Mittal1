import React, { useState } from "react";
import { Container, Row,Col ,Image } from "react-bootstrap";
import Brandjson from "../json/brand.json";


const Brand = (props) => {
   const [brandData] = useState(Brandjson);
    return(
        <>
        <div className="brand_section">
        <Container>
            <Row>
                {/* <h1>Brand Images</h1> */}
                {brandData.map((item) => (
              <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                <div className="brand_img">
                     <a href="#"> <Image src={item.brandimage}/></a>
                </div>
                </Col>
            ))}
            </Row>
        </Container>
        </div>
        </>
    )

}
export default Brand;