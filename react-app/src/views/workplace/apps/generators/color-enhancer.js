import React, { useState } from 'react';
import '../../../../styles/apps/generators/color-enhancer.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import ColorGenerator from '../../../../scripts/workplace/apps/color-generator';
import ColorCodeConverter from '../../../../scripts/workplace/apps/color-code-converter';
import ColorPalleteGenerator from '../../../../scripts/workplace/apps/color-pallete';
import ColorContrastChecker from '../../../../scripts/workplace/apps/ccc';
import ColorContrastEnhancer from '../../../../scripts/workplace/apps/color-enhancer';

export default function ColorEnhancer() {
    const [validated, setValidated] = useState(false);
    const[colorValue, setColorValue] = useState('');
    const[bgColor, setBGColor] = useState('');
    const[fgColor, setFGColor] = useState('');
    const[result, setResult] = useState('');
    const[colorType, setColorType] = useState('');
    const[conversionFor, setConversionFor] = useState('regular-min');
    const[colorPallete, setColorPallete] = useState([]);
    const[visibleItems, setVisibleItems] = useState(20);

    const loadMoreItems = () => {
        setVisibleItems(prevCount => prevCount + 20);
    }

    const handleColorValue = (e) => {
        setColorValue(e.target.value);
    }
    const handleBGColor = (e) => {
        setBGColor(e.target.value);
    }
    const handleFGColor = (e) => {
        setFGColor(e.target.value);
    }

    const handleColorTypeChange = (e) => {
        setColorType(e.target.value);
    }

    const handleConversionForChange = (e) => {
        setConversionFor(e.target.value);
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

    const generateColorSuggestions = () => {
        let accessiblePallete = ColorContrastEnhancer.generateColorSuggestions(fgColor, bgColor, conversionFor, 50);
        setColorPallete(accessiblePallete);
    };
    
    const getContrastRatio = (fgColor, bgColor) => {
        let fgRGB = ColorCodeConverter.convertHexToRgb(fgColor);
        let bgRGB = ColorCodeConverter.convertHexToRgb(bgColor);
        const contrastRatio = ColorContrastChecker.getContrastRatio(fgRGB.replace("rgb(", "").replace(")", "").split(","), bgRGB.replace("rgb(", "").replace(")", "").split(","));
        return contrastRatio;
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
            <Col lg={12} id="converter-container">
                <Container className="color-converter p-0">
                    <Form className={`p-4 text-bg-dark rounded`} noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="justify-content-center text-start d-flex" >
                            <Col lg={2} className="p-4 d-flex flex-column text-start rounded">
                                <Form.Label htmlFor="colorFormat">Color Format</Form.Label>
                                <Form.Select id="colorFormat" aria-label="Default select example" value={colorType} onChange={handleColorTypeChange}>
                                    <option value="" disabled>Select Color Format</option>
                                    <option value="rgb">RGB</option>
                                    <option value="hex">HEX</option>
                                </Form.Select>
                            </Col>
                            <Col lg={2} className="p-4 d-flex text-start rounded flex-column">
                                <Form.Label htmlFor="foreground">Foreground</Form.Label>
                                <Form.Control id="foreground" type="text" placeholder={getPlaceholder()} value={fgColor} onChange={handleFGColor} />
                                <Form.Control.Feedback type="invalid">Please provide valid color code</Form.Control.Feedback>
                            </Col>
                            <Col lg={2} className="p-4 d-flex flex-column text-start rounded">
                                <Form.Label htmlFor="background">Background</Form.Label>
                                <Form.Control id="background" type="text" placeholder={getPlaceholder()} value={bgColor} onChange={handleBGColor} />
                                <Form.Control.Feedback type="invalid">Please provide valid color code</Form.Control.Feedback>
                            </Col>
                            <Col lg={2} className="p-4 d-flex flex-column text-start rounded">
                                <Form.Label htmlFor="colorFor">Color For</Form.Label>
                                <Form.Select id="colorFor" value={conversionFor} onChange={handleConversionForChange}>
                                    <option value="regularText-min">Regular Text (Minimum)</option>
                                    <option value="largerText-min">Larger Text (Minimum)</option>
                                    <option value="regularText-enhanced">Regular Text (Enhanced)</option>
                                    <option value="largerText-enhanced">Larger Text (Enhanced)</option>
                                    <option value="non-text">Non-Text Contrast</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">Please provide valid color code</Form.Control.Feedback>
                            </Col>
                            <Col lg={2} className="p-4 d-flex flex-column justify-content-center rounded">
                                <Form.Label></Form.Label>
                                <Button type="submit" variant="light" className='mt-4' onClick={generateColorSuggestions} disabled={colorType === "" ? true : false}>Generate</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                    {bgColor && fgColor ? <Row className='p-3'>
                        <h2 className='h4'>Color Combination Preview</h2>
                        <Col lg={12} className='p-4 rounded' style={{background: bgColor}}>
                            <Col style={{color: fgColor}}>Foreground Color: {fgColor}</Col>
                            <Col style={{color: fgColor}}>Background Color: {bgColor}</Col>
                            <Col style={{color: fgColor}}>Contrast Ratio: {getContrastRatio(fgColor, bgColor)}</Col>
                        </Col>
                    </Row> : ""}
                    { colorPallete.length > 0 ? 
                        <>
                            <Row className="justify-content-center text-start d-flex mt-3" >
                                <h2 className='h4 text-center'>Closest Possible Accessible Colors</h2>
                                {colorPallete.slice(0, visibleItems).map((color, index) => {
                                    return <Button key={index} as={Col} lg={2} md={4} sm={4} xs={6} className="flip-card p-2 d-flex align-items-center align-content-center justify-content-center rounded" style={{background: color, border: "unset"}}>
                                        <div className="flip-card-inner" style={{background: color}}>
                                            <Col lg={12} className='flip-card-front align-content-center text-center' style={{color: bgColor}}></Col>
                                            <Col lg={12} className='flip-card-back align-content-center text-center' style={{background: bgColor}}>
                                                <p style={{color: color}}>Foreground Color: {color}</p>
                                                <p style={{color: color}}>Background Color: {bgColor}</p>
                                                <p style={{color: color}}>Contrast Ratio: {getContrastRatio(color, bgColor)}</p>
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