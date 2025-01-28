import { Container, Nav, Navbar } from "react-bootstrap";
import { CgNotes } from "react-icons/cg";
import { FaChartLine, FaGraduationCap, FaLaptopCode, FaUserTie } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { IoIosContact } from "react-icons/io";

export default function PortfolioNav() {

    const renderIconsInSmallScreen = () => {
        return(
            <>
                <Nav.Item className="d-lg-none" role="listitem">
                    <Nav.Link href="#intro"><CgNotes size={30}/></Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-lg-none" role="listitem">
                    <Nav.Link eventKey={2} href="#about-me"><FaUserTie size={30}/></Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-lg-none" role="listitem">
                    <Nav.Link eventKey="link-3" href="#education"><FaGraduationCap size={30}/></Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-lg-none" role="listitem">
                    <Nav.Link eventKey="link-1" href="#skills"><GoChecklist size={30}/></Nav.Link>
                </Nav.Item >
                <Nav.Item className="d-lg-none" role="listitem">
                    <Nav.Link eventKey="link-1" href="#experience"><FaChartLine size={30}/></Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-lg-none" role="listitem">
                    <Nav.Link eventKey="link-1" href="#projects"><FaLaptopCode size={30}/></Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-lg-none" role="listitem">
                    <Nav.Link eventKey="link-1" href="#contact"><IoIosContact size={30}/></Nav.Link>
                </Nav.Item>
            </>
        );
    }

    const renderNavLinksOnDesktop = () => {
        return(
            <>
                <Nav.Item className="d-none d-lg-block" role="listitem">
                    <Nav.Link href="#intro">Intro</Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-none d-lg-block" role="listitem">
                    <Nav.Link eventKey={2} href="#about-me">About</Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-none d-lg-block" role="listitem">
                    <Nav.Link eventKey="link-3" href="#education">Education</Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-none d-lg-block" role="listitem">
                    <Nav.Link eventKey="link-4" href="#skills">Skills</Nav.Link>
                </Nav.Item >
                <Nav.Item className="d-none d-lg-block" role="listitem">
                    <Nav.Link eventKey="link-5" href="#experience">Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-none d-lg-block" role="listitem">
                    <Nav.Link eventKey="link-6" href="#projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item className="d-none d-lg-block" role="listitem">
                    <Nav.Link eventKey="link-7" href="#contact">Contact</Nav.Link>
                </Nav.Item>
            </>
        );
    }

    return (
        <Navbar expand="lg" bg="light" data-bs-theme="light" fixed="top" className="mt-5 pt-3" aria-label="Portfolio">
            <Container className="justify-content-end">
                <Nav variant="underline" defaultActiveKey="#intro" style={{"fixed": "top"}} className="d-flex flex-row" role="list">
                    {renderNavLinksOnDesktop()}
                    {renderIconsInSmallScreen()}
                </Nav>
            </Container>
        </Navbar>
      );
}