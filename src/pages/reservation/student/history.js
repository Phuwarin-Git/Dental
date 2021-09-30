import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'
import { Nav, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
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

    //ตอนเช็คจริงๆน่าจะใช้ E-mail เผื่อมีชื่อซ้ำ

    const filterDetails = (item) => {
        const res = item.filter((item) => {
            return (item.name === user.first_name)
        })
        setDetials(res);
        console.log("details :", res)
    }

    return (
        <div >
            <Navbar style={{ backgroundColor: '#1565C0' }}>
                <Container >
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentRes">จองการทำงาน</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentProfile">บัญชี</Nav.Link>
                        <Nav.Link style={{ color: '#32fcf6', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ backgroundColor: '#ff3b38', borderRadius: '10px', color: 'black', marginLeft: '350px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
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
                            <th style={{ color: 'white' }}>วันที่</th>
                            <th style={{ color: 'white' }}>ช่วงเวลา</th>
                            <th style={{ color: 'white' }}>Unit</th>
                            <th style={{ color: 'white' }}>คลินิก</th>
                            <th style={{ color: 'white' }}>ประเภทงาน</th>
                            <th style={{ color: 'white' }}>คนไข้</th>
                            <th style={{ color: 'white' }}>อาจารย์ผู้ตรวจ</th>
                            <th style={{ color: 'white' }}>รายละเอียด</th>
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