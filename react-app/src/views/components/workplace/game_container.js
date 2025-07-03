import React from "react";
import { Container } from "react-bootstrap";
import WorkplaceMenu from "./workplace-menu";
import AppContent from "./app-content";
import WorkplaceTitle from "./workplace-title";

export default function GameContainer({workplace}) {
    const[selectedIndex, setSelectedIndex] = React.useState(0);

    const handleMenuSelect = (index) => setSelectedIndex(index);

    return(
        <Container className="pt-5 gap-2 d-flex flex-column">
            <WorkplaceTitle title={workplace.games[selectedIndex]?.title || "Games"}/>
            <WorkplaceMenu workplace={workplace} onSelect={handleMenuSelect}/>
            <AppContent component={workplace.games[selectedIndex]?.component}/>
        </Container>
    );
}