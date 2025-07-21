import React from "react";
import { Col } from "react-bootstrap";

export default function Dice({diceNumber, isSpinning}) {
    const dotMap = {
        1: [5],
        2: [1, 9],
        3: [1, 5, 9],
        4: [1, 3, 7, 9],
        5: [1, 3, 5, 7, 9],
        6: [1, 3, 4, 6, 7, 9]
    }

    const generateDiceDots = () => {
            const dots = [];
            const dotsToShow = dotMap[diceNumber] || [];
            for(let i = 1; i<= 9; i++) {
                dots.push(<Col lg={4} className="dot" key={i}><div></div></Col>);
            }
            dotsToShow.forEach((dotIndex) => {
                dots[dotIndex - 1] = <Col lg={4} className="dot" key={dotIndex}><div className="active"></div></Col>;
            });
            return dots;
        }

    return (
        <Col lg={12} className={`dice d-flex flex-wrap p-2 justify-content-center align-items-center ${isSpinning ? "spin" : ""}`}>
            { generateDiceDots()}
        </Col>
    );
}