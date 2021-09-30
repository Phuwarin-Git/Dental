
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
    const [isChecked, setIsChecked] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://localhost:3000/details/find/teachernull").then((item) => {
            console.log("Limit :", item.data)
            return setDetails(item.data);
        });
    }

    function handleOnChange(e) {
        setIsChecked([...isChecked, { id: e.target.value, teacher: user.first_name }]);
        console.log('Value :', e.target.value)
        console.log('isChecked :', isChecked)
    };

    // const getCheking = (id, teacher) => {
    //     return console.log('id :', id, 'teacher :', teacher)
    // }

    function submitApprove() {
        let body = isChecked;
        axios.put("http://localhost:3000/details/updateTeacher/", body)
        console.log('Body data :', body)
        return alert("เลือกสำเร็จ")
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
                        <Nav.Link style={{ borderRadius: '10px', color: 'white', marginLeft: '350px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

            <div className="PaddingDiv">


                <div class="search">
                    <input
                        type="date"
                        class="searchTerm"
                        id="input_text"
                        placeholder="ค้นหาวันที่"
                    >
                    </input>
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
                    variant="primary"
                >
                    <thead style={{ backgroundColor: '#1f5bcc' }}>
                        <tr>
                            <th style={{ color: 'white' }} >เลือกตรวจงาน</th>
                            <th style={{ color: 'white' }} >คลินิก</th>
                            <th style={{ color: 'white' }} >Unit</th>
                            <th style={{ color: 'white' }} >วันที่</th>
                            <th style={{ color: 'white' }} >ช่วงเวลา</th>
                            <th style={{ color: 'white' }} >ชื่อนักศึกษา</th>
                            <th style={{ color: 'white' }} >ชั้นปี</th>
                            <th style={{ color: 'white' }} >ประเภทงาน</th>
                        </tr>
                    </thead>
                    {details.map(item => {
                        return <tbody key={item.id}>
                            <tr>
                                <td>
                                    <label key={item.id} class="styleCheckBox">
                                        <input
                                            key={item.id}
                                            value={item.id}
                                            onChange={handleOnChange}
                                            type="checkbox" />
                                        <span class="checkmark"></span>
                                    </label>
                                </td>
                                <td style={{ color: 'black' }}>{item.clinic}</td>
                                <td style={{ color: 'black' }}>{item.unit}</td>
                                <td style={{ color: 'black' }}>{item.date}</td>
                                <td style={{ color: 'black' }}>{item.time}</td>
                                <td style={{ color: 'black' }}>{item.name}</td>
                                <td style={{ color: 'black' }}>{item.studentyear}</td>
                                <td style={{ color: 'black' }}>{item.worktype}</td>
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