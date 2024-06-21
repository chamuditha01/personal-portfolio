import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./WhatsApp Image 2024-03-13 at 21.24.24_63c82387.jpg";
import img2 from "./IMG-20230115-WA0009.jpg";
import img3 from "../assets/IMG-20231113-WA0002.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import axios from "axios";
import { useState } from "react";

export const Profile = () => {
  const [getskill, setGetskill] = useState([]);
  

  const fetchSkills = async () => {
    try {
      const response = await axios.get('https://portfolio-backend-chi-liart.vercel.app/getskills');
      setGetskill(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);
  return (
    <section className="profile" id="profile">
      <div>
        <h2
          style={{ textAlign: "center", marginTop: "30px", fontSize: "45px" }}
        >
          My Profile
        </h2>

        <div id="fullbody">
          <div id="leftbody" style={{ maxWidth: "600px", margin: "0 auto" }}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn"
                      : "invisible"
                  }
                >
                  <Container>
                    <Row>
                      <Col xs={12} md={8}>
                        {/* Vertically long photo */}
                        <img
                          src={img1}
                          alt="Long Photo"
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                        />
                      </Col>
                      <Col xs={12} md={4}>
                        {/* Two vertically short photos */}
                        <Row>
                          <Col>
                            <img
                              src={img2}
                              alt="Short Photo 1"
                              style={{
                                width: "120%",
                                height: "150px",
                                borderRadius: "10px",
                                objectFit: "cover",
                              }}
                            />
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "32px" }}>
                          <Col>
                            <img
                              src={img3}
                              alt="Short Photo 2"
                              style={{
                                width: "120%",
                                height: "335px",
                                borderRadius: "10px",
                                objectFit: "cover",
                              }}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>{" "}
                </div>
              )}
            </TrackVisibility>
          </div>

          <div
            id="rightbody"
            style={{ textAlign: "justify", width: "80%", marginLeft: "10%" ,zIndex: "1"}}
          >
            <p style={{ textAlign: "justify" }}>
              I’m a 2nd year Undergraduate at NIBM following BSc(Hons)
              Computing. Successfully completed diploma in Software Engineering
              (1st year) with 3.91 GPA. A creative and experienced web
              developer. Possesses a solid foundation in programming languages
              such as Java, c#, and JavaScript. And have ability to adapt to new
              technologies and frameworks rapidly and Strong problem-solving
              skills combined with effective communication and teamwork
              abilities.
            </p>
            <u>
              <h3>Education</h3>
            </u>
            <ul>
              <li>
                <h6>Higher National Diploma In Software Engineering</h6>
                <p style={{ fontSize: "12px", fontWeight: "lighter" }}>
                  Nibm (Reading){" "}
                </p>
              </li>
              <li>
                <h6>Diploma In Software Engineering</h6>
                <p style={{ fontSize: "14px", fontWeight: "lighter" }}>
                  GPA - 3.91
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "lighter",
                    marginTop: "-10px",
                  }}
                >
                  Nibm (2022-2023)
                </p>
              </li>
            </ul>
            <u>
              <h3>Skills</h3>
            </u>
            <div>
              <div>
                <div style={{ display: "flex" }}>
                  {getskill
                    .reduce((chunks, skill, index) => {
                      const chunkIndex = Math.floor(index / 6);
                      if (!chunks[chunkIndex]) {
                        chunks[chunkIndex] = [];
                      }
                      chunks[chunkIndex].push(
                        <div key={index} style={{ marginBottom: "20px" }}>
                          <h6>{skill.skill}</h6>
                          <p
                            style={{
                              fontSize: "12px",
                              fontWeight: "lighter",
                              marginTop: "-12px",
                              fontStyle: "initial",
                            }}
                          >
                            {skill.description}
                          </p>
                        </div>
                      );
                      return chunks;
                    }, [])
                    .map((chunk, index) => (
                      <div key={index} style={{ marginRight: "20px" }}>
                        {chunk}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
