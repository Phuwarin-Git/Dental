import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
const equipmentdashboard = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/StudentDashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/StudentRes">Reservation</Nav.Link>
                        <Nav.Link as={Link} to="/StudentHistory">History</Nav.Link>
                        <Nav.Link as={Link} to="/StudentProfile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/ToothPage">Tooth</Nav.Link>
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default equipmentdashboard;