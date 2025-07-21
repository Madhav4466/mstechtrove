import React from "react";
import PortfolioLayout from "../layouts/portfolio";
import PortfolioNav from "../components/portfolio_nav";
import Intro from "../sections/page_sections/intro";
import AboutMe from "../sections/page_sections/about";
import Education from "../sections/page_sections/education";
import Skills from "../sections/page_sections/skill";
import Experience from "../sections/page_sections/experience";
import Projects from "../sections/page_sections/projects";
import Contact from "../sections/page_sections/contact";
import PrimaryNavigation from "../components/primary-nav";

export default function Home() {
    return(
        <PortfolioLayout 
        primaryNavigation={<PrimaryNavigation/>}
        mainContent={
            <>
                <PortfolioNav/>
                <Intro/>
                <AboutMe/>
                <Education/>
                <Skills/>
                <Experience/>
                <Projects/>
                <Contact/>
            </>
        }/>
    );
}