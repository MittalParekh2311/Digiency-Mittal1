import React,{useState} from "react";
import { Container, Row,Col , Nav, Image } from "react-bootstrap";
import casestyle from "../styles/Casestudy.module.css";
import Casestudyjson from "../json/casestudy.json";
import DeskStudy from "./DeskStudy";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const DeskCasestudy = () => {
    const [caseData , setCaseData] = useState(Casestudyjson);
    
    const filterItem = (categItem) => {
        const updatedItems = Casestudyjson.filter((currElem) => {
            return currElem.caseType === categItem;
          });
          setCaseData(updatedItems);
    }
    return(
        <>
        <div className={casestyle.casesstudy_section}>
        <Container>
        <div className="casestudy-title text-center mb-5">
            <h5 className={casestyle.our_case}>Our Case Study</h5>
            <AnimationOnScroll animateIn="animate__bounceIn">
            <h4 className={casestyle.case_heading   }>Our Recent Project</h4> 
             </AnimationOnScroll>
        </div>
        <div className="pragnesh">
          <Nav className={casestyle.casestudy_header} Nav variant="pills" defaultActiveKey="#home">
            <Nav.Link href="#home" onClick={() => { setCaseData(Casestudyjson) }} className={casestyle.studylink}>All</Nav.Link>
            <Nav.Link href="#Web_Design" onClick={() => filterItem("UI/UX Design")} className={casestyle.studylink}>UI/UX Design</Nav.Link>
            <Nav.Link href="#Web Design" onClick={() => filterItem("Web Design")} className={casestyle.studylink}>Web Design</Nav.Link>
            <Nav.Link href="#App_Development" onClick={() => filterItem("App Development")} className={casestyle.studylink}>App Development</Nav.Link>
            <Nav.Link href="#Game Design" onClick={() => filterItem("Game Design")} className={casestyle.studylink}>Game Design</Nav.Link>
            <Nav.Link href="#UX_Design" onClick={() => { filterItem("Graphic Design")}} className={casestyle.studylink}>Graphic Design</Nav.Link>
           </Nav>
        </div>
            <Row className={casestyle.gutter}>
            {
                        caseData.map((item) => (<DeskStudy data={item} />))
            }
            </Row>
        </Container>

        </div>
        </>
    )

}
export default DeskCasestudy;