import React, { useState } from 'react';
import { Button, Col, Container, FormControl, Row } from 'react-bootstrap';
import '../../../../styles/apps/calculators/simple-calculator.css';

export default function SimpleCalculator() {
    const[activeCell, setActiveCell] = useState(0);
    const[activeRow, setActiveRow] = useState(0);
    const[resultText, setResultText] = useState(0);
    const[currentValue, setCurrentValue] = useState('');
    const[previousValue, setPreviousValue] = useState(null);
    const[operation, setOperation] = useState(null);

    const buttons = [
        'C', '<', '%', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '+/-','0', '.', '='
    ]

    const chunks = (arr, size) => {
        const chunkArr = [];
        for(let i = 0; i < arr.length; i += size) {
            chunkArr.push(arr.slice(i, i+size));
        }
        return chunkArr
    }
    const fourCellChunk = chunks(buttons, 4);
    const rowCount = fourCellChunk.length -1;
    const cellsPerRow = fourCellChunk[0].length;

    const handleGridNav = (event) =>
        {
            switch(event.keyCode)
            {
                case 37: navigateLeft(activeRow, activeCell); break;
                case 38: navigateUp(activeRow, activeCell); break;
                case 39: navigateRight(activeRow, activeCell); break;
                case 40: navigateDown(activeRow, activeCell); break;
                case 13: handleClick(fourCellChunk[activeRow][activeCell]); break;
                case 32: handleClick(fourCellChunk[activeRow][activeCell]); break;
                default: break;
            }
        }

        const navigateRight = (activeRow, activeCell) =>
        {
            if(activeCell < cellsPerRow-1)
            {
                activeCell+=1;
                setActiveCell(activeCell);
            }
            else if(activeCell === cellsPerRow-1 && activeRow < rowCount)
            {
                activeRow+=1;
                setActiveRow(activeRow);
                setActiveCell(0);
            }
            else{return;}
        }
    
        const navigateLeft = (activeRow, activeCell) =>
        {
            if(activeCell > 0)
            {
                activeCell-=1;
                setActiveCell(activeCell);
            }
            else if(activeCell === 0 && activeRow > 0)
            {
                activeRow-=1;
                setActiveRow(activeRow);
                setActiveCell(rowCount-1);
            }
            else{return;}
        }
    
        const navigateDown = (activeRow, activeCell) =>{
            if(activeRow !== rowCount)
            {
                activeRow+=1;
                setActiveRow(activeRow)
                setActiveCell(activeCell);
            }
        }
        const navigateUp = (activeRow, activeCell) =>{
            if(activeRow !== 0)
            {
                activeRow-=1;
                setActiveRow(activeRow)
                setActiveCell(activeCell);
            }
        }

        const handleClick = (btn) => {
            if (btn === '+' || btn === '-' || btn === '*' || btn === '/') {
                if (currentValue === '') return;
                
                if (previousValue === null) {
                    setPreviousValue(resultText);
                } 
                else {
                    performCalculation();
                }
                setOperation(btn);
                setCurrentValue('');
            } 
            else if (btn === '=') {
                if (currentValue === '') return;
        
                performCalculation();
            }
            else if(btn === "C") {
                handleClear();
            }
            else if(btn === "%"){
                setCurrentValue(currentValue/100);
            }
            else if(btn === "+/-"){
                toggleSign();
            }
            else {
                setCurrentValue(currentValue + btn);
                setResultText(currentValue + btn);
            }
        };

        const handleInputChange = (event) => {
            setResultText(event.target.value);
        };

        // const performCalculation = (term) => {
        //     const sanitizedExpression = sanitizeExpression(term);
        //     //const result = new Function('return' + sanitizedExpression)();
        //     return setResultText(eval(initialResult + sanitizedExpression).toString());
        // }

        // const sanitizeExpression = (expression) => {
        //     return expression.replace(/(^|\D)0+/g, '$1') || '0';
        // }

        const toggleSign = () => {
            if(currentValue) {
                const currentNum = parseFloat(currentValue);
                const toggledVal = currentNum * -1;
                setCurrentValue(toggledVal);
                setResultText(toggledVal.toString());
            }
        }

        const performCalculation = () => {
            if (previousValue === null || currentValue === '') return;

            const prev = parseFloat(previousValue);
            const current = parseFloat(currentValue);
            let calculationResult;

            switch (operation) {
            case '+':
                calculationResult = prev + current;
                break;
            case '-':
                calculationResult = prev - current;
                break;
            case '*':
                calculationResult = prev * current;
                break;
            case '/':
                if (current === 0) {
                    calculationResult = 'Error'; // Handle division by zero
                } else {
                    calculationResult = prev / current;
                }
                break;
            default: return;
            }

            setResultText(calculationResult);
            setPreviousValue(calculationResult);
            setOperation(null);
            setCurrentValue('');
        };
        
        const handleClear = () => {
            setCurrentValue('');
            setPreviousValue(null);
            setOperation(null);
            setResultText(0);
        };
    
    return(
        <Row className='justify-content-center'>
            <Col lg={4} id="calc-container">
                <Container className={"card-elevated simple-calculator p-3"} role="grid" aria-label="Simple Calculator" aria-activedescendant={`cell-${activeRow}-${activeCell}`} tabIndex={0} onKeyDown={handleGridNav}>
                    <Row role='row' className='result-row mb-4 mt-2'>
                        <Col lg={12}>
                            <Row className='expression h-10'>
                                <Col lg={12} className='px-4'>{previousValue} {operation} {currentValue} </Col>
                            </Row>
                            <Row className='result'> 
                                <FormControl type='text' className='p-4 text-bold' aria-label="Result" value={resultText} onChange={handleInputChange}></FormControl>
                            </Row>
                        </Col>
                    </Row>
                    {
                        fourCellChunk.map((chunk, rowIndex) => {
                            return(
                            <Row key={rowIndex} role="row" className='buttons-row p-2'>
                                {
                                    chunk.map((btn, cellIndex) => {
                                        const isActive = rowIndex === activeRow && cellIndex === activeCell;
                                        return (
                                            <Col key={cellIndex} lg={3} sm={3} xs={3} className='button-container' role='none'>
                                                <Button variant='light' role="gridcell" id={`cell-${rowIndex}-${cellIndex}`} tabIndex={-1} className={`calc-button border border-rounded card-elevated ${isActive ? 'active' : ''}`} onClick={() => handleClick(btn)}>{btn}</Button>
                                            </Col>
                                        );
                                    })
                                }
                            </Row>
                            );
                        })
                    }
                </Container>
            </Col>
        </Row>
    );
}