import React from "react";
import Section from "./section";
import { Button, Col, Row } from "react-bootstrap";
import '../../../styles/sections/page_sections/intro.css';

export default function Intro() {
    return(
        <Section id="intro" section = {
            <>
            <Col lg={6}>
                    <Row>
                        <Col lg={12} className="intro-pic justify-content-center d-flex align-items-center">
                            <img src="https://media.licdn.com/dms/image/v2/D4D03AQGIVlQYVqzfDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718211832265?e=1739404800&v=beta&t=8hKfITx0de6hdXMEP8NiUvBtU2EvwzEZH79sswrIkTM" alt="Madhav Saraf"></img>
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
                        <h2 className="h4 text-body-secondary">Accessibility Lead & Front-End Developer</h2>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col lg={3} sm={3} xs={6}>
                            <Button variant="dark" className="w-100">Download CV</Button>
                        </Col>
                        <Col lg={3} sm={3} xs={6}>
                            <Button variant="outline-dark" className=" w-100 outlined">About Me</Button>
                        </Col>
                    </Row>
                </Col>
                
            </>
        }/>
    );
}