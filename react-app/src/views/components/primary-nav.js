import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PrimaryNavigation() {
    return(
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top" style={{"zIndex": "10000"}} aria-label="Primary">
            <Container>
                <Navbar.Brand as={Link} to="/">Madhav</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav variant="underline" className="my-2 my-lg-0" style={{ maxHeight: '100px' }} role="list" navbarScroll>
                        <Nav.Link as={Link} to="/" role="listitem">Home</Nav.Link>
                        {/* <Nav.Link as={Link} to="/#about-me">About</Nav.Link>
                        <Nav.Link as={Link} to="/#education">Education</Nav.Link>
                        <Nav.Link as={Link} to="/#skills">Skills</Nav.Link>
                        <Nav.Link as={Link} to="/#experience">Experience</Nav.Link>
                        <Nav.Link as={Link} to="/#projects">Projects</Nav.Link> */}
                        <Nav.Link as={Link} to="/workplace" role="listitem">Workplace</Nav.Link>
                        {/* <Nav.Link as={Link} to="/#contact">Contact</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}