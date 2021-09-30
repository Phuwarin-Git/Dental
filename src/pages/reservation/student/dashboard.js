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
import DentalHospital from '../picture/DentalHospital.png'

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
        <div style={{ minHeight: '2000px' }}>
            <div style={{ backgroundImage: `url(${DentalHospital})`, height: '980px' }}>
                <Navbar style={{ backgroundColor: 'rgba(21, 101, 192)' }}>
                    {/* style={{ backgroundColor: 'rgba(21, 101, 192, 0.3)' }} */}
                    <Container >
                        <Nav className="me-auto">
                            <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentDashboard">หน้าหลัก</Nav.Link>
                            <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentRes">จองการทำงาน</Nav.Link>
                            <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentHistory">ประวัติ</Nav.Link>
                            <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentProfile">บัญชี</Nav.Link>
                            <Nav.Link style={{ color: '#32fcf6', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                            <Nav.Link style={{ borderRadius: '10px', color: 'white', marginLeft: '350px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

            <div>
                <br />
                <Container>
                    <Row>
                        <Col>
                            <h1>การจองที่อยู่ระหว่างการดำเนินการ</h1>
                            <Table
                                className="tableResponsive"
                                striped
                                borderless
                                hover
                                variant="dark"
                                style={{ width: '800px' }}
                            >
                                <thead>
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
                                            <td style={{ color: 'white' }}>{item.date}</td>
                                            <td style={{ color: 'white' }}>{item.time}</td>
                                            <td style={{ color: 'white' }}>{item.clinic}</td>
                                            <td style={{ color: 'white' }}>{item.worktype}</td>
                                            <td style={{ color: 'white' }}>{item.patient}</td>
                                            <td style={{ color: 'white' }}><Button style={{ backgroundColor: '#ffb938', color: 'black' }} >
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
                        </Col>

                        <Col style={{ marginLeft: '100px' }}>
                            <h1>การทำงาน</h1>
                            <Row>
                                <Card style={{ width: '200px' }}>
                                    <Card.Body>
                                        <Card.Title><BsFillCalendarFill style={{ width: '60px', height: '60px' }} /></Card.Title>
                                        <Button style={{ width: '150px' }} onClick={() => { history.push('/StudentRes') }} variant="primary">จองการทำงาน</Button>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <Card style={{ width: '200px', marginTop: '10px' }}>
                                    <Card.Body>
                                        <Card.Title><BsReverseLayoutTextWindowReverse style={{ width: '60px', height: '60px' }} /></Card.Title>
                                        <Button style={{ width: '150px' }} onClick={() => { history.push('/StudentHistory') }} variant="primary">ประวัติ</Button>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row>
                                <Card style={{ width: '200px', marginTop: '10px' }}>
                                    <Card.Body>
                                        <Card.Title><BsPersonFill style={{ width: '60px', height: '60px' }} /></Card.Title>
                                        <Button style={{ width: '150px' }} onClick={() => { history.push('/StudentProfile') }} variant="primary">บัญชี</Button>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Col>

                    </Row>
                </Container>

            </div >
        </div>
    )
}
export default StudentDashboard;