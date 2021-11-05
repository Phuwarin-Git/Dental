import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { AuthContext } from '../../../App';
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import * as XLSX from "xlsx";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ModalUnit from './confirmModal/modalUnit';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const AdminUnit = () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const [unit, setUnit] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("UNIT :", unit)
    }, [user])


    const getDetails = () => {
        axios.get("http://localhost:3000/unit/find/all").then((item) => {
            console.log("Unit :", item.data)
            return setUnit(item.data);
        });
    }

    function deleteUnit(id) {
        console.log("Delete ID :", id)
        const confirmBox = window.confirm("ต้องการลบการจำกัดงานหรือไม่")
        if (confirmBox == true) {
            console.log(confirmBox)
            alert("ลบการจำกัดงานสำเร็จ")
            axios.delete("http://localhost:3000/unit/delete/" + id);
        } else {
            alert("โปรตรวจสอบข้อมูลอีกครั้ง")
            console.log(confirmBox)
        }
    }



    const readExcel = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: "buffer" });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            setItems(d);
        });
    }



    return (
        <div style={{ backgroundColor: '#ededed', minHeight: '1080px' }}>
            <nav style={{ background: '#0047AB' }}>
                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>
                </div>
            </nav>
            <Navbar style={{ backgroundColor: 'rgba(21, 101, 192)' }}>
                {/* style={{ backgroundColor: 'rgba(21, 101, 192, 0.3)' }} */}
                <Container >
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/AdminDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/AdminUser">ผู้ใช้งานระบบ</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/AdminUnit">เก้าอี้ทันตกรรม</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/AdminProfile">บัญชี</Nav.Link>
                        <Nav.Link style={{ color: '#ffb938', fontWeight: 'bold', fontSize: '20px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: 'white', marginLeft: '350px', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div>
                <br />
                
            <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', }}>
                <h1 style={{ color: '#0047AB', fontWeight: 'bold' }}>รายชื่อยูนิต</h1>
                <Row style={{ marginBottom: '20px', marginTop: '-30px' }}>
                    <Col></Col>
                    <Col></Col>
                    <Col style={{ marginRight: '-70px' }}>
                    </Col>
                    <Col style={{ marginTop: '20px', marginRight: '40px' }} xs lg="2">
                    <input type="file" onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                    }} />
                </Col>
                </Row>

                <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%' }}>
                    <thead className='theadAdmin'>
                        <tr>
                            <th>ลำดับ</th>
                            <th>Name</th>
                            <th>ชั้น</th>
                            <th>ประเภท</th>
                            <th>วันเริ่มต้นการปิดใช้งาน</th>
                            <th>วันสิ้นสุดการปิดใช้งาน</th>
                            <th>แก้ไขรายละเอียด</th>
                            <th>ลบ</th>
                        </tr>
                    </thead>
                    {unit.map(item => {
                        return <tbody key={item.unit_id}>
                            <tr>
                                <td className='tdStudent'>{item.unit_id}</td>
                                <td className='tdStudent'>{item.unit_code}</td>
                                <td className='tdStudent'>{item.unit_floor}</td>
                                <td className='tdStudent'>{item.unit_type}</td>
                                <td className='tdStudent'>{item.unavailable_start_date}</td>
                                <td className='tdStudent'>{item.unavailable_end_date}</td>
                                <td className='tdStudent'><Button >แก้ไข</Button></td>
                                <td className='tdStudent'><Button style={{ backgroundColor: 'red' }}>ลบ</Button></td>
                            </tr>
                        </tbody>
                    })}

                </Table>
                </Container>
            </div>
            {
                items.length != 0 ? (<div>
                    {console.log("มาแล้ว :", items)}
                    <ModalUnit excel={items} setUnit={setUnit} /></div>) : (console.log("ยัง"))
            }
        </div>
    )
}
export default AdminUnit;