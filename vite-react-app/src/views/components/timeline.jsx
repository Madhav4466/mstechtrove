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

    const newTimelineStyle = (exp) => {
        const total = computeCompanyExperience(exp.roleSummary);
        return (
            <div className="timeline">
                <details className="timeline-group" open /*style="--timeline-color:#3b82f6;"*/>
                <summary>
                    <div className="company-header">
                    <div>
                        <h3>{exp.companyName}</h3>
                        <p>
                            Total Experience:{" "} {!total.error ? (`${total.years} Years, ${total.months} Months`) : 
                            (<span className="text-danger">{total.error}</span>)}
                        </p>
                    </div>
                    <span className="chevron"></span>
                    </div>
                </summary>
                    <div className="timeline-content" role="list">
                        {exp.roleSummary.map((roleDetails, roleId) => {
                            return (
                                <div className="role" role="listitem" key={roleId}>
                                    <div className="role-date">
                                        <span className="month">{new Date(roleDetails.startDate).toLocaleString('default', { month: 'short' })}</span>
                                        <span className="day">{new Date(roleDetails.startDate).getDate()}</span>
                                    </div>
                                    <span className="time">{new Date(roleDetails.startDate).getFullYear()}-{isNaN(new Date(roleDetails.endDate).getFullYear()) ? "Present" : new Date(roleDetails.endDate).getFullYear()}</span>
                                    <h4 className="h5 fw-bold">{roleDetails.role}</h4>
                                    <p>Responsibilities</p>
                                </div>
                            );
                        })}
                    </div>
                </details>
            </div>
        );
    }

    const oldTimelineStyle = (expId, exp) => {
                return (
                    <Fragment key={expId}>
                        <Row>
                            <p className="h4 text-body-secondary">{exp.companyName}</p>
                    {(() => {
                        const total = computeCompanyExperience(exp.roleSummary);
                        return (
                            <p className="text-body-secondary h6">
                                Total Experience:{" "}{!total.error ? (`${total.years} Years, ${total.months} Months`) : 
                                (<span className="text-danger">{total.error}</span>)}
                            </p>
                        )
                    })()}
                        </Row>
                        <Row>
                            <ul>
                        {exp.roleSummary.map((roleDetails, roleId) => {
                        return (
                            <li
                            key={roleId}
                            style={{ "--accent-color": roleDetails.color }}
                            >
                            <div className="date">
                                {roleDetails.startDate}
                            </div>
                                            <div className="title">{roleDetails.role}</div>
                                            <div className="descr">
                                                <p>{roleDetails.employmentType}</p>
                                                <p>{roleDetails.location}</p>
                                <p>
                                {roleDetails.startDate}-{roleDetails.endDate}
                                </p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Row>
                    </Fragment>
        )
            }
        </Col>
    );
}