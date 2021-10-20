import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <Row>
          <Badge bg="success"  className="mx-auto w-75 p-5 m-5 round border shadow text-white">
            <Col>
              <h1>HeathZone</h1>
              <p>
                We are Provided a Health Related Service. Which is very
                essential for All..
              </p>
              <hr />
              <h1>Contact us</h1>
              <hr />
              <h3>Address</h3>
              <p>Kandir par, Cumilla , Bangladesh </p>
              <h3>Email</h3>
              <p>Heathzone@ac.bd</p>
              <h5>Phone Number</h5>
              <p>+096-234-3434</p>
            </Col>
          </Badge>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
