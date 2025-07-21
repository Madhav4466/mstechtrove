import { Col, Container } from "react-bootstrap";

export default function AreaResult({result, areaOf}) {
    return(
        <Col lg={12} id="result-containers">
            <Container className="color-converter p-4 rounded text-bg-dark">
                {result !== 0  && 
                    <p className="m-0 h5">Area of {areaOf} is: {result}</p>
                }
            </Container>
        </Col>
    );
}