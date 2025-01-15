import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ColorGenerator from "../../../../scripts/workplace/apps/color-generator";
import ColorCodeConverter from "../../../../scripts/workplace/apps/color-code-converter";
import { FaCheck, FaRegCopy } from "react-icons/fa";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { Link } from "react-router-dom";

export default function RandomColorGenerator() {
    const[result, setResult] = useState('');
    const[colorType, setColorType] = useState('rgb');
    const[isCopied, setIsCopied] = useState(false);
    
    const handleGenerate = () => {
        const color = ColorGenerator.generateRandomColor();
        setResult(color);
    }

    const convertColorType = () => {
        if(colorType === "rgb") {
            setColorType('hex');
            const res = ColorCodeConverter.convertRGBToHex(...result);
            setResult(res);
        }
        else {
            setColorType('rgb')
            const res = ColorCodeConverter.convertHexToRgb(result);
            setResult(res);
        }
    }

    const handleCopy = () => {
        const resultToCopy = colorType === "rgb" ? `rgb(${result[0]}, ${result[1]}, ${result[2]})`: result; 
        navigator.clipboard.writeText(resultToCopy).then(() => {
            setIsCopied(true);
            setTimeout(()=> {setIsCopied(false)}, 2000);
        });
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

    return(
        <Row className='justify-content-center flex-column align-items-center gap-3'>
            <Col lg={6} id="converter-container">
                <Container className="color-converter p-0">
                    <Row className='p-4 rounded text-bg-dark'>
                        <Form.Group as={Row} className="justify-content-center text-start d-flex" controlId="dob">
                            <Col lg={4} className="p-4 d-flex justify-content-center rounded">
                                <Button type="submit" variant="light" onClick={handleGenerate}>Generate Color</Button>
                            </Col>
                        </Form.Group>
                    </Row>
                    { result !== '' ? 
                        <Row className="justify-content-center text-start d-flex mt-3" >
                            <Col lg={12} className="p-4 d-flex align-items-center rounded" style={{background: applyColorToResult().background}}>
                                <Col lg={4}>{colorType === 'rgb' ? `rgb(${result[0]}, ${result[1]}, ${result[2]})` : result}</Col>
                                <Col lg={8} className="d-flex gap-2">
                                    <Button type="submit" variant="light" onClick={handleCopy} title="Copy Result">{isCopied ? <FaCheck /> :<FaRegCopy />}</Button>
                                    <Button type="submit" variant="light" onClick={convertColorType} title={colorType === 'rgb' ? "Convert to HEX" : "Convert to RGB"}><MdOutlineSwapHorizontalCircle /></Button>
                                    <Button type="button" variant="light" as={Link} to="/workplace/apps/converters" title="Convert to">See Converter</Button>
                                    <Button type="submit" variant="light" as={Link} to="/workplace/apps/calculators" title="Convert to">Contrast Checker</Button>
                                </Col>
                            </Col>
                        </Row> :""
                    }
                </Container>
            </Col>
        </Row>
    );
}