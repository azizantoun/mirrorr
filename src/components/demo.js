import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Demo extends React.Component {
  render() {
    return (
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
                Our special analysts will review the chosen influencer and
                provide an in-depth mothly analysis about them in a gradient
                system, allowing you to learn so much about the person who will
                be representing your brand
              </p>
            </Col>
            <Col xs={12} lg={1}></Col>
            <Col xs={12} lg={4}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Company Name"
                    onChange={e => this.setState({ company: e.target.value })}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="email"
                    placeholder="Company Email"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    onChange={e => this.setState({ phone: e.target.value })}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="float-right"
                  onClick={e => this.handleFormSubmit(e)}
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
  }
  constructor(props) {
    super(props);

    this.state = {
      company: "",
      email: "",
      phone: ""
    };
  }

  handleFormSubmit = e => {
    console.log(this.state);
    const API_PATH = "https://mailthis.to/admin@mirrorr.com";
    e.preventDefault();
    axios({
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: {
        name: "test",
        email: "test@test.com"
      }
    })
      .then(result => {
        console.log(result);
        this.state.setState("result", result);
        this.setState({
          mailSent: result.data.sent
        });
      })
      .catch(error => this.setState({ error: error.message }));
  };
}
export default Demo;
