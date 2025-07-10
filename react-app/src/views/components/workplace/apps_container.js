import { Container } from "react-bootstrap";
import WorkplaceMenu from "./workplace-menu";
import AppContent from "./app-content";
import WorkplaceTitle from "./workplace-title";
import { useSelector } from "react-redux";

export default function AppsContainer({workplace}) {
    const pageNum = useSelector((state) => state.workplacePageNum.value);

    return(
       <Container className="pt-5 gap-2 d-flex flex-column">
            <WorkplaceTitle title={workplace.apps[pageNum]?.title || "Apps"}/>
            <WorkplaceMenu workplace={workplace}/>
            <AppContent workplace={workplace} component={workplace.apps[pageNum]?.component}/>
        </Container>
    );
}