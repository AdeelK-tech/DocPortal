import "./Home.css"
import Transitions from "./Transitions"
import { Layout } from "./Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../images/child.jpg";
import img2 from "../images/adult.jpg";
import img3 from "../images/tele.jpg";
import{FaEnvelope,FaPhoneAlt} from "react-icons/fa"
export default function Home() {
  return (
    
    <Layout>
      <Transitions>
      <div className="Intro">
        <div>
        <h2>Sajid Arshad</h2>
        </div>
        <h5 style={{}}>Child, Adolescent & Adult Psychiatry</h5>
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
            <img src={img2}className="HomeImages" alt="tele"></img>
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
        <div style={{marginTop:"10px"}}>
        <div className="line-break"></div>
        <div style={{marginTop:"15px"}}><h2><i>What I cannot help you with</i></h2></div>
        <div>
          <ul  style={{
                  fontWeight: "400",
                  color: "rgba(26,26,26,.7)",
                  lineHeight: "1.6em",
                }}>
            <li>I do not do neuropsychological testing.</li>
            <li> I can do therapy but I am not trained exclusively as a therapist to do manualized therapy.</li>
            <li>I can not prescribe you controlled substances on regular basis just because your previous psychiatrist/PCP started that for you.</li>
            <li>I do not perform procedures such as TMS, ECT etc.</li>
            <li>I do not fill out disability requests.</li>
          </ul>
        </div>
        <div>
          <p>This experience is Hybrid ( in person + tele psychiatry). I strongly recommend that you meet with me in person at least once especially for your first meeting. However, this is not mandatory unless specified by state rules and regulations.</p>
        </div>
        </div>
        <div>
        <div className="service">
        <h4>Contact Me</h4>
      </div>
      <div className="line-break"></div>
        </div>
        <div className="Contact">
         <ul className="UnstyledList">
          <li><span style={{fontSize:"24px"}}><i>Name :</i></span> Bright Future Psychiatry</li>
          <li><span style={{fontSize:"24px"}}><i>Address:</i></span> 16 Pearl Street Metuchen NJ 08840</li>
          <li><FaPhoneAlt size={24}/><span className="contact-number"> : +1 (555) 123-4567</span></li>
          <li><FaEnvelope size={24}/><span className="contact-number"> : abc@gamil.com</span></li>
          <li><span style={{fontSize:"24px"}}><i>Request a free consultation :</i></span> <a href="https://secure.simplepractice.com/practice" target="blank">https://secure.simplepractice.com/practice</a></li>
         </ul>
            
           
           
            
            
       </div>
        <div className="google-map">
          <iframe className="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.0296583653944!2d-74.3621838!3d40.5409339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b7cd86e2535b%3A0x432bf2044d89e46b!2s16%20Pearl%20St%2C%20Metuchen%2C%20NJ%2008840%2C%20USA!5e0!3m2!1sen!2s!4v1691919596787!5m2!1sen!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
       
       
      </Container>
      </Transitions>
    </Layout>
  );
}
