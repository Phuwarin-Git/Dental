import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
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
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/StudentDashboard">แดชบอร์ด</Nav.Link>
                        <Nav.Link as={Link} to="/StudentLimt">Limit</Nav.Link>
                        <Nav.Link as={Link} to="/StudentRes">Reservation</Nav.Link>
                        <Nav.Link as={Link} to="/StudentHistory">History</Nav.Link>
                        <Nav.Link as={Link} to="/StudentProfile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        <Nav.Link style={{ color: '#32fcf6' }} as={Link}>Name : {user.first_name}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Student Dashboard</h1>
            <Table striped bordered hover variant="dark" style={{ marginLeft: 'auto', marginRight: 'auto', color: 'pink', maxWidth: '97%' }}>
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
        </div >
    )
}
export default StudentDashboard;