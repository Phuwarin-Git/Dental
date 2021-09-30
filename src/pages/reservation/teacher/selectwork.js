
import React, { useContext, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../../App';
import './whycss.css'
import '../Yup.css'
import Button from './reservationCss/ButtonRes';
import { BsSearch } from "react-icons/bs";


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


    function submitApprove() {
        let body = [{ teacher: 'TeacherArkira', id: '250' }, { teacher: 'Doraemon', id: '251' }];
        axios.put("http://localhost:3000/details/updateTeacher/", body)
        console.log('Body data :', body)
        return alert("เลือกสำเร็จ โดย :", user.first_name,)
    }

    return (
        <div>
            <Navbar style={{ backgroundColor: '#1565C0' }}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/TeacherDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/TeacherSelectWork">จองการทำงาน</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/TeacherHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/TeacherProfile">บัญชี</Nav.Link>
                        <Nav.Link style={{ color: '#32fcf6', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ backgroundColor: '#ff3b38', borderRadius: '10px', color: 'black', marginLeft: '350px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

            <div className="PaddingDiv">


                <div class="search">
                    <input type="date" class="searchTerm" id="input_text" placeholder="ค้นหาวันที่"></input>
                    <button type="submit" class="searchButton">
                        <BsSearch />
                    </button>
                </div>


                <Table
                    style={{ marginTop: '20px' }}
                    className="tableResponsive"
                    striped
                    borderless
                    hover
                    variant="dark"
                >
                    <thead>
                        <tr>
                            <th>เลือกตรวจงาน</th>
                            <th>คลินิก</th>
                            <th>Unit</th>
                            <th>วันที่</th>
                            <th>ช่วงเวลา</th>
                            <th>ชื่อนักศึกษา</th>
                            <th>ชั้นปี</th>
                            <th>ประเภทงาน</th>
                        </tr>
                    </thead>
                    {details.map(item => {
                        return <tbody >
                            <tr>
                                <td>
                                    <label class="styleCheckBox">
                                        <input type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                </td>
                                <td style={{ color: 'white' }}>{item.clinic}</td>
                                <td style={{ color: 'white' }}>{item.unit}</td>
                                <td style={{ color: 'white' }}>{item.date}</td>
                                <td style={{ color: 'white' }}>{item.time}</td>
                                <td style={{ color: 'white' }}>{item.name}</td>
                                <td style={{ color: 'white' }}>{item.studentyear}</td>
                                <td style={{ color: 'white' }}>{item.worktype}</td>
                            </tr>
                        </tbody>
                    })}
                </Table>
                <Button onClick={() => submitApprove()}>ยืนยัน</Button>
            </div>
        </div >
    )
}
export default TeacherSelectWork;