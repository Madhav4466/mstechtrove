import { Col, Dropdown, Row } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setPageNum } from "../../../redux/page-num";
import { useDispatch } from "react-redux";

export default function WorkplaceMenu({workplace, onSelect}) {
    const dispatch = useDispatch();
    const {value: pageNum, category} = useSelector((state) => state.workplacePageNum);
    const slugify = (text) => text.toString().toLowerCase().trim().replace(/\s+/g, "-");
    const categories = [...new Set(workplace.map(item => item.category))];
    const currentCategoryItems = workplace.filter((item) => item.category === category);
    const currentItem = currentCategoryItems[pageNum];
    const currentItemIndex = workplace.findIndex((item) => item.title === currentItem.title && item.category === category);
    
    const prevItem = currentItemIndex > 0 ? workplace[currentItemIndex - 1] : null;
    const nextItem = currentItemIndex < workplace.length - 1 ? workplace[currentItemIndex + 1] : null;


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
                        {categories.map((cat, index) => {
                            return (
                                <Dropdown key={index} drop="end">
                                    <Dropdown.Toggle variant="light" id={`dropdown-${cat}`} className="w-100 text-start">{cat.toUpperCase()}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {workplace.filter(item => item.category === cat).map((item, itemId) => {
                                            const {title} = item; 
                                            return (
                                                <Dropdown.Item key={itemId} as={Link} to={`/workplace/${cat}/${title.toLowerCase().replace(" ", "-")}`} onClick={() => dispatch(setPageNum({value: itemId, category: cat}))}>{title}</Dropdown.Item>
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