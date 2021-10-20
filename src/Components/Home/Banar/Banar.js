import React from "react";
import useAuth from "../../../Hooks/useAuth";
import "./Banner.css";
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firstImg from "../../../img/(1).jpg";
import secondImg from "../../../img/(2).jpg";
import thirdImg from "../../../img/(3).jpg";
import heroImg from "../../../img/HeroSection.jpg"
const Banar = () => {
  return (
    <div>
      <Container fluid className="border bg-light border-success m-3 p-5 shadow text-white mt-5">
        <Row>
          <Col>
          <h2><span className="text-success">Need Emergency Help?</span></h2>
          <h4 className="fs-3 text-dark">We are always with u , If u need help You should Call us anytime <span className='text-success'>24/7</span> </h4>

          <Button variant="outline-success">Call Us Now</Button>{' '}
          <Button variant="outline-success">See Doctors</Button>{' '}
          
          </Col>
          <Col>
          <img className="w-75 img-fluid" src={heroImg} alt="" />
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Banar;
