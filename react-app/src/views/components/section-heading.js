import React from "react";
import { Row } from "react-bootstrap";

export default function SectionHeading({title, level}) {
    return(
        <Row className="heading-section">
            <div role="heading" aria-level={level} className={`h${level}`}>
                {title}
            </div> 
        </Row>
    );
}