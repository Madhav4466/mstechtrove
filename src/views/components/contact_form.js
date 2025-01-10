import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function ContactForm() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
  
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="p-2">
                <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>First name <i aria-hidden="true">*</i></Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please provide first name</Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className="p-2">
                <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Label>Email Id <i aria-hidden="true">*</i></Form.Label>
                    <Form.Control
                    required
                    type="email"
                    placeholder="Email Id"
                    defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please provide email id</Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className="p-2">
                <Form.Group as={Col} controlId="validationCustom03">
                    <Form.Label>Mobile <i aria-hidden="true">*</i></Form.Label>
                    <Form.Control
                    required
                    type="number"
                    placeholder="Mobile"
                    defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please provide mobile number</Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className="p-2">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message <i aria-hidden="true">*</i></Form.Label>
                    <Form.Control as="textarea" rows={3} 
                    required
                    placeholder="Message"
                    defaultValue={""}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Please write a message</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="p-2">
                <Col lg={6}>
                    <Button type="submit" variant="dark">Submit form</Button>
                </Col>
            </Row>
        </Form>
    );
  }