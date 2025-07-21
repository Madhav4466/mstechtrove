import React from 'react';
import PortfolioLayout from "../layouts/portfolio";
import WorkplaceSection from '../sections/workplace/work-section';
import Banner from '../sections/workplace/banner';
import PrimaryNavigation from '../components/primary-nav';

export default function Workplace({workplace}) {
    return(
        <PortfolioLayout 
        primaryNavigation={<PrimaryNavigation/>}
        mainContent={
            <>
                <Banner/>
                <WorkplaceSection workplace={workplace}/>
            </>
        }/>
    );
}