import { Col, Container } from "react-bootstrap";

export default function AppResult({result, message}) {
    return(
        <Col lg={12} id="result-containers">
            <Container className="app-result p-4 rounded text-bg-dark">
                {result !== 0  && 
                    <p className="m-0 h5">{message}</p>
                }
            </Container>
        </Col>
    );
}