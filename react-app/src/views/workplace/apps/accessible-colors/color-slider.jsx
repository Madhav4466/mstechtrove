import React from "react";
import { Col, Form } from "react-bootstrap";

export default function ColorSlider({ controlId, colorPallete, currentColor, sliderValue, handleSliderChange, label}) {
    const gradientStyle = colorPallete.length === 1 ? colorPallete[0] : `linear-gradient(to right, ${colorPallete.join(",")})`;
    const maxSliderValue = colorPallete.length > 1 ? colorPallete.length - 1 : 1;
    return(
        <Col lg={6} className="d-flex flex-column justify-content-center gap-2 p-2">
            <Form.Label className="text-start" htmlFor={controlId}>{label}</Form.Label>
            <Form.Control 
                id={controlId} 
                type="range" 
                min="0" 
                max={maxSliderValue} 
                step="1" 
                value={sliderValue} 
                aria-label={`The Accessible forground should be ${currentColor}`} 
                onChange={handleSliderChange} 
                style={{background: gradientStyle}}
                disabled={colorPallete.length === 1}
            />
            <Form.Label className="text-start small">{colorPallete.length} Accessible Colors</Form.Label>
        </Col>
    )
}