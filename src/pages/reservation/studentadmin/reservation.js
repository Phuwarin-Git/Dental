import React, { useState, useContext, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
import Button from './reservationCss/ButtonRes'

const StudentAdminReservation = () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const [allUnit, setAllUnit] = useState([]);
    const [details, setDetails] = useState([]);
    const [select, setSelect] = useState([]);


    useEffect(() => {
        getDetails();
        getUnit();
    }, [user])


    const getDetails = () => {
        axios.get("http://localhost:3000/details/find/null").then((item) => {
            console.log("Null Unit :", item.data)

            for (let i in item.data) {
                let obj = {
                    ...item.data[i],
                    select: null
                }
                item.data[i] = obj
            }
            console.log("Test ==>", item.data)
            return setDetails(item.data);
        });
    }

    const getUnit = () => {
        axios.get("http://localhost:3000/unit/find/all").then((item) => {
            console.log("Unit lists:", item.data)
            return setAllUnit(item.data);
        });
    }


    function handleOnChange(e) {
        console.log('Value :', e.target.value.split(" "))
        let first = e.target.value.split(" ")
        console.log('id :', first[0])
        console.log('unit :', first[1])
        setSelect([...select, { id: first[0], unit: first[1] }]);
        console.log('Seleted :', select)
    };

    function submitApprove() {
        if (select.length === 0) {
            alert('กรุณาเลือก Unit')
        } else {
            let body = select;
            const confirmBox = window.confirm("ต้องการยืนยันการเลือกยูนิตหรือไม่")
            if (confirmBox == true) {
                console.log(confirmBox)
                alert("การเลือกยูนิตสำเร็จ")
                axios.put("http://localhost:3000/details/updateUnitSet/", body)
                console.log('Body data :', body)
                return history.push('/StudentAdminHistory')
            } else {
                alert("โปรตรวจสอบข้อมูลอีกครั้ง")
                console.log(confirmBox)
            }
        }
    }


    return (
        <div>
            <nav style={{ background: '#0047AB' }}>
                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>
                </div>
            </nav>
            <Navbar style={{ backgroundColor: 'rgba(21, 101, 192)' }}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminReservation">เลือกที่นั่ง</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminLimitCase">การจำกัดงาน</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#ffb938', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: 'white', marginLeft: '300px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1 style={{ color: '#0047AB', fontWeight: 'bold' }}>การเลือกที่นั่ง</h1>

            <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%' }}>
                <thead className='theadAdmin'>
                    <tr>
                        <th>วันที่</th>
                        <th>ช่วงเวลา</th>
                        <th>คลินิก</th>
                        <th>ประเภทงาน</th>
                        <th>ชื่อผู้ป่วย</th>
                        <th>ชื่อนักศึกษา</th>
                        <th>Unit</th>
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
                            <td className='tdStudent'>{item.name}</td>
                            <td className='tdStudent'>
                                <select style={{ backgroundColor: '#1f5bcc', color: 'white' }} onChange={handleOnChange}>
                                    <option value="selected" selected="selected">เลือก Unit</option>
                                    {allUnit.map((items) => {
                                        return <option
                                            value={item.id + " " + items.unit_code}>
                                            {items.unit_code}
                                        </option>
                                    })}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                })}
            </Table>
            <Button style={{ fontWeight: 'bold' }} onClick={() => submitApprove()}>ยืนยัน</Button>
        </div>
    )
}
export default StudentAdminReservation;