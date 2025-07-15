import { Col, Row } from "react-bootstrap";

export default function WorkInProgress() {
    return (
        <>
            <Row className="p-2">
                <Col lg={12}>
                    <h2 className="h6">This work item is under development and it is coming soon!!</h2>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center" >
                <Col lg={6}>
                    <img alt="" src="/27277.jpg" height={"80%"} width={"80%"}></img>
                </Col>
            </Row>
        </>
    );
}