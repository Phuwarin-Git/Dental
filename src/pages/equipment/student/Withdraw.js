import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
const Withdrawal = () => {
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
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/ToothPage">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/Withdrawal">Withdrawal</Nav.Link>
                        <Nav.Link as={Link} to="/">History</Nav.Link>
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        <Nav.Link style={{ color: '#32fcf6' }} as={Link}>Name : {user.first_name}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <div>
                <h1>Request Equipment Withdrawal</h1>
                {details.map((item) => {
                    return <div key={item.id}>
                        <br />
                        <Card
                            style={{ width: '21rem', marginLeft: 'auto', marginRight: 'auto' }}
                            className="mb-2"
                        >
                            <Card.Header style={{ backgroundColor: '#0067e6', color: 'white' }}> วันที่ : {item.date}</Card.Header>
                            <Card.Body style={{ backgroundColor: '#1c82ff' }}>

                                <Card.Text>
                                    <Card.Title>Clinic : {item.clinic} &nbsp;&nbsp; Unit : {item.unit} </Card.Title>
                                    <lable>ช่วงเวลา : {item.time}</lable>&nbsp;&nbsp;
                                    <lable>ประเภทงาน : {item.worktype}</lable><br />
                                    <lable>คนไข้ : {item.patient}</lable><br />
                                    <lable>อาจารย์ผู้ตรวจ : {item.teacher}</lable><br />
                                    <button type="button" class="btn btn-warning">Withdraw</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                })}
            </div>

        </div>
    )
}
export default Withdrawal;