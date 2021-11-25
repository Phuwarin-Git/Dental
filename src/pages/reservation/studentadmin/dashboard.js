import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { AuthContext } from '../../../App';
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsSearch } from "react-icons/bs";

// หา Sumary ของแต่ละ case ใน details ของแต่ละวันก่อน
//fillter details เพื่อใช้ดู date time แล้วก็ มาเทียบกับ limit case

const StudentAdminDashboard = () => {

    const { user, limit, setLimit } = useContext(AuthContext);
    const [searchDate, setSearchDate] = useState([]);


    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        // http://selab.mfu.ac.th:8318/limitcase/find/all
        axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            console.log("Limit :", item.data)
            return setLimit(item.data);
        });
    }


    async function onChangeSearch(e) {
        await axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            console.log("new Limit ==> :", item.data)
            return setLimit(item.data);
        });
        console.log("Change Date :", e.target.value)
        setSearchDate(e.target.value)
    }

    function Searching() {
        console.log("Searching :", searchDate)
        const checking = limit.filter((item) => {
            return item.date === searchDate
        })
        console.log("Filter Date", checking)
        setLimit(checking)
    }

    function sum(a, b) {
        let c = parseInt(b)
        console.log("a :", typeof a, "c :", typeof c)
        return a + c;
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
                        <Nav.Link style={{ color: '#E05701', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', marginLeft: '300px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

            <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minHeight: '700px', minWidth: '1500px' }}>
                <Row>
                    <Col style={{ marginLeft: 'auto', marginRight: 'auto' }} sm={10}>
                        <label style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px', }}>ค้นหาวันที่ : </label>

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
                    </Col>
                </Row>


                <Table striped bordered hover variant="" style={{ marginTop: '30px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}>
                    <thead className='theadAdmin'>
                        <tr style={{ fontSize: '18px' }}>
                            <th>วันที่</th>
                            <th>เวลา</th>
                            <th>OD</th>
                            <th>TMD</th>
                            <th>OPER</th>
                            <th>PERIO</th>
                            <th>SUR</th>
                            <th>PROSTH</th>
                            <th>ENDO</th>
                            <th>PEDO</th>
                            <th>X-RAY</th>
                            <th>OM</th>
                            <th>ORTHO</th>
                        </tr>
                    </thead>
                    {limit.map(item => {
                        return <tbody key={item.limit_id}>
                            {console.log("-----rerender----")}
                            <tr>
                                <td className='tdStudent'>{item.date}</td>
                                <td className='tdStudent'>{item.time}</td>
                                <td className='tdStudent'>{item.odyOd}/{sum(item.odyOd, item.od)}</td>
                                <td className='tdStudent'>{item.odyTmd}/{sum(item.odyTmd, item.tmd)}</td>
                                <td className='tdStudent'>{item.odyOper}/{sum(item.odyOper, item.oper)}</td>
                                <td className='tdStudent'>{item.odyPerio}/{sum(item.odyPerio, item.perio)}</td>
                                <td className='tdStudent'>{item.odySur}/{sum(item.odySur, item.sur)}</td>
                                <td className='tdStudent'>{item.odyProsth}/{sum(item.odyProsth, item.prosth)}</td>
                                <td className='tdStudent'>{item.odyEndo}/{sum(item.odyEndo, item.endo)}</td>
                                <td className='tdStudent'>{item.odyPedo}/{sum(item.odyPedo, item.pedo)}</td>
                                <td className='tdStudent'>{item.odyXray}/{sum(item.odyXray, item.xray)}</td>
                                <td className='tdStudent'>{item.odyOm}/{sum(item.odyOm, item.om)}</td>
                                <td className='tdStudent'>{item.odyOrtho}/{sum(item.odyOrtho, item.ortho)}</td>
                            </tr>
                        </tbody>
                    })}
                </Table>
            </Container>
        </div >
    )
}
export default StudentAdminDashboard;