import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import Adminmodal from './adminmodal/adminmodal';
import axios from "axios";
import Adminitem from './adminhistory/adminitem/adminitem';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Adminconfirm = () => {
    const { user } = useContext(AuthContext);
    const [details, setDetials] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://selab.mfu.ac.th:8318/details/find/notnull").then((item) => {
            console.log("data :", item.data)
            return setDetials(item.data);
        });
    }

    //ตอนเช็คจริงๆน่าจะใช้ E-mail เผื่อมีชื่อซ้ำ

    const filterDetails = (item) => {
        const res = item.filter((item) => {
            return (item.name === user.first_name)
        })
        setDetials(res);
        console.log("details :", res)
    }




    return (
        <div style={{ background: '#F2F4F4',minHeight:'1080px'}}>
            <nav style={{background:'#0047AB'}}> 
            
            <div style={{ paddingLeft:'50px',paddingTop:'10px',paddingBottom:'10px'}}>
            <h2  class="text-justify">Mae Fah Luang University Dental Clinic</h2>      
            
            </div>
        </nav>
                 <Navbar style={{background:'#1565C0',paddingBottom:'0.5%'}} >
                <Container>
                    <Nav  className="me-auto">
                        <Nav.Link style={{ color: '#ffff' }} >อุปกรณ์ที่ยืนยันเเล้ว</Nav.Link>
                        <Nav.Link style={{ color: '#ffff' }} as={Link} to="">ประวัติการจองอุปกรณ์</Nav.Link>
                        <Nav.Link style={{ color: '#ffff' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ color: '#ffff', marginLeft:'500px'}} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <div style={{ background: '#ffff',minHeight:'650px',paddingLeft:'10%',paddingRight:'10%'}}>
            <br />
            <h1 style={{color:'#0047AB'}}>อุปกรณ์ที่ยืนยันเเล้ว</h1>
            
            <div class="d-flex justify-content-end">
            <h4 style={{paddingRight:'10px',paddingTop:'8px'}}>คลินิก:</h4>
            <select style={{width:'110px',}} class="form-control form-control-sm">
                <option>เลือกคลินิก</option>
                <option>OD</option>
                <option>TMD</option>
                <option>OPER</option>
                <option>PERIO</option>
                <option>SUR</option>
                <option>PROSTH</option>
                <option>ENDO</option>
                <option>PEDO</option>
                <option>X-Ray</option>
                <option>OM</option>
                <option>Ortho</option>
            </select>
            </div>
            <br/>
            
            <Table striped bordered hover variant="dark" style={{ marginLeft: 'auto', marginRight: 'auto', color: '#1565C0', maxWidth: '97%' }}>
                <thead>
                    <tr>
                        <th>วันที่</th>
                        <th>ช่วงเวลา</th>
                        <th>คลินิก</th>
                        <th>ประเภทงาน</th>
                        <th>คนไข้</th>
                        <th>ผู้เบิกอุปกรณ์</th>
                        <th>ชั้นปีการศีกษา</th>
                        <th>อุปกรณ์ที่เบิก</th>
                    </tr>
                </thead>
                {details.map(item => {
                    return <tbody key={item.id}>
                        <tr>
                            <td style={{ color: 'white' }}>{item.date}</td>
                            <td style={{ color: 'white' }}>{item.time}</td>
                            <td style={{ color: 'white' }}>{item.clinic}</td>
                            <td style={{ color: 'white' }}>{item.worktype}</td>
                            <td style={{ color: 'white' }}>{item.patient}</td>
                            <td style={{ color: 'white' }}>{item.name}</td>
                            <td style={{ color: 'white' }}>{item.studentyear}</td>
                            <td><Adminmodal/></td>
                            
                        </tr>
                    </tbody>
                })}
            </Table>
        </div >
        </div> 
    )
    
}

export default Adminconfirm;