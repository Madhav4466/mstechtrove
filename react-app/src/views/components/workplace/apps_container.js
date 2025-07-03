import React from "react";
import { Container } from "react-bootstrap";
import WorkplaceMenu from "./workplace-menu";
import AppContent from "./app-content";
import WorkplaceTitle from "./workplace-title";

export default function AppsContainer({workplace}) {
    const[selectedIndex, setSelectedIndex] = React.useState(0);

    const handleMenuSelect = (index) => {setSelectedIndex(index)}

    return(
       <Container className="pt-5 gap-2 d-flex flex-column">
            <WorkplaceTitle title={workplace.apps[selectedIndex]?.title || "Apps"}/>
            <WorkplaceMenu workplace={workplace} onSelect={handleMenuSelect}/>
            <AppContent workplace={workplace} component={workplace.apps[selectedIndex]?.component}/>
        </Container>
    );
}