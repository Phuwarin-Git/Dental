import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
import { BsSearch } from "react-icons/bs";
// import DentalHospital from '../picture/DentalHospital.png'

import { BsFillCalendarFill, BsReverseLayoutTextWindowReverse, BsPersonFill } from "react-icons/bs";

const StudentDashboard = () => {

    const { user } = useContext(AuthContext);
    const [details, setDetials] = useState([]);
    const [searchDate, setSearchDate] = useState([]);
    const [detailsFordate, setDetailsForDate] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://localhost:3000/details/find/teachernull").then((item) => {
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

    async function onChangeSearch(e) {

        await axios.get("http://localhost:3000/details/find/teachernull").then((item) => {
            console.log("new Limit ==> :", item.data)
            return setDetailsForDate(item.data);
        });

        const res = detailsFordate.filter((item) => {
            return (item.name === user.first_name)
        })
        setDetials(res);
        console.log("details :", res)


        console.log("Change Date :", e.target.value)
        setSearchDate(e.target.value)
    }

    function Searching() {
        console.log("Searching :", searchDate)
        const checking = details.filter((item) => {
            return item.date === searchDate
        })
        console.log("Filter Date", checking)
        setDetials(checking)
    }



    return (
        <div style={{ backgroundColor: '#ededed', minHeight: '1080px' }}>
            <nav style={{ background: '#0080ff' }}>
                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>
                </div>
            </nav>
            <Navbar style={{ backgroundColor: 'white', boxShadow: '1px 1px 10px #d6d6d6' }}>
                {/* style={{ backgroundColor: 'rgba(21, 101, 192, 0.3)' }} */}
                <Container >
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentRes">จองการทำงาน</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentProfile">บัญชี</Nav.Link>
                        <Nav.Link style={{ color: '#E05701', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', marginLeft: '350px', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div>
                <br />
                <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minHeight: '700px', minWidth: '1500px' }}>
                    <h1 style={{ color: '#198CFF', fontWeight: 'bold' }}>การจองที่อยู่ระหว่างการดำเนินการ</h1>

                    <label style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px', marginLeft: '20px' }}>ค้นหาวันที่ : </label>

                    <input
                        style={{ fontSize: '18px' }}
                        type="date"
                        class="searchTerm"
                        id="input_text"
                        placeholder="ค้นหาวันที่"
                        onChange={onChangeSearch}
                    >
                    </input>
                    <button onClick={() => Searching()} type="submit" class="searchButton">
                        <BsSearch />
                    </button>

                    <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%', marginTop: '20px' }}>
                        <thead className='theadAdmin'>
                            <tr>
                                <th style={{ fontWeight: 'bold', fontSize: '23px' }}>วันที่</th>
                                <th style={{ fontWeight: 'bold', fontSize: '23px' }}>ช่วงเวลา</th>
                                <th style={{ fontWeight: 'bold', fontSize: '23px' }}>คลินิก</th>
                                <th style={{ fontWeight: 'bold', fontSize: '23px' }}>ประเภทงาน</th>
                                <th style={{ fontWeight: 'bold', fontSize: '23px' }}>คนไข้</th>
                                <th style={{ fontWeight: 'bold', fontSize: '23px' }}>สถานะ</th>
                            </tr>
                        </thead>
                        {details.map(item => {
                            return <tbody key={item.id}>
                                <tr>
                                    <td className='tdStudent'>{item.date}</td>
                                    <td className='tdStudent'>{item.time}</td>
                                    <td className='tdStudent'>{item.clinic}</td>
                                    <td className='tdStudent'>{item.worktype}</td>
                                    <td className='tdStudent'>{item.patient}</td>
                                    <td className='tdStudent'><Button style={{ backgroundColor: '#ED9E0C', color: 'black' }} >
                                        {" "}รอดำเนินการ...{" "}
                                    </Button></td>
                                </tr>
                            </tbody>
                        })}
                    </Table>
                </Container>

            </div >
        </div >
    )
}
export default StudentDashboard;