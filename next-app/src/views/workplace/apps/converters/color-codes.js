import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ColorCodeConverter from "../../../../scripts/workplace/apps/color-code-converter";
import ColorGenerator from "../../../../scripts/workplace/apps/color-generator";

export default function ColorConverter() {
    const [validated, setValidated] = useState(false);
    const[colorValue, setColorValue] = useState('');
    const[result, setResult] = useState('');
    const[colorType, setColorType] = useState('');

    const handleColorValue = (e) => {
        setColorValue(e.target.value);
    }

    const handleColorTypeChange = (e) => {
        setColorType(e.target.value);
    }

    const getPlaceholder = () => {
        if(colorType !== "") {
            return colorType === "rgb" ? "rgb(0, 0, 0)" : "#000000";
        }
        else { return "Select the color format"; } 
    }
    
    const handleConvert = () => {
        if(colorType !== "") {
            const convertion = colorType === "rgb" ? ColorCodeConverter.convertRGBToHex(colorValue) : ColorCodeConverter.convertHexToRgb(colorValue);
            setResult(convertion);
        }
    }

    const applyColorToResult = () => {
        if(result !== ''){
            if(colorType && colorType === "rgb") {
                const resultToRGB = ColorCodeConverter.convertHexToRgb(result);
                const rgbValues = resultToRGB.replace('rgb(', '').replace(')', '').split(",");
                const textColor = ColorGenerator.generatetCompliantForegroundColor(rgbValues);
                return {background: resultToRGB, foreground: `rgb(${textColor.join(", ")})`}
            }
            else {
                const rgbValues = result.replace('rgb(', '').replace(')', '').split(",");
                const textColor = ColorGenerator.generatetCompliantForegroundColor(rgbValues);
                return {background: result, foreground: `rgb(${textColor.join(", ")})`}
            }
        }
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return(
        <Row className='justify-content-center flex-column align-items-center gap-3'>
            <Col lg={6} id="converter-container">
                <Container className="color-converter p-0">
                    <Form className='p-4 text-bg-dark rounded' noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="justify-content-center text-start d-flex" controlId="dob">
                            <Col lg={4} className="p-4 d-flex align-items-center rounded">
                            <Form.Select aria-label="Default select example" value={colorType} onChange={handleColorTypeChange}>
                                <option value="" disabled>Select Color Format</option>
                                <option value="rgb">RGB</option>
                                <option value="hex">HEX</option>
                            </Form.Select>
                            </Col>
                            <Col lg={4} className="p-4 d-flex align-items-center rounded">
                                <Form.Control type="text" placeholder={getPlaceholder()} value={colorValue} onChange={handleColorValue} />
                                <Form.Control.Feedback type="invalid">Please provide your Date of Birth</Form.Control.Feedback>
                            </Col>
                            <Col lg={4} className="p-4 d-flex justify-content-center rounded">
                                <Button type="submit" variant="light" onClick={handleConvert} disabled={colorType === "" ? true : false}>Convert</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                    { result !== '' ? 
                        <Row className="justify-content-center text-start d-flex mt-3" >
                            <Col lg={12} className="p-4 d-flex align-items-center rounded" style={{background: applyColorToResult().background}}>
                                <Col lg={6} style={{color: applyColorToResult().foreground}}>{colorType === "rgb" ? result : applyColorToResult().background}</Col>
                            </Col>
                        </Row> :""
                    }
                </Container>
            </Col>
        </Row>
    );
}