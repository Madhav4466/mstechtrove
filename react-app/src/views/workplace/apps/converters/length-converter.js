import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import InputField from '../../../components/formfields/input';
import AppResult from '../../../components/result-container';
import ConverterUtils from '../../../../scripts/workplace/apps/converter';

export default function LengthConverter() {
    const[factor, setFactor] = React.useState("mm");
    const[subFactor, setSubFactor] = React.useState("cm");
    const[lengthFrom, setLengthFrom] = React.useState(0);
    const[result, setResult] = React.useState(0);
    const conversionFactor = "length";

    const calculateLength = (e) => {
        e.preventDefault();
        const length = parseFloat(lengthFrom);
        const conversion = ConverterUtils.converter[conversionFactor][factor][subFactor];
        if(isNaN(length) || isNaN(conversion)) {
            setResult(0);
            return;
        }
        const result = ConverterUtils.convert(length, conversionFactor, factor, subFactor);
        setResult(result);
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
                            <InputField type={"number"} label={factor.toUpperCase()} id={factor} value={lengthFrom} onChange={(e) => setLengthFrom(e.target.value)}/>
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
                                <Button type="submit" variant="light" className='mt-4' onClick={calculateLength}>Calculate</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Container>
            </Col>
            <AppResult message={`${lengthFrom} ${factor.toUpperCase()} is ${result} ${subFactor.toUpperCase()}`}/>
        </Row>
    );
}