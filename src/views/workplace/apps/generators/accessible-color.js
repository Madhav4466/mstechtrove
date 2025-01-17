import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ColorGenerator from "../../../../scripts/workplace/apps/color-generator";
import ColorCodeConverter from "../../../../scripts/workplace/apps/color-code-converter";
import { FaCheck, FaRegCopy } from "react-icons/fa";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import ColorContrastChecker from "../../../../scripts/workplace/apps/ccc";

export default function AccessibleColorGenerator() {
    const [result, setResult] = useState({
        background: '',
        foreground: '',
        contrastRatio: ''
    });
    const[colorType, setColorType] = useState('rgb');
    const[isCopied, setIsCopied] = useState(false);

    const setNewResult = (foreground, background, ratio) => {
        setResult(prevState => ({
            ...prevState,
            background: background,
            foreground: foreground,
            contrastRatio: ratio,
          }));
    }
    
    const handleGenerate = () => {
        const {foreground, background} = ColorGenerator.generateCompliantRandomColors();
        const contrastRatio = ColorContrastChecker.getContrastRatio(foreground, background);
        if(colorType !== "rgb") {
            const rgbBG = ColorCodeConverter.convertRGBToHex(`rgb(${background.join(",")})`);
            const rgbFG = ColorCodeConverter.convertRGBToHex(`rgb(${foreground.join(",")})`);
            console.log(rgbBG)
            setNewResult(rgbFG, rgbBG, contrastRatio)
        }
        else {
            setNewResult(`rgb(${background.join(",")})`, `rgb(${foreground.join(",")})`, contrastRatio);   
        }
    }

    const convertColorType = () => {
        if(result && result.background && result.foreground) {
            if(colorType === "rgb") {
                setColorType('hex');
                const hexBG = ColorCodeConverter.convertRGBToHex(result.background);
                const hexFG = ColorCodeConverter.convertRGBToHex(result.foreground);
                const contrastRatio = ColorContrastChecker.getContrastRatio(convertRGBToArray(result.foreground), convertRGBToArray(result.background));
                setNewResult(hexFG, hexBG, contrastRatio)
            }
            else {
                setColorType('rgb')
                const rgbBG = ColorCodeConverter.convertHexToRgb(result.background);
                const rgbFG = ColorCodeConverter.convertHexToRgb(result.foreground);
                const contrastRatio = ColorContrastChecker.getContrastRatio(convertRGBToArray(rgbFG), convertRGBToArray(rgbBG));
                setNewResult(rgbFG, rgbBG, contrastRatio)
            }
        }
    }

    const handleCopy = () => {
        if(result){
            const resultToCopy = JSON.stringify({"The Foreground color is ": result.foreground, "The background Color is": result.background, "The Contrast ratio is ": result.contrastRatio});
            navigator.clipboard.writeText(resultToCopy).then(() => {
                setIsCopied(true);
                setTimeout(()=> {setIsCopied(false)}, 2000);
            });
        }
    }

    const applyColorToResult = () => {
        if(result && result.background && result.foreground){
            return {background: result.background, foreground: result.foreground}
        }
    }

    const convertRGBToArray = (rgbValue) => {
        return rgbValue.replace("rgb(", "").replace(")", "").split(",");
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
                    { result && result.background && result.foreground ? 
                        <Row className="justify-content-center text-start d-flex mt-3" >
                            <Col lg={12} className="p-4 d-flex align-items-center justify-content-center rounded flex-wrap gap-2" style={{background: applyColorToResult().background}}>
                                <Col lg={8} style={{color: applyColorToResult().foreground}}>The Background Color is - {applyColorToResult().background}</Col>
                                <Col lg={8} style={{color: applyColorToResult().foreground}}>The Foreground Color is - {applyColorToResult().foreground}</Col>
                                <Col lg={8} style={{color: applyColorToResult().foreground}}>The Contrast Ratio is - {result.contrastRatio ? result.contrastRatio : "N/A"}</Col>
                                <Col lg={8} className="d-flex gap-3">
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