import { Col, Row } from "react-bootstrap";
import Section from "../page_sections/section";
import SectionHeading from "../../components/section-heading";
import Card from "../../components/workplace/card";

export default function WorkplaceSection({workplace}) {
    return(
        <>
            {
                Object.keys(workplace).map((workSection) =>{
                    return(
                        <Section key={workSection} id={workSection} section={
                            <>
                                <Col lg={12} className="gap-2">
                                    <SectionHeading title={`${workSection.charAt(0).toUpperCase() + workSection.slice(1)}`} level="2"/>
                                    <Row className={`${workSection} p-2 justify-content-center`} role="list" aria-label={workSection}>
                                        <Card workplaceSection={workplace[workSection]} sectionName={workSection}/>
                                    </Row>
                                </Col>
                            </>
                        }>
                        </Section>
                    );
                })
            }
        </>
    );
}