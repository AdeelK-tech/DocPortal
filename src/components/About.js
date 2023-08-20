import React from "react";
import "./About.css";
import { Layout } from "./Layout";
import { Container } from "react-bootstrap";
import Transitions from "./Transitions";
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
          <div style={{ marginTop: "40px" }}>
            <Row>
              <Col lg={4}>
                <img src={img1} alt="doc"></img>
              </Col>
              <Col lg={8}>
                <div style={{marginTop:"10px"
                }}>
                  <h2>Sajid Arshad, M.D.</h2>
                  <p
                    style={{
                      fontWeight: "400",
                      color: "rgba(26,26,26,.7)",
                      lineHeight: "1.6em",
                    }}
                  >
                    I am a Board Certified Psychiatrist. In addition to Adult
                    Psychiatry, I am also trained in Child And Adolescent
                    Psychiatry. My mission is to treat my patients as a person.
                    I believe that mental health can never be treated in
                    isolation. It is strongly connected to our physical health.
                    I am licensed in New Jersey and New York with unrestricted
                    license to practice Child, Adolescent and Adult Psychiatry.
                    I was fortunate to be trained in both Child and Adult
                    psychiatry. This provided me the opportunity to see the
                    human developments and the challenges it brings in a
                    chronologic way. I strongly believe that a secure childhood
                    and a productive adolescence gives rise to a confident and
                    successful adult. Obviously, our challenges as Adults and
                    journey of life continues till we are alive.
                  </p>
                </div>
               
              </Col>
            </Row>
            <div style={{ marginTop: "30px" }}>
              <p
                style={{
                  fontWeight: "400",
                  color: "rgba(26,26,26,.7)",
                  lineHeight: "1.6em",
                }}
              >
                Please understand that I am a General Psychiatrist with Child
                and Adolescent and general Adult psychiatric Specialty. At the
                moment, I have solo practice and might not be able to meet your
                needs. For example if you need Advanced substance use treatment
                or geriatric psychiatry treatment, I strongly recommend to see a
                psychiatrist who specialize in these fields of psychiatry such
                as Addiction Psychiatry and Geriatric Psychiatry. If you are not
                able to function on a daily basis due to your psychiatric
                illness, it is possible that you might need a higher level of
                care. I take my clients very seriously with realistic
                expectations. I never want to make them feel that they are left
                alone. For psychiatric emergencies such as ongoing aggression
                ,suicidal thoughts ,homicidal thoughts, acutely hearing voices ,
                please call 911 and go to nearest emergency room.
              </p>
            </div>
            <div>
              <p
                style={{
                  fontWeight: "400",
                  color: "rgba(26,26,26,.7)",
                  lineHeight: "1.6em",
                }}
              >
                <i>
                  I strictly comply with NJ state rules and regulation. I
                  sincerely apologize if I am not able to help you because of my
                  inability to be flexible related to state rules. Some examples
                  are providing ‘Controlled substances only on case to case
                  basis on short term basis’. As per state law, you have to see
                  your provider in-person each time you receive a controlled
                  substance prescription. Agree to undergo random urine testing
                  from a neutral third party lab. Providing proof of legal
                  Guardianship in case of a child.
                </i>
              </p>
            </div>
          </div>
        </Container>
      </Transitions>
    </Layout>
  );
}
