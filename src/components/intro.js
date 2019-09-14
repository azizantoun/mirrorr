import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import dashboard from "../static/images/dashboard.png";
import partners from "../static/images/partners.png";
const Intro = () => (
  <section>
    <Container>
      <Row style={{ position: "relative" }}>
        <Col xs={12} lg={6} xl={4}>
          <h1 className="title borderr">
            Meet the first social media brand & influencer monitoring and
            analytical tool
          </h1>
          <div className="borderr-pad ">
            <p className="text">
              Mirrorr is a 3D coverage tool that gives users in-depth insight
              about your potential influencers on social media
            </p>
            <div className="d-flex">
              <a href="test" className="button">
                Book a demo
              </a>
              <a href="test" className="button white">
                Watch video
              </a>
            </div>
          </div>
        </Col>

        <div className="mirrorr-circle"></div>
      </Row>
      <Row className="mt-5">
        <Col lg={12}>
          <Image src={dashboard} fluid />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg={12}>
          <p className="text-center text">
            <small>
              Empowering 10,000+ marketers with data <br /> form over 15 million
              social profiles
            </small>
          </p>
          <center>
            <Image src={partners} fluid style={{ maxWidth: "40em" }} />
          </center>
        </Col>
      </Row>
    </Container>

    <style>{`
      .relative {
        position: relative;
      }
      .button {
        margin: 0.2em;
      }
      .mirrorr-circle {
        width: 30em;
        height: 30em;
        position: absolute;
        border-radius: 50%;
        right: 0;

        z-index: -1;
        background: rgb(58, 72, 230);
        background: linear-gradient(
          180deg,
          rgba(58, 72, 230, 1) 0%,
          rgba(27, 34, 109, 1) 100%
        );
      }
      @media (min-width: 992px) {
        .mirrorr-circle {
          bottom: -180%;
        }
      }
      @media (max-width: 1200px) {
        .mirrorr-circle {
          width: 30em;
          height: 30em;
          bottom: -200%;
        }
      }
      @media (max-width: 996px) {
        .mirrorr-circle {
          width: 20em;
          height: 20em;
          bottom: -200%;
        }
      }
    `}</style>
  </section>
);

export default Intro;
