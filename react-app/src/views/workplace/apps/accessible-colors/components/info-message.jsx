import { Button, Col, Row } from "react-bootstrap";

export default function InfoMessage({ msg, type, generateButton, onGenerate}) {
    return (
        <Row className="rounded d-flex p-4 gap-3" style={{background: "#000000"}}>
            <Col lg={12} className="text-start">
                <h3>Color Generation {type}</h3>
                <p className="small">{msg}</p>
            </Col>
            <Col lg={12} className="p-3 rounded d-flex justify-content-center align-items-center gap-3">
                {generateButton != null && <Button variant="outline-warning" onClick={onGenerate}>{generateButton}</Button>}
            </Col>
        </Row>
    )
}