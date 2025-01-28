import React from "react";
import Section from "./section";
import { Button, Col, Row } from "react-bootstrap";
import SectionHeading from "../../components/section-heading";
import AboutDetails from "../../components/about_details";

export default function AboutMe() {
    const about = {
        experience: {
            designation: "Accessibility Lead",
            workingSince: "2018"
        },
        education: {
            masters: "MCA - Master's Degree",
            bachelor: "BCA - Bachelor Degree",
        },
        summary: {
            line1: `Experienced in UI development with a strong focus on Accessibility. I have a demonstrated history of working in the information technology and services industry. Skilled in utilizing a wide range of front-end frameworks, including HTML, CSS, JavaScript, jQuery, React, Bootstrap, MUI, and more.`,
            line2: `I am also proficient in Object-Oriented Programming (OOP) concepts, Java, and possess experience in Automation testing using frameworks such as Selenium, TestNG, AssertJ, Puppeteer, and Mocha.`,
            line3: `I have in-depth knowledge and practical experience in Accessibility Testing, adhering to WCAG 2.1 guidelines and WAI-ARIA 1.2 design patterns. I am proficient in using various assistive technologies, including NVDA, JAWS, VoiceOver, Talkback, and Narrator.`
        }
    };

    return(
        <Section id="about-me" section={
            <>
                <Col lg={12} className="gap-2">
                    <SectionHeading title="About Me" level="2"/>
                    <Row className="p-2">
                        <Col lg={4} className="about-me-pic justify-content-center p-1">
                            <img height="300px" width="300px" src="https://pbs.twimg.com/profile_images/1382374410191917057/cLNtRZjv_400x400.jpg" alt="Madhav Saraf"></img>
                        </Col>
                        <Col lg={8} className="about-me-info text-start d-flex flex-column justify-content-center p-1">
                            <Row className="justify-content-between p-2">
                                <AboutDetails about={about}/>
                            </Row>
                            <Row className="justify-content-between p-2">
                                <p>{about.summary.line1}</p>
                                <p>{about.summary.line2}</p>
                                <p>{about.summary.line3}</p>
                            </Row>
                            <Row className="p-2">
                                <Col lg={3} sm={3} xs={6}>
                                    <Button variant="dark" className="w-100">Resume</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </>
        }>
        </Section>
    )
}