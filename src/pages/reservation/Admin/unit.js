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
import { BsSearch } from "react-icons/bs";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { icons } from 'react-icons';
import FormInputUnit from './updateUnit'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CloseButton } from 'react-bootstrap';
import Input from './reservationCss/InputRes'
import StyledCreate from './reservationCss/ModalCreate';

const AdminUnit = () => {

    const { user } = useContext(AuthContext);
    const [unit, setUnit] = useState([]);
    const [items, setItems] = useState([]);
    const [searchDate, setSearchDate] = useState([]);
    const [editingIndex, setEditingIndex] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);

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

    useEffect(() => {
        console.log("editingIndex :", editingIndex)
    }, [editingIndex])



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

    // async function onChangeSearch(e) {
    //     e.preventDefault();
    //     await axios.getaxios.get("http://localhost:3000/unit/find/all").then((item) => {
    //         console.log("new Unit ==> :", item.unit_code)
    //         return setUnit(item.unit_code);
    //     });
    //     console.log("Change Unit :", e.target.value)
    //     setSearchDate(e.target.value)
    // }

    // function Searching() {
    //     console.log("Searching :", searchDate)
    //     const checking = unit.filter((item) => {
    //         return item.unit_code === searchDate
    //     })
    //     console.log("Filter Unit", checking)
    //     setUnit(checking)
    // }

    function checkActive(status) {
        if (status === "active") {
            return true;
        } else {
            return false;
        }
    }

    async function ChangeStatus(unit_id, originalStatus) {
        console.log("unit Change :", unit_id)
        if (originalStatus === "active") {
            let status = { unavailable_start_date: "inactive" }
            await axios.put("http://localhost:3000/unit/updateUnitAvaidate/" + unit_id, status)
            return getDetails();
        } else {
            let status = { unavailable_start_date: "active" }
            await axios.put("http://localhost:3000/unit/updateUnitAvaidate/" + unit_id, status)
            return getDetails();
        }
    }

    function changeEditStatus(ID) {
        setEditingIndex([ID])
    }


    async function deleteLimitCase(unit_id) {
        console.log("Delete ID :", unit_id)
        const confirmBox = window.confirm("ต้องการลบการจำกัดงานหรือไม่")
        if (confirmBox == true) {
            console.log(confirmBox)
            await axios.delete("http://localhost:3000/unit/realdelete/" + unit_id);
            return axios.get("http://localhost:3000/unit/find/all").then((item) => {
                console.log("new Limit ==> :", item.data)
                return setUnit(item.data);
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

    async function submitForm(unit_code, unit_floor, unit_type) {
        console.log("Unit Form :", unit_code, unit_floor, unit_type);
        const ApiSet = ({ unit_code: unit_code, unit_floor: unit_floor, unit_type: unit_type, unavailable_start_date: 'active' })
        const confirmBox = window.confirm("ต้องการยืนยันการเพิ่ม Unit หรือไม่")
        if (confirmBox == true) {
            console.log(confirmBox)
            await axios.post("http://localhost:3000/unit/create", ApiSet).then((res) => {
                return console.log("Res Limit :", res)
            })
            await axios.get("http://localhost:3000/unit/find/all").then((item) => {
                console.log("new Limit ==> :", item.data)
                return setUnit(item.data);
            });
            return closeModal();
        } else {
            console.log(confirmBox)
        }

    }

    const formik = useFormik({
        initialValues: {
            unit_code: '',
            unit_floor: '',
            unit_type: '',
        },
        validationSchema: Yup.object({
            unit_code: Yup.string()
                .required('Required'),
            unit_floor: Yup.string()
                .required('Required'),
            unit_type: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            return submitForm(values.unit_code, values.unit_floor, values.unit_type);
        },
    });


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
                    <h1 style={{ color: '#0080ff', fontWeight: 'bold' }}>รายชื่อยูนิต</h1>
                    <Col sm={10}>
                        <label style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px', marginLeft: '20px' }}>ค้นหายูนิต : </label>
                        <input
                            style={{ fontSize: '18px' }}
                            type="text"
                            class="searchTerm"
                            id="input_text"
                            placeholder="ชื่อ Unit"
                        // onChange={onChangeSearch}
                        >
                        </input>
                        <button type="submit" class="searchButton">
                            <BsSearch />
                        </button>

                    </Col>
                    <Row style={{ marginBottom: '20px', marginTop: '-30px' }}>
                        <Col style={{ marginRight: '-70px' }}>

                        </Col>
                        <Col style={{ marginTop: '0px', marginRight: '40px' }} xs lg="2">
                            <Button onClick={() => openModal()}>เพิ่ม Unit</Button>
                        </Col>
                    </Row>

                    <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%' }}>
                        <thead className='theadAdmin'>
                            <tr>
                                <th>ชื่อยูนิต</th>
                                <th>ชั้น</th>
                                <th>สถานะ</th>
                                <th>แก้ไข</th>
                                <th>ลบ</th>
                            </tr>
                        </thead>
                        {unit.map(item => {
                            return editingIndex.includes(item.unit_id) ? (
                                <FormInputUnit item={item}
                                    editingIndex={editingIndex}
                                    setEditingIndex={setEditingIndex}
                                    getDetails={getDetails()}
                                />) : (<tbody key={item.unit_id}>
                                    <tr>
                                        <td className='tdStudent'>{item.unit_code}</td>
                                        <td className='tdStudent'>{item.unit_floor}</td>
                                        <td style={{ width: '240px' }} className='tdStudent'>
                                            <BootstrapSwitchButton
                                                onlabel="ปกติ"
                                                offlabel="ปิดใช้งาน"
                                                onstyle="success"
                                                width={120}
                                                offstyle="outline-danger"
                                                onChange={() => ChangeStatus(item.unit_id, item.unavailable_start_date)}
                                                checked={checkActive(item.unavailable_start_date)}

                                            />
                                        </td>
                                        <td className='tdStudent'><Button onClick={() => changeEditStatus(item.unit_id)}>แก้ไข</Button></td>
                                        <td className='tdStudent'><Button onClick={() => deleteLimitCase(item.unit_id)} style={{ backgroundColor: 'red' }}>ลบ</Button></td>
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
                        <h1 style={{ color: '#198CFF', fontWeight: 'bold', marginTop: '10px' }}>รายละเอียด Unit</h1>
                    </center>
                    <div style={{ marginLeft: '30%', marginBottom: '20px' }}>

                        <form onSubmit={formik.handleSubmit}>
                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="date">ชื่อ Unit :&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                style={{ marginBottom: '10px' }}
                                id="unit_code"
                                name="unit_code"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.unit_code}
                            />
                            {formik.touched.unit_code && formik.errors.unit_code ? (
                                <div className="error">{formik.errors.unit_code}</div>
                            ) : null} <br />


                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="od">ชั้นที่ :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="unit_floor"
                                name="unit_floor"
                                type="number"
                                min="0"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.unit_floor}
                            />
                            {formik.touched.unit_floor && formik.errors.unit_floor ? (
                                <div className="error">{formik.errors.unit_floor}</div>
                            ) : null} <br />


                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="tmd">ประเภท :&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="unit_type"
                                name="unit_type"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.unit_type}
                            />
                            {formik.touched.unit_type && formik.errors.unit_type ? (
                                <div className="error">{formik.errors.unit_type}</div>
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
                items.length != 0 ? (<div>
                    {console.log("มาแล้ว :", items)}
                    <ModalUnit excel={items} setUnit={setUnit} openModalPlase={setIsOpen} /></div>) : (console.log("ยัง"))
            }
        </div>
    )
}
export default AdminUnit;