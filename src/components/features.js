import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Analytics from "./analytics-icon";
import insights from "../static/images/insights.png";
import Image from "react-bootstrap/Image";

const Features = () => (
  <section>
    <Container>
      <Row>
        <Col xs={12}>
          <h2 className="title">What makes Mirrorr unique?</h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} lg={4}>
          <Analytics style={{ width: "5em" }} />
          <h4 className="title">AI Powered Platform</h4>
          <p className="borderr text">
            All brands are detected meticulously by the build-in video, voice
            and image recognition - even if not mentionned or tagged
          </p>
        </Col>
        <Col xs={12} lg={4}>
          <Analytics style={{ width: "5em" }} />
          <h4 className="title">Exclusive Data</h4>
          <p className="borderr text">
            Mirrorr provides exclusive data for all digital media market players
            in terms of campaign media values.
          </p>
        </Col>
        <Col xs={12} lg={4}>
          <Analytics style={{ width: "5em" }} />
          <h4 className="title">The Real Opportunities</h4>
          <p className="borderr text">
            Brands and agencies receive alerts for potential exposure they have
            in the influener posts.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg={2}></Col>
        <Col lg={4}>
          <h4 className="title">Insights</h4>
          <p className="borderr text">
            All brands are detected meticulously by the build-in video, voice
            and image recognition - even if not mentionned or tagged
          </p>
        </Col>
        <Col lg={4}>
          <Image src={insights} fluid className="feature-image right"></Image>
        </Col>
        <Col lg={2}></Col>
      </Row>

      <Row className="mt-5">
        <Col lg={2}></Col>
        <Col lg={4}>
          <Image src={insights} fluid className="feature-image left"></Image>
        </Col>
        <Col lg={4}>
          <h4 className="title">Insights</h4>
          <p className="borderr text">
            All brands are detected meticulously by the build-in video, voice
            and image recognition - even if not mentionned or tagged
          </p>
        </Col>
        <Col lg={2}></Col>
      </Row>

      <Row className="mt-5">
        <Col lg={2}></Col>
        <Col lg={4}>
          <h4 className="title">Insights</h4>
          <p className="borderr text">
            All brands are detected meticulously by the build-in video, voice
            and image recognition - even if not mentionned or tagged
          </p>
        </Col>
        <Col lg={4}>
          <Image src={insights} fluid className="feature-image right"></Image>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </Container>
    <style>{`
        h4.title{
            font-size:1em;
            margin:1em auto;
        }
        p.text{
            font-size:0.8em;
        }

        .feature-image{
            top:-50%;
            width:20em;
        }
        .feature-image.right{
            right:-10em;
        }
        .feature-image.left{
            left:-10em;
        }
    
    
    `}</style>
  </section>
);

export default Features;
