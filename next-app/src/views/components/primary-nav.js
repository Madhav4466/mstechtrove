import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function PrimaryNavigation() {
    return(
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top" style={{"zIndex": "10000"}} aria-label="Primary">
            <Container>
                <Navbar.Brand as={Link} href="/">Madhav</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav variant="underline" className="my-2 my-lg-0" style={{ maxHeight: '100px' }} role="list" navbarScroll>
                        <Nav.Link as={Link} href="/" role="listitem">Home</Nav.Link>
                        <Nav.Link as={Link} href="/workplace" role="listitem">Workplace</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}