import React from "react";
import PortfolioLayout from "../layouts/portfolio";
import PrimaryNavigation from "../components/primary-nav";
import { useParams } from "react-router-dom";
import AppsNavigation from "../components/workplace/apps-nav";
import AppContent from "../components/workplace/app-content";

export default function Apps({workplace}) {
    const {type} = useParams();
    const filteredApps = workplace.apps.filter(app => app.type === type);

    return(
        <PortfolioLayout 
            primaryNavigation={<PrimaryNavigation/>}
            mainContent={ 
                filteredApps.length === 0 ? 
                ( <p>The {type} app is under development and it will be available soon, Thanks.</p> ) : 
                <>
                    <AppsNavigation appType={type} apps={filteredApps} appContent={ <AppContent appType={type} apps={filteredApps}/> }/>
                </>
            }
        />
    );
}