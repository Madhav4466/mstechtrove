import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import ColorCodeConverter from "../../../../scripts/workplace/apps/color-code-converter";
import { MdHelp, MdOutlineSwapHorizontalCircle, MdOutlineSwapVert } from "react-icons/md";
import ColorContrastChecker from "../../../../scripts/workplace/apps/ccc";

const colorFormats = {
    rgb: { bg: 'rgb(0, 0, 0)', fg: 'rgb(255, 255, 255)' },
    hex: { bg: '#000000', fg: '#FFFFFF' },
    name: { bg: 'black', fg: 'white' },
};

function convertRGBToArray(rgbValue) {
    return rgbValue.replace("rgb(", "").replace(")", "").split(",");
}

export default function ColorContrastCalculator() {
    const [colors, setColors] = useState({
        colorType: 'rgb',
        background: colorFormats.rgb.bg,
        foreground: colorFormats.rgb.fg
    });
    const [result, setResult] = useState('');
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (colors.background && colors.foreground) {
            const bgColor = colors.colorType === "rgb"
                ? colors.background
                : ColorCodeConverter.convertHexToRgb(colors.background);
            const fgColor = colors.colorType === "rgb"
                ? colors.foreground
                : ColorCodeConverter.convertHexToRgb(colors.foreground);
            const contrastRatio = ColorContrastChecker.getContrastRatio(
                convertRGBToArray(fgColor),
                convertRGBToArray(bgColor)
            );
            setResult(contrastRatio);
        }
    }, [colors]);

    const handleColorChange = (e) => {
        const { name, value } = e.target;
        setColors(prev => ({ ...prev, [name]: value }));
    };

    const toggleColorType = () => {
        setColors(prev => {
            const newType = prev.colorType === "rgb" ? "hex" : "rgb";
            return {
                ...prev,
                colorType: newType,
                foreground: newType === "hex"
                    ? ColorCodeConverter.convertRGBToHex(prev.foreground)
                    : ColorCodeConverter.convertHexToRgb(prev.foreground),
                background: newType === "hex"
                    ? ColorCodeConverter.convertRGBToHex(prev.background)
                    : ColorCodeConverter.convertHexToRgb(prev.background)
            };
        });
    };

    const swapColorValue = () => {
        setColors(prev => ({
            ...prev,
            foreground: prev.background,
            background: prev.foreground
        }));
    }

    const getBGPlaceholder = () => {
        return colors.background === '' ? colorFormats[colors.colorType].bg : '';
    }

    const getFGPlaceholder = () => {
        return colors.foreground === '' ? colorFormats[colors.colorType].fg : '';
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

    const showSCs = () => {
        const scs = [
            { num: "1.4.3", label: "Contrast Ratio (regular text)", threshold: 4.5 },
            { num: "1.4.3", label: "Contrast Ratio (large text)", threshold: 3 },
            { num: "1.4.6", label: "Contrast Ratio (regular text enhanced)", threshold: 7 },
            { num: "1.4.6", label: "Contrast Ratio (large text enhanced)", threshold: 4.5 },
            { num: "1.4.11", label: "Non-Text Contrast", threshold: 3 }
        ];

        const ratio = parseFloat(result);

        return scs.map((sc, index) => {
            let isFail = false;
            if (isNaN(ratio)) {
                isFail = true;
            } else if (ratio < sc.threshold) {
                isFail = true;
            }
            return (
                <OverlayTrigger key={index} placement="auto" overlay={
                        <Tooltip id={`tooltip-${sc.num}-${index}`}>
                            {`${sc.num} ${sc.label} (${isFail ? "Fail" : "Pass"})`}
                        </Tooltip>
                    }
                >
                    <Badge bg={isFail ? "danger" : "success"} className="m-1" style={{ cursor: "pointer" }}>{sc.num}</Badge>
                </OverlayTrigger>
            );
        });
    };

    return(
        <Row className='justify-content-center flex-column align-items-center gap-3'>
            <Col lg={12} id="converter-container" className="text-bg-dark rounded">
                <Container className="color-converter p-0">
                    <Form className='p-4' noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="justify-content-center text-start d-flex">
                            <Col lg={2} className="p-4 d-flex flex-column text-start rounded">
                                <Form.Label htmlFor="colorType" className="p-2 d-flex align-items-center rounded">Color Type</Form.Label>
                                <Form.Select name="colorType" id="colorType" value={colors.colorType} onChange={toggleColorType} required >
                                    <option value="hex">HEX</option>
                                    <option value="rgb">RGB</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">Please provide Color Type</Form.Control.Feedback>
                            </Col>
                            <Col lg={3} className="p-4 d-flex flex-column text-start rounded">
                                <Form.Label htmlFor="foreground" className="p-2 d-flex align-items-center rounded">Foreground</Form.Label>
                                <Form.Control type="text" id="foreground" placeholder={getFGPlaceholder()} name="foreground" value={colors.foreground} onChange={handleColorChange} required />
                                <Form.Control.Feedback type="invalid">Please provide Color Code</Form.Control.Feedback>
                            </Col>
                             <Col lg={3} className="p-4 d-flex flex-column text-start rounded">
                                <Form.Label htmlFor="background" className="p-2 d-flex align-items-center rounded">Background</Form.Label>
                                <Form.Control type="text" id="background" placeholder={getBGPlaceholder()} name="background" value={colors.background} onChange={handleColorChange} />
                                <Form.Control.Feedback type="invalid">Please provide Color Code</Form.Control.Feedback>
                            </Col>
                            <Col lg={2} className="p-4 d-flex align-items-center justify-content-start rounded gap-1 mt-5">
                                <Button variant="light" title={`Convert color format to ${colors.colorType === "rgb" ? "hex" : "rgb"}`} onClick={toggleColorType}><MdOutlineSwapHorizontalCircle /></Button>
                                <Button variant="light" title="Swap Colors" onClick={swapColorValue}><MdOutlineSwapVert /></Button>
                                <Button variant="light" title="Help"><MdHelp /></Button>
                            </Col>
                        </Form.Group>
                        
                    </Form>
                </Container>
            </Col>
            <Col lg={12} id="result" className="p-4 text-bg-dark rounded">
                <Container className="color-converter p-0">
                    <Row className="justify-content-center">
                        <Col lg={6} id="result-container" className="p-4">
                            {/* <Row className="justify-content-center text-start d-flex rounded p-4" controlId="foreground" style={{background: colors.foreground, color: colors.background, outline: `2px solid ${colors.background}`, outlineOffset: "-6px"}}>
                                <Form.Label column lg={4} className="p-2 d-flex align-items-center rounded">Foreground</Form.Label>
                                <Form.Label column lg={4} className="p-2 d-flex align-items-center rounded">{colors.foreground}</Form.Label>
                            </Row>
                            <Row className="justify-content-center text-start d-flex rounded" controlId="swapper">
                                <Col lg={6} className="p-2 d-flex align-items-center justify-content-center rounded gap-1">
                                    <Button variant="light" onClick={switchColorType}><MdOutlineSwapHorizontalCircle /></Button>
                                    <Button variant="light" onClick={swapColorValue}><MdOutlineSwapVert /></Button>
                                    <Button variant="light"><MdHelp /></Button>
                                </Col>
                            </Row>
                            <Row className="justify-content-center text-start d-flex rounded p-4" controlId="background" style={{background: colors.background, color: colors.foreground, outline: `2px solid ${colors.foreground}`, outlineOffset: "-6px"}}>
                                <Form.Label column lg={4} className="p-2 d-flex align-items-center rounded">Background</Form.Label>
                                <Form.Label column lg={4} className="p-2 d-flex align-items-center rounded">{colors.background}</Form.Label>
                            </Row> */}
                            <Row className="justify-content-evenly text-start rounded-top p-4 mt-2 gap-2" style={{background: "#0B258E"}}>
                                <Col lg={2} className="p-2 d-flex align-items-center rounded text-center" style={{background: colors.background, color: colors.foreground, outline:"2px solid white"}}>
                                    <p className="m-0">Sample Preview</p>
                                </Col>
                                <Col lg={3} className="p-2 d-flex flex-column align-items-center justify-content-center rounded text-center" style={{ outline: "solid 2px white"}}>
                                    <p className="m-0">Contrast Ratio</p>
                                    <p className="m-0">{`${result}:1`}</p>
                                </Col>
                                <Col lg={3} className="p-2 d-flex flex-wrap justify-content-center align-items-center rounded text-center" style={{ outline: "solid 2px white"}}>
                                    { showSCs() }
                                </Col>
                            </Row>
                            <Row className="justify-content-evenly text-start rounded-bottom p-4 gap-2" style={{background: "#FAECB3", color: "black"}}>
                                <h3 className="h5">Learn About Contrast</h3>
                                
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}