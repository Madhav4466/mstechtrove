import React from "react";
import { Button, Col, Container, Form, Row, ToggleButton } from "react-bootstrap";

export default function GuessANumber() { 
    const[gameMode, setGameMode] = React.useState("easy");
    const[guessRange, setGuessRange] = React.useState(20);
    const[guessNumber, setGuessNumber] = React.useState(0);
    const[attempts, setAttempts] = React.useState(15);
    const[score, setScore] = React.useState(0)
    const[highScore, setHighScore] = React.useState(0);
    const[message, setMessage] = React.useState("Click on Play to Start Guessing!");
    const[randomNumber, setRandomNumber] = React.useState(null);
    const[isGameStarted, setIsGameStarted] = React.useState(false);

    const handlePlayGame = () => {
        setRandomNumber(Math.floor(Math.random() * guessRange));
        gameMode === "easy" ? setAttempts(15) : gameMode === "medium" ? setAttempts(10) : setAttempts(5);
        setScore(0);
        setMessage("Start Guessing!");
        setIsGameStarted(true);
    }

    const handleCheckGuess = () => {
        if(guessNumber < 0 || guessNumber > guessRange) {
            setMessage(`Please provide a valid number between 0 and ${guessRange}`);
            setAttempts(attempts - 1);
            return;
        }
        else if(parseInt(guessNumber) === parseInt(randomNumber)) {
            setMessage(`Congratulations! You guessed the number ${randomNumber} correctly!`);
            setScore(attempts);
            attempts > highScore && setHighScore(attempts);
            setAttempts(0);
            setRandomNumber(null);
            setIsGameStarted(false);
        }
        else if(guessNumber < randomNumber) {
            setMessage(`Your guess ${guessNumber} is too low!`);
            setAttempts(attempts -1);
        }
        else if(guessNumber > randomNumber) {
            setMessage(`Your guess ${guessNumber} is too high!`);
            setAttempts(attempts - 1);
        }
        
        if (attempts <= 1) {
            setMessage(`Game Over! The number was ${randomNumber}.`);
            setAttempts(0);
            setRandomNumber(null);
            setIsGameStarted(false);
        }
    }

    const handleGameModeChange = (mode) => {
        setGameMode(mode);
        mode === "easy" ? setGuessRange(20) : mode === "medium" ? setGuessRange(100): setGuessRange(1000);
        setAttempts(mode === "easy" ? 15 : mode === "medium" ? 10 : 5);
    }

    return (
        <Row className='justify-content-center flex-column align-items-center gap-3'>
            <Col lg={6} id="converter-container" className="p-4 rounded" style={{background: "#bac3d9"}}>
                <Container className="color-converter p-0">
                    <Row className={`p-4 text-bg-dark rounded justify-content-center`}>
                        <Col lg={12}>
                            <h1 className="h4">I have a random number between 1 and {guessRange}</h1>
                            <p>Select Difficulty settings:</p>
                        </Col>
                        <Col lg={12} className="d-flex justify-content-evenly">
                            <Button id="toggle-check" type="checkbox" variant={gameMode === "easy" ? "success" : "outline-success"} onClick={() => handleGameModeChange("easy")}>Easy</Button>
                            <Button id="toggle-check" type="checkbox" variant={gameMode === "medium" ? "warning" : "outline-warning"} onClick={() => handleGameModeChange("medium")}>Medium</Button>
                            <Button id="toggle-check" type="checkbox" variant={gameMode === "hard" ? "danger" : "outline-danger"} onClick={() => handleGameModeChange("hard")}>Hard</Button>
                        </Col>
                        <Col lg={6} className="d-flex justify-content-evenly mt-4">
                            <Button type="button" variant="primary" className='mt-1 w-100' onClick={handlePlayGame}>Play Game</Button>
                        </Col>
                    </Row>
                    <Row className={`p-4 text-bg-dark rounded mt-2 justify-content-center flex-column align-items-center gap-4`}>
                        <Col lg={12}>
                            <h2 className="h4">Let's Guess a Number!!</h2>
                        </Col>
                        <Col lg={2} className="d-flex justify-content-center">
                            <Form.Control type="number" id="colorFormat" value={guessNumber} disabled={isGameStarted ? false : true} onChange={(e)=> setGuessNumber(e.target.value)}></Form.Control>
                        </Col>
                        <Col lg={4} className="d-flex justify-content-center">
                            <Button type="button" variant="light" className='mt-1 w-100' disabled={isGameStarted ? false : true} onClick={handleCheckGuess}>Check</Button>
                        </Col>
                        <Col lg={10} className="d-flex justify-content-center flex-column">
                            <p className="m-0 text-center text-success fw-bold">{message}</p>
                            <p className="m-0">Score: {score}</p>
                            <p className="m-0">High Score: {highScore}</p>
                            <p className="m-0">Attempts Left: {attempts}</p>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}