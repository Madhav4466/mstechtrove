import { Container, Nav, Navbar } from "react-bootstrap";
import { CgNotes } from "react-icons/cg";
import { FaChartLine, FaGraduationCap, FaLaptopCode, FaUserTie } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { IoIosContact } from "react-icons/io";
import { useLocation } from "react-router-dom";

export default function PortfolioNav() {
    const { hash } = useLocation();
    const navLinks = [
        { href: "#intro", label: "Intro", icon: <CgNotes size={30} /> },
        { href: "#about-me", label: "About", icon: <FaUserTie size={30} /> },
        { href: "#education", label: "Education", icon: <FaGraduationCap size={30} /> },
        { href: "#skills", label: "Skills", icon: <GoChecklist size={30} /> },
        { href: "#experience", label: "Experience", icon: <FaChartLine size={30} />  },
        { href: "#projects", label: "Projects", icon: <FaLaptopCode size={30} /> },
        { href: "#contact", label: "Contact", icon: <IoIosContact size={30} /> }
    ];

    const renderIconsInSmallScreen = () => {
        return(
            <>
                { navLinks.map(({ href, icon }, idx) => (
                    <Nav.Item className="d-lg-none" role="listitem" key={href}>
                        <Nav.Link
                            href={href}
                            active={hash === href}
                            eventKey={`icon-link-${idx}`}
                        >
                            {icon}
                        </Nav.Link>
                    </Nav.Item>
                ))}
            </>
        );
    }       

    const renderNavLinksOnDesktop = () => {
        return(
            <>
                { navLinks.map(({ href, label }, idx) => (
                    <Nav.Item className="d-none d-lg-block" role="listitem" key={href}>
                    <Nav.Link
                        href={href}
                        active={hash === href}
                        aria-current={hash === href}
                        eventKey={`link-${idx}`}
                    >
                        {label}
                    </Nav.Link>
                    </Nav.Item>
                ))}
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