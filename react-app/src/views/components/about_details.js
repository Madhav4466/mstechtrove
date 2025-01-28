import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function AboutDetails({about}) {
    const {education, experience} = about;

    const experienceSummary = () => {
        return(
            <Col lg={6} className="text-center d-flex flex-column justify-content-center p-2">
                <Container className="border border-dark rounded">
                    <Row>
                        <h3>Experience</h3>
                    </Row>
                    <Row>
                        <span className="text-body-secondary h6">{new Date().getFullYear()-experience.workingSince}+ Years</span>
                        <span className="text-body-secondary h6">{experience.designation}</span>
                    </Row>
                </Container>
            </Col>
        );
    }

    const educationSummary = () => {
        return(
            <Col lg={6} className="text-center d-flex flex-column justify-content-center p-2">
                <Container className="border border-dark rounded">
                    <Row>
                        <h3>Education</h3>
                    </Row>
                    <Row>
                        <span className="text-body-secondary h6">{education.masters}</span>
                        <span className="text-body-secondary h6">{education.bachelor}</span>
                    </Row>
                </Container>
            </Col>
        );
    }

    return(
        <>
            {experienceSummary()}
            {educationSummary()}
        </>
    );

    
}