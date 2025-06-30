import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import "./toss-a-coin.css";

export default function TossACoin() {
    const[coinSide, setCoinSide] = useState("Heads");
    const[isFlipping, setIsFlipping] = useState(false);

    const flipACoin = () => {
        setIsFlipping(true);
        setTimeout(()=> {
            const randomNumber = Math.floor(Math.random() * 2);
            randomNumber === 1 ? setCoinSide("Tails") : setCoinSide("Heads");
            setIsFlipping(false);
        }, 2000)
    }
    return (
        <Row className='justify-content-center flex-column align-items-center gap-3'>
            <Col lg={6} id="converter-container">
                <Container className="color-converter p-0">
                    <Row className='p-4 rounded text-bg-dark'>
                        <Form.Group as={Row} className="justify-content-center text-start d-flex" controlId="dob">
                            <Col lg={4} className="p-4 d-flex justify-content-center rounded">
                                <Button type="submit" variant="light" onClick={flipACoin}>Flip a Coin</Button>
                            </Col>
                        </Form.Group>
                    </Row>
                        <Row className="justify-content-center text-start d-flex mt-3" >
                            <Col lg={12} className="p-4 d-flex align-items-center justify-content-center rounded flex-wrap gap-2">
                                <Col lg={6} className={`coin ${isFlipping ? "toss" : ""}`} style={{height: "100px", width: "100px", borderRadius: "100%"}}>
                                    <div className={`front`}>{isFlipping ? "Flipping.." : coinSide}</div>
                                    <div className={`back`}>{isFlipping ? "Flipping.." : coinSide}</div>
                                </Col>
                            </Col>
                        </Row>
                </Container>
            </Col>
        </Row>
    )
}