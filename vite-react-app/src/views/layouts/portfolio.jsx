import { Container, Row } from "react-bootstrap";
import HeaderNav from "../sections/header";
import MainContent from "../sections/main";
import Footer from "../sections/footer";

export default function PortfolioLayout({primaryNavigation, mainContent}) {
    return(
        <Container fluid className="flex-grow-1 d-flex flex-column">
            <Row className="flex-column flex-grow-1">
                <HeaderNav primaryNavigation={ primaryNavigation }></HeaderNav>
                <MainContent sections={ mainContent }/>
                <Footer/>
            </Row>
        </Container>
    );
}