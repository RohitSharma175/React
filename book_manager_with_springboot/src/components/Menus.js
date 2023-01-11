import React from "react";
import { 
    ListGroup, 
    ListGroupItem
} from "reactstrap";

import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';

const Menus = () => {
    return (
        <ListGroup>
            <Link  className="list-group-item list-group-item-action" color="success"  to="/" tag="a">
                Home
            </Link>
            <Link  className="list-group-item list-group-item-action" color="info"  to="/add-course" tag="a">
               Add Course
            </Link>
            <Link className="list-group-item list-group-item-action" color="warning"  to="/view-course" tag="a">
                
                View Course
            </Link>
            <Link className="list-group-item list-group-item-action" color="danger"  to="/" tag="a">
                About Us
            </Link>
            <Link className="list-group-item list-group-item-action" color="success"  to="/" tag="a">
                Contact
            </Link>
        </ListGroup>
    );
}

export default Menus