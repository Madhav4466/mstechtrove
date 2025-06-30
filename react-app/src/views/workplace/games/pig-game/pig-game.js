import React from "react";
import { Container, Row } from "react-bootstrap";
import Players from "./players";
import GameControls from "./game-controls";
import "./pig-game.css";

export default function PigGame() {
    const[diceNumber, setDiceNumber] = React.useState(1);
    const[isSpinning, setIsSpinning] = React.useState(false);
    const[score, setScore] = React.useState([0, 0]);
    const[holdScore, setHoldScore] = React.useState([0, 0]);
    const[activePlayer, setActivePlayer] = React.useState(0);
    const[winnerPlayer, setWinnerPlayer] = React.useState(null);

    const handleRollDice = () => {
        setIsSpinning(true);

        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            setDiceNumber(randomNumber);
            if( randomNumber === 1) {
                setScore(cs => {
                    const newScore = [...cs];
                    newScore[activePlayer] = 0;
                    return newScore;
                });
                setActivePlayer(ap => 1 - ap);
            }
            else {
                setScore(cs => {
                    const newScore = [...cs];
                    newScore[activePlayer] += randomNumber;
                    return newScore;
                })
            };
            setIsSpinning(false);
        }, 400);
    }

    const handleHoldScore = () => {
        setHoldScore(hs => {
            const newHoldScore = [...hs];
            newHoldScore[activePlayer] += score[activePlayer];
            return newHoldScore;
        });
        setScore(cs => {
            const newScore = [...cs];
            newScore[activePlayer] = 0;
            return newScore;
        });
        setDiceNumber(1);
        setActivePlayer(ap => 1 - ap);
        if(holdScore[0] >= 100) {
            setWinnerPlayer(0);
        }
        else if(holdScore[1] >= 100) {
            setWinnerPlayer(1);
        }
    }

    const handleNewGame = () => {
        setDiceNumber(1);
        setIsSpinning(false);
        setScore([0, 0]);
        setHoldScore([0, 0]);
        setActivePlayer(0);
        setWinnerPlayer(null);
    }

    return (
        <Container className="p-4 text-bg-dark rounded mb-4">
            <Row className='justify-content-center align-items-center flex-grow-1' style={{height: "500px"}}>
                <Players playerName={"Player 1"} activePlayer={activePlayer === 0} score={score[0]} holdScore={holdScore[0]} winnerPlayer={winnerPlayer === 0}/>
                <GameControls diceNumber={diceNumber} isSpinning={isSpinning} handleRollDice={handleRollDice} handleHoldScore={handleHoldScore} handleNewGame={handleNewGame} winnerPlayer={winnerPlayer != null ? true : false}/>
                <Players playerName={"Player 2"} activePlayer={activePlayer === 1} score={score[1]} holdScore={holdScore[1]} winnerPlayer={winnerPlayer === 1}/>
            </Row>
        </Container>
    );
}