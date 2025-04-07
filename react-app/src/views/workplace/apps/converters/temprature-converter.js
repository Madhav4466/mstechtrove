import { Button, Col, Container, Form, Row } from "react-bootstrap";
import InputField from "../../../components/formfields/input";
import AppResult from "../../../components/result-container";
import React from "react";
import ConverterUtils from "../../../../scripts/workplace/apps/converter";

export default function TempratureConverter() {
    const[tempUnit, setTempUnit] = React.useState("C");
    const[tempUnitTo, setTempUnitTo] = React.useState("F");
    const[temprature, setTemprature] = React.useState(0);
    const[result, setResult] = React.useState(0);
    const conversionFactor = "temprature";

    const convertTemprature = (e) => {
        e.preventDefault();
        const temp = parseFloat(temprature);
        if(!isNaN(temp)) {
            const result = ConverterUtils.convert(temp, conversionFactor, tempUnit, tempUnitTo);
            setResult(result);
        }
        setResult(0); return;
    }

    return(
        <Row className='justify-content-center flex-column align-items-center gap-3'>
            <Col lg={12} id="converter-container">
                <Container className="color-converter p-0">
                    <Form className={`p-4 text-bg-dark rounded`} noValidate>
                        <Form.Group as={Row} className="justify-content-center text-start d-flex" >
                            <Col lg={2} className="p-4 d-flex flex-column text-start rounded">
                                <Form.Label htmlFor="tempFrom">Temprature</Form.Label>
                                <Form.Select id="tempFrom" value={tempUnit} onChange={(e) => setTempUnit(e.target.value)}>
                                    {Object.keys(ConverterUtils.converter[conversionFactor]).map((factor, index) => {
                                        return <option key={index} value={factor}>{factor.toUpperCase()}</option>
                                    })}
                                </Form.Select>
                            </Col>
                            <InputField type={"number"} label={"Temprature"} id={"temprature"} value={temprature} onChange={(e) => setTemprature(e.target.value)}/>
                            <Col lg={2} className="p-4 d-flex flex-column text-start rounded">
                                <Form.Label htmlFor="tempUnitTo">Convert To</Form.Label>
                                <Form.Select id="tempUnitTo" value={tempUnitTo} onChange={(e) => setTempUnitTo(e.target.value)}>
                                {Object.keys(ConverterUtils.converter[conversionFactor][tempUnit] || {}).map((subFactor, index) => {
                                    return <option key={index} value={subFactor}>{subFactor.toUpperCase() }</option>
                                })}
                                </Form.Select>
                            </Col>
                            
                            <Col lg={2} className="p-4 d-flex flex-column justify-content-center rounded">
                                <Form.Label></Form.Label>
                                <Button type="submit" variant="light" className='mt-4' onClick={convertTemprature}>Calculate</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Container>
            </Col>
            <AppResult message={`${temprature} ${tempUnit.toUpperCase()} is ${result} ${tempUnitTo.toUpperCase()}`}/>
        </Row>
    );
}