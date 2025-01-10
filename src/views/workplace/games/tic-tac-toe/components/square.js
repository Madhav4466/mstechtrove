import { Col } from "react-bootstrap";

export default function Square({tabindex, value, onCellClick, style, id, onCellKeydown, className})
{
    let rowName = id.replace("cell", "row");
    let secondDashIndex = rowName.indexOf("-", rowName.indexOf("-") + 1);
    let rowCellName = `${rowName.substring(rowName, secondDashIndex + 1)}cell${rowName.substring(secondDashIndex)}`;
    return(
        <Col role="gridcell" id={id} 
            tabIndex={tabindex} 
            onClick={onCellClick} 
            onKeyDown={onCellKeydown}
            style={style}
            className={className}
        >
            <span role="button" aria-label={`${rowCellName}, ${value ? value : 'Empty'}`}>{value}</span>
        </Col>
    );
}