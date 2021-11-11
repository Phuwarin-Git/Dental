import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import HistoryModal from './historyModal/modal';
import axios from "axios";
import { BsSearch } from "react-icons/bs";
import './whycss.css'


const StudentHistory = () => {
    const { user } = useContext(AuthContext);
    const [details, setDetials] = useState([]);
    const [searchDate, setSearchDate] = useState([]);
    const [detailsFordate, setDetailsForDate] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://localhost:3000/details/find/teachernotnull").then((item) => {
            console.log("data :", item.data)
            return filterDetails(item.data);
        });
    }

    const filterDetails = (item) => {
        const res = item.filter((item) => {
            return (item.name === user.first_name)
        })
        setDetials(res);
        console.log("details :", res)
    }

    async function onChangeSearch(e) {

        await axios.get("http://localhost:3000/details/find/teachernotnull").then((item) => {
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
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/StudentDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/StudentRes">จองการทำงาน</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/StudentHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/StudentProfile">บัญชี</Nav.Link>
                        <Nav.Link style={{ color: '#ffb938', fontWeight: 'bold', fontSize: '20px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', marginLeft: '350px', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

            <div className="PaddingDiv">
                <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minHeight: '700px', minWidth: '1500px' }}>
                    <h1 style={{ color: '#0047AB', fontWeight: 'bold' }}>ประวัติการจองการทำงาน</h1>

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
                                <th>วันที่</th>
                                <th>ช่วงเวลา</th>
                                <th>Unit</th>
                                <th>คลินิก</th>
                                <th>ประเภทงาน</th>
                                <th>คนไข้</th>
                                <th>อาจารย์ผู้ตรวจ</th>
                                <th>รายละเอียด</th>
                            </tr>
                        </thead>

                        {details.map(item => {
                            return <tbody key={item.id} >
                                <tr >
                                    <td className='tdStudent'>{item.date}</td>
                                    <td className='tdStudent'>{item.time}</td>
                                    <td className='tdStudent'>{item.unit}</td>
                                    <td className='tdStudent'>{item.clinic}</td>
                                    <td className='tdStudent'>{item.worktype}</td>
                                    <td className='tdStudent'>{item.patient}</td>
                                    <td className='tdStudent'>{item.teacher}</td>
                                    <td className='tdStudent'><HistoryModal
                                        unique={item.uniqueID}
                                        unit={item.unit}
                                        name={item.name}
                                        year={item.studentyear}
                                        date={item.date}
                                        clinic={item.clinic}
                                        type={item.worktype}
                                        patient={item.patient}
                                        dn={item.dn}
                                        hn={item.hn}
                                    /></td>
                                </tr>
                            </tbody>
                        })}

                    </Table>
                </Container>
            </div>
        </div >
    )
}
export default StudentHistory;