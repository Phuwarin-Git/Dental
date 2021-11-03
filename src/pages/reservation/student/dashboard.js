import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
// import DentalHospital from '../picture/DentalHospital.png'

import { BsFillCalendarFill, BsReverseLayoutTextWindowReverse, BsPersonFill } from "react-icons/bs";

const StudentDashboard = () => {

    const { user } = useContext(AuthContext);
    const [details, setDetials] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://localhost:3000/details/find/null").then((item) => {
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
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/StudentDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/StudentRes">จองการทำงาน</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/StudentHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/StudentProfile">บัญชี</Nav.Link>
                        <Nav.Link style={{ color: '#ffb938', fontWeight: 'bold', fontSize: '20px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: 'white', marginLeft: '350px', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div>
                <br />
                <Container>
                    <h1 style={{ color: '#0047AB', fontWeight: 'bold' }}>การจองที่อยู่ระหว่างการดำเนินการ</h1>
                    <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%' }}>
                        <thead className='theadAdmin'>
                            <tr>
                                <th>วันที่</th>
                                <th>ช่วงเวลา</th>
                                <th>คลินิก</th>
                                <th>ประเภทงาน</th>
                                <th>คนไข้</th>
                                <th>สถานะ</th>
                            </tr>
                        </thead>
                        {details.map(item => {
                            return <tbody key={item.id}>
                                <tr>
                                    <td className='tdStudent'>{item.date}</td>
                                    <td className='tdStudent'>{item.time}</td>
                                    <td className='tdStudent'>{item.clinic}</td>
                                    <td className='tdStudent'>{item.worktype}</td>
                                    <td className='tdStudent'>{item.patient}</td>
                                    <td className='tdStudent'><Button style={{ backgroundColor: '#ffb938', color: 'black' }} >
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        /> {" "}รอดำเนินการ...{" "}
                                    </Button></td>
                                </tr>
                            </tbody>
                        })}
                    </Table>
                </Container>

            </div >
        </div>
    )
}
export default StudentDashboard;