import React from "react";
import { Col, Row, Tab } from "react-bootstrap";

export default function AppContent ({appType, apps}) {
    return(
        <Row className="p-3">
                    <Col lg={12} className="p-2">
                        <Tab.Content>
                            {apps.map((app, appId) => {
                                const { title, component } = app;
                                const modifiedTitle = title.toLowerCase().replace(' ', '-');
                                return (
                                    <Tab.Pane eventKey={modifiedTitle} key={appId}>
                                        <h2>{title}</h2>
                                        {component}
                                    </Tab.Pane>
                                );
                            })}
                        </Tab.Content>
                    </Col>
                </Row>
    );
}