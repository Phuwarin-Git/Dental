import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
import { BsSearch } from "react-icons/bs";

const StudentAdminHistory = () => {
    const { user } = useContext(AuthContext);
    const [details, setDetials] = useState([]);
    const [searchDate, setSearchDate] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://localhost:3000/details/find/notnull").then((item) => {
            console.log("data :", item.data)
            return setDetials(item.data);
        });
    }

    async function onChangeSearch(e) {
        await axios.get("http://localhost:3000/details/find/notnull").then((item) => {
            console.log("new Limit ==> :", item.data)
            return setDetials(item.data);
        });
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
            <Navbar style={{ backgroundColor: 'white' }}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminReservation">เลือกที่นั่ง</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminLimitCase">การจำกัดงาน</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#424242', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', marginLeft: '300px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

            <div className="PaddingDiv">
                <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minHeight: '700px', minWidth: '1500px' }}>
                    <h1 style={{ color: '#198CFF', fontWeight: 'bold' }}>ประวัติ</h1>
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
                    <h1></h1>
                    <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%' }}>
                        <thead className='theadAdmin'>
                            <tr>
                                <th>ชื่อนักศึกษา</th>
                                <th>วันที่</th>
                                <th>ช่วงเวลา</th>
                                <th>Unit</th>
                                <th>คลินิก</th>
                                <th>ประเภทงาน</th>
                                <th>คนไข้</th>
                            </tr>
                        </thead>

                        {details.map(item => {
                            return <tbody key={item.id} >
                                <tr >
                                    <td className='tdStudent'>{item.name}</td>
                                    <td className='tdStudent'>{item.date}</td>
                                    <td className='tdStudent'>{item.time}</td>
                                    <td className='tdStudent'>{item.unit}</td>
                                    <td className='tdStudent'>{item.clinic}</td>
                                    <td className='tdStudent'>{item.worktype}</td>
                                    <td className='tdStudent'>{item.patient}</td>
                                </tr>
                            </tbody>
                        })}

                    </Table>
                </Container>
            </div>
        </div >
    )
}
export default StudentAdminHistory;