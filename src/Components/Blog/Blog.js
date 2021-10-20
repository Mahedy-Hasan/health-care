import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import imgone from "../../../src/img/(1).jpg";
import imgtwo from "../../../src/img/(2).jpg";
import imgthree from "../../../src/img/(3).jpg";
import imgfour from "../../../src/img/(4).jpg";
import imgfive from "../../../src/img/(5).jpg";
import imgsix from "../../../src/img/(6).jpg";
const Blog = () => {
    return (
        <div>
            <Container>
                <h3>Welcome to our Blog Page</h3>
                <Row className='border p-5 m-3'>
                    <Col>
                        <h4>Health is Wealth</h4>
                        <small>Author : Dr David</small>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut eos doloremque temporibus debitis nam molestias aspernatur unde sint! Reiciendis accusamus magni eos quibusdam fugit similique recusandae, error quas esse beatae!</p>
                        <Button variant="outline-success"> read more</Button>
                    </Col>
                    <Col>
                        <img src={imgone} className="img-fluid w-100" alt="" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='border p-5 m-3'>
                    <Col>
                        <img src={imgtwo} className="img-fluid w-100" alt="" />
                    </Col>
                    <Col>
                        <h4>Health is Wealth</h4>
                        <small>Author : Dr Samuel</small>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut eos doloremque temporibus debitis nam molestias aspernatur unde sint! Reiciendis accusamus magni eos quibusdam fugit similique recusandae, error quas esse beatae!</p>
                        <Button variant="outline-success"> read more</Button>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Blog;