import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Analytics from "./analytics-icon";
const Meet = () => (
  <section>
    <Container>
      <Row className="mt-5">
        <Col xs={12} style={{ position: "relative" }}>
          <div className="feature">
            <div>
              <Analytics style={{ width: "4em" }} />
              <p className="text">
                Know everything abour your brand's online presence and the
                influencers using it
              </p>
            </div>
          </div>
          <div className="feature">
            <div>
              <Analytics style={{ width: "4em" }} />
              <p className="text">
                Get exclusive insights and data from the top 15,000 influencers
                in your region
              </p>
            </div>
          </div>
          <div className="feature">
            <div>
              <Analytics style={{ width: "4em" }} />
              <p className="text">
                Get customized daily reports on your collaboration with the
                influencer
              </p>
            </div>
          </div>
          <div className="meet-info">
            <div className="borderr-pad">
              <h4 className="title">Meet Mirrorr</h4>
              <p className="borderr text">
                Mirrorr is a monitoring and analytical tool that mirrors all
                ongoing activities, highlighting in specific the brand's
                exposure by each influencer.
              </p>
            </div>
          </div>
          <div style={{ height: "30em" }}></div>
        </Col>
      </Row>
    </Container>

    <style>{`
    
    .feature{
        width:15em;
        height:15em;
        background:red;
        border-radius:50%;
        position:absolute;
        -webkit-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.09);
        -moz-box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.09);
        box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.09);
        text-align:center;
        padding:2em 1em;
        display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
    align-content: stretch;
   
    }
    .feature:nth-child(1){
        background:#4050FF;
        left:10em;
        color:#FFF;
    }
    .feature:nth-child(2){
        background:#FFF;
        left:26em;
        top:3em;
    }
    .feature:nth-child(3){
        background:#FFF;
        top:12em;
        left:16em;
    }
    .meet-info{
        max-width:25em;
        right:0;
        bottom:8em;
        position:absolute;
    }
    
    `}</style>
  </section>
);

export default Meet;
