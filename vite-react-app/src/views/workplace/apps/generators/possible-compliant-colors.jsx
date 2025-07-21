import React, { useState } from 'react';
import '../../../../styles/apps/generators/color-enhancer.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ColorGenerator from '../../../../scripts/workplace/apps/color-generator';
import ColorCodeConverter from '../../../../scripts/workplace/apps/color-code-converter';
import ColorPalleteGenerator from '../../../../scripts/workplace/apps/color-pallete';
import ColorContrastChecker from '../../../../scripts/workplace/apps/ccc';

export default function PossibleAccessibleColors() {
    const [validated, setValidated] = useState(false);
    const[colorValue, setColorValue] = useState('');
    const[result, setResult] = useState('');
    const[colorType, setColorType] = useState('');
    const[colorPallete, setColorPallete] = useState([]);
    const[visibleItems, setVisibleItems] = useState(20);

    const loadMoreItems = () => {
        setVisibleItems(prevCount => prevCount + 20);
    }

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
            setVisibleItems(20);
            const colorValueToRGB = colorType === "hex" ? ColorCodeConverter.convertHexToRgb(colorValue) : colorValue.replace("rgb(", "").replace(")", "").split(",");
            let  pallete = ColorPalleteGenerator.generatePalleteForColor(colorValueToRGB);
            setColorPallete(Array.from(pallete));
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

    const getContrastRatio = (fgColor, bgColor) => {
        const contrastRatio = ColorContrastChecker.getContrastRatio(fgColor.replace("rgb(", "").replace(")", "").split(","), bgColor);
        return contrastRatio;
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
            <Col lg={12} id="converter-container">
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
                                <Form.Control.Feedback type="invalid">Please provide valid color code</Form.Control.Feedback>
                            </Col>
                            <Col lg={4} className="p-4 d-flex justify-content-center rounded">
                                <Button type="submit" variant="light" onClick={handleConvert} disabled={colorType === "" ? true : false}>Generate</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                    { colorPallete.length > 0 ? 
                        <>
                            <Row className="justify-content-center text-start d-flex mt-3" >
                                <h2 className='h4 text-center'>Compliant Colors for {colorValue}</h2>
                                {colorPallete.slice(0, visibleItems).map((color, index) => {
                                    return <Button key={index} as={Col} lg={2} md={4} sm={4} xs={6} className="flip-card p-2 d-flex align-items-center align-content-center justify-content-center rounded" style={{background: `rgb(${color.join(",")})`, border: "unset"}}>
                                        <div className="flip-card-inner" style={{background: `rgb(${color.join(",")})`}}>
                                            <Col lg={12} className='flip-card-front align-content-center text-center' style={{color: colorValue}}></Col>
                                            <Col lg={12} className='flip-card-back align-content-center text-center' style={{background: `rgb(${color.join(",")})`}}>
                                                <p style={{color: colorValue}}>Provided Color: {colorValue}</p>
                                                <p style={{color: colorValue}}>Background Color: {`rgb(${color.join(",")})`}</p>
                                                <p style={{color: color}}>Contrast Ratio: {getContrastRatio(colorValue, color)}</p>
                                            </Col>
                                        </div>
                                    </Button>
                                })}
                            </Row>
                            <Row className="justify-content-center text-start d-flex mt-3 gap-2">
                                { visibleItems < colorPallete.length && (
                                    <Col lg={3}>
                                        <Button variant='primary' value={"Load More"} onClick={loadMoreItems}>Load More</Button>
                                    </Col>   
                                )}
                            </Row>
                        </>
                        :""
                    }
                </Container>
            </Col>
        </Row>
    );
}