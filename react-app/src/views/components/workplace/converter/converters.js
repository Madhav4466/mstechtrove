import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ConverterUtils from "../../../../scripts/workplace/apps/converter";
import InputField from "../../formfields/input";
import AppResult from "../../result-container";

export default function Converter({unit, subUnit, input, conversionFactor}) {
    const[factor, setFactor] = React.useState(unit);
    const[subFactor, setSubFactor] = React.useState(subUnit);
    const[value, setValue] = React.useState(input);
    const[result, setResult] = React.useState(ConverterUtils.convert(parseFloat(input), conversionFactor, factor, subFactor));

    const handleConvert = (e) => {
        e.preventDefault();
        const floatVal = parseFloat(value);
        if(isNaN(floatVal)) {
            setResult(0);
            return;
        }
        const result = ConverterUtils.convert(floatVal, conversionFactor, factor, subFactor);
        setResult(parseFloat(result).toFixed(2));
    }
    return(
        <Row className='justify-content-center flex-column align-items-center gap-3'>
            <Col lg={12} id="converter-container">
                <Container className="color-converter p-0">
                    <Form className={`p-4 text-bg-dark rounded`} noValidate>
                        <Form.Group as={Row} className="justify-content-center text-start d-flex" >
                            <Col lg={2} className="p-4 d-flex flex-column text-start rounded">
                                <Form.Label htmlFor="lengthFrom">Length</Form.Label>
                                <Form.Select id="lengthFrom" value={factor} onChange={(e) => setFactor(e.target.value)}>
                                    {Object.keys(ConverterUtils.converter[conversionFactor]).map((factor, index) => {
                                        return <option key={index} value={factor}>{factor.toUpperCase()}</option>
                                    })}
                                </Form.Select>
                            </Col>
                            <InputField type={"number"} label={factor.toUpperCase()} id={factor} value={value} onChange={(e) => setValue(e.target.value)}/>
                            <Col lg={2} className="p-4 d-flex flex-column text-start rounded">
                                <Form.Label htmlFor="lengthTo">Convert To</Form.Label>
                                <Form.Select id="lengthTo" value={subFactor} onChange={(e) => setSubFactor(e.target.value)}>
                                {Object.keys(ConverterUtils.converter[conversionFactor][factor] || {}).map((subFactor, index) => {
                                    return <option key={index} value={subFactor}>{subFactor.toUpperCase() }</option>
                                })}
                                </Form.Select>
                            </Col>
                            
                            <Col lg={2} className="p-4 d-flex flex-column justify-content-center rounded">
                                <Form.Label></Form.Label>
                                <Button type="submit" variant="light" className='mt-4' onClick={handleConvert}>Convert</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Container>
            </Col>
            <AppResult message={`${value} ${factor.toUpperCase()} is ${result} ${subFactor.toUpperCase()}`}/>
        </Row>
    );
}