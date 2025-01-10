import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function ProjectDetails({projects}) {
    return(
        <>
        {
            projects.map((project, projIndex) => {
                return(
                    <Col key={projIndex} lg={4} className="justify-content-center p-1">
                        <Container className="p-3 card-elevated">
                            <Row className="mb-4">
                                <Col lg={12} className="text-start">
                                    <h3 className="h4">{project.title}</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} className="text-start">
                                    <p className="h6">{project.role}</p>
                                    <p className="text-body-secondary"><small>{project.duration}</small></p>
                                    <p className="text-body-secondary h6">{project.responsibilities}</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                );
            })
        }
        </>
    );
}