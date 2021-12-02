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
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Spinner } from 'react-bootstrap';
const Adminconfirm = () => {
    const { user } = useContext(AuthContext);
    const [details, setDetials] = useState([]);
    const [oriDetails, setOri] = useState([]);
    const [getod, setod] = useState([]);
    useEffect(() => {
        getDetails();
        filterDetails();
        console.log("User :", user)
    }, [user])

    useEffect(() => {
        // console.log("odtest", getod)
    }, [getod])

    async function getDetails() {
        await axios.get("http://localhost:3000/details/find/notnull").then((item) => {
            console.log("data :", item.data)
            setOri(item.data)
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

    function checkOD() {
        let res = oriDetails.filter((item) => {
            return (item.clinic === "OD")
        })
        console.log("res :", res)
        setDetials(res);
    }

    function checkTMD() {
        let res = oriDetails.filter((item) => {
            return (item.clinic === "TMD")
        })
        console.log("res :", res)
        setDetials(res);
    }

    function checkOPER() {
        let res = oriDetails.filter((item) => {
            return (item.clinic === "OPER")
        })
        setDetials(res);
    }

    function checkPERIO() {
        const res = oriDetails.filter((item) => {
            return (item.clinic === "PERIO")
        })
        setDetials(res);
    }

    function checkSUR() {
        const res = oriDetails.filter((item) => {
            return (item.clinic === "SUR")
        })
        setDetials(res);
    }

    function checkPROSTH() {
        const res = oriDetails.filter((item) => {
            return (item.clinic === "PROSTH")
        })
        setDetials(res);
    }

    function checkENDO() {
        const res = oriDetails.filter((item) => {
            return (item.clinic === "ENDO")
        })
        setDetials(res);
    }

    function checkXRAY() {
        const res = oriDetails.filter((item) => {
            return (item.clinic === "XRAY")
        })
        setDetials(res);
    }

    function checkOM() {
        const res = oriDetails.filter((item) => {
            return (item.clinic === "OM")
        })
        setDetials(res);
    }

    function checkORTHO() {
        const res = oriDetails.filter((item) => {
            return (item.clinic === "ORTHO")
        })
        setDetials(res);
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
            <nav style={{ background: '#0080ff' }}>

                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>

                </div>
            </nav>
            <Navbar style={{ background: '#ffff', paddingBottom: '0.5%' }} >
                <Nav style={{ marginLeft: '' }}  >
                    <Container>
                        <Nav.Link style={{ color: '#ffff', fontWeight: 'bold', fontSize: '18px' }} ></Nav.Link>
                    </Container>
                </Nav>

                <Nav style={{ marginLeft: '-5%', marginTop:'7px' }}  >
                    <Container>
                        <Nav.Link class="text-primary" style={{color: '#0080ff',marginLeft:'220px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="./Adminconfirm">อุปกรณ์รอการยืนยัน</Nav.Link>
                        <Nav.Link class="text-primary" style={{color: '#0080ff',marginLeft:'50px' , fontWeight: 'bold', fontSize: '18px' }} as={Link} to="./Adminconfirmfromadmin">อุปกรณ์ที่ยืนยันเเล้ว</Nav.Link>
                    </Container>
                </Nav>

                <Nav style={{ marginLeft: '15%' }}  >
                    <Container>
                        <Nav.Link class="text-primary" style={{color: '#0080ff', marginLeft: '550px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
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
                <h1 class="text-primary" style={{ fontWeight: 'bold' }}>อุปกรณ์รอการยืนยัน</h1>


                <DropdownButton id="dropdown-item-button" title="เลือกคลินิก" style={{ marginLeft: "1200px" }}>
                    <Dropdown.Item onClick={checkOD} as="button">OD</Dropdown.Item>
                    <Dropdown.Item onClick={checkTMD} as="button">TMD</Dropdown.Item>
                    <Dropdown.Item onClick={checkOPER} as="button">OPER</Dropdown.Item>
                    <Dropdown.Item onClick={checkPERIO} as="button">PERIO</Dropdown.Item>
                    <Dropdown.Item onClick={checkSUR} as="button">SUR</Dropdown.Item>
                    <Dropdown.Item onClick={checkPROSTH} as="button">PROSTH</Dropdown.Item>
                    <Dropdown.Item onClick={checkENDO} as="button">ENDO</Dropdown.Item>
                    <Dropdown.Item onClick={checkXRAY} as="button">X-Ray</Dropdown.Item>
                    <Dropdown.Item onClick={checkOM} as="button">OM</Dropdown.Item>
                    <Dropdown.Item onClick={checkORTHO} as="button">ORTHO</Dropdown.Item>
                </DropdownButton>

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
                            <th>สถานะการเบิก</th>
                            <th>อุปกรณ์ที่เบิก</th>
                            <th>ยืนยัน</th>
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
                                <td className='tdAdmin' >
                                            <button class="btn btn-primary" type="button" disabled>
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                                                                     รอยืนยันอุปกรณ์
                                                                                    </button>
                                                                                        </td>
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