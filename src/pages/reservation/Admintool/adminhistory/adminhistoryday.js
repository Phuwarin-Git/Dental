import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../../App';
import adminhistorymodal from './adminhistorymodal/adminhistorymodal';
import axios from "axios";


const Adminhistoryday = () => {
    const { user } = useContext(AuthContext);
    const [details, setDetials] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://selab.mfu.ac.th:8318/details/find/notnull").then((item) => {
            console.log("data :", item.data)
            return setDetials(item.data);
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
        <div style={{ background: '#E59866',minHeight:'1080px'}}>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Adminconfirm">ConfirmTool</Nav.Link>
                        <Nav.Link as={Link} to="/Adminconfirm">History</Nav.Link>
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        <Nav.Link style={{ color: '#DC7633' }} as={Link}>Name : {user.first_name}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Tool History</h1>
            {details.map((item) => {
                return <div key={item.id}>
                    <br />
                    <Card
                        style={{ width: '30rem', marginLeft: 'auto', marginRight: 'auto' }}
                        className="mb-2"
                    >
                        <Card.Header style={{ backgroundColor: '#873600', color: 'white' }}> วันที่ : {item.date}</Card.Header>
                        <Card.Body style={{ backgroundColor: '#DC7633' }}>

                            <Card.Text style={{}}>
                                <Card.Title>Clinic : {item.clinic} &nbsp;&nbsp; Unit : {item.unit} </Card.Title>
                                <lable>ช่วงเวลา : {item.time}</lable>&nbsp;&nbsp;
                                <lable>ประเภทงาน : {item.worktype}</lable><br />
                                <lable>ผู้เบิกอุปกรณ์ : {item.name}</lable><br />
                                <lable>คนไข้ : {item.patient}</lable><br />
                                <lable>อาจารย์ผู้ตรวจ : {item.teacher}</lable><br />
                            </Card.Text>
                            <Adminmodal
/>
                        </Card.Body>

                    </Card>
                    <br/>
                </div>
            })}
        </div >
    )
}
export default Adminhistoryday;