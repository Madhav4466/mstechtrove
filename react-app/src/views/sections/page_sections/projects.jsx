import React from "react";
import Section from "./section";
import { Col, Row } from "react-bootstrap";
import SectionHeading from "../../components/section-heading";
import ProjectDetails from "../../components/project_details";

export default function Projects() {
    const projects = [
        {
            title: "iCertis",
            role: "Accessibility Tester",
            duration: "Feb-2019 - May-2019",
            responsibilities: "Accessibility Audits",
            skills: "WCAG 2.1, ARIA 1.0, VPAT"
        },
        {
            title: "TEP",
            role: "Accessibility Developer",
            duration: "Feb-2019 - May-2019",
            responsibilities: "Accessibility Audits",
            skills: "React JS, CSS, ARIA 1.0, WCAG 2.1, VPAT"
        },
        {
            title: "Baselayer Digital",
            role: "Accessibility Developer",
            duration: "Feb-2019 - May-2019",
            responsibilities: "Accessibility Audits",
            skills: "JavaScript, jQuery, CSS, HTML, WCAG 2.1, VPAT"
        },
        {
            title: "Nebula Distiler",
            role: "Accessibility Developer",
            duration: "Feb-2019 - May-2019",
            responsibilities: "Accessibility Audits",
            skills: "JavaScript, jQuery, CSS, SASS, HTML, WCAG 2.1, VPAT"
        },
        {
            title: "Philosophers Guild",
            role: "Accessibility Developer",
            duration: "Feb-2019 - May-2019",
            responsibilities: "Accessibility Audits",
            skills: "Shopify, JavaScript, jQuery, CSS, SASS, HTML, WCAG 2.1, VPAT"
        },
        {
            title: "Agility Health",
            role: "Accessibility Developer",
            duration: "Feb-2019 - May-2019",
            responsibilities: "Accessibility Audits",
            skills: "JavaScript, jQuery, CSS, SASS, HTML, React JS, C#, Asp.Net, WCAG 2.1, VPAT"
        },
        
    ]
    return(
        <Section id="projects" section={
            <>
                <Col lg={12} className="gap-2">
                    <SectionHeading title="Projects" level="2"/>
                    <Row className="skills-details p-2">
                        <ProjectDetails projects={projects}/>
                    </Row>
                </Col>
            </>
        }>
        </Section>
    );
}