import React, { Fragment } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppsNavigation({appType, apps, appContent}) {
    return(
        <Tab.Container id="apps" defaultActiveKey={`${apps[0].title.toLowerCase().replace(" ", "-")}`} expand="lg" bg="light" data-bs-theme="light">
            <Container className="justify-content-end">
                <Row className="py-4 px-2">
                    <Col lg={12}>
                        <Nav variant="pills" style={{"fixed": "top"}} className="d-flex flex-row" aria-label="Apps">
                                <Nav.Item className="">
                                    <Nav.Link as={Link} to={`/workplace`} eventKey={"backToWorkplace"}>Back to Workplace</Nav.Link>
                                </Nav.Item>
                            {apps.map((app, appId) => {
                                const { title: appTitle } = app;
                                const modifiedTitle = `${appTitle.toLowerCase().replace(" ", "-")}`;
                                return(
                                    <Fragment key={appId}>
                                        <Nav.Item className="">
                                            <Nav.Link as={Link} to={`#`} eventKey={modifiedTitle}>{appTitle}</Nav.Link>
                                        </Nav.Item>
                                    </Fragment>
                                );
                            })}
                        </Nav>
                    </Col>
                </Row>
                {appContent}
            </Container>
    </Tab.Container>
    );
}