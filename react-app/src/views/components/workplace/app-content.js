import { Col, Row } from "react-bootstrap";

export default function AppContent ({component}) {
    return(
        <Row className="p-2 justify-content-center align-items-center">
            <Col lg={12} className="rounded text-light p-5" style={{background: "black"}}>
                {component && component}
            </Col>
        </Row>
    );
}