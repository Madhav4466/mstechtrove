import { Container, Row } from "react-bootstrap";
import GameBoard from "./gameBoard";
import Player from "./player";
import { useState } from "react";

function handleActivePlayer(gameTurns) {
    let activePlayer = 'X';
    if(gameTurns.length > 0 && gameTurns[0].player === "X"){
        activePlayer = 'O';
    }
    return activePlayer;
}

export default function TicTacToeGame() {
    // const[activePlayer, setActivePlayer] = useState("X");
    const[gameTurns, setGameTurns] = useState([]);
    const activePlayer = handleActivePlayer(gameTurns);

    const handleSquareClick = (rowIndex, colIndex) => {
        // setActivePlayer((currentPlayer) => currentPlayer === "X" ? "O" : "X");
        setGameTurns((prevTurns) => {
            const currentActivePlayer = handleActivePlayer(prevTurns)

            const updatedTurns = [
                { square: {row: rowIndex, col: colIndex}, player: currentActivePlayer }, 
                ...prevTurns];
            return updatedTurns;
        });
    } 

    return(
        <Container className="grid-container" id="tictactoe-container">
            <Row>
                <p aria-live="assertive">{}</p>
            </Row>
            <Row className="justify-content-center">
                <Player name={"Player1"} sign={"X"} activePlayer={activePlayer === "X"} />
                <Player name={"Player2"} sign={"O"} activePlayer={activePlayer === "O"}/>
            </Row>
            <Row className="justify-content-center game-board">
                <GameBoard onSquareClick={handleSquareClick} turns={gameTurns}/>
            </Row>
        </Container>
    );
}