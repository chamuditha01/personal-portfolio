import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "./Screenshot 2023-12-25 144540.png";
import projImg2 from "./Screenshot 2023-09-10 135851.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import img1 from './Screenshot 2024-01-12 125834.png'
import img2 from './Screenshot 2024-01-12 130403.png'
import imgmern1 from './Screenshot 2024-04-06 210509.png'
import projimg4 from './Screenshot 2024-02-25 185957.png'
import img3 from './Screenshot 2024-04-10 135826.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Pet Care Management System",
      
      imgUrl: projImg1,
      link: "https://github.com/chamuditha01/Finalp"
    },
    {
      title: "Pet store",
      
      imgUrl: projImg2,
      link:"https://github.com/chamuditha01/wad-cw"
    },
    {
      title: "-Product Display System - E-commerce Website",
      
      imgUrl: projimg4,
      link:"https://hanaftraders.com"
    },
    {
      title: "E-commerce Web Application - MERN stack",
      
      imgUrl: imgmern1,
      link:"https://github.com/chamuditha01/E-commerce-Plaftorm.git"
    },
    {
      title: "E-commerce Web Application Admin Dashboard - MERN stack",
      
      imgUrl: img3,
      link:"https://github.com/chamuditha01/E-commerce-Admin-Dashboard.git"
    },
  ];
  const oprojects = [
    {
      title: "Car Rental System - c#",
      
      imgUrl: img1,
      link:"https://github.com/chamuditha01/DesktopApplication1"
    },
    {
      title: "Car Rental System - Java",
      
      imgUrl: img2,
      link:"https://github.com/chamuditha01/EntepriseApp1"
    },
   
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated ": ""}>
                <h2 style={{marginBottom:'30px'}}>Projects & Certifications</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Link eventKey="first">Web</Nav.Link>
                      <Nav.Link eventKey="second">Other</Nav.Link>
                      <Nav.Link eventKey="third">Certifications</Nav.Link>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          oprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                       </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                      <div style={{textAlign:'left',color:'white'}}>
                        <p style={{textAlign:'left'}}><a style={{textDecoration:'none',color:'white'}} target="blank" href="https://badgr.com/public/assertions/doI9dfR0Sk-_hIYJW1bNPw?identity__email=heshanchamuditha05@gmail.com">1. Postman API fundamentals student expert</a> - Postman</p>
                        <p style={{marginTop:'-20px',textAlign:'left'}}><a style={{textDecoration:'none',color:'white'}} target="blank" href="https://www.hackerrank.com/certificates/0ce09b50fa5b">2. Problem Solving (Basic) certificate</a> - HackerRank</p>
                        <p style={{marginTop:'-20px',textAlign:'left'}}><a style={{textDecoration:'none',color:'white'}} target="blank" href="https://www.credly.com/badges/d80f16e1-a053-4057-8b3e-c711fcb901b1">3. Cisco Introduction to Cyber Security</a> - Cisco Networking Acedamy</p>
                        <p style={{marginTop:'-20px',textAlign:'left'}}><a style={{textDecoration:'none',color:'white'}} target="blank" href="https://freecodecamp.org/certification/fcc8c188344-4332-49b8-ac85-dc268b1c94a3/responsive-web-design">4. Responsive Web Design</a> - FreeCodeCamp</p>
                        <p style={{marginTop:'-20px',textAlign:'left'}}><a style={{textDecoration:'none',color:'white'}} target="blank" href="https://www.cloudskillsboost.google/public_profiles/9daa2230-6183-4bb8-a9d9-d581bbe2bddc/badges/9011866?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share">5. Introduction to Generative Ai</a> - Google Cloud</p>
                        <p style={{marginTop:'-20px',textAlign:'left'}}><a style={{textDecoration:'none',color:'white'}} target="blank" href="https://www.sololearn.com/en/certificates/CC-YIJLF3ZV">6. Python Developer</a> - Sololearn</p>
                      </div>
                      
                      </Row>
                       </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
