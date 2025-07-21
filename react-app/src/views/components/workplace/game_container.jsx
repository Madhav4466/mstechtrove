import React from "react";
import { Container } from "react-bootstrap";
import WorkplaceMenu from "./workplace-menu";
import AppContent from "./app-content";
import WorkplaceTitle from "./workplace-title";
import { useSelector } from "react-redux";

export default function GameContainer({workplace}) {
    const pageNum = useSelector((state) => state.workplacePageNum.value);

    return(
        <Container className="pt-5 gap-2 d-flex flex-column">
            <WorkplaceTitle title={workplace.games[pageNum]?.title || "Games"}/>
            <WorkplaceMenu workplace={workplace}/>
            <AppContent component={workplace.games[pageNum]?.component}/>
        </Container>
    );
}