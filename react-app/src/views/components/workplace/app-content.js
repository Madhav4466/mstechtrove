import { Col, Row } from "react-bootstrap";

export default function AppContent ({component}) {
    return(
        <Row className="p-2">
            <Col lg={12}>
                {component && component}
            </Col>
        </Row>
    );
}