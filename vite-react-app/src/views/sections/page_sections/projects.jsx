import React from "react";
import Section from "./section";
import { Col, Row } from "react-bootstrap";
import SectionHeading from "../../components/section-heading";
import ProjectDetails from "../../components/project_details";

export default function Projects() {
    const projects = [
        {
            title: "Icertis",
            role: "Accessibility Tester",
            duration: "Feb-2019 - May-2019",
            responsibilities: "Accessibility Audits",
        },
        {
            title: "TEP",
            role: "Accessibility Developer",
            duration: "Feb-2019 - May-2019",
            responsibilities: "Accessibility Audits",
        },
        {
            title: "Baselayer Digital",
            role: "Accessibility Developer",
            duration: "Feb-2019 - May-2019",
            responsibilities: "Accessibility Audits",
        },
        {
            title: "Nebula Distiler",
            role: "Accessibility Developer",
            duration: "Feb-2019 - May-2019",
            responsibilities: "Accessibility Audits",
        },
        {
            title: "Philosophers Guild",
            role: "Accessibility Developer",
            duration: "Feb-2019 - May-2019",
            responsibilities: "Accessibility Audits",
        },
        {
            title: "Agility Health",
            role: "Accessibility Developer",
            duration: "Feb-2019 - May-2019",
            responsibilities: "Accessibility Audits",
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