import { useState } from "react";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import ConverterUtils from "../../../../scripts/workplace/apps/converter";

export default function BMICalculator() {
    const[gender, setGender] = useState("Male");
    const[age, setAge] = useState("");
    const[weight, setWeight] = useState("");
    const[feet, setFeet] = useState("1");
    const[inches, setInches] = useState("1");
    const[bmi, setBMI] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "age" && value !== age) setAge(value);
        else if (name === "weight" && value !== weight) setWeight(value);
        else if(name === "feet" && value !== feet) setFeet(value);
        else if(name === "inches" && value !== inches) setInches(value);
    };

    const calculateBMI = () => {
        const ageNumber = Number(age);
        const weightNumber = Number(weight);
        const totalHeight = Number(feet) + (Number(inches) / 12);

        if(!ageNumber || !weightNumber  || !totalHeight) return;

        const heighInMeters = ConverterUtils.convert(totalHeight, "length", "foot", "meter");
        const bmi = (weightNumber / (heighInMeters * heighInMeters));
        setBMI(bmi.toFixed(2));
        return bmi.toFixed(2);
    }

    const showBMIResult = () => {
        if(bmi === null) {
            return "Please calculate your BMI first!";
        }
        else if(bmi < 18.5) {
            return `Your BMI is ${bmi}. You are underweight!`;
        }
        else if(bmi >= 18.5 && bmi < 24.9) {
            return `Your BMI is ${bmi}. You have a normal weight!`;
        }
        else if(bmi >= 25 && bmi < 29.9) {
            return `Your BMI is ${bmi}. You are overweight!`;
        }
        else {
            return `Your BMI is ${bmi}. You are obese!`;
        }
    }

    return (
        <Row>
            <Col lg={6} className="d-flex flex-column justify-content-center">
                <Form className="p-2 d-flex justify-content-center flex-column gap-2 align-items-center">
                    <Form.Label className="text-start">Gender</Form.Label>
                    <ButtonGroup aria-label="Gender" className="text-start" as={Col} lg={6}>
                        <Button className={gender === "Male" ? "active" : ""} onClick={()=> setGender("Male")}>Male</Button>
                        <Button className={gender === "Female" ? "active" : ""} onClick={()=> setGender("Female")}>Female</Button>
                        <Button className={gender === "Other" ? "active" : ""} onClick={()=> setGender("Other")}>Other</Button>
                    </ButtonGroup>
                    <InputField label={"Your Age"} id="age" name="age" type="number" placeholder="Enter your age" value={age} onChange={handleInputChange}/>
                    <InputField label={"Your Weight (Kg)"} id="weight" name="weight" type="number" placeholder="Enter your weight" value={weight} onChange={handleInputChange}/>
                    <Col lg={6} className="text-start d-flex flex-column justify-content-center">
                        <Row role="group" aria-label="Height">
                            <Form.Label>Height</Form.Label>
                            <HeightDropdown size={7} label="Feet" onChange={handleInputChange}/>
                            <HeightDropdown size={12} label="Inches" onChange={handleInputChange}/>
                        </Row>
                    </Col>  
                    <Col lg={6}>
                        <Button variant="primary" className="w-100 mt-4" onClick={calculateBMI}>Calculate BMI</Button>
                    </Col>
                    
                </Form>
            </Col>
            <Col lg={6}><p className="text-body-light h5">{showBMIResult()}</p></Col>
        </Row>
    ); 
}

const InputField =  ({ label, id, value, onChange, ...props }) => {
    return (
        <Col lg={6} className="text-start d-flex flex-column justify-content-center">
            <Form.Label htmlFor={id}>{label}</Form.Label>
            <Form.Control id={id} value={value} onChange={onChange} {...props}/>
            <Form.Control.Feedback type="invalid">Please provide valid {id} value</Form.Control.Feedback>
        </Col>
    )
}

const HeightDropdown = ({size, label, onChange}) => {
   return (
    <Col>
        <Form.Label htmlFor={label.toLowerCase()}>{label}</Form.Label>
        <Form.Select id={label.toLowerCase()} aria-label={`Select ${label.toLowerCase()}`} name={label.toLowerCase()} onChange={onChange}>
            { [...Array(size).keys().map((num) => {
                return (
                    <option key={num} value={num + 1}>{num + 1}</option>
                )
            })]}
        </Form.Select>
    </Col>
   );
}