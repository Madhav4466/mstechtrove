import React from "react";
import Section from "./section";
import { Col, Row } from "react-bootstrap";
import SectionHeading from "../../components/section-heading";
import EducationDetails from "../../components/education-details";

export default function Education() {
    const education = [
        {
            title: "MCA - Masters in Computer Application",
            college: "Dr. D. Y. Patil Institute of MCA and Management, Akurdi, Pune",
            image: "https://images.shiksha.com/mediadata/images/1654973011php99YNZE.jpeg",
            university: "Savitribai Phule Pune University",
            courseDuration: "2016-2019", 
            cgpa: "7.8",
            grade: "A"
        },
        {
            title: "BCA - Bachelor of Computer Application",
            college: "KCE's Moolji Jaitha Collage, Jalgaon",
            image: "https://cache.careers360.mobi/media/schools/social-media/media-gallery/26144/2020/10/25/download%20_1_.png",
            university: "North Maharashtra University",
            courseDuration: "2013-2016",
            cgpa: "7.6",
            grade: "A"
        }
    ];

    return(
        <Section id="education" section={
            <>
                <Col lg={12} className="gap-2">
                    <SectionHeading title="Education" level="2"/>
                    <Row className="education-details p-2">
                        <EducationDetails education={education}/>
                    </Row>
                </Col>
            </>
        }>
        </Section>
    );
}