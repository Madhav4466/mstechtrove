import { Col, Dropdown, Row } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setPageNum } from "../../../redux/page-num";
import { useDispatch } from "react-redux";

export default function WorkplaceMenu({workplace, onSelect}) {
    const dispatch = useDispatch();

    return (
        <Row className="p-2 justify-content-between">
            <Col lg={12} className="d-flex gap-2">
                <Button
                    variant="dark"
                    as={Link}
                    to="/workplace"
                    title="Back to workplace"
                >
                    Back
                </Button>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="dropdown-basic" aria-label="More Wokplace Items"><FaBars /></Dropdown.Toggle>
                    <Dropdown.Menu>
                        {Object.entries(workplace).map(([category, items], index) => {
                            return (
                                <Dropdown key={index} drop="end">
                                    <Dropdown.Toggle variant="light" id={`dropdown-${category}`} className="w-100 text-start">{category.toUpperCase()}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {items.map((item, itemId) => {
                                            const {title} = item;
                                            return (
                                                <Dropdown.Item key={itemId} as={Link} to={`/workplace/${category}/${title.toLowerCase().replace(" ", "-")}`} onClick={() => dispatch(setPageNum(itemId))}>{title}</Dropdown.Item>
                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Row>
    )

}