import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiArrowRightCircle, FiArrowDownCircle } from "react-icons/fi";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from 'axios';

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



  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://portfolio-backend-d6qzdd30h-chamuditha01s-projects.vercel.app/getPP'); 
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
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
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
                      backgroundColor: buttonClicked ? '#010B49' : '#320167',
                      boxShadow: '0 4px 6px rgba(0, 0, 157, 0.3)',
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
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <TrackVisibility>
              <ul>
                {persons.map(person => (
                  <img key={person._id} style={{ borderRadius: '50%',border:'2px solid #320167' }} src={`data:image/jpeg;base64,${person.image}`} alt={person.name} />
                ))}
              </ul>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
