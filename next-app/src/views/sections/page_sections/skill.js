import React from "react";
import Section from "./section";
import { Col, Row } from "react-bootstrap";
import SectionHeading from "../../components/section-heading";
import SkillDetails from "../../components/skills-details";

export default function Skills() {
    const skills = [
        {
            title: "Front-End Dev",
            skillSet: [
                {
                    tech: "HTML",
                    techLevel: "Experienced",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                },
                {
                    tech: "CSS",
                    techLevel: "Experienced",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                },
                {
                    tech: "Sass",
                    techLevel: "Experienced",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                },
                {
                    tech: "Java Script",
                    techLevel: "Experienced",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                },
                {
                    tech: "jQuery",
                    techLevel: "Experienced",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"
                },
                {
                    tech: "React",
                    techLevel: "Intermediate",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                },
                {
                    tech: "WordPress",
                    techLevel: "Experienced",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg"
                },
                {
                    tech: "Shopify",
                    techLevel: "Experienced",
                    logo: "https://img.icons8.com/?size=100&id=uSHYbs6PJfMT&format=png&color=000000"
                },
                {
                    tech: "Bootstrap",
                    techLevel: "Experienced",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                },
                {
                    tech: "React-Bootstrap",
                    techLevel: "Experienced",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg"
                },
                {
                    tech: "Material UI",
                    techLevel: "Experienced",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
                },
            ]
        },
        {
            title: "Back-End Dev",
            skillSet:[
                {
                    tech: "Node.js",
                    techLevel: "Begineer",
                    logo: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
                },
                {
                    tech: "Mongo DB",
                    techLevel: "Beginner",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                },
                {
                    tech: "Express Js",
                    techLevel: "Begineer",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
                },
                {
                    tech: "Java",
                    techLevel: "Experience",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                },
            ]
        },
        {
            title: "Version Control",
            skillSet:[
                {
                    tech: "GIT",
                    techLevel: "Experienced",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                },
                {
                    tech: "GitHub",
                    techLevel: "Experienced",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                },
            ]
        },
        {
            title: "Automation",
            skillSet:[
                {
                    tech: "Selenium",
                    techLevel: "Experienced",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg"
                },
                {
                    tech: "Test NG",
                    techLevel: "Experienced",
                    logo: "https://img.icons8.com/?size=100&id=6zuOQZWaG3mZ&format=png&color=000000"
                },
                {
                    tech: "Puppeteer",
                    techLevel: "Begineer",
                    logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/puppeteer/puppeteer-original.svg"
                },
                {
                    tech: "Mocha",
                    techLevel: "Begineer",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg"
                }
            ]
        },
        {
            title: "Accessibility",
            skillSet:[
                {
                    tech: "WCAG 2.2",
                    techLevel: "Experienced",
                    logo: "https://img.icons8.com/?size=100&id=39859&format=png&color=000000"
                },
                {
                    tech: "ARIA Design Patterns",
                    techLevel: "Experienced",
                    logo: "https://img.icons8.com/?size=100&id=39859&format=png&color=000000"
                },
                {
                    tech: "Mobile Accessibility",
                    techLevel: "Experienced",
                    logo: "https://img.icons8.com/?size=100&id=39859&format=png&color=000000"
                },
            ]
        }
    ];

    return(
        <Section id="skills" section={
            <>
                <Col lg={12} className="gap-2">
                    <SectionHeading title="Skills" level="2"/>
                    <Row className="skills-details p-2 justify-content-center">
                        <SkillDetails skills={skills}></SkillDetails>
                    </Row>
                </Col>
            </>
        }>
        </Section>
    );
}