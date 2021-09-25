import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import HistoryModal from './historyModal/modal';
import axios from "axios";


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
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/StudentDashboard">แดชบอร์ด</Nav.Link>
                        <Nav.Link as={Link} to="/StudentRes">จองการทำงาน</Nav.Link>
                        <Nav.Link as={Link} to="/StudentHistory">ประวัติ</Nav.Link>
                        <Nav.Link as={Link} to="/StudentProfile">บัญชี</Nav.Link>
                        <Nav.Link as={Link} to="/">ออกจากระบบ</Nav.Link>
                        <Nav.Link style={{ color: '#32fcf6' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Student History</h1>
            {details.map((item) => {
                return <div key={item.id}>
                    <br />
                    <Card
                        style={{ width: '21rem', marginLeft: 'auto', marginRight: 'auto' }}
                        className="mb-2"
                    >
                        <Card.Header style={{ backgroundColor: '#0067e6', color: 'white' }}> วันที่ : {item.date}</Card.Header>
                        <Card.Body style={{ backgroundColor: '#1c82ff' }}>

                            <Card.Text style={{ marginBottom: '-5%' }}>
                                <Card.Title>Clinic : {item.clinic} &nbsp;&nbsp; Unit : {item.unit} </Card.Title>
                                <lable>ช่วงเวลา : {item.time}</lable>&nbsp;&nbsp;
                                <lable>ประเภทงาน : {item.worktype}</lable><br />
                                <lable>คนไข้ : {item.patient}</lable><br />
                                <lable>อาจารย์ผู้ตรวจ : อาจารย์ใจดี จริงจริง</lable><br />
                            </Card.Text>
                            <HistoryModal
                                unit={item.unit}
                                name={item.name}
                                year={item.studentyear}
                                date={item.date}
                                clinic={item.clinic}
                                type={item.worktype}
                                patient={item.patient}
                                dn={item.dn}
                                hn={item.hn}
                            />
                        </Card.Body>
                    </Card>
                </div>
            })}
        </div >
    )
}
export default StudentHistory;