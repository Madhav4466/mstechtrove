import { Badge, Button, Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

export default function ProjectDetails({projects}) {
    return(
        <>
            { projects.map((project, projIndex) => {
                return ( 
                    <Col key={projIndex} lg={2} sm={4} xs={6} className="justify-content-center p-1 d-flex gap-md-2">
                        <Container className="p-3 card-elevated d-flex flex-column h-100">
                            <Row className="flex-fill" style={{height: "33.33%"}}>
                                <Col className="text-center d-flex flex-column justify-content-center">
                                    <h3 className="h4">{project.title}</h3>
                                </Col>
                            </Row>
                            <Row className="flex-fill" style={{height: "33.33%"}}>
                                <Col className="text-center d-flex flex-column justify-content-center">
                                    <p className="small m-0 text-secondary">{project.duration}</p>
                                    <p className="small m-0">{project.role}</p>
                                </Col>
                            </Row>
                            <Row className="flex-fill pb-5" style={{height: "33.33%"}}>
                                <hr aria-hidden="true"/>
                                <Col className="text-start d-flex flex-column justify-content-center pb-3">
                                    <p className="small m-0">Skills</p>
                                    <div className="d-flex flex-wrap gap-1 small">
                                        { project.skills.split(", ").slice(0, 5).map((skill, idx) => {
                                            return <span key={idx} className="badge text-bg-secondary small">{skill}</span>
                                        })}
                                        { project.skills.split(", ").length > 5 && (
                                            <OverlayTrigger placement="bottom" overlay= {
                                                    <Tooltip id={`tooltip-${projIndex}`}>
                                                        {project.skills}
                                                    </Tooltip>
                                                    }
                                                >
                                                <Badge 
                                                    as={Button} 
                                                    bg="secondary" 
                                                    className="small border-0" 
                                                    aria-label={`See more skills used on project ${project.title}`}
                                                    style={{ cursor: 'pointer' }}>
                                                    ...
                                                </Badge>
                                            </OverlayTrigger>
                                        )}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                );
            })}
        </>
    );
}