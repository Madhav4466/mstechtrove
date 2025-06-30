import { Col, Form } from "react-bootstrap";

export default function InputField({ label, id, value, onChange, children, ...props}) {
    return (
        <Col lg={2} className="p-4 d-flex text-start rounded flex-column">
            <Form.Label htmlFor={id}>{label}</Form.Label>
            <Form.Control id={id} value={value} onChange={onChange} {...props}/>
            <Form.Control.Feedback type="invalid">Please provide valid {id} value</Form.Control.Feedback>
        </Col>
    )
}