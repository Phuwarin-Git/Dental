
import React, { useContext, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../../App';

import '../Yup.css'

const TeacherSelectWork = () => {
    const { user } = useContext(AuthContext);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://selab.mfu.ac.th:8318/details/find/notnull").then((item) => {
            console.log("Limit :", item.data)
            return setDetails(item.data);
        });
    }

    function submitReject() {
        return alert("ปฏิเสธแล้ว")
    }

    function submitApprove() {
        return alert("เลือกสำเร็จ")
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/TeacherDashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/TeacherSelectWork">Work Selection</Nav.Link>
                        <Nav.Link as={Link} to="/TeacherProfile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/TeacherHistory">History</Nav.Link>
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        <Nav.Link style={{ color: '#3258fc' }} as={Link}>Name : {user.first_name}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Work Selection</h1>
            <Table striped bordered hover variant="dark" style={{ marginLeft: 'auto', marginRight: 'auto', color: 'pink', maxWidth: '97%' }}>
                <thead>
                    <tr>
                        <th>Unit</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Clinic</th>
                        <th>Worktype</th>
                        <th>Reject</th>
                        <th>Approve</th>

                    </tr>
                </thead>
                {details.map(item => {
                    return <tbody >
                        <tr>
                            <td style={{ color: 'white' }}>{item.unit}</td>
                            <td style={{ color: 'white' }}>{item.date}</td>
                            <td style={{ color: 'white' }}>{item.time}</td>
                            <td style={{ color: 'white' }}>{item.name}</td>
                            <td style={{ color: 'white' }}>{item.studentyear}</td>
                            <td style={{ color: 'white' }}>{item.clinic}</td>
                            <td style={{ color: 'white' }}>{item.worktype}</td>
                            <td><button style={{ backgroundColor: '#e85702', borderRadius: '10px', width: '80px', height: '35px' }} onClick={() => submitReject()}>ปฏิเสธ</button></td>
                            <td><button style={{ backgroundColor: '#00d60b', borderRadius: '10px', width: '80px', height: '35px' }} onClick={() => submitApprove()}>ยืนยัน</button></td>
                        </tr>
                    </tbody>
                })}
            </Table>

        </div >
    )
}
export default TeacherSelectWork;