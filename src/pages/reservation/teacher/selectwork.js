
import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'
import { Nav, Container } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../../App';
import './whycss.css'
import '../Yup.css'
import Button from './reservationCss/ButtonRes';
import { BsSearch } from "react-icons/bs";


const TeacherSelectWork = () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const [details, setDetails] = useState([]);
    const [isChecked, setIsChecked] = useState([]);
    const [searchDate, setSearchDate] = useState([]);

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

    async function submitApprove() {
        if (isChecked.length === 0) {
            alert('กรุณาเลือกงานที่ต้องการตรวจ');
        } else {
            let body = isChecked;
            const confirmBox = window.confirm("ต้องการยืนยันการตรวจงานหรือไม่")
            if (confirmBox == true) {
                console.log(confirmBox)
                await axios.put("http://localhost:3000/details/updateTeacher/", body)
                console.log('Body data :', body)
                return await axios.get("http://localhost:3000/details/find/teachernull").then((item) => {
                    console.log("Limit :", item.data)
                    return setDetails(item.data);
                });
            } else {
                console.log(confirmBox)
            }
        }
    }

    async function onChangeSearch(e) {
        await axios.get("http://localhost:3000/details/find/teachernull").then((item) => {
            console.log("new Limit ==> :", item.data)
            return setDetails(item.data);
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
        setDetails(checking)
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
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/TeacherProfile">บัญชี</Nav.Link>
                        <Nav.Link style={{ color: '#ffb938', fontWeight: 'bold', fontSize: '20px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', marginLeft: '350px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

            <div className="PaddingDiv">
                <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minHeight: '700px', minWidth: '1500px' }}>
                    <h1 style={{ color: '#198CFF', fontWeight: 'bold' }}>จองการตรวจงาน</h1>
                    <div class="search">
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
                    </div>


                    <Table striped bordered hover variant="" style={{ marginTop: '40px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%' }}>
                        <thead className='theadAdmin'>
                            <tr>
                                <th>เลือกตรวจงาน</th>
                                <th>Unit</th>
                                <th>วันที่</th>
                                <th>ช่วงเวลา</th>
                                <th>คลินิก</th>
                                <th>ประเภทงาน</th>
                                <th>ชั้นปี</th>
                                <th>ชื่อนักศึกษา</th>
                            </tr>
                        </thead>
                        {details.map(item => {
                            return <tbody key={item.id}>
                                <tr>
                                    <td className='tdStudent'>
                                        <label key={item.id} class="styleCheckBox">
                                            <input
                                                key={item.id}
                                                value={item.id}
                                                onChange={handleOnChange}
                                                type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </td>
                                    <td className='tdStudent'>{item.unit}</td>
                                    <td className='tdStudent'>{item.date}</td>
                                    <td className='tdStudent'>{item.time}</td>
                                    <td className='tdStudent'>{item.clinic}</td>
                                    <td className='tdStudent'>{item.worktype}</td>
                                    <td className='tdStudent'>{item.studentyear}</td>
                                    <td className='tdStudent'>{item.name}</td>
                                </tr>
                            </tbody>
                        })}
                    </Table>
                    <Button style={{ fontWeight: 'bold', fontSize: '22px',backgroundColor:'#198CFF' }} onClick={() => submitApprove()}>ยืนยัน</Button>
                </Container>
            </div>
        </div >
    )
}
export default TeacherSelectWork;