import { Col, Row } from "react-bootstrap";

export default function Players({playerName, activePlayer, score = 0, holdScore = 0, winnerPlayer = null}) {
    console.log(winnerPlayer);
    return (
        <Col lg={4} id="converter-container" className={`player-card p-4 rounded d-flex flex-column justify-content-evenly ${activePlayer && !winnerPlayer ? "active-player" : ""} ${winnerPlayer ? "text-bg-success": ""}`}>
            <Row>
                <Col lg={12}>
                    <h2>{playerName}</h2>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <h3 className="h1">{holdScore}</h3>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={6} className="p-4 text-bg-dark rounded">
                    <h4>Score</h4>
                    <h4>{score}</h4>
                </Col>
            </Row>
        </Col>
    );
}