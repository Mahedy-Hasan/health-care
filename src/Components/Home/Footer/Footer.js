import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Container fluid className="bg-success p-5 mt-5 text-white">
                <Row>
                    <h2>Contact-Us</h2>
                    <hr />
                    <Col>
                    <h3>Department</h3>
                    <hr />
                    <h4>Child and Adult Health</h4>
                    <h4>Cardiology</h4>
                    <h4>Gyne and Obs</h4>
                    <h4>Neurology</h4>
                    <h4>Hematology</h4>
                    </Col>
                    <Col>
                    <h3> Contact</h3>
                    <hr />
                    <h4>Email
                    </h4>
                    <p>Healthzone@ac.com</p>
                    <h4>Phone Num</h4>
                    <p>+956 - 455-455</p>
                    <p>+956 - 455-455</p>
                    </Col>
                   
                </Row>
            </Container>
        </div>
    );
};

export default Footer;