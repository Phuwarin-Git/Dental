import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
import './whycss.css'
import { BsSearch } from "react-icons/bs";


const TeacherHistory = () => {
    const { user } = useContext(AuthContext);
    const [details, setDetials] = useState([]);
    const [searchDate, setSearchDate] = useState([]);
    const [detailsFordate, setDetailsForDate] = useState([]);
    const [page, setPage] = useState([]);
    const [firstPage, setFirstPage] = useState(true);
    const [allPage, setAll] = useState([]);
    const [listPage, setList] = useState([]);
    const [current, setCurrent] = useState();

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    useEffect(() => {
        console.log('details in this page :', page)
    }, [page])

    useEffect(() => {
        console.log('List page :', listPage)
    }, [listPage])

    useEffect(() => {
        console.log('list details :', page)
    }, [details])

    useEffect(() => {
        console.log("Sum page :", allPage)
        let a = [];
        for (let i = 1; i < allPage + 1; i++) {
            a.push(i)
        }
        return setList(a)
    }, [allPage])

    const getDetails = () => {
        axios.get("http://localhost:3000/details/find/teachernotnull").then((item) => {
            console.log("data :", item.data)
            return filterDetails(item.data);
        });
    }

    const filterDetails = (item) => {
        const res = item.filter((item) => {
            return (item.teacher === user.first_name)
        })
        console.log("details :", res)
        let pageList = [];
        res.map((item) => {
            if (res.length < 10) {
                pageList.push(item)
            }
            // else {
            //     setPage([item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8], item[9]])
            // }
            // if ((item.length) % 10 !== 0) {
            //     let test = ((item.length) / 10)
            //     // console.log("test :", test)
            //     let realLength = Math.trunc(test) + 1;
            //     // console.log("test2 :", realLength)
            //     setAll(realLength)
            // } else {
            //     setAll((item.length) / 10)
            // }
        }
        )
        console.log(pageList)

        setCurrent(1)

        setDetials(res);
    }

    async function onChangeSearch(e) {

        await axios.get("http://localhost:3000/details/find/teachernotnull").then((item) => {
            console.log("new Limit ==> :", item.data)
            return setDetailsForDate(item.data);
        });

        const res = detailsFordate.filter((item) => {
            return (item.teacher === user.first_name)
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
            <Navbar style={{ backgroundColor: 'white' }}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/TeacherDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/TeacherSelectWork">การเลือกตรวจงาน</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/TeacherHistory">ประวัติ</Nav.Link>
                        {/* <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/TeacherProfile">บัญชี</Nav.Link> */}
                        <Nav.Link style={{ color: '#424242', fontWeight: 'bold', fontSize: '20px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', marginLeft: '350px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <br />

            <div className="PaddingDiv">
                <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minHeight: '700px', minWidth: '1500px' }}>
                    <h1 style={{ color: '#198CFF', fontWeight: 'bold' }}>ประวัติการเลือกตรวจงาน</h1>

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
                                <th>ชื่อนักศึกษา</th>

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
                                    <td className='tdStudent'>{item.name}</td>
                                </tr>
                            </tbody>
                        })}
                    </Table>
                </Container>
            </div>
        </div >
    )
}
export default TeacherHistory;