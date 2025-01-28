import { useState } from "react";
import Square from "./square";
import { Col, Container, Row } from "react-bootstrap";

export default function Board() {
    const[squares, setSquares] = useState(Array(9).fill(null));
    const[xIsNext, setXIsNext] = useState(true);
    const[activeCell, setActiveCell] = useState(0);
    const[activeRow, setActiveRow] = useState(0);
    const[isStarted, setIsStarted] = useState(false);
    const winner = calculateWinner(squares);
    let status;
    winner ? status = `Player: ${winner} is winner` : status = `${!squares.includes(null) ? `Oops! It's Draw, Try Again!` : `${!isStarted ? "Click on play to start game" : `Next Player: ${xIsNext ? "X" : "O"}`}`}`;
    const threeElementsChunks = chunkArray(squares, 3);
    const rowCount = threeElementsChunks.length -1;
    const cellsPerRow = threeElementsChunks[0].length;
    const gameState = status.includes("Draw") ? "draw": (status.includes("Next") ? "started": (status.includes("winner") ? "completed" : "not-started"));

    const handleClick = (i) => {
        if(!isStarted) { return; }
        if(squares[i] || calculateWinner(squares)){return;}
        const nextSquares = squares.slice();
        xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const handleKeyDown = (event) => {
        let cellNum = activeRow * 3 + activeCell;
        switch(event.keyCode) {
            case 37: navigateLeft(activeRow, activeCell); break;
            case 38: navigateUp(activeRow, activeCell); break;
            case 39: navigateRight(activeRow, activeCell); break;
            case 40: navigateDown(activeRow, activeCell); break;
            case 13: handleClick(cellNum); break;
            case 32: handleClick(cellNum); break;
            default: break;
        }
    }

    // useEffect(()=>{
    //     let cells = document.querySelectorAll("[role='grid'] [role='gridcell']");
    //     let activeBox = document.getElementById(`cell-${activeRow}-${activeCell}`);
    //     if(cells && activeBox)
    //     {
    //         cells.forEach((cell) => cell.style.outline = "none");
    //         activeBox.style.outline = "solid #15616d 3px";
    //     }
    // });

    const navigateRight = (activeRow, activeCell) => {
        if(activeCell < cellsPerRow-1) {
            activeCell+=1;
            setActiveCell(activeCell);
        }
        else if(activeCell === cellsPerRow-1 && activeRow < rowCount) {
            activeRow+=1;
            setActiveRow(activeRow);
            setActiveCell(0);
        }
        else{return;}
    }

    const navigateLeft = (activeRow, activeCell) => {
        if(activeCell > 0) {
            activeCell-=1;
            setActiveCell(activeCell);
        }
        else if(activeCell === 0 && activeRow > 0) {
            activeRow-=1;
            setActiveRow(activeRow);
            setActiveCell(rowCount);
        }
        else{return;}
    }

    const navigateDown = (activeRow, activeCell) => {
        if(activeRow !== rowCount) {
            activeRow+=1;
            setActiveRow(activeRow)
            setActiveCell(activeCell);
        }
    }
    const navigateUp = (activeRow, activeCell) => {
        if(activeRow !==0) {
            activeRow-=1;
            setActiveRow(activeRow)
            setActiveCell(activeCell);
        }
    }

    const handleRestart = () => {
        //Either on win or loose re-render game.
        if(gameState === "not-started") {
            setIsStarted(true);
        }
        else {
            setSquares(Array(9).fill(null));
            setXIsNext(true);
            setActiveCell(0);
            setActiveRow(0);
        }
    }

    const isBoardDisable = () => {
        return (gameState === "not-started" || gameState === "draw" || gameState === "completed") ? true : false;
    }

    return(
        <Container className="grid-container" id="tictactoe-container">
            <Row>
                <p aria-live="assertive">{status}</p>
            </Row>
            <Row className="justify-content-center">
                <button className="restart" onClick={()=> handleRestart()}>{!squares.includes(null) || winner ? "Restart" : "Play"}</button>
            </Row>
            <Row className="justify-content-center">
                <Col lg={12} 
                    className={`tic-tac-toe-board grid ${gameState}`} 
                    role="grid" aria-label="Tic Tac Toe Board" 
                    tabIndex={isBoardDisable() ? -1 : 0} 
                    aria-activedescendant={`cell-${activeRow}-${activeCell}`} 
                    onKeyDown={handleKeyDown}
                    aria-hidden={!isStarted ? true : false}
                    aria-disabled={isBoardDisable() ? true : false}
                >
                    {threeElementsChunks.map((chunk, rowIndex) => { 
                        return(
                            <Row key={rowIndex} id={`row-${rowIndex}`} role="row" className="justify-content-center">
                                {
                                    chunk.map((item, cellIndex) =>{
                                        const index = rowIndex * 3 + cellIndex; //To get unique cell number
                                        const isActive = rowIndex === activeRow && cellIndex === activeCell;
                                        if(index < squares.length)
                                        {
                                            return (
                                                <Square key={index} 
                                                    id={`cell-${rowIndex}-${cellIndex}`}
                                                    className={`game-cell text-center ${isActive ? 'active' : ''}`}
                                                    onCellClick={()=> handleClick(index) } 
                                                    onCellKeydown={handleKeyDown}
                                                    value={squares[index]} 
                                                    tabIndex="-1"
                                                ></Square>
                                            );
                                        }
                                        return null;
                                    })
                                }
                            </Row>
                        );
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
}

const calculateWinner = (squares) =>
{
    const lines =[
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++)
    {
        const[a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        {
            return squares[a];
        }
    }
    return null;
}

//To render row wise cells. Pass array to segregate cells in rows [size]
const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
};