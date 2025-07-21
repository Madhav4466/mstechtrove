import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import "./roll-a-dice.css";

export default function RollADice() {
    const[diceNumber, setDiceNumber] = useState(1);
    const[isSpinning, setIsSpinning] = useState(false);
    const dotMap = {
        1: [5],
        2: [1, 9],
        3: [1, 5, 9],
        4: [1, 3, 7, 9],
        5: [1, 3, 5, 7, 9],
        6: [1, 3, 4, 6, 7, 9]
    }
    
    const rollADice = () => {
        setIsSpinning(true);

        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            setDiceNumber(randomNumber);
            setIsSpinning(false);
        }, 1000);
    }

    const generateDiceDots = () => {
        const dots = [];
        const dotsToShow = dotMap[diceNumber] || [];
        for(let i = 1; i<= 9; i++) {
            dots.push(<Col lg={4} className="dot" key={i}><div></div></Col>);
        }
        dotsToShow.forEach((dotIndex) => {
            dots[dotIndex - 1] = <Col lg={4} className="dot" key={dotIndex}><div className="active"></div></Col>;
        });
        return dots;
    }

    return (
        <Row className='justify-content-center flex-column align-items-center gap-3'>
            <Col lg={6} id="converter-container">
                <Container className="color-converter p-0">
                    <Row className='p-4 rounded text-bg-dark'>
                        <Form.Group as={Row} className="justify-content-center text-start d-flex" controlId="dob">
                            <Col lg={4} className="p-4 d-flex justify-content-center rounded">
                                <Button type="submit" variant="light" onClick={rollADice}>Roll a Dice</Button>
                            </Col>
                        </Form.Group>
                    </Row>
                        <Row className="justify-content-center text-start d-flex mt-3" >
                            <Col lg={12} className="p-4 d-flex align-items-center justify-content-center rounded flex-wrap gap-2">
                                <Col lg={6} className="dice-container d-flex justify-content-center">
                                    <Col lg={12} className={`dice d-flex flex-wrap p-2 justify-content-center align-items-center ${isSpinning ? "roll" : ""}`}>
                                        { generateDiceDots()}
                                    </Col>
                                </Col>
                            </Col>
                        </Row>
                </Container>
            </Col>
        </Row>
    )
}