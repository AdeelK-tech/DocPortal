import "./Home.css";
import Transitions from "./Transitions";
import { Layout } from "./Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../images/child.webp";
import img2 from "../images/adult.webp";
import img3 from "../images/tele.webp";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
export default function Home() {
  return (
    <Layout>
      <Transitions>
        <div className="Intro">
          <div className="company">
            <h1>Bright Future Psychiatry LLC </h1>
          </div>
          <div style={{ marginTop: "15px" }}>
            <h2>Sajid Arshad M.D</h2>
          </div>
          <div className="constantMargin">
            <h5 style={{}}>Child, Adolescent & Adult Psychiatry</h5>
          </div>
          <div className="constantMargin">
            <h5>Hybrid (In Person and TelePsychiatry)</h5>
          </div>
        </div>
        <Container>
          <div className="service">
            <h4>Services</h4>
          </div>
          <div className="line-break"></div>
        </Container>
        <div className="ImageDiv">
          <Row>
            <Col lg={4}>
              <div>
                <img src={img1} className="HomeImages" alt="child"></img>
              </div>
              <div className="ImageText">
                <h4 className="text">Child Psychiatry</h4>
              </div>
            </Col>
            <Col lg={4}>
              <div>
                <img src={img2} className="HomeImages" alt="tele"></img>
              </div>
              <div className="ImageText">
                <h4 className="text">Adult Psychiatry</h4>
              </div>
            </Col>
            <Col lg={4}>
              <div>
                <img src={img3} className="HomeImages" alt="adult"></img>
              </div>
              <div className="ImageText">
                <h4 className="text">Tele Psychiatry</h4>
              </div>
            </Col>
          </Row>
        </div>

        <Container>
          <div>
            <div className="service">
              <h4>Practice</h4>
            </div>
            <div className="line-break"></div>
            <div className="constantMargin">
              <ul className="UnstyledList">
                <li>
                  <span style={{ fontSize: "24px" }}>
                    <i>Online Tele :</i>
                  </span>{" "}
                  <a
                    href="https://secure.simplepractice.com/practice"
                    target="blank"
                  >
                    https://secure.simplepractice.com/clients
                  </a>
                </li>
                <li>
                  <span style={{ fontSize: "24px" }}>
                    <i>In Person :</i>
                  </span>{" "}
                  16 Pearl Street Metuchen NJ 08840{" "}
                  <span style={{ fontWeight: "bold" }}>
                    ( Inexpensive covered and street paid parking available )
                  </span>
                </li>
                <li>
                  <span style={{ fontSize: "24px" }}>
                    <i>Language Spoken :</i>
                  </span>{" "}
                  English, Spanish (with translation services), Urdu/Hindi{" "}
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="service">
              <h4>Conditions I Treat</h4>
            </div>
            <div className="line-break"></div>

            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4>
                <i>Child and Adolescent Treatment that I specialize in:</i>
              </h4>
              <div>
                <ul>
                  <li>ADHD</li>
                  <li>Childhood/Adolescent Anxiety</li>
                  <li>Depression</li>
                  <li>Behavioral Disturbances such as Aggression, Anger</li>
                  <li>
                    Diagnosis and Treatment of eating Disorder ( I am not
                    specialized in Eating Disorder as eating disorder specialist
                    )
                  </li>
                  <li>
                    Psychiatric co-morbid condition with intellectual
                    disabilities and/or Learning disorder
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ marginTop: "5px" }}>
              <h4>
                <i>Adult Treatment that I specialize in:</i>
              </h4>
              <div style={{ fontSize: "16px" }}>
                <ul>
                  <li>
                    Anxiety with its different types such as Generalized or
                    specific Anxiety.
                  </li>
                  <li>Major Depression</li>
                  <li>Panic Disorder</li>
                  <li>Psychosis</li>
                  <li>OCD</li>
                  <li>Limited Treatment of Substance use disorder</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="service">
              <h4>Contact Me</h4>
            </div>
            <div className="line-break"></div>
          </div>
          <div className="Contact" style={{ marginTop: "20px" }}>
            <ul className="UnstyledList">
              <li>
                <span style={{ fontSize: "24px" }}>
                  <i>Name :</i>
                </span>{" "}
                Bright Future Psychiatry
              </li>
              <li>
                <span style={{ fontSize: "24px" }}>
                  <i>Address:</i>
                </span>{" "}
                16 Pearl Street Metuchen NJ 08840{" "}
                <span style={{ fontWeight: "bold" }}>
                  ( Inexpensive covered and street paid parking available )
                </span>
              </li>
              <li>
                <FaPhoneAlt size={24} />
                <span className="contact-number"> : +1 (732) 314-1820</span>
              </li>
              <li>
                <FaEnvelope size={24} />
                <span className="contact-number"> : <a href = "mailto: care@brightfuturepsychiatry.net">care@brightfuturepsychiatry.net</a></span>
              </li>
              <li>
                <span style={{ fontSize: "24px" }}>
                  <i>Request a free consultation :</i>
                </span>{" "}
                <a
                  
                  href="https://secure.simplepractice.com/practice"
                  target="blank"
                >
                  https://secure.simplepractice.com/practice
                </a>
              </li>
            </ul>
          </div>
          <div className="constantMargin">
            <div className="line-break"></div>
            <div style={{ marginTop: "15px" }}>
              <h2>
                <i>What I cannot help you with</i>
              </h2>
            </div>
            <div>
              <ul
                style={{
                  fontWeight: "400",
                  color: "rgba(26,26,26,.7)",
                  lineHeight: "1.6em",
                }}
              >
                <li>I do not do neuropsychological testing.</li>
                <li>
                  {" "}
                  I can do therapy but I am not trained exclusively as a
                  therapist to do manualized therapy.
                </li>
                <li>
                  I can not prescribe you controlled substances on regular basis
                  just because your previous psychiatrist/PCP started that for
                  you.
                </li>
                <li>I do not perform procedures such as TMS, ECT etc.</li>
                <li>I do not fill out disability requests.</li>
              </ul>
            </div>
            <div>
              <p>
                This experience is Hybrid ( in person + tele psychiatry). I
                strongly recommend that you meet with me in person at least once
                especially for your first meeting. However, this is not
                mandatory unless specified by state rules and regulations.
              </p>
            </div>
          </div>
          <div className="constantMargin">
              <div className="line-break"></div>
              <div className="service">
              <h4>Resources</h4>
            </div>
            <div className="constantMargin">
              <ul>
                <li><a href="https://www.nj211.org/resource-search/taxonomy/RP-1500.1400-500/_/1" target="_blank" rel="noreferrer">NJ 211</a></li>
                <li><a href="https://naminj.org/where-to-get-help/children-resources/" target="_blank" rel="noreferrer">NAMI New Jersey, N Brunswick, NJ</a></li>
              </ul>
            </div>
          </div>
          <div className="constantMargin">
              <div className="line-break"></div>
              <div className="service">
              <h4>Insurance Accepted</h4>
            </div>
            <div className="constantMargin">
              <ul>
                <li>Cash Payment: 350$-500$ (depending on complexity).</li>
                <li>Aetna.</li>
                <li>Optum Networks (OscarCIRPLUs, OSCARHLTHPLN,OSCARMALLGR,UBH General).</li>
              </ul>
            </div>
          </div>
          <div className="google-map">
            <iframe
              className="map"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.0296583653944!2d-74.3621838!3d40.5409339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b7cd86e2535b%3A0x432bf2044d89e46b!2s16%20Pearl%20St%2C%20Metuchen%2C%20NJ%2008840%2C%20USA!5e0!3m2!1sen!2s!4v1691919596787!5m2!1sen!2s"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Container>
      </Transitions>
    </Layout>
  );
}
