import React from "react";
import { Col, Form } from "react-bootstrap";

export default function AreaInput({label, id, value, handleChange}) {
    return(
        <Col lg={2} className="p-4 d-flex text-start rounded flex-column">
            <Form.Label htmlFor={id}>{label}</Form.Label>
            <Form.Control id={id} type="number" value={value} onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">Please provide valid {id} value</Form.Control.Feedback>
        </Col>
    );
}