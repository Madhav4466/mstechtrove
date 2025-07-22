import React, { Fragment } from "react";
import '../../styles/components/timeline.css'
import { Col, Row } from "react-bootstrap";
import { yearAndMonthsCalculator } from "../../scripts/workplace/apps/date-time-calc";

export default function ExperienceTimeline({timeline}) {
    const workingSince = "Oct 22, 2018";
    let error = yearAndMonthsCalculator(workingSince).error &&  yearAndMonthsCalculator(workingSince).error;
    let { years, months } = !yearAndMonthsCalculator(workingSince).error && yearAndMonthsCalculator(workingSince);

    return(
        <Col lg={12}>
            { timeline.map((exp, expId) => {
                return (
                    <Fragment key={expId}>
                        <Row>
                            <p className="h4 text-body-secondary">{exp.companyName}</p>
                            <p className="text-body-secondary h6">Total Experience: { !error ? `${years} Years, ${months} Months` : <span className="text-danger">{error}</span>}</p>
                        </Row>
                        <Row>
                            <ul>
                                { exp.roleSummary.map((roleDetails, roleId) => {
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
                                })}
                            </ul>
                        </Row>
                    </Fragment>
                )})
            }
        </Col>
    );
}