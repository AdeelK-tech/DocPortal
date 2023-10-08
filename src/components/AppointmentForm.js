import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
export default function AppointmentForm(){
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [msg, setMsg] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };
  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };
  const msgChangeHandler = (e) => {
    setMsg(e.target.value);
  };
  const OnApptFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const mail = await emailjs.sendForm(
        "service_du0q9xp",
        "template_8t37urh",
        e.target,
        "IZyzNf_18igg9T5Tf"
      );
      
    } catch (e) {
      console.log(e);
    }
    finally{
      setName("")
      setAddress("")
      setEmail("")
      setPhone("")
    }
  };
    return(
        <div style={{marginLeft:"20px",marginTop:"40px"}}>
            <Form onSubmit={OnApptFormSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridName" sm={12}>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          name="from_name"
                          type="text"
                          placeholder="Enter name"
                          value={name}
                          onChange={nameChangeHandler}
                        />
                      </Form.Group>
                      </Row>
                      <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail" sm={12}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          htmlFor="email_from"
                          name="email_from"
                          type="email"
                          placeholder="Enter Email"
                          required
                          value={email}
                          onChange={emailChangeHandler}
                        />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridPhone" sm={12}>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="+1 (123) 456-7891"
                          required
                          value={phone}
                          onChange={phoneChangeHandler}
                        />
                      </Form.Group>
                      </Row>
                      <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridAddress" sm={12}>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          placeholder="Apartment, studio, or floor"
                          value={Address}
                          onChange={addressChangeHandler}
                        />
                      </Form.Group>
                      </Row>
                    
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Type your msg here:</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={3}
                        value={msg}
                        onChange={msgChangeHandler}
                      />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                      Submit
                    </Button>
                  </Form>
        </div>
    )
}