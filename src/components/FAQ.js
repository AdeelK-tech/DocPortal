import React from "react";
import "./FAQ.css"
import Transitions from "./Transitions"
import { Layout } from "./Layout";
import { Container } from "react-bootstrap";
export default function FAQ() {
  return (
    <Layout>
      <Transitions>
      <Container>
        <div className="Faq">
          <h2>FAQS</h2>
        </div>
        <div className="line-break"></div>
        <div style={{marginTop:"25px"}}>
          <h3>Will my insurance cover my visit?</h3>
          <div style={{marginTop:"25px"}} className="Para">
            <p className="paragraph">
            In order to ensure enhanced care and availability to each patient that I treat, I must limit the number of patients with whom I work.  I offer  flexible and prompt scheduling for comprehensive evaluations and follow-up appointments and am available between visits via phone. In order to provide the highest level of personalized treatment, I am not able to accept insurance.  However, after our session, I can provide you with a medical receipt that you may submit to your insurance for out-of-network reimbursement.
            </p>
          </div>
        </div>
        <div style={{marginTop:"25px"}}>
          <h3>Do you practice telepsychiatry?</h3>
          <div style={{marginTop:"25px"}} className="Para">
            <p className="paragraph">
            Yes, at this time all sessions must occur though my secure telemedicine portal at Doxy.me
            </p>
          </div>
        </div>
        <div style={{marginTop:"100px"}}>

        </div>
      </Container>
      </Transitions>
    </Layout>
  );
}
