import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function GameContainer({game}) {
    return(
        <Container className="pt-5">
            <Row>
                <Col lg={12}>
                    {game}
                </Col>
            </Row>
        </Container>
    );
}