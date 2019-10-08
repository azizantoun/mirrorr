import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import insights from "../static/images/insights.png";
import Image from "react-bootstrap/Image";
import AiIcons from "./icons/ai-icon";
import ExclusiveDataIcon from "./icons/exclusive-data";
import OpportunityIcon from "./icons/opportunity-icon";
const Features = () => (
  <section>
    <Container>
      <Row>
        <Col xs={12}>
          <h2 className="title">How does it work:</h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} lg={4}>
          <AiIcons style={{ width: "4em" }} />
          <h4 className="title">AI Powered Platform</h4>
          <p className="borderr text">
            Mirrorr has its own built-in video/image, audio and text recognition
            AI tool which gives a smart and luxurious privilege for the users
            whereas all brands – with no exception – are detected meticulously
            even if not mentioned nor tagged.
          </p>
        </Col>
        <Col xs={12} lg={4}>
          <ExclusiveDataIcon style={{ width: "4em" }} />
          <h4 className="title">Metadata</h4>
          <p className="borderr text">
            Mirrorr is a mass market tool covering public profiles, celebrities,
            mega, macro & micro influencers in addition to local influencers
            along with their daily updates and insights (followers, posts,
            stories…) . Mirrorr’ huge db makes it standing uniquely among other
            tools reach.
          </p>
        </Col>
        <Col xs={12} lg={4}>
          <OpportunityIcon style={{ width: "4em" }} />
          <h4 className="title">Rating formula</h4>
          <p className="borderr text">
            Mirrorr provides exclusive insights & data for all digital media
            market players in terms of campaigns media values across micro and
            macro influencers. Mirrorr shares with users an aligned rate card
            built upon a multi-metrics scale based on research: number of
            followers & engagement.
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
          <h4 className="title">Analytics</h4>
          <p className="borderr text">
            Mirrorr Analytics is all about reports mirroring digital market
            figures and trends: an outstanding full coverage for all needed
            market data directing both influencers and brands towards a
            figure-supported market plan for optimal exposure and ROI.
          </p>
        </Col>
        <Col lg={2}></Col>
      </Row>

      <Row className="mt-5">
        <Col lg={2}></Col>
        <Col lg={4}>
          <h4 className="title">Rate Card</h4>
          <p className="borderr text">
            Mirrorr provides exclusive insights & data for all digital media
            market players in terms of campaigns media values across all
            profiles. Mirrorr is the unique platform that shares with users an
            aligned representative rate card built upon a multi-metrics scale.
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
            margin:2em auto 1em auto;
            text-transform:uppercase;
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
