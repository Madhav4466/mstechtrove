import React from "react";
import Section from "./section";
import { Button, Col, Row } from "react-bootstrap";
import '../../../styles/sections/page_sections/intro.css';
import { Link } from "react-router-dom";

export default function Intro() {
    return(
        <Section id="intro" section = {
            <>
            <Col lg={6}>
                    <Row>
                        <Col lg={12} className="intro-pic justify-content-center d-flex align-items-center">
                            <img src="https://d2gjqh9j26unp0.cloudfront.net/profilepic/d1f46e84ba1e37ebb9008725d12d2e59" alt="Madhav Saraf"></img>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} className="text-center">
                    <Row>
                        <h1>
                            <span className="text-body-secondary h5">Hello, I'm</span><br aria-hidden="true"></br>
                            <span>Madhav Saraf</span>
                        </h1> 
                    </Row>
                    <Row>
                        <p className="h4 text-body-secondary">Senior Software Testing Engineer</p>
                        <p className="h6 text-body-secondary">At EPAM Systems India</p>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col lg={3} sm={3} xs={6} className="w-auto">
                            <Button variant="dark" className="w-100" as={Link} href="https://1drv.ms/b/c/712766747430d332/EZUKTNXqSQlFlns25ODMVpEBv8sXJg9vTykyyL60CtRChQ?e=659LVk" download={"Madhav_Saraf_Resume.pdf"} target="_blank">Download CV</Button>
                        </Col>
                        <Col lg={3} sm={3} xs={6} className="w-auto">
                            <Button href="#about-me" variant="outline-dark" className=" w-100 outlined">About Me</Button>
                        </Col>
                    </Row>
                </Col>
                
            </>
        }/>
    );
}