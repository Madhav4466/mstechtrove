import { Container, Row } from "react-bootstrap";
import HeaderNav from "../sections/header";
import MainContent from "../sections/main";
import Footer from "../sections/footer";

export default function PortfolioLayout({...props}) {
    return(
        <>
            <HeaderNav primaryNavigation={ props.primaryNavigation }></HeaderNav>
            <MainContent sections={ props.mainContent }/>
            <Footer/>
        </>
    );
}