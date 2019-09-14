import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Demo = () => (
  <section style={{ backgroundColor: "#4050FF" }}>
    <Container>
      <Row style={{ height: "5em" }}></Row>
      <Row>
        <Col xs={12} lg={1}></Col>
        <Col xs={12} lg={4}>
          <h2 className="title" style={{ color: "#FFF" }}>
            Request a demo
          </h2>
          <p className="text" style={{ color: "#FFF" }}>
            Our special analysts will review the chosen influencer and provide
            an in-depth mothly analysis about them in a gradient system,
            allowing you to learn so much about the person who will be
            representing your brand
          </p>
        </Col>
        <Col xs={12} lg={1}></Col>
        <Col xs={12} lg={4}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Company Name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="email" placeholder="Company Email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Phone Number" />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="float-right"
              style={{
                background: "#000",
                fontSize: "0.8em",
                padding: "1em 2em",
                fontWeight: "bold"
              }}
            >
              REQUEST A DEMO
            </Button>
          </Form>
        </Col>
        <Col xs={12} lg={2}></Col>
      </Row>
      <Row style={{ height: "5em" }}></Row>
    </Container>

    <style>{`
    
    .form-control{
        font-size:0.8em;
        font-weight:bold;
        padding:1.5em 1em;
        text-transform:uppercase;
    }
    
    `}</style>
  </section>
);

export default Demo;
