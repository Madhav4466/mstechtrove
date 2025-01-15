import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Card({sectionName, workplaceSection}) {
    return(
        <>
            {
                workplaceSection.map((section, sectionId) => {
                    return(
                        <Col key={sectionId} lg={2} sm={4} xs={6} className="justify-content-center p-1" role="listitem">
                            <Container className="p-3 card-elevated d-flex flex-column gap-3" style={{minHeight: '280px'}}>
                                <Row Card className="flex-grow-1">
                                    <Col lg={12}>
                                        <img alt="" style={{height: "120px", width: "100%", objectFit: "contain"}} src={section.imageURL}/>
                                    </Col>
                                </Row>
                                <Row className="flex-grow-1 d-flex flex-column justify-content-between">
                                    <Col lg={12}>
                                        <h3 className="h6 m-0">{section.title}</h3>
                                        <p className="text-body-secondary m-0">{section.description}</p>
                                    </Col>
                                </Row>
                                <Row className="d-flex align-items-end">
                                    <Col lg={6} sm={6} xs={6} className="p-0">
                                        <Button as={Link} to={`/workplace/${sectionName}/${section.type ? section.type : section.title.toLowerCase()}`} variant="dark" data-type={section.type}>View</Button>
                                    </Col>
                                    <Col lg={6} sm={6} xs={6} className="p-0">
                                        <Button variant="dark">Code</Button>
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