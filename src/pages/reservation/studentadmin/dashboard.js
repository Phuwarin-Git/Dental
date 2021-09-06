import React, { useState, useContext } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
const StudentAdminDashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/StudentAdminDashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/StudentAdminReservation">Unit Selected</Nav.Link>
                        <Nav.Link as={Link} to="/StudentAdminLimitCase">Case Limit</Nav.Link>
                        <Nav.Link as={Link} to="/StudentAdminHistory">History</Nav.Link>
                        <Nav.Link as={Link} to="/ToothAdmin">Tooth</Nav.Link>
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        <Nav.Link style={{ color: '#3258fc' }} as={Link}>Name : {user.first_name}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Student Admin dashboard</h1>
        </div>
    )
}
export default StudentAdminDashboard;