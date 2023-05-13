import React from "react";
import { Layout } from "./Layout";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../images/puzzle.jpg";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "24px" }}>
          <Col>
            <Image src={img} height={500} width={600}></Image>
          </Col>
          <Col>
            <p style={{ fontSize: "24px", fontFamily: "serif" }}>
              <h2>
                <b>Will my insurance cover my visit?</b>
              </h2>
              In order to ensure enhanced care and availability to each patient
              that I treat, I must limit the number of patients with whom I
              work. I offer flexible and prompt scheduling for comprehensive
              evaluations and follow-up appointments and am available between
              visits via phone. In order to provide the highest level of
              personalized treatment, I am not able to accept insurance.
              However, after our session, I can provide you with a medical
              receipt that you may submit to your insurance for out-of-network
              reimbursement.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
