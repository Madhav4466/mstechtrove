"use client";
import ColorContrastEnhancer from '../scripts/color-enhancer';
import ColorUtils from "../scripts/color-utils";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import ColorSampleCard from "./color-sample-card";
import ColorSlider from "./color-slider";
import InfoMessage from './info-message';

export default function ColorEnhancer() {
    const[colorType, setColorType] = useState("hex");
    const[bgColor, setBGColor] = useState("#292929");
    const[fgColor, setFGColor] = useState("#7D4ADE");
    const[compliantTo, setCompliantTo] = useState("regularText-min");
    const[enhanceColors, setEnhanceColors] = useState("foreground");
    const[colorPallete, setColorPallete] = useState({foreground: [], background: []});
    const[fgSliderValue, setFGSliderValue] = useState(0);
    const[bgSliderValue, setBGSliderValue] = useState(0);
    const currentFGColor = colorPallete.foreground[fgSliderValue];
    const currentBGColor = colorPallete.background[bgSliderValue];

    const handleColorTypeChange = (e) => {
        setColorType(e.target.value);
    }
    const handleBGColorChange = (e) => {
        setBGColor(e.target.value);
    }
    const handleFGColorChange = (e) => {
        setFGColor(e.target.value);
    }

    const handleCompliantToChange = (e) => {
        setCompliantTo(e.target.value);
    }

    const handleFGSliderChange = (e) => {
        setFGSliderValue(e.target.value);
    }

    const handleBGSliderChange = (e) => {
        setBGSliderValue(e.target.value);
    }

    const handleToggleChange = (value) => {
       setEnhanceColors(value);
    }

    const generateColorPallete = () => {
        const contrastRatio = getContrastRatio(convertHexToRGBArray(fgColor), convertHexToRGBArray(bgColor));
        if(((compliantTo === "regularText-min" || compliantTo === "largeText-enh") && contrastRatio < 4.5) ||
            ((compliantTo === "largeText-min" || compliantTo === "non-text-contrast") && contrastRatio < 3) ||
            (compliantTo === "regularText-enh" && contrastRatio < 7))  {
                const colorPallete = ColorContrastEnhancer.generateColorSuggestions(fgColor, bgColor, compliantTo, 50);
                setColorPallete(colorPallete);
        }
        else {
            setColorPallete({foreground: [], background: []});
        }
    }
    
    const convertHexToRGBArray = (hexColor) => {
        return ColorUtils.convertHexToRgb(hexColor).replace("rgb(", "").replace(")", "").split(",");
    }

    const getContrastRatio = (fgColor, bgColor) => {
        return ColorUtils.getContrastRatio(fgColor, bgColor);
    }

    const renderGeneratedColors = () => {
        if(enhanceColors === "foreground"){
            return (
                <ColorSampleCard bgColor={bgColor} fgColor={currentFGColor} cardTitle="Accessible Color Sample" contrastRatio={getContrastRatio(convertHexToRGBArray(currentFGColor), convertHexToRGBArray(bgColor))}>
                    <ColorSlider controlId="a11y-fg-color" label="Pick Foreground Color" colorPallete={colorPallete.foreground} currentColor={currentFGColor} sliderValue={fgSliderValue} handleSliderChange={handleFGSliderChange}/>
                </ColorSampleCard>
            );
        }
        else {
            return (
                <ColorSampleCard bgColor={currentBGColor} fgColor={fgColor} cardTitle="Accessible Color Sample" contrastRatio={getContrastRatio(convertHexToRGBArray(fgColor), convertHexToRGBArray(currentBGColor))}>
                    <ColorSlider controlId="a11y-bg-color" label="Pick Background Color" colorPallete={colorPallete.background} currentColor={currentBGColor} sliderValue={bgSliderValue} handleSliderChange={handleBGSliderChange}/>
                </ColorSampleCard>
            );
        }
        
    }

    const renderGeneratedColor = (fgColor, bgColor, colorPallete, sliderValue, ) => {
        return (
            <ColorSampleCard bgColor={bgColor} fgColor={fgColor} cardTitle="Accessible Color Sample" contrastRatio={getContrastRatio(convertHexToRGBArray(fgColor), convertHexToRGBArray(bgColor))}>
                <ColorSlider controlId="a11y-fg-color" label="Pick Foreground Color" colorPallete={colorPallete} currentColor={bgColor} sliderValue={sliderValue} handleSliderChange={handleBGSliderChange}/>
            </ColorSampleCard>
        );       
    }

    return(
        <Container className="color-enhancer">
            <h1>Color Contrast Enhancer</h1>
            <p className="small m-1">Put your color details in form and get the closest possible accessible colors</p>
            <Row className="justify-content-around p-5 rounded" style={{background: "#252422", color: "#FFFFFF"}}>
                <Col lg={5}>
                    <h2 className="text-start m-0 mb-2">Color Details</h2>
                    <Form className={`p-4 row justify-content-center rounded`} style={{background: "#000000"}} noValidate aria-label="Color Details">
                        <Form.Group className="mb-3" as={Col} lg={12} sm={6} controlId="colorType">
                            <Form.Label>Color Type</Form.Label>
                            <Form.Select value={colorType} onChange={handleColorTypeChange}>
                                <option value="rgb">RGB</option>
                                <option value="hex">HEX</option>\
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} lg={12} sm={6} controlId="fgColor">
                            <Form.Label>Foreground Color</Form.Label>
                            <Form.Control type="text" placeholder="rgb(255, 255, 255)" value={fgColor} onChange={handleFGColorChange}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} lg={12} sm={6} controlId="bgColor">
                            <Form.Label>Background Color</Form.Label>
                            <Form.Control type="text" placeholder="rgb(0, 0, 0)" value={bgColor} onChange={handleBGColorChange}></Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" as={Col} lg={12} sm={6} controlId="compliantTo">
                            <Form.Label>Compliant To</Form.Label>
                            <Form.Select onChange={handleCompliantToChange}>
                                <option value="regularText-min">Regular Text(Minimum)</option>
                                <option value="regularText-enh">Regular Text(Enhanced)</option>
                                <option value="largeText-min">Large Text(Minimum)</option>
                                <option value="largeText-enh">Large Text(Enhanced)</option>
                                <option value="non-text-contrast">Non-Text Contrast</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex flex-column" as={Col} lg={12} sm={6} controlId="updateColors">
                            <Form.Label id="enhanceColorLabel">Enhance Color</Form.Label>
                            <ToggleButtonGroup type="radio" name="options" value={enhanceColors} role="radiogroup" aria-labelledby="enhanceColorLabel" onChange={handleToggleChange}>
                                <ToggleButton id="tbg-radio-1" tabIndex={-1} value="foreground" variant="outline-warning" disabled={colorPallete.foreground.length === 0}>Foreground</ToggleButton>
                                <ToggleButton id="tbg-radio-2" tabIndex={-1} value="background" variant="outline-warning" disabled={colorPallete.background.length === 0}>Background</ToggleButton>
                            </ToggleButtonGroup>
                        </Form.Group>
                        <Col lg={6} sm={6} className="pt-4 d-flex flex-column justify-content-sm-center justify-content-lg-start">
                            <Button className="mt-2" variant="outline-warning" onClick={generateColorPallete}>Generate Colors</Button>
                        </Col>
                    </Form>
                </Col>
                <Col lg={6}>
                    <Row className="justify-content-center text-center">
                        <h2 className="text-start m-0 mb-2">Color Samples</h2>
                        <Container className="rounded gap-3 d-flex flex-column">
                            <ColorSampleCard bgColor={bgColor} fgColor={fgColor} cardTitle="Original Color Sample" contrastRatio={getContrastRatio(convertHexToRGBArray(fgColor), convertHexToRGBArray(bgColor))}/>
                            {
                                    colorPallete.foreground.length === 0 && colorPallete.background.length === 0 ? (
                                        <InfoMessage msg="Accessible colors either not possible or the given colors are already have a good contrast ratio." />
                                    ) : enhanceColors === "foreground" && colorPallete.foreground.length === 0 ? (
                                        colorPallete.background.length > 0 ? (
                                            <InfoMessage msg="Cannot generate foreground color with this combination." generateButton="Switch to Background" onGenerate={() => setEnhanceColors("background")} />
                                        ) : (
                                            <InfoMessage msg="Accessible colors either not possible or the given colors are already have a good contrast ratio." />
                                        )
                                    ) : enhanceColors === "background" && colorPallete.background.length === 0 ? (
                                        colorPallete.foreground.length > 0 ? (
                                            <InfoMessage msg="Cannot generate background color with this combination." generateButton="Switch to Foreground" onGenerate={() => setEnhanceColors("foreground")} />
                                        ) : (
                                            <InfoMessage msg="Accessible colors either not possible or the given colors are already have a good contrast ratio." />
                                        )
                                    ) : renderGeneratedColors()
                            }
                        </Container>
                    </Row>
                </Col>
            </Row>
        </Container>
    );   
}
