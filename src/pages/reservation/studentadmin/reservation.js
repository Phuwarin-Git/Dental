import React, { useState, useContext, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";

import { useFormik } from 'formik';
import * as Yup from 'yup';

const StudentAdminReservation = () => {
    const { user } = useContext(AuthContext);
    const [allUnit, setAllUnit] = useState([]);
    const [details, setDetails] = useState([]);
    const [select, setSelect] = useState([]);


    useEffect(() => {
        getDetails();
        getUnit();
    }, [user])


    const getDetails = () => {
        axios.get("http://selab.mfu.ac.th:8318/details/find/null").then((item) => {
            console.log("Null Unit :", item.data)

            for (let i in item.data) {
                let obj = {
                    ...item.data[i],
                    select: null
                }
                item.data[i] = obj
            }
            console.log("Test ==>", item.data)
            return setDetails(item.data);
        });
    }

    const getUnit = () => {
        axios.get("http://selab.mfu.ac.th:8318/unit/find/all").then((item) => {
            console.log("Unit lists:", item.data)
            return setAllUnit(item.data);
        });
    }


    function handleSubmit(id, value) {
        // e.preventDefault();
        alert('Unit : ' + id + ' Value :' + value);
        let body = { unit: value }
        axios.put("http://selab.mfu.ac.th:8318/details/updateUnit/" + id, body)
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
                                <lable>นักศึกษา : {item.name}</lable><br />
                                <lable>ประเภทงาน : {item.worktype}</lable><br />
                                <lable>คนไข้ : {item.patient}</lable><br />

                                <form onSubmit={() => { handleSubmit(item.id, item.select) }}>
                                    <select onChange={(event) => {
                                        console.log('Hi', event.target.value)
                                        item.select = event.target.value
                                    }} class="target">
                                        <option value="selected" selected="selected">Choose Unit</option>
                                        {allUnit.map((item) => {
                                            return <option key={item.unit_id} value={item.unit_code} value={item.unit_code}>{item.unit_code}</option>
                                        })}
                                    </select>
                                    <button style={{ borderRadius: '10px', marginLeft: '10px', backgroundColor: '#02ed60' }} type="submit">ยืนยัน</button>
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