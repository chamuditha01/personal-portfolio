import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiArrowRightCircle, FiArrowDownCircle } from "react-icons/fi";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from 'axios';

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import React, { useCallback } from "react";
import img from '../assets/IMG-20231113-WA0002.jpg'


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [persons, setPersons] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const toRotate = [ "A Web Developer", "A Web Designer","A Backend Developer" ];
  const period = 2000;

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    console.log(container);
}, []);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://portfolio-backend-phi-three.vercel.app/getPP'); 
        setPersons(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleButtonClick = () => {
    const link = document.createElement('a');
    link.href = '/CHAMUDITHA%20HESHAN%20RESUME.pdf'; // Relative URL to the PDF file
    link.download = 'CHAMUDITHA HESHAN RESUME.pdf'; // Name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  useEffect(() => {
    if (buttonClicked) {
      setText('');
      setDelta(300 - Math.random() * 100);
    }
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, buttonClicked]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
  <div>
  <div className="particles-container">
            <Particles id="tsparticles" url="/particles.json" init={particlesInit} loaded={particlesLoaded} />
            
        </div>
    <section className="banner" id="home">
      
      <Container>
        <Row className="aligh-items-center">
          
          <Col xs={12} md={6} xl={8} style={{zIndex:'1'}}>
            
              
                <div >
                  <h1>{`I'm Chamuditha Heshan`}<br />
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Backend Developer"]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1> 
                  <p>A dedicated software engineering undergraduate with a passion for problem-solving and coding. Eager to learn and apply theoretical concepts in practical projects. Demonstrates a strong foundation in programming, algorithms, and a commitment to continuous growth in the field.</p>
                  <button
                    style={{
                      padding: '6px',
                      paddingRight: '10px',
                      paddingLeft: '10px',
                      borderRadius: '30px',
                      backgroundColor: buttonClicked ? 'rgba(1, 73, 66, 0.5)' : 'rgba(2, 186, 168, 0.4)',
                      boxShadow: '0 4px 6px rgba(1, 73, 66, 0.5)',
                      transition: 'background-color 0.3s ease-in-out',
                      transition: 'width 0.5s ease-in-out'
                    }}
                    onClick={handleButtonClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    Download CV <FiArrowRightCircle style={{ transition: 'transform 0.5s ease-in-out', transform: isHovered ? 'rotate(90deg)' : 'rotate(0)' }} />
                  </button>
                  
                </div>
              
           
          </Col>
          <Col xs={12} md={6} xl={4} >
            <div className="hexagon-wrapper">
              <div className="hexagon-border">
                <img id="pp" className="hexagon-image" src={img} alt='Profile' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}
