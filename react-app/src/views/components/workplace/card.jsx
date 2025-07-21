import { Button, Col, Container, Row } from "react-bootstrap";
import { FaCode, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setPageNum } from "../../../redux/page-num";
import { useDispatch } from "react-redux";

export default function Card({sectionName, category, categoryId}) {
    const dispatch = useDispatch();

    return(
        <Col lg={2} sm={4} xs={6} className="justify-content-center p-1" role="listitem">
            <Container className="p-3 card-elevated d-flex flex-column gap-3" style={{minHeight: '280px'}}>
                <Row className="flex-grow-1">
                    <Col lg={12}>
                        <img alt="" style={{height: "120px", width: "100%", objectFit: "contain"}} src={category.imageURL}/>
                    </Col>
                </Row>
                <Row className="flex-grow-1 d-flex flex-column justify-content-between">
                    <Col lg={12}>
                        <h3 className="h6 m-0">{category.title}</h3>
                        <p className="text-body-secondary m-0">{category.description}</p>
                    </Col>
                </Row>
                <Row className="d-flex align-items-end">
                    <Col lg={6} sm={6} xs={6} className="p-0">
                        <Button as={Link} to={`/workplace/${sectionName}/${category.title.toLowerCase().replace(/\s+/g, "-")}`} variant="dark" data-type={category.type} onClick={() => dispatch(setPageNum({value: categoryId, category: sectionName}))}>
                            <FaEye />
                        </Button>
                    </Col>
                    <Col lg={6} sm={6} xs={6} className="p-0">
                        <Button variant="dark">
                            <FaCode />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
}