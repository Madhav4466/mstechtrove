import { Col, Row } from "react-bootstrap";
import Section from "../page_sections/section";
import SectionHeading from "../../components/section-heading";
import Card from "../../components/workplace/card";

export default function WorkplaceSection({workplace}) {
    console.log(workplace)
    const categories = [...new Set(workplace.map(item => item.category))];
    console.log(categories)

    return(
        <>
            {categories.map((category, index) => {
                return(
                    <Section key={index} id={category} section={
                        <>
                            <Col lg={12} className="gap-2">
                                <SectionHeading title={`${category.charAt(0).toUpperCase() + category.slice(1)}`} level="2"/>
                                <Row className={`${category} p-2 justify-content-center`} role="list" aria-label={category}>
                                    { workplace.filter((item) => item.category === category).map((cat, categoryId) => {
                                        return <Card key={categoryId} category={cat} sectionName={category} categoryId={categoryId}/>
                                    })}
                                </Row>
                            </Col>
                        </>
                    }>
                    </Section>
                );
            })}
        </>
    );
}