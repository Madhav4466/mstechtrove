import { Container } from "react-bootstrap";
import WorkplaceMenu from "./workplace-menu";
import AppContent from "./app-content";
import WorkplaceTitle from "./workplace-title";
import { useSelector } from "react-redux";

export default function AppsContainer({workplace}) {
    const {value: pageNum, category} = useSelector((state) => state.workplacePageNum);
    const workItem = workplace.filter(item => item.category === category)[pageNum];

    return(
       <Container className="pt-5 gap-2 d-flex flex-column">
            <WorkplaceTitle title={workItem?.title || "Apps"}/>
            <WorkplaceMenu workplace={workplace}/>
            <AppContent workplace={workplace} component={workItem?.component}/>
        </Container>
    );
}