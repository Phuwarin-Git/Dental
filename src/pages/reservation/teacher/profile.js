import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
const TeacherProfile = () => {
    const { user } = useContext(AuthContext);


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/TeacherDashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/TeacherSelectWork">Work Selection</Nav.Link>
                        <Nav.Link as={Link} to="/TeacherHistory">History</Nav.Link>
                        <Nav.Link as={Link} to="/TeacherProfile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        <Nav.Link style={{ color: '#3258fc' }} as={Link}>Name : {user.first_name}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Teacher Profile</h1>

        </div >
    )
}
export default TeacherProfile;