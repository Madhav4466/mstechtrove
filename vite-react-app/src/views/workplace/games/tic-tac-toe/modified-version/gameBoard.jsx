import { Col, Row } from "react-bootstrap";

const defaultGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSquareClick, turns}) {
    let gameBoard = defaultGameBoard;

    for(const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
    
    // const[gameBoard, setGameBoard] = useState(defaultGameBoard);

    // const handleSquareClick = (rowIndex, colIndex) => {
    //     setGameBoard((prevGameBoard) => {
    //         const modifiedBoard = [...prevGameBoard.map(row => [...row])];
    //         modifiedBoard[rowIndex][colIndex] = activePlayer;
    //         return modifiedBoard;
    //     });
    //     onSquareClick();
    // }

    return(
        <Col lg={12} >
            {gameBoard.map((row, rowIndex) => {
                return <Row key={rowIndex}>
                    {row.map((playerSign, colIndex) => {
                        return <Col key={colIndex}><button onClick={() => onSquareClick(rowIndex, colIndex)}>{playerSign}</button></Col>
                    })}
                </Row>  
            })}
        </Col>
    );
}