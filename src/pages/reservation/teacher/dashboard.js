import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
const TeacherDashboard = () => {
    const { user } = useContext(AuthContext);


    return (
        <div style={{ backgroundColor: '#ededed', minHeight: '1080px' }}>
          <nav style={{ background: '#0080ff' }}>
            <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>
            </div>
          </nav>
            <Navbar style={{ backgroundColor: 'white' }}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/TeacherDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/TeacherSelectWork">การเลือกตรวจงาน</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/TeacherHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/TeacherProfile">บัญชี</Nav.Link>
                        <Nav.Link style={{ color: '#E05701', fontWeight: 'bold', fontSize: '20px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', marginLeft: '350px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minHeight: '700px', minWidth: '1500px' }}>
                <h1 style={{color:'#198CFF'}}>Teacher Dashboard</h1>
            </Container>

        </div >
    )
}
export default TeacherDashboard;