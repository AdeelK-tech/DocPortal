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
            <img src={img1} className="HomeImages"></img>
            </div>
            <div className="ImageText">
            <h4 className="text">Child Psychiatry</h4>
            </div>
            
          </Col>
          <Col lg={4}>
            <div>
            <img src={img2}className="HomeImages"></img>
            </div>
            <div className="ImageText">
            <h4 className="text">Adult Psychiatry</h4>
            </div>
            
          </Col>
          <Col lg={4}>
            <div>
            <img src={img3} className="HomeImages"></img>
            </div>
            <div className="ImageText">
            <h4 className="text">Tele Psychiatry</h4>
            </div>
          </Col>
        </Row>
      </div>
      
      <Container>
        <div className="google-map">
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div>
        <div className="service">
        <h4>Contact Me</h4>
      </div>
      <div className="line-break"></div>
        </div>
        <div className="Contact">
          <Row>
            <Col lg={6}>
            <div className="info">
            <FaEnvelope size={20}/><span className="contact-number">abc@gamil.com</span>
            </div>
            </Col>
            <Col lg={6}>
            <div className="info">
            <FaPhoneAlt size={20}/><span className="contact-number">+1 (555) 123-4567</span>
            </div>
            </Col>
          </Row>
        </div>
      </Container>
      </Transitions>
    </Layout>
  );
}
