import { useState } from "react";
import { Col } from "react-bootstrap";

export default function Player({name, sign, activePlayer}) {
    const[isPlayerEdit, setIsPlayerEdit] = useState(false);
    const[playerName, setPlayerName] = useState(name);

    const handlePlayerEdit = () => {
        setIsPlayerEdit((prevEditState) => !isPlayerEdit)
    }

    const handleNameChange = (e) => {
        setPlayerName(e.target.value);
    }

    return(
        <Col lg={6} className={activePlayer ? "active" : undefined}>
            <span className="player-details">
                { isPlayerEdit ? 
                    <input type="text" value={playerName} onChange={handleNameChange}></input> :
                    <span>{playerName}</span>
                }
                <span> - {sign}</span>
            </span>
            <button onClick={handlePlayerEdit}>{isPlayerEdit ? "Save" : "Edit"}</button>
        </Col>
    )
}