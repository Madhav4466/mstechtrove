import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Section from "../page_sections/section";

export default function Banner() {
    return(
        <Section id="banner" section = {
            <>
                <Col lg={6} className="text-center">
                    <Row>
                        <h1>
                            <span className="text-body-secondary h5">Hello, </span><br aria-hidden="true"></br>
                            <span className="h3">Welcome to the Workplace!</span>
                        </h1> 
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col lg={3} sm={3} xs={3}>
                            <Button variant="primary">Get Started</Button>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}>
                    <Row>
                        <Col lg={12} className="intro-pic justify-content-center d-flex align-items-center">
                            <img src="https://media.licdn.com/dms/image/v2/D4D03AQGIVlQYVqzfDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718211832265?e=1739404800&v=beta&t=8hKfITx0de6hdXMEP8NiUvBtU2EvwzEZH79sswrIkTM" alt="Madhav Saraf"></img>
                        </Col>
                    </Row>
                </Col>
            </>
        }/>
    );
}