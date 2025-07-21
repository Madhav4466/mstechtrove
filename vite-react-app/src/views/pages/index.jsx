import React from "react";
import PortfolioLayout from "../layouts/portfolio";
import PortfolioNav from "../components/portfolio_nav";
import Intro from "../sections/page_sections/intro.jsx";
import AboutMe from "../sections/page_sections/about.jsx";
import Education from "../sections/page_sections/education.jsx";
import Skills from "../sections/page_sections/skill";
import Experience from "../sections/page_sections/experience.jsx";
import Projects from "../sections/page_sections/projects.jsx";
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