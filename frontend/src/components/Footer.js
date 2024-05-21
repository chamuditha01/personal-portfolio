import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from './1217178_github_icon.png';

export const Footer = () => {
  return (
    <footer className="footer">
      
      <Container>
        
        <Row className="align-items-center">
          <hr></hr>
          <Col size={12} sm={6}>
            <div><h id="ch" class="ch" >CH</h></div>
          
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/chamuditha-heshan-9879b3278"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/chamuditha01"><img src={navIcon3} alt="Icon" /></a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
