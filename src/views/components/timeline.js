import React, { Fragment } from "react";
import '../../styles/components/timeline.css'
import { Col, Row } from "react-bootstrap";

export default function ExperienceTimeline({timeline}) {
    return(
        <Col lg={12}>
           
            {
                timeline.map((exp, expId) => {
                    return (
                        <Fragment key={expId}>
                            <Row>
                                <h3 className="h4 text-body-secondary">{exp.companyName}</h3>
                                <p className="">Total Experience: </p>
                            </Row>
                            <Row>
                                <ul>
                                    {
                                       exp.roleSummary.map((roleDetails, roleId) => {
                                            return(
                                                <li key={roleId} style={{"--accent-color":roleDetails.color}}>
                                                    <div className="date">{roleDetails.startDate}</div>
                                                    <div className="title">{roleDetails.role}</div>
                                                    <div className="descr">
                                                        <p>{roleDetails.employmentType}</p>
                                                        <p>{roleDetails.location}</p>
                                                        <p>{roleDetails.startDate}-{roleDetails.endDate}</p>
                                                    </div>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </Row>
                        </Fragment>
                    );
                })
            }
        </Col>
    );
}