import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Registration = () => {
    return (
        <div >

            <Container>
                <Row>
                    <Col>
                        <div ClassName="text-success  mt-5">
                        <h3 >Please Complete your Registration Process </h3>
                        <hr />
                        </div>
                        <Form className="mx-auto w-50 m-5 p-5 shadow border text-success">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>First Name </Form.Label>
                                <Form.Control type="text" placeholder="Enter Your First Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Last Name </Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Email </Form.Label>
                                <Form.Control type="email" placeholder="Enter Your Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <div className="mb-5 text-danger">
            <Link to="/login">Already Have an Account?</Link>
            </div>
        </div>
    );
};

export default Registration;
