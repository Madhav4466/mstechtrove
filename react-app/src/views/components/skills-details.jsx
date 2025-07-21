import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function SkillDetails({skills}) {
    const gridView= () => {
        return skills.map((skill, skillIndex) => {
            return(
                <Fragment key={skillIndex}>
                    {
                        skill.skillSet.map((set, setId) => {
                            return(
                                <Col key={setId} lg={2} sm={4} xs={6} className="justify-content-center p-1" role="listitem">
                                    <Container className="p-3 card-elevated">
                                        <Row className="mb-4">
                                            <Col lg={12}>
                                                <img src={set.logo} alt="" style={{"height": "100%", "width": "50%"}}/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                                <h3 className="h6">{set.tech}</h3>
                                                <p className="text-body-secondary">{set.techLevel}</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            );
                        })
                    }
                </Fragment>
            );
        });
    }

    const listView = () => {
        return(
            <>
            </>
        );
    }

    return(
        <>
            {
                gridView()
            }
            {
                listView()
            }
        </>
    );
}