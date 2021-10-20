
import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Container } from 'react-bootstrap';
import "./serviceHome.css"

const Serviceshome = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("./servicefakeData.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
        <div>
        <Container>
          <div>
            <h1>Our Specialist</h1>
          </div>
          <div>
            <div className="row">
              {services?.map((service) => (
                <div className="col-md-4">
                  <Card border="success" className="my-2 p-1 shadow  custom-service " style={{ width: "20rem" }}>
                    <Card.Img
                      ClassName="img-thumbnail"
                      variant="top"
                      src={service.img}
                    />
                    <Badge bg="success">
                      <Card.Body>
                        <Card.Title>DR {service.name}</Card.Title>
                        <Card.Text>
                          <p> {service.degree}</p>
                          <p>Specialized On : {service.specialist}</p>
                          <p> {service.description}</p>
                        </Card.Text>
                        <Button variant="outline-light">Details</Button>
                      </Card.Body>
                    </Badge>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

    );
};

export default Serviceshome;