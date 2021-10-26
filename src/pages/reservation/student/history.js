import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import HistoryModal from './historyModal/modal';
import axios from "axios";
import './whycss.css'


const StudentHistory = () => {
    const { user } = useContext(AuthContext);
    const [details, setDetials] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://localhost:3000/details/find/teachernotnull").then((item) => {
            console.log("data :", item.data)
            return filterDetails(item.data);
        });
    }

    const filterDetails = (item) => {
        const res = item.filter((item) => {
            return (item.name === user.first_name)
        })
        setDetials(res);
        console.log("details :", res)
    }

    return (
        <div >
            <nav style={{ background: '#0047AB' }}>
                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>
                </div>
            </nav>
            <Navbar style={{ backgroundColor: '#1565C0' }}>
                <Container >
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentRes">จองการทำงาน</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentProfile">บัญชี</Nav.Link>
                        <Nav.Link style={{ color: '#ffb938', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: 'white', marginLeft: '350px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <div className="PaddingDiv">
                <h1 style={{ color: '#0047AB', fontWeight: 'bold' }}>ประวัติการจองการทำงาน</h1>
                <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%' }}>
                    <thead className='theadAdmin'>
                        <tr>
                            <th>วันที่</th>
                            <th>ช่วงเวลา</th>
                            <th>Unit</th>
                            <th>คลินิก</th>
                            <th>ประเภทงาน</th>
                            <th>คนไข้</th>
                            <th>อาจารย์ผู้ตรวจ</th>
                            <th>รายละเอียด</th>
                        </tr>
                    </thead>

                    {details.map(item => {
                        return <tbody key={item.id} >
                            <tr >
                                <td className='tdStudent'>{item.date}</td>
                                <td className='tdStudent'>{item.time}</td>
                                <td className='tdStudent'>{item.unit}</td>
                                <td className='tdStudent'>{item.clinic}</td>
                                <td className='tdStudent'>{item.worktype}</td>
                                <td className='tdStudent'>{item.patient}</td>
                                <td className='tdStudent'>{item.teacher}</td>
                                <td className='tdStudent'><HistoryModal
                                    unique={item.uniqueID}
                                    unit={item.unit}
                                    name={item.name}
                                    year={item.studentyear}
                                    date={item.date}
                                    clinic={item.clinic}
                                    type={item.worktype}
                                    patient={item.patient}
                                    dn={item.dn}
                                    hn={item.hn}
                                /></td>
                            </tr>
                        </tbody>
                    })}

                </Table>
            </div>
        </div >
    )
}
export default StudentHistory;