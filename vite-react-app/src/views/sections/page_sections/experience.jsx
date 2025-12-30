import React from "react"
import Section from "./section"
import { Col, Row } from "react-bootstrap"
import '../../../styles/sections/page_sections/experience.css';
import SectionHeading from "../../components/section-heading";
import ExperienceTimeline from "../../components/timeline";

export default function Experience() {
    const experience = [
        {
            companyName: "EPAM Systems India Pvt. Ltd.",
            roleSummary: [
                {
                    role: "Senior Software Testing Engineer",
                    employementType: "Full Time",
                    location: "Pune, India",
                    locationType: "Remote",
                    startDate: "Sep 15, 2025",
                    endDate: "Present",
                    description: "",
                    color: " #795423"
                },
            ]
        },
        {
            companyName: "Tekvision Softtech and Accessibility LLP",
            roleSummary: [
                {
                    role: "Accessibility Lead",
                    employementType: "Full Time",
                    location: "Pune, India",
                    locationType: "Remote",
                    startDate: "Apr 01, 2019",
                    endDate: "Sep 12, 2025",
                    description: "",
                    color: " #795423"
                },
                // {
                //     role: "Senior Software Engineer",
                //     employementType: "Full Time",
                //     location: "Pune, India",
                //     locationType: "Hybrid",
                //     startDate: "Apr-2022",
                //     endDate: "May-2023",
                //     description: "",
                //     color: "#4CADAD"
                // },
                // {
                //     role: "Software Engineer",
                //     employementType: "Full Time",
                //     location: "Pune, India",
                //     locationType: "On-Site",
                //     startDate: "Oct-2020",
                //     endDate: "Mar-2022",
                //     description: "",
                //     color: "#1B5F8C"
                // },
                // {
                //     role: "Software Tester cum Developer",
                //     employementType: "Full Time",
                //     location: "Pune, India",
                //     locationType: "On-Site",
                //     startDate: "Oct-2019",
                //     endDate: "Sep-2020",
                //     description: "",
                //     color: "#E24A68"
                // },
                // {
                //     role: "Accessibility Tester",
                //     employementType: "Full-Time",
                //     location: "Pune, India",
                //     locationType: "On-Site",
                //     startDate: "Apr-2019",
                //     endDate: "Sep-2019",
                //     description: "",
                //     color: "#FBCA3E"
                // },
                {
                    role: "Accessibility Trainee Tester",
                    employementType: "Internship",
                    location: "Pune, India",
                    locationType: "On-Site",
                    startDate: "Oct 22, 2018",
                    endDate: "Mar 31, 2019",
                    description: "",
                    color: "#41516C"
                }
            ]
        }
    ];

    return(
        <Section id="experience" section={
            <>
                <Col lg={12} className="gap-2">
                    <SectionHeading title="Experience" level="2"/>
                    <Row>
                        <ExperienceTimeline timeline={experience}/>
                    </Row>
                </Col>
            </>
        }>
        </Section>
    )
}