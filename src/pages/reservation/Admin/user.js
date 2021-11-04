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
import ModalUser from './confirmModal/modalUser';
const AdminUser = () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const [unit, setUnit] = useState([]);
    const [userExcel, setUserExcel] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("UNIT :", unit)
    }, [user])


    const getDetails = () => {
        // http://selab.mfu.ac.th:8320/limitcase/find/all
        axios.get("http://localhost:3000/name/find/all").then((item) => {
            console.log("Name :", item.data)
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
            setUserExcel(d);

        });
    }



    return (

        <div style={{ minHeight: '1080px' }}>
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
                <h1>Manage User</h1>
                <h1 style={{ color: '#0047AB', fontWeight: 'bold' }}>รายชื่อผู้ใช้งาน</h1>
                <label>Excel</label> <input style={{ marginLeft: '78%', marginBottom: '10px' }} type="file" onChange={(e) => {
                    const file = e.target.files[0];
                    readExcel(file);
                }} />
                <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%' }}>
                    <thead className='theadAdmin'>
                        <tr>
                            <th>ลำดับ</th>
                            <th>ID</th>
                            <th>ชื่อ-สกุล</th>
                            <th>ชั้นปี</th>
                            <th>E-mail</th>
                            <th>ตำแหน่ง</th>
                            <th>แก้ไขรายละเอียด</th>
                            <th>ลบ</th>
                        </tr>
                    </thead>
                    {unit.map(item => {
                        return <tbody key={item.id}>
                            <tr>
                                <td className='tdStudent'>{item.id}</td>
                                <td className='tdStudent'>{item.student_id}</td>
                                <td className='tdStudent'>{item.first_name}</td>
                                <td className='tdStudent'>{item.student_year}</td>
                                <td className='tdStudent'>{item.email}</td>
                                <td className='tdStudent'>{item.role}</td>
                                {/* <td className='tdStudent'><Button onClick={() => changeStatus(item.unit_id)}>แก้ไข</Button></td>
                                <td className='tdStudent'><Button onClick={() => deleteUnit(item.unit_id)} style={{ backgroundColor: 'red' }}>ลบ</Button></td> */}
                            </tr>
                        </tbody>
                    })}

                </Table>
            </div>
            {
                userExcel.length != 0 ? (<div>
                    {console.log("มาแล้ว :", userExcel)}
                    <ModalUser excel={userExcel} /></div>) : (console.log("ยัง"))
            }
        </div>
    )
}
export default AdminUser;