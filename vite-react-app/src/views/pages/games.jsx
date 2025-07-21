import React from "react";
import PortfolioLayout from "../layouts/portfolio";
import PrimaryNavigation from "../components/primary-nav";
import { useParams } from "react-router-dom";
import GameContainer from "../components/workplace/game_container";

export default function Games({workplace}) {
    const {type} = useParams();
    const gameObj = workplace.games.find(game => game.title.toLowerCase() === type);

    return(
        <PortfolioLayout 
            primaryNavigation={<PrimaryNavigation/>}
            mainContent={ 
                Object.keys(gameObj).component ? 
                (<h1 className="h5">The {type} game is under development and will be available soon, Thanks!.</h1>) : 
                (
                    <GameContainer game={gameObj.component}/>
                )
            }
        />
    );
}