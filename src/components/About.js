import React from "react";
import "./About.css"
import { Layout } from "./Layout";
import { Container } from "react-bootstrap";
import Transitions from "./Transitions"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../images/about.jpg";
export default function About() {
  return (
    <Layout>
      <Transitions>
      <Container>
      <div className="about">
          <h2>About me</h2>
        </div>
        <div className="line-break"></div>
        <div style={{marginTop:'40px'}}>
          <Row>
            <Col lg={6}>
              <div className="Para">
              <p className="paragraph">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
             </div>
            </Col>
            <Col lg={6}>
              <img src={img1}></img>
            </Col>
          </Row>
        </div>
      </Container>
      </Transitions>
    </Layout>
  );
}
