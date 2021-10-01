import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";


const StudentAdminHistory = () => {
    const { user } = useContext(AuthContext);
    const [details, setDetials] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://localhost:3000/details/find/notnull").then((item) => {
            console.log("data :", item.data)
            return setDetials(item.data);
        });
    }

    return (
        <div >
            <Navbar style={{ backgroundColor: '#1565C0' }}>
                <Container >
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminReservation">เลือกที่นั่ง</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminLimitCase">การจำกัดงาน</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#32fcf6', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: 'white', marginLeft: '300px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div style={{ marginTop: '50px' }} className="PaddingDiv">
                <Table
                    className="tableResponsive"
                    striped
                    borderless
                    hover
                    variant="primary"
                >
                    <thead className="thedTop">
                        <tr>
                            <th style={{ color: 'white' }}>ชื่อนักศึกษา</th>
                            <th style={{ color: 'white' }}>วันที่</th>
                            <th style={{ color: 'white' }}>ช่วงเวลา</th>
                            <th style={{ color: 'white' }}>Unit</th>
                            <th style={{ color: 'white' }}>คลินิก</th>
                            <th style={{ color: 'white' }}>ประเภทงาน</th>
                            <th style={{ color: 'white' }}>คนไข้</th>
                        </tr>
                    </thead>

                    {details.map(item => {
                        return <tbody key={item.id} >
                            <tr >
                                <td>{item.name}</td>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.unit}</td>
                                <td>{item.clinic}</td>
                                <td>{item.worktype}</td>
                                <td>{item.patient}</td>
                            </tr>
                        </tbody>
                    })}

                </Table>
            </div>
        </div >
    )
}
export default StudentAdminHistory;