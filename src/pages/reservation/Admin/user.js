import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { AuthContext } from '../../../App';
import axios from "axios";
import { Button } from 'react-bootstrap';
import * as XLSX from "xlsx";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ModalUser from './confirmModal/modalUser';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsSearch } from "react-icons/bs";
import FormInput from './updateUser'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CloseButton } from 'react-bootstrap';
import Input from './reservationCss/InputRes'
import StyledCreate from './reservationCss/ModalCreate';

const AdminUser = () => {
    const { user } = useContext(AuthContext);
    const [userDetails, setUser] = useState([]);
    const [userExcel, setUserExcel] = useState([]);
    const [editingIndex, setEditingIndex] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);

    useEffect(() => {
        getDetails();
        console.log("userDetails :", userDetails)
    }, [user])

    useEffect(() => {
        console.log("editingIndex :", editingIndex)
    }, [editingIndex])


    const getDetails = () => {
        axios.get("http://localhost:3000/name/find/all").then((item) => {
            console.log("Name :", item.data)
            return setUser(item.data);
        });
    }


    function changeStatus(ID) {
        setEditingIndex([ID])
    }


    async function deleteLimitCase(id) {
        console.log("Delete ID :", id)
        const confirmBox = window.confirm("ต้องการลบผู้ใช้งานนี้หรือไม่")
        if (confirmBox == true) {
            console.log(confirmBox)
            await axios.delete("http://localhost:3000/name/realdelete/" + id);
            return axios.get("http://localhost:3000/name/find/all").then((item) => {
                console.log("new Limit ==> :", item.data)
                return setUser(item.data);
            });
        } else {
            console.log(confirmBox)
        }
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    async function submitForm(student_id, first_name, student_year, email, role) {
        const ApiSet = ({ student_id: student_id, first_name: first_name, student_year: student_year, email: email, role: role })
        console.log("Api set :", ApiSet)
        const confirmBox = window.confirm("ต้องการยืนยันการเพิ่มรายชื่อหรือไม่")
        if (confirmBox == true) {
            console.log(confirmBox)
            await axios.post("http://localhost:3000/name/create", ApiSet).then((res) => {
                return console.log("Res Limit :", res)
            })
            await axios.get("http://localhost:3000/name/find/all").then((item) => {
                console.log("new Limit ==> :", item.data)
                return setUser(item.data);
            });
            return closeModal();
        } else {
            console.log(confirmBox)
        }

    }

    const formik = useFormik({
        initialValues: {
            student_id: '',
            first_name: '',
            student_year: '',
            email: '',
            role: '',
        },
        validationSchema: Yup.object({
            first_name: Yup.string()
                .required('Required'),
            email: Yup.string().email('Invalid email address')
                .required('Required'),
            role: Yup.string()
                .required('Required'),


        }),
        onSubmit: values => {
            return submitForm(values.student_id, values.first_name, values.student_year, values.email, values.role);
        },
    });


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
                        <Nav.Link style={{ color: '#424242', fontWeight: 'bold', fontSize: '20px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', marginLeft: '350px', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div>
                <br />

                <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minWidth: '1500px' }}>
                    <h1 style={{ color: '#0080ff', fontWeight: 'bold' }}>รายชื่อผู้ใช้งาน</h1>
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
                        <Col style={{ marginTop: '0px', marginRight: '40px' }} xs lg="2">
                            <Button onClick={() => openModal()}>เพิ่มผู้ใช้งาน</Button>
                        </Col>
                    </Row>
                    <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%' }}>
                        <thead className='theadAdmin'>
                            <tr>
                                <th>ID</th>
                                <th>ชื่อ-สกุล</th>
                                <th>ชั้นปี</th>
                                <th>E-mail</th>
                                <th>ตำแหน่ง</th>
                                <th >แก้ไขรายละเอียด</th>
                                <th>ลบ</th>
                            </tr>
                        </thead>
                        {userDetails.map(item => {
                            return editingIndex.includes(item.id) ? (
                                <FormInput item={item}
                                    editingIndex={editingIndex}
                                    setEditingIndex={setEditingIndex}
                                    getDetails={getDetails()}
                                />) : (<tbody key={item.id}>
                                    {console.log("-----rerender----")}
                                    <tr>
                                        <td className='tdStudent'>{item.student_id}</td>
                                        <td className='tdStudent'>{item.first_name}</td>
                                        <td className='tdStudent'>{item.student_year}</td>
                                        <td className='tdStudent'>{item.email}</td>
                                        <td className='tdStudent'>{item.role}</td>
                                        <td className='tdStudent'><Button onClick={() => changeStatus(item.id)}>แก้ไข</Button></td>
                                        <td className='tdStudent'><Button onClick={() => deleteLimitCase(item.id)} style={{ backgroundColor: 'red' }}>ลบ</Button></td>
                                    </tr>
                                </tbody>)
                        })}

                    </Table>
                </Container>
                <StyledCreate
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="modal">
                    <CloseButton onClick={() => closeModal()} style={{ marginRight: '10px', marginTop: '5px' }} />
                    <center>
                        <h1 style={{ color: '#198CFF', fontWeight: 'bold', marginTop: '10px' }}>รายละเอียดผู้ใช้</h1>
                    </center>
                    <div style={{ marginLeft: '30%', marginBottom: '20px' }}>

                        <form onSubmit={formik.handleSubmit}>
                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="date">ID :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                style={{ marginBottom: '10px' }}
                                id="student_id"
                                name="student_id"
                                type="number"
                                min="0"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.student_id}
                            /><br />


                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="od">ชื่อผู้ใช้งาน :&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="first_name"
                                name="first_name"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.first_name}
                            />
                            {formik.touched.first_name && formik.errors.first_name ? (
                                <div className="error">{formik.errors.first_name}</div>
                            ) : null} <br />


                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="tmd">ชั้นปี :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="student_year"
                                name="student_year"
                                type="number"
                                min="0"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.student_year}
                            />
                            <br />

                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="od">Email :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="email"
                                name="email"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="error">{formik.errors.email}</div>
                            ) : null} <br />

                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="od">ตำแหน่ง :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="role"
                                name="role"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.role}
                            />
                            {formik.touched.role && formik.errors.role ? (
                                <div className="error">{formik.errors.role}</div>
                            ) : null} <br />


                            <hr
                                style={{
                                    color: 'color',
                                    backgroundColor: 'color',
                                    height: '5',
                                    width: '400px',
                                    marginLeft: '-50px'

                                }}
                            />
                            <div style={{ marginLeft: '50px' }}>
                                <label style={{ marginRight: '10px', marginLeft: '-100px' }}>อัพโหลดโดย Excel : {" "}</label>
                                <input style={{ marginBottom: '0px' }} type="file" onChange={(e) => {
                                    const file = e.target.files[0];
                                    readExcel(file);
                                }} />
                            </div>

                            <br /><Button style={{ marginLeft: '80px', fontSize: '22px', marginTop: '-10px' }} className="But" type="submit">ยืนยัน</Button>
                        </form>
                    </div>
                </StyledCreate>
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