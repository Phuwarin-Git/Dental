import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
import DentalHospital from '../picture/DentalHospital.png'
import { FaBeer } from 'react-icons/fa';
import { BsFillAlarmFill } from "react-icons/bs";

const StudentDashboard = () => {
    const { user } = useContext(AuthContext);
    const [details, setDetials] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://selab.mfu.ac.th:8318/details/find/null").then((item) => {
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
                            <Nav.Link style={{ color: '#FFFFFF' }} as={Link} to="/StudentDashboard">หน้าหลัก</Nav.Link>
                            <Nav.Link style={{ color: '#FFFFFF' }} as={Link} to="/StudentRes">จองการทำงาน</Nav.Link>
                            <Nav.Link style={{ color: '#FFFFFF' }} as={Link} to="/StudentHistory">ประวัติ</Nav.Link>
                            <Nav.Link style={{ color: '#FFFFFF' }} as={Link} to="/StudentProfile">บัญชี</Nav.Link>
                            <Nav.Link style={{ color: '#32fcf6' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                            <Nav.Link style={{ backgroundColor: '#ff2521', borderRadius: '10px', color: 'black', marginLeft: '550px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
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

                        <Col>
                            <h1>รายละเอียดต่างๆ</h1>
                            <Row>
                                <Col>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                หน้าหลัก<BsFillAlarmFill />
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                จองการทำงาน
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                ประวัติ
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                บัญชี
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                        </Col>

                    </Row>
                </Container>

            </div >
        </div>
    )
}
export default StudentDashboard;