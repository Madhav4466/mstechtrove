import React from "react";
import PortfolioLayout from "../layouts/portfolio";
import PrimaryNavigation from "../components/primary-nav";
// import { useParams } from "react-router-dom";
import GameContainer from "../components/workplace/game_container";

export default function Games({workplace}) {
    // const {type} = useParams();
    // const gameObj = workplace.games.find(game => game.title.toLowerCase() === type);

    return(
        <PortfolioLayout 
            primaryNavigation={<PrimaryNavigation/>}
            mainContent={<GameContainer workplace={workplace}/>}
        />
    );
}