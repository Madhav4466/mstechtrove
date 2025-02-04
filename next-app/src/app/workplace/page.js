'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimaryNavigation from "@/views/components/primary-nav";
import PortfolioLayout from "@/views/layouts/portfolio";
import Banner from "@/views/sections/workplace/banner";
import WorkplaceSection from "@/views/sections/workplace/work-section";
import { workplace } from "../workplace-data";

export default function Workplace() {
    return (
        <PortfolioLayout 
            primaryNavigation={<PrimaryNavigation/>}
            mainContent={
                <>
                    <Banner/>
                    <WorkplaceSection workplace={workplace}/>
                </>
            }
        />
    )
}