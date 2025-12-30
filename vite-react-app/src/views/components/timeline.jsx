import React, { Fragment } from "react";
import '../../styles/components/timeline.css'
import { Col, Row } from "react-bootstrap";
import { yearAndMonthsCalculator } from "../../scripts/workplace/apps/date-time-calc";

export default function ExperienceTimeline({timeline}) {
    const computeCompanyExperience = (roleSummary) => {
        let totalMonths = 0;
        for (const role of roleSummary) {
            const start = role.startDate;
            let end = role.endDate;
            if (!end) end = undefined;
            if (typeof end === 'string' && end.toLowerCase().includes('present')) end = undefined;

            const res = yearAndMonthsCalculator(start, end);
            if (res && res.error) return { error: res.error };
            const y = res.years || 0;
            const m = res.months || 0;
            totalMonths += (y * 12) + m;
        }

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
        return { years, months };
    }
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