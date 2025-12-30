import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaCalendarAlt, FaGraduationCap, FaStar } from "react-icons/fa";

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
                                        <img src={edu.image} alt={edu.college} style={{"borderRadius": "10px"}}></img>
                                    </Col>
                                    <Col lg={8} className="text-start py-2 px-3 education-details d-flex flex-column justify-content-around">
                                        <Row>
                                            <p className="h4" role="heading" aria-level="3">{edu.title}</p>
                                            <p className="text-body-secondary h6">{edu.college}</p>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <p className="h6 m-0 p-1"><FaCalendarAlt></FaCalendarAlt> {edu.courseDuration}</p>
                                                <p className="h6 m-0 p-1"><FaStar style={{color: "#aa6a15"}}/> CGPA: {edu.cgpa}</p>
                                                <p className="h6 m-0 p-1"><FaGraduationCap/> Grade: {edu.grade}</p>
                                            </Col>
                                        </Row>
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