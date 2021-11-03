import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";


const AdminDashboard = () => {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        console.log("User :", user)
    }, [user])


    return (
        <div style={{ minHeight: '1080px' }}>
            <nav style={{ background: '#0047AB' }}>
                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>
                </div>
            </nav>
            <Navbar style={{ backgroundColor: 'rgba(21, 101, 192)' }}>
                {/* style={{ backgroundColor: 'rgba(21, 101, 192, 0.3)' }} */}
                <Container >
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/AdminDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/AdminUser">ผู้ใช้งานระบบ</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/AdminUnit">เก้าอี้ทันตกรรม</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/AdminProfile">บัญชี</Nav.Link>
                        <Nav.Link style={{ color: '#ffb938', fontWeight: 'bold', fontSize: '20px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: 'white', marginLeft: '350px', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div>
                <h1>Admin Dashboard</h1>
            </div>
        </div>
    )
}
export default AdminDashboard;