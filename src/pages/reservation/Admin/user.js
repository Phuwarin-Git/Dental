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
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsSearch } from "react-icons/bs";
const AdminUser = () => {
    const history = useHistory();
    const { user } = useContext(AuthContext);
    const [userDetails, setUser] = useState([]);
    const [userExcel, setUserExcel] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("userDetails :", userDetails)
    }, [user])


    const getDetails = () => {
        axios.get("http://localhost:3000/name/find/all").then((item) => {
            console.log("Name :", item.data)
            return setUser(item.data);
        });
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

        <div style={{ backgroundColor: '#ededed', minHeight: '1080px' }}>
            <nav style={{ background: '#0080ff' }}>
                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>
                </div>
            </nav>
            <Navbar style={{ backgroundColor: 'white', boxShadow: '1px 1px 10px #d6d6d6' }}>
                <Container >
                    <Nav className="me-auto">
                        {/* <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/AdminDashboard">หน้าหลัก</Nav.Link> */}
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/AdminUser">ผู้ใช้งานระบบ</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/AdminUnit">เก้าอี้ทันตกรรม</Nav.Link>
                        {/* <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/AdminProfile">บัญชี</Nav.Link> */}
                        <Nav.Link style={{ color: '#E05701', fontWeight: 'bold', fontSize: '20px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', marginLeft: '350px', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div>
                <br />

                <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minWidth: '1500px' }}>
                    <h1 style={{ color: '#0047AB', fontWeight: 'bold' }}>รายชื่อผู้ใช้งาน</h1>
                    <Col sm={10}>
                        <label style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px', marginLeft: '20px' }}>ค้นหาผู้ใช้งาน : </label>
                        <input
                            style={{ fontSize: '18px' }}
                            type="string"
                            class="searchTerm"
                            id="input_text"
                            placeholder="ID/ชื่อ-สกุล/ชั้นปี/ตำแหน่ง"
                        >
                        </input>
                        <button type="submit" class="searchButton">
                            <BsSearch />
                        </button></Col>
                    <Row style={{ marginBottom: '30px', marginTop: '-30px' }}>

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
                                <th>ID</th>
                                <th>ชื่อ-สกุล</th>
                                <th>ชั้นปี</th>
                                <th>E-mail</th>
                                <th>ตำแหน่ง</th>
                                <th>แก้ไขรายละเอียด</th>
                                <th>ลบ</th>
                            </tr>
                        </thead>
                        {userDetails.map(item => {
                            return <tbody key={item.id}>
                                <tr>
                                    <td className='tdStudent'>{item.id}</td>
                                    <td className='tdStudent'>{item.student_id}</td>
                                    <td className='tdStudent'>{item.first_name}</td>
                                    <td className='tdStudent'>{item.student_year}</td>
                                    <td className='tdStudent'>{item.email}</td>
                                    <td className='tdStudent'>{item.role}</td>
                                    <td className='tdStudent'><Button >แก้ไข</Button></td>
                                    <td className='tdStudent'><Button style={{ backgroundColor: 'red' }}>ลบ</Button></td>
                                </tr>
                            </tbody>
                        })}

                    </Table>
                </Container>
            </div>
            {
                userExcel.length != 0 ? (<div>
                    {console.log("มาแล้ว :", userExcel)}
                    <ModalUser excel={userExcel} setUser={setUser} /></div>) : (console.log("ยัง"))
            }
        </div>
    )
}
export default AdminUser;