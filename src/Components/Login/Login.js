import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  // we can use the function - because we export the function from the last page . now we can destructing the value from the function;

  const { signInWithGoogle, signInWithGithub } = useAuth();

  return (
    <div>
      <div>
        <h5 className="text-success mt-3 fs-3">Please Log in </h5>
        <Container>
          <Row>
            <Col>
              <Form className="mx-auto w-75 p-5 text-success border shadow ">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="outline-success" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col className="p-5 text-success border shadow">
              <div>
                <h5>Sign in with Google </h5>

                <Button variant="outline-success" onClick={signInWithGoogle}>
                  Google
                </Button>
              </div>
              <hr />
              <div>
                <h5>Sign in with GitHub </h5>
                <Button variant="outline-success" onClick={signInWithGithub}>
                  GitHub
                </Button>
              </div>
              <hr />
              <div>
                <h5>Create an Account? </h5>
                <Link to="/registration">click here </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
