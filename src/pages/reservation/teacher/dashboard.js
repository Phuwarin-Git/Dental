import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
const TeacherDashboard = () => {
    const { user } = useContext(AuthContext);


    return (
        <div>
            <Navbar style={{ backgroundColor: '#1565C0' }}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/TeacherDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/TeacherSelectWork">จองการทำงาน</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/TeacherHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/TeacherProfile">บัญชี</Nav.Link>
                        <Nav.Link style={{ color: '#32fcf6', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: 'black', marginLeft: '350px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Teacher Dashboard</h1>

        </div >
    )
}
export default TeacherDashboard;