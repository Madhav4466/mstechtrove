import PortfolioLayout from "../layouts/portfolio";
import PrimaryNavigation from "../components/primary-nav";
// import { useParams } from "react-router-dom";
import AppsContainer from "../components/workplace/apps_container";

export default function Apps({workplace}) {
    // const {type} = useParams();
    // const filteredApps = workplace.apps.filter(app => app.type === type);

    return(
        <PortfolioLayout 
            primaryNavigation={<PrimaryNavigation/>}
            mainContent={ <AppsContainer workplace={workplace}/> }
        />
    );
}