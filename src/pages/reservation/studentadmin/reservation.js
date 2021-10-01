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
            return alert('กรุณาเลือก Unit')
        } else {
            let body = select;
            axios.put("http://localhost:3000/details/updateUnitSet/", body)
            console.log('Body data :', body)
            alert("เลือกสำเร็จ")
            return history.push('/StudentAdminHistory')
        }
    }


    return (
        <div>
            <Navbar style={{ backgroundColor: 'rgba(21, 101, 192)' }}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminReservation">เลือกที่นั่ง</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminLimitCase">การจำกัดงาน</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#32fcf6', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: 'white', marginLeft: '300px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>การเลือกที่นั่ง</h1>

            {/* {details.map((item) => {
                return <div key={item.id}>
                    <br />
                    <Card
                        style={{ width: '21rem', marginLeft: 'auto', marginRight: 'auto' }}
                        className="mb-2"
                    >
                        <Card.Header style={{ backgroundColor: '#0067e6', color: 'white' }}> วันที่ : {item.date}</Card.Header>
                        <Card.Body style={{ backgroundColor: '#1c82ff' }}>

                            <Card.Text>
                                <Card.Title>Clinic : {item.clinic} &nbsp;&nbsp; เวลา : {item.time} </Card.Title>
                                <lable>นักศึกษา : {item.name}</lable><br />
                                <lable>ประเภทงาน : {item.worktype}</lable><br />
                                <lable>คนไข้ : {item.patient}</lable><br />
                                <form onSubmit={() => { handleSubmit(item.id, item.select) }}>
                                    <select onChange={(event) => {
                                        console.log('Hi', event.target.value)
                                        item.select = event.target.value
                                    }} class="target">
                                        <option value="selected" selected="selected">Choose Unit</option>
                                        {allUnit.map((item) => {
                                            return <option key={item.unit_id} value={item.unit_code} value={item.unit_code}>{item.unit_code}</option>
                                        })}
                                    </select>
                                    <button style={{ borderRadius: '10px', marginLeft: '10px', backgroundColor: '#02ed60' }} type="submit">ยืนยัน</button>
                                </form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            })} */}


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
                        <th style={{ color: 'white' }} >วันที่</th>
                        <th style={{ color: 'white' }} >ช่วงเวลา</th>
                        <th style={{ color: 'white' }} >คลินิก</th>
                        <th style={{ color: 'white' }} >ประเภทงาน</th>
                        <th style={{ color: 'white' }} >ชื่อผู้ป่วย</th>
                        <th style={{ color: 'white' }} >ชื่อนักศึกษา</th>
                        <th style={{ color: 'white' }} >Unit</th>
                    </tr>
                </thead>
                {details.map(item => {
                    return <tbody key={item.id}>
                        <tr>
                            <td style={{ color: 'black' }}>{item.date}</td>
                            <td style={{ color: 'black' }}>{item.time}</td>
                            <td style={{ color: 'black' }}>{item.clinic}</td>
                            <td style={{ color: 'black' }}>{item.worktype}</td>
                            <td style={{ color: 'black' }}>{item.patient}</td>
                            <td style={{ color: 'black' }}>{item.name}</td>
                            <td style={{ color: 'black' }}>
                                <select onChange={handleOnChange}>
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