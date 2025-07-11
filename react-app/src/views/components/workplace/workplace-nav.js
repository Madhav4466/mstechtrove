import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function WorkplaceNavButtons({ item, handleClick, title, href, children }) {
    return (
        <Button
            variant={!item ? "secondary" : "dark"}
            as={Link}
            title={title}
            aria-label={title}
            onClick={handleClick}
            to={href}
            disabled={!item}
            tabIndex={!item ? -1 : 0}
        >
            {children}
        </Button>
    );
}