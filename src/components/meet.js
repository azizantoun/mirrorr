import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Analytics from "./icons/analytics-icon";
import DataIcon from "./icons/data-icon";
import InfluencersDataIcon from "./icons/influencersdata-icon";
import ReportsIcon from "./icons/reports-icon";
const Meet = () => (
  <section>
    <Container>
      <Row className="mt-5">
        <Col xs={12} style={{ position: "relative" }}>
          <div className="feature">
            <div>
              <DataIcon
                className="feature-icon"
                style={{ color: "#FFF", fill: "#FFF" }}
              />
              <p className="text">
                <b>Brand Detection</b>
                <br />
                Mirrorr detects and identifies brands and logos in posts and
                videos, spotting the needed brands through AI from any
                perspective even if not mentioned or tagged.
              </p>
            </div>
          </div>
          <div className="feature">
            <div>
              <InfluencersDataIcon
                style={{ width: "3em", marginTop: "1em", marginBottom: "1em" }}
              />
              <p className="text">
                <b>AI powered platform</b>
                <br />> Mirrorr has its own built-in video/image, audio and text
                recognition AI tool which gives a smart and luxurious privilege
                for the users whereas all brands – with no exception – are
                detected meticulously even if not mentioned nor tagged.
              </p>
            </div>
          </div>
          <div className="feature">
            <div>
              <ReportsIcon
                style={{ width: "4em", marginTop: "1em", marginBottom: "1em" }}
              />
              <p className="text">
                <b>Metadata</b> <br />
                Mirrorr is a mass market tool covering public profiles,
                celebrities, mega, macro & micro influencers in addition to
                local influencers along with their daily updates and insights
                (followers, posts, stories…) . Mirrorr’ huge db makes it
                standing uniquely among other tools reach.
              </p>
            </div>
          </div>
          <div className="meet-info">
            <div className="borderr-pad">
              <h4 className="title">Meet Mirrorr</h4>
              <p className="borderr text">
                Mirrorr helps you grow your business based on hard data and real
                market insights, streamlines your digital marketing with the
                support of AI, enhances your search and qualifies your analytics
                and highlights your digital market trends.
              </p>
            </div>
          </div>
          <div style={{ height: "30em" }}></div>
        </Col>
      </Row>
    </Container>

    <style>{`
    
    .feature{
        width:20em;
        height:20em;
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
    .feature-icon{
      margin:1em auto;
      width:2em;
    }
    
    `}</style>
  </section>
);

export default Meet;
