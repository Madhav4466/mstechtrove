import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Dice from "./dice";

export default function GameControls({diceNumber, isSpinning, handleRollDice, handleHoldScore, handleNewGame, winnerPlayer}) {
    return (
        <Col lg={2} id="converter-container" className="game-controls p-4 rounded d-flex flex-column justify-content-evenly">
            <Row>
                <Col lg={12}>
                    <Button variant="light" onClick={handleNewGame}>New Game</Button>
                </Col>
            </Row>
            <Row>
                <Col lg={12} className="d-flex justify-content-center">
                    <Dice diceNumber={diceNumber} isSpinning={isSpinning}/>
                </Col>
            </Row>
            <Row>
                <Col lg={12} className="d-flex flex-column gap-3">
                    <Button variant="light" onClick={handleRollDice} disabled={winnerPlayer ? true : false}>Roll Dice</Button>
                    <Button variant="light" onClick={handleHoldScore} disabled={winnerPlayer ? true : false}>Hold</Button>
                </Col>
            </Row>
        </Col>
    );
}