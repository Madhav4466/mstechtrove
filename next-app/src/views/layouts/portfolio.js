import React from "react";
import HeaderNav from "../sections/header";
import MainContent from "../sections/main";
import Footer from "../sections/footer";

export default function PortfolioLayout({...props}) {
    return(
        <>
            <HeaderNav>{props.primaryNavigation}</HeaderNav>
            <MainContent>{props.mainContent}</MainContent>
            <Footer/>
        </>
    );
}