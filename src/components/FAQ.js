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
        <div>
        <div className="Faq">
          <h2>FAQS</h2>
        </div>
        <div className="line-break"></div>
        <div style={{marginTop:"20px"}}>
          <ul>
            <li>
              <h4>Do you accept insurance ?</h4>
              <p>Yes . We accept optum ( and it’s covered insurances) and Aetna</p>
            </li>
            <li>
              <h4>Do you see patients via telemedicine ?</h4>
              <p>Yes, we have both telemedicine and in person visits.</p>
            </li>
            <li>
              <h4>Do you see cash payments ?</h4>
              <p>Yes, we accept cash payments.</p>
            </li>
            <li>
              <h4>Do you treat children ?</h4>
              <p>Yes, we accept children more than 5 years of age</p>
            </li>
            <li>
              <h4>Is my information safe ?</h4>
              <p>We never share your information with anyone. It is confidential. We follow all state regulations</p>
            </li>
            <li>
              <h4>Do you prescribe controlled substances ?</h4>
              <p>Yes. However it depends on case to case basis and we strictly follow state and federal regulations</p>
            </li>
          </ul>
        </div>
        <div style={{marginTop:"50px"}}>

        </div>
        </div>
        
      </Container>
      </Transitions>
    </Layout>
  );
}
