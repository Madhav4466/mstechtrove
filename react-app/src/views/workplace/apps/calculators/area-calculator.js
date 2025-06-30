import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import AreaInput from "../../../components/workplace/calculators/area-input";
import AreaCalc from "../../../../scripts/workplace/apps/area-calc";
import AreaResult from "../../../components/workplace/calculators/area-result";

export default function AreaCalculator() {
    const[areaOf, setAreaOf] = useState("triangle");
    const[inputs, setInputs] = useState({base: 0, height: 0, length: 0, width: 0, radius: 0, side: 0, base1: 0, base2: 0, majorAxis: 0, minorAxis: 0});
    const[result, setResult] = useState(0);

    const handleAreaOfChange = (e) => {
        const newAreaOf = e.target.value;
        if(newAreaOf !== areaOf){
            setResult(0);
            setInputs((prevInputs) => Object.fromEntries(Object.keys(prevInputs).map(key => [key, 0])));
            setAreaOf(newAreaOf);
        }
    }

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs, 
            [id]: value
        }));
    }

    const handleCalculate  = (e) => {
        e.preventDefault();
        const area =  areaOf === "triangle" ? AreaCalc.calculateAreaOfTriangle(inputs.base, inputs.height) :
            areaOf === "rectangle" ? AreaCalc.calculateAreaOfRectangle(inputs.length, inputs.width) : 
            areaOf === "circle" ? AreaCalc.calaulateAreaOfCircle(inputs.radius) : 
            areaOf === "square" ? AreaCalc.calculateAreaOfSquare(inputs.side) : 
            areaOf === "trapezoid" ? AreaCalc.calculateAreaOfTrapezoid(inputs.base1, inputs.base2, inputs.height) : 
            areaOf === "ellipse" ? AreaCalc.calculateAreaOfEllipse(inputs.majorAxis, inputs.minorAxis) : 
            areaOf === "parallelogram" ? AreaCalc.calculateAreaOfSquare(inputs.base, inputs.height) : 0;
        setResult(area);
    }
    return(
        <Row className='justify-content-center flex-column align-items-center gap-3'>
            <Col lg={12} id="converter-container">
                <Container className="color-converter p-0">
                    <Form className={`p-4 text-bg-dark rounded`} noValidate>
                        <Form.Group as={Row} className="justify-content-center text-start d-flex" >
                            <Col lg={2} className="p-4 d-flex flex-column text-start rounded">
                                <Form.Label htmlFor="areaOf">Area of</Form.Label>
                                <Form.Select id="areaOf" value={areaOf} onChange={handleAreaOfChange}>
                                    <option value="" disabled>Area of</option>
                                    <option value="triangle">Triangle</option>
                                    <option value="square">Square</option>
                                    <option value="circle">Circle</option>
                                    <option value="rectangle">Reactangle</option>
                                    <option value="trapezoid">Trapezoid</option>
                                    <option value="ellipse">Ellipse</option>
                                    <option value="parallelogram">Parallelogram</option>
                                </Form.Select>
                            </Col>
                            {areaOf === "triangle" && 
                                <>
                                    <AreaInput label="Base" id="base" value={inputs.base} handleChange={handleInputChange}/>
                                    <AreaInput label="Height" id="height" value={inputs.height} handleChange={handleInputChange}/>
                                </>
                            }
                            {areaOf === "rectangle" && 
                                <>
                                    <AreaInput label="Length" id="length" value={inputs.length} handleChange={handleInputChange}/>
                                    <AreaInput label="Width" id="width" value={inputs.width} handleChange={handleInputChange}/>
                                </>
                            }
                            {areaOf === "circle" && 
                                <AreaInput label="Radius" id="radius" value={inputs.radius} handleChange={handleInputChange}/>
                            }
                            {areaOf === "square" && 
                                <AreaInput label="Side" id="side" value={inputs.side} handleChange={handleInputChange}/>
                            }
                            {areaOf === "trapezoid" && 
                                <>
                                    <AreaInput label="Base 1" id="base1" value={inputs.base1} handleChange={handleInputChange}/>
                                    <AreaInput label="Base 2" id="base2" value={inputs.base2} handleChange={handleInputChange}/>
                                    <AreaInput label="Height" id="height" value={inputs.height} handleChange={handleInputChange}/>
                                </>
                            }
                            {areaOf === "ellipse" && 
                                <>
                                    <AreaInput label="Major Axis" id="majorAxis" value={inputs.majorAxis} handleChange={handleInputChange}/>
                                    <AreaInput label="Minor Axis" id="minorAxis" value={inputs.minorAxis} handleChange={handleInputChange}/>
                                </>
                            }
                            {areaOf === "parallelogram" && 
                                <>
                                    <AreaInput label="Base" id="base" value={inputs.base} handleChange={handleInputChange}/>
                                    <AreaInput label="Height" id="height" value={inputs.height} handleChange={handleInputChange}/>
                                </>
                            }
                            
                            <Col lg={2} className="p-4 d-flex flex-column justify-content-center rounded">
                                <Form.Label></Form.Label>
                                <Button type="submit" variant="light" className='mt-4' onClick={handleCalculate}>Calculate</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Container>
            </Col>
            <AreaResult result={result} areaOf={areaOf}/>
        </Row>
    );
}