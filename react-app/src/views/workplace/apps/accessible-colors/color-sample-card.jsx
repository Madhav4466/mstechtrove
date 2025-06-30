import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function ColorSampleCard({ bgColor, fgColor, contrastRatio, cardTitle, cardDescription, children }) {
    const border = "solid 1px";
    return(
        <Row className="rounded d-flex p-4 gap-3" style={{background: "#000000"}}>
            <Col lg={8} className="text-start">
                <h3>{cardTitle}</h3>
                <p className="m-0 small">{cardDescription}</p>
                <p className="m-0">Foreground Color: {fgColor}</p>
                <p className="m-0">Background Color: {bgColor}</p>
                <p className="m-0">Contrast Ratio: {contrastRatio}</p>
            </Col>
            <Col lg={3} className="p-3 d-flex justify-content-center align-items-center rounded" style={{background: bgColor, border: border}}>
                <Col lg={8} className="rounded" style={{background: fgColor, height: "75px", width: "75px"}}></Col>
            </Col>
            {children && 
                <Col lg={12} className="p-3 rounded d-flex justify-content-center align-items-center gap-3">
                    {children}
                </Col>
            }
        </Row>
    );
}