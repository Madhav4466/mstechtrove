import { Col, Row } from "react-bootstrap";

export default function WorkplaceTitle({title}) {
    return (
        <Row className="p-2">
            <Col lg={12} className="d-flex justify-content-center">
                <h1>{title}</h1>
            </Col>
        </Row>  
    );
}