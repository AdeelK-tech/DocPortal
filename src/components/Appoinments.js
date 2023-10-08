import React from "react";
import Transitions from "./Transitions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Layout } from "./Layout";
import AppointmentForm from "./AppointmentForm";
import "./Appointment.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Appointments() {
  return (
    <Layout>
      <Transitions>
        <Container>
          <div className="appoint">
            <h2>Make an Appointment</h2>
          </div>
          <div className="line-break"></div>
          <div style={{ marginTop: "25px" }}>
            <Row>
              <h5>
                Please call the office at 267-573-0575 to book your first
                appointment. You may also use the contact section for any
                questions or to request a call back.
              </h5>
            </Row>
          </div>

          <div className="mainDiv">
            <Row>
              <Col>
                <AppointmentForm></AppointmentForm>
              </Col>
              <Col lg={6}>
                <div className="Para">
                  <h2>Contact Me With Any Questions:</h2>
                  <p>
                    Please use the adjacent form to contact me directly regardin
                    questions, policies or appointments and I will contact you
                    as soon as possible. Do not use this form for urgent matters
                    or emergencies.
                  </p>
                  <div className="Contact">
                    <Row>
                      
                        <div className="">
                          <FaEnvelope size={20} />
                          <span className="contact-number"><a href = "mailto: care@brightfuturepsychiatry.net">care@brightfuturepsychiatry.net</a></span>
                        </div>
                    
                        <div className="" style={{marginTop:"20px"}}>
                          <FaPhoneAlt size={20} />
                          <span className="contact-number">
                             : +1 (732) 314-1820
                          </span>
                        </div>
                      
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Transitions>
    </Layout>
  );
}
