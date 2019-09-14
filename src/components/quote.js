import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import quote from "../static/images/quote.png";
import quote2 from "../static/images/quote2.png";
import Image from "react-bootstrap/Image";

const Quote = () => (
  <section>
    <Container>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6}>
          <div className="text-center">
            <Image src={quote} fluid style={{ width: "6em" }}></Image>
            <p className="text mt-2 mb-2">
              When we look at the last 6 months, Mirrorr's advocacy solution
              enabled our employees to share 10X more social content, generating
              a 70% increase in our organic social reach.
            </p>
            <small>
              - Daniel Kiaus, Senior manager of Global Digital Marketing at
              Futjitsu
            </small>
            <p>
              <Image
                src={quote2}
                className="mt-2"
                fluid
                style={{ width: "4em" }}
              ></Image>
            </p>
          </div>
        </Col>
        <Col xs={3}></Col>
      </Row>
    </Container>

    <style>{`
    
    
    
    `}</style>
  </section>
);

export default Quote;
