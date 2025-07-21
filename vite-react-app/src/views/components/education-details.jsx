import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function EducationDetails({education}) {
    return(
            <>
            {
                education.map((edu, eduIndex) =>{
                    return(
                        <Col key={eduIndex} lg={12} className="justify-content-center p-1">
                            <Container className="p-3 card-elevated">
                                <Row>
                                    <Col lg={4} className="px-3 college-university-image">
                                        <div>
                                            <img src={edu.image} alt={edu.college} height={"100%"} width={"100%"} style={{"borderRadius": "10px"}}></img>
                                        </div>
                                    </Col>
                                    <Col lg={8} className="text-start py-2 px-3 education-details">
                                        <p className="h4">{edu.title}</p>
                                        <p className="text-body-secondary h6">{edu.college}</p>
                                        <p className="h6">{edu.courseDuration}</p>
                                        <p className="h6">CGPA: {edu.cgpa}</p>
                                        <p className="h6">Grade: {edu.grade}</p>
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