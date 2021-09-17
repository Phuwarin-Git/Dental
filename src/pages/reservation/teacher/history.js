import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';

import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
const TeacherHistory = () => {
    const { user } = useContext(AuthContext);


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/TeacherDashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/TeacherSelectWork">Work Selection</Nav.Link>
                        <Nav.Link as={Link} to="/TeacherProfile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/TeacherHistory">History</Nav.Link>
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        <Nav.Link style={{ color: '#3258fc' }} as={Link}>Name : {user.first_name}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Teacher History</h1>

        </div >
    )
}
export default TeacherHistory;