import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Footer = () => (
  <footer style={{ backgroundColor: "#000" }}>
    <Container>
      <Row>
        <p>2019 &copy; Mirrorr Social. All rights reserved </p>
        <div>
          <a href="/">Careers</a>
          <span> - </span>
          <a href="/">Team</a>
          <span> - </span>
          <a href="/">Contact</a>
        </div>
      </Row>
    </Container>
    <style>{`
    
   footer{
       padding:2em 0;
       color:#FFF;
   }
   footer .row{
       display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	align-content: stretch;
   }
   footer p{
       font-size:0.7em;
       margin:0;
   }
   footer a,span{
       font-size:0.7em;
       margin:0.5em;
       color:#FFF;
       font-weight:normal;
       text-transform:none;
   }
   footer a:hover{
       color:#FFf;
       text-decoration:underline;
   }
    
    `}</style>
  </footer>
);

export default Footer;
