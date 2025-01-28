import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ColorCodeConverter from "../../../../scripts/workplace/apps/color-code-converter";
import ColorGenerator from "../../../../scripts/workplace/apps/color-generator";
import { MdHelp, MdOutlineSwapHorizontalCircle, MdOutlineSwapVert } from "react-icons/md";

export default function ColorContrastCalculator() {
    const [validated, setValidated] = useState(false);
    const[result, setResult] = useState('');
    const[bgColorType, setBGColorType] = useState('rgb');
    const[fgColorType, setFGColorType] = useState('rgb');
    const[bgColorValue, setBGColorValue] = useState('');
    const[fgColorValue, setFGColorValue] = useState('');
    const colorFormats = {
        rgb: {
            bg: 'rgb(0, 0, 0)',
            fg: 'rgb(255, 255, 255)',
        },
        hex: {
            bg: '#000000',
            fg: '#FFFFFF',
        },
        name: {
            bg: 'black',
            fg: 'white',
        },
    }

    useEffect(() => {
        setBGColorValue(colorFormats[bgColorType].bg);
        setFGColorValue(colorFormats[fgColorType].fg);
    }, []);

    const handleColorValue = (e) => {
        const {value, name} = e.target;
        if(name === "foreground") {
            setFGColorValue(value);
        }
        else if(name === "background") {
            setBGColorValue(value);
        }
    }

    const switchColorType = (e) => {
        let switchedFGColorType, switchedBGColorType, switchedFGColorValue, switchedBGColorValue;
        if(fgColorType === "rgb"){
            switchedBGColorType = 'hex';
            switchedFGColorType = "hex";
            switchedFGColorValue = ColorCodeConverter.convertRGBToHex(fgColorValue);
            switchedBGColorValue = ColorCodeConverter.convertRGBToHex(bgColorValue) ;
        
        }
        else if(fgColorType === "hex") {
            switchedFGColorType = 'rgb';
            switchedBGColorType = "rgb";
            switchedFGColorValue = ColorCodeConverter.convertHexToRgb(fgColorValue);
            switchedBGColorValue = ColorCodeConverter.convertHexToRgb(bgColorValue);
            
        }
        setFGColorType(switchedFGColorType);
        setBGColorType(switchedBGColorType);
        setBGColorValue(switchedBGColorValue);
        setFGColorValue(switchedFGColorValue);
    }

    const swapColorValue = (e) => {
        setBGColorValue(fgColorValue);
        setFGColorValue(bgColorValue);
    }

    const getBGPlaceholder = () => {
        return bgColorValue === '' ? colorFormats[bgColorType].bg : '';
    }

    const getFGPlaceholder = () => {
        return fgColorValue === '' ? colorFormats[fgColorType].fg : '';
    }

    
    const handleConvert = () => {
        // if(colorType !== "") {
        //     const convertion = colorType === "rgb" ? ColorCodeConverter.convertRGBToHex(...colorValue.split(',')) : ColorCodeConverter.convertHexToRgb(colorValue);
        //     setResult(convertion);
        // }
    }

    const applyColorToResult = () => {
        if(result !== ''){
            if(result instanceof Array) {
                const textColor = ColorGenerator.generatetCompliantForegroundColor(result);
                return {background: `rgb(${result[0]}, ${result[1]}, ${result[2]})`, foreground: `rgb(${textColor[0]}, ${textColor[1]}, ${textColor[2]})`}
            }
            else {
                const resultToRGB = ColorCodeConverter.convertHexToRgb(result);
                const textColor = ColorGenerator.generatetCompliantForegroundColor(resultToRGB);
                return {background: `rgb(${resultToRGB[0]}, ${resultToRGB[1]}, ${resultToRGB[2]})`, foreground: `rgb(${textColor[0]}, ${textColor[1]}, ${textColor[2]})`}
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
                        <Form.Group as={Row} className="justify-content-center text-start d-flex rounded p-4" controlId="foreground" style={{background: fgColorValue, color: bgColorValue}}>
                            <Form.Label column lg={3} className="p-2 d-flex align-items-center rounded">Foreground</Form.Label>
                            <Col lg={6} className="p-2 d-flex align-items-center rounded">
                                <Form.Control type="text" placeholder={getFGPlaceholder()} name="foreground" value={fgColorValue} onChange={handleColorValue} required />
                                <Form.Control.Feedback type="invalid">Please provide Color Format</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="justify-content-center text-start d-flex rounded" controlId="swapper">
                            <Col lg={6} className="p-2 d-flex align-items-center justify-content-center rounded gap-1">
                                <Button variant="light" onClick={switchColorType}><MdOutlineSwapHorizontalCircle /></Button>
                                <Button variant="light" onClick={swapColorValue}><MdOutlineSwapVert /></Button>
                                <Button variant="light"><MdHelp /></Button>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="justify-content-center text-start d-flex rounded p-4" controlId="background" style={{background: bgColorValue, color: fgColorValue}}>
                            <Form.Label column lg={3} className="p-2 d-flex align-items-center rounded">Background</Form.Label>
                            <Col lg={6} className="p-2 d-flex align-items-center rounded">
                                <Form.Control type="text" placeholder={getBGPlaceholder()} name="background" value={bgColorValue} onChange={handleColorValue} />
                                <Form.Control.Feedback type="invalid">Please provide Color Format</Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                    </Form>
                    {/* { result !== '' ? 
                        // <Row className="justify-content-center text-start d-flex mt-3" >
                        //     <Col lg={12} className="p-4 d-flex align-items-center rounded" style={{background: applyColorToResult().background}}>
                        //         <Col lg={6} style={{color: applyColorToResult().foreground}}>{colorType === "rgb" ? result : applyColorToResult().background}</Col>
                        //     </Col>
                        // </Row> :""
                    } */}
                </Container>
            </Col>
        </Row>
    );
}