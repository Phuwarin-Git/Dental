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
        axios.get("http://selab.mfu.ac.th:8318/details/find/notnull").then((item) => {
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
                    variant="dark"
                >
                    <thead>
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
                    <tbody >
                        {details.map(item => {
                            return <tr key={item.id}>
                                <td style={{ color: 'white' }}>{item.date}</td>
                                <td style={{ color: 'white' }}>{item.time}</td>
                                <td style={{ color: 'white' }}>{item.unit}</td>
                                <td style={{ color: 'white' }}>{item.clinic}</td>
                                <td style={{ color: 'white' }}>{item.worktype}</td>
                                <td style={{ color: 'white' }}>{item.patient}</td>
                                <td style={{ color: 'white' }}>ใจดีน้า</td>
                                <td style={{ color: 'white' }}><HistoryModal
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
                        })}
                    </tbody>
                </Table>
            </div>
        </div >
    )
}
export default StudentHistory;