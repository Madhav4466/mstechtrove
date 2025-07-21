import React from "react";
import { Container, Row } from "react-bootstrap";

export default function Section({ section, id, height }) {
    return(
        <Container className="p-4" id={id}>
            <Row className="align-items-center">
                {section}
            </Row>
        </Container>
    );
}