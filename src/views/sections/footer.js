import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import '../../styles/sections/footer.css'

export default function Footer() {
    return(
        <footer className="col-12 text-bg-dark p-3">
            <Container>
                <Row className="justify-content-center p-2">
                    <Col lg={6}><p className="m-0 text-start"></p></Col>
                    <Col lg={6}><p className="m-0 text-end"></p></Col>
                </Row>
                <Row className="justify-content-between p-2">
                    <Col lg={3} className="footer-quick-links text-start">
                        <Row className="p-2">
                            <h2 className="h5">Quick Links</h2>
                        </Row>
                        <Row className="p-2">
                            <Col lg={6}><a href="/#intro">Portfolio</a></Col>
                            <Col lg={6}><a href="/#about-me">About</a></Col>
                            <Col lg={6}><a href="/#education">Education</a></Col>
                            <Col lg={6}><a href="/#skills">Skills</a></Col>
                            <Col lg={6}><a href="/#experience">Experience</a></Col>
                            <Col lg={6}><a href="/#projects">Projects</a></Col>
                            <Col lg={6}><a href="/workplace">Workplace</a></Col>
                            <Col lg={6}><a href="/#contact">Contact</a></Col>
                        </Row>
                    </Col>
                    <Col lg={3} className="footer-contact text-start">
                        <Row className="p-2"><h2 className="h5">Contact</h2></Row>
                        <Row className="p-2">
                            <Col lg={2} sm={2} xs={2}><FaLocationDot /></Col>
                            <Col lg={10} sm={10} xs={10}>Pune, 412105</Col>
                            <Col lg={2} sm={2} xs={2}><FaWhatsapp /></Col>
                            <Col lg={10} sm={10} xs={10}><a href="https://wa.me/919604482044">+91 - 9604482044</a></Col>
                            <Col lg={2} sm={2} xs={2}><MdOutlineEmail /></Col>
                            <Col lg={10} sm={10} xs={10}><a href="mailto:madhavsaraf183@gmail.com">madhavsaraf183@gmail.com</a></Col>
                        </Row>
                    </Col>
                    <Col lg={2} className="footer-newsletter text-start">
                        <Row className="p-2"><h2 className="h5">Newsletter</h2></Row>
                        <Row className="p-2"></Row>
                    </Col>
                    <Col lg={2} className="footer-follow-me text-start">
                        <Row className="p-2"><h2 className="h5">Follow Me</h2></Row>
                        <Row className="gap-2 p-2">
                            <Col lg={1} sm={1} xs={1}><a href="https://www.linkedin.com/in/madhav-saraf-4m4m/"><FaLinkedin /></a></Col>
                            <Col lg={1} sm={1} xs={1}><a href="https://www.facebook.com/Madhav4466/"><FaFacebook /></a></Col>
                            <Col lg={1} sm={1} xs={1}><a href="https://www.instagram.com/madhavsaraf_official/"><FaInstagram /></a></Col>
                            <Col lg={1} sm={1} xs={1}><a href="https://x.com/madhavsaraf4466"><FaXTwitter /></a></Col>
                            <Col lg={1} sm={1} xs={1}><a href="https://github.com/Madhav4466/"><FaGithub /></a></Col> 
                        </Row>
                    </Col>
                </Row>
                <Row className="footer-copyright mt-2 px-2 justify-content-between">
                    <Col lg={6} className="text-start">
                        <p className="m-0"><small>Designed by Madhav Saraf</small></p>
                    </Col>
                    <Col lg={6} className="text-end">
                        <p className="m-0"><small>Copyright &copy; Madhav Saraf 2024, All rights reserved.</small></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}