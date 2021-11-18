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
import './adminmodal/TableAdminconfirm.css'
import './AdminconfirmOD'

const Adminconfirm = () => {
    const { user } = useContext(AuthContext);
    const [details, setDetials] = useState([]);
    const [getod, setod] = useState([]);
    useEffect(() => {
        getDetails();
        filterDetails();
        console.log("User :", user)
    }, [user])

    useEffect(() => {
        console.log("odtest", getod)
    }, [getod])

    const getDetails = () => {
        axios.get("http://localhost:3000/details/find/notnull").then((item) => {
            console.log("data :", item.data)
            return setDetials(item.data);
        });
    }

    //ตอนเช็คจริงๆน่าจะใช้ E-mail เผื่อมีชื่อซ้ำ

    const filterDetails = () => {
        const res = details.filter((item) => {
            return (item.patient === "Jakkarayo")
        })
        setod(res)
    }

   
  
    // const FilterDetails = () =>{
    //     constructor(props) 
    //       super(props);
    //       this.state = {
    //         data: this.props.data,
    //         priority: '',
    //       };
    //       this.handleChange = this.handleChange.bind(this);
    //     }

    //  const handleChange = (e) => {
    //       var val = e.target.value;
    //       this.setState({ priority: val });
    //       this.props.changeOption(val);
    //     }




    return (
        <div style={{ background: '#F2F4F4', minHeight: '1080px' }}>
            <nav style={{ background: '#0047AB' }}>

                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>

                </div>
            </nav>
            <Navbar style={{ background: '#1565C0', paddingBottom: '0.5%' }} >
                <Nav style={{ marginLeft: '4%' }}  >
                    <Container>
                        <Nav.Link style={{ color: '#ffff', fontWeight: 'bold', fontSize: '18px' }} ></Nav.Link>
                    </Container>
                </Nav>

                <Nav style={{ marginLeft: '-5%' }}  >
                    <Container>
                        <Nav.Link style={{ color: '#ffff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/Adminhistory">ประวัติการเบิกอุปกรณ์</Nav.Link>
                    </Container>
                </Nav>

                <Nav style={{ marginLeft: '15%' }}  >
                    <Container>
                        <Nav.Link style={{ color: '#ffff', marginLeft: '980px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Container>
                </Nav>
            </Navbar>

            <div style={{ background: '#ffff', minHeight: '450px', paddingLeft: '10%', paddingRight: '10%', marginLeft: '1.5%', marginRight: '1.5%', marginTop: '1.5%', paddingBottom: '6%' }}>

                <Nav style={{ paddingRight: '80%', paddingTop: '1%' }}  >
                    <Container>
                        <Nav.Link style={{ color: '#000', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                    </Container>
                </Nav>

                <br />
                <h1 style={{ color: '#0047AB', fontWeight: 'bold' }}>อุปกรณ์ที่ยืนยันเเล้ว</h1>

                <div class="dropdown" style={{ color: '#ffff', paddingLeft: '1200px' }}>
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  เลือกคลินิก
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">เลือกคลินิก</a></li>
    <li><a class="dropdown-item" href="./AdminconfirmOD.js">OD</a></li>
    <li><a class="dropdown-item" href="./AdminconfirmTMB.js">TMB</a></li>
    <li><a class="dropdown-item" href="./AdminconfirmOPER.js">OPER</a></li>
    <li><a class="dropdown-item" href="./AdminconfirmPERIO.js">PERIO</a></li>
    <li><a class="dropdown-item" href="./AdminconfirmSUR.js">SUR</a></li>
    <li><a class="dropdown-item" href="./AdminconfirmPROSTH.js">PROSTH</a></li>
    <li><a class="dropdown-item" href="./AdminconfirmENDO.js">ENDO</a></li>
    <li><a class="dropdown-item" href="./AdminconfirmPEDO.js">PEDO</a></li>
    <li><a class="dropdown-item" href="./AdminconfirmXRay.js">X-Ray</a></li>
    <li><a class="dropdown-item" href="./AdminconfirmOM.js">OM</a></li>
    <li><a class="dropdown-item" href="./AdminconfirmOrtho.js">Ortho</a></li>
  </ul>
</div>
            
                
                <br />
                


                <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%' }}>
                    <thead className='theadAdmin'>
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
                                <td className='tdAdmin' style={{ color: 'black', fontWeight: 'bold' }}>{item.date}</td>
                                <td className='tdAdmin' style={{ color: 'black' }}>{item.time}</td>
                                <td className='tdAdmin' style={{ color: 'black' }}>{item.clinic}</td>
                                <td className='tdAdmin' style={{ color: 'black' }}>{item.worktype}</td>
                                <td className='tdAdmin' style={{ color: 'black' }}>{item.patient}</td>
                                <td className='tdAdmin' style={{ color: 'black', fontWeight: 'bold' }}>{item.name}</td>
                                <td className='tdAdmin' style={{ color: 'black' }}>{item.studentyear}</td>
                                <td className='tdAdmin' ><Adminmodal unique={item.uniqueID} /></td>

                            </tr>
                        </tbody>
                    })}
                </Table>
            </div >
        </div>

    )

}

export default Adminconfirm;