import React, { useState, useContext, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";

const StudentAdminReservation = () => {
    const { user } = useContext(AuthContext);
    const [allUnit, setAllUnit] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        getDetails();
        getUnit();
    }, [user])

    const getDetails = () => {
        axios.get("http://localhost:3000/details/find/null").then((item) => {
            console.log("Null Unit :", item.data)
            return setDetails(item.data);
        });
    }
    const getUnit = () => {
        axios.get("http://localhost:3000/unit/find/all").then((item) => {
            console.log("Unit lists:", item.data)
            return setAllUnit(item.data);
        });
    }

    function onSubmitUnit(e) {
        e.preventDefault();
        return alert("Hello");
    }


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/StudentAdminDashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/StudentAdminReservation">Unit Selected</Nav.Link>
                        <Nav.Link as={Link} to="/StudentAdminLimitCase">Case Limit</Nav.Link>
                        <Nav.Link as={Link} to="/StudentAdminHistory">History</Nav.Link>
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        <Nav.Link style={{ color: '#3258fc' }} as={Link}>Name : {user.first_name}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Student Admin Unit Selection</h1>
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
                                <Card.Title>Clinic : {item.clinic} &nbsp;&nbsp; เวลา : {item.time} </Card.Title>
                                <lable>ประเภทงาน : {item.worktype}</lable><br />
                                <lable>คนไข้ : {item.patient}</lable><br />
                                <form onSubmit={onSubmitUnit}>
                                    <select class="target">
                                        <option value="selected" selected="selected">Choose Unit</option>
                                        {allUnit.map((item) => {
                                            return <option value={item.unit_code} value={item.unit_code}>{item.unit_code}</option>
                                        })}
                                    </select>
                                    <button type="submit">ยืนยัน</button>
                                </form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            })}
        </div>
    )
}
export default StudentAdminReservation;