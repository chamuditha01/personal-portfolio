import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from 'emailjs-com';
import contactImg from "./Web-development,-programmer-engineering-and-coding-website-on-augmented-reality-interface-screens-on-transparent-background-PNG.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
  
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const userID = 'your_user_id';
  
    const templateParams = {
      to_email: 'heshanchamuditha05@gmail.com',
      firstname: formDetails.firstName,
      lastname: formDetails.lastName,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
    };
  
    console.log('Template Params:', templateParams);
  
    try {
      const result = await  emailjs.send('service_4cqizvz', 'template_utvo1s2', templateParams, 'A0ZPR861WjTOAyAZq')
      setButtonText("Send");
      setFormDetails(formInitialDetails);
  
      if (result.status === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ success: false, message: 'Error sending the message. Please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <img
                  className={`animated ${isVisible ? 'animate__animated animate__rollIn' : 'invisible'}`}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6} style={{zIndex:'1'}}>
            
                <div  style={{zIndex: "2"}}>
                  <h2>Contact me</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" required value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" required value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" required value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" required value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6"  value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button style={{ color: 'black', backgroundColor: 'rgba(2, 186, 168, 0.4)' }}
                          onMouseEnter={(e) => { e.target.style.borderRadius = '50px'; e.target.style.transition = '0.3s ease'; }} // Change background color on hover
                          onMouseLeave={(e) => { e.target.style.borderRadius = '0px'; e.target.style.transition = '0.3s ease'; }} type="submit"><span style={{ color: 'black'}}>{buttonText}</span></button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              
          </Col>
        </Row>
      </Container>
    </section>
  );
};
