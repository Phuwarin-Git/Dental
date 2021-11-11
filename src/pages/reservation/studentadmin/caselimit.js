
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from 'react-bootstrap/Navbar'
import { CloseButton, Nav } from 'react-bootstrap';
import * as XLSX from "xlsx";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../../App';
import '../Yup.css'
import Input from './reservationCss/InputRes'
import Button from './reservationCss/ButtonRes'
import Limit from './limit';
import StyledCreate from './reservationCss/ModalCreate';
import ConfirmLimit from './confirmModal/modal';

const StudentAdminLimitCase = () => {
    const { user, limit, setLimit } = useContext(AuthContext);
    const history = useHistory();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([]);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    async function submitForm(date, time, od, tmd, oper, perio, sur, prosth, endo, xray, om, ortho) {
        console.log("Limit :", date, time, od, tmd, oper, perio, sur, prosth, endo, xray, om, ortho);
        const ApiSet = ({ date: date, time: time, od: od, tmd: tmd, oper: oper, perio: perio, sur: sur, prosth: prosth, endo: endo, xray: xray, om: om, ortho: ortho })
        const confirmBox = window.confirm("ต้องการยืนยันการจำกัดงานหรือไม่")
        if (confirmBox == true) {
            console.log(confirmBox)
            await axios.post("http://localhost:3000/limitcase/create", ApiSet).then((res) => {
                return console.log("Res Limit :", res)
            })
            await axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
                console.log("new Limit ==> :", item.data)
                return setLimit(item.data);
            });
            return closeModal();
        } else {
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

    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            od: '',
            tmd: '',
            oper: '',
            perio: '',
            sur: '',
            prosth: '',
            endo: '',
            xray: '',
            om: '',
            ortho: '',
        },
        validationSchema: Yup.object({
            date: Yup.string()
                .required('Required'),
            time: Yup.string()
                .required('Required'),
            od: Yup.string()
                .required('Required'),
            tmd: Yup.string()
                .required('Required'),
            oper: Yup.string()
                .required('Required'),
            perio: Yup.string()
                .required('Required'),
            sur: Yup.string()
                .required('Required'),
            prosth: Yup.string()
                .required('Required'),
            endo: Yup.string()
                .required('Required'),
            xray: Yup.string()
                .required('Required'),
            om: Yup.string()
                .required('Required'),
            ortho: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            return submitForm(values.date, values.time, values.od, values.tmd, values.oper, values.perio, values.sur, values.prosth, values.endo, values.xray, values.om, values.ortho);
        },
    });

    return (
        <div style={{ backgroundColor: '#ededed', minHeight: '1080px' }}>
            <nav style={{ background: '#0047AB' }}>
                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>
                </div>
            </nav>
            <Navbar style={{ backgroundColor: 'rgba(21, 101, 192)' }}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminReservation">เลือกที่นั่ง</Nav.Link>
                        <Nav.Link style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminLimitCase">การจำกัดงาน</Nav.Link>
                        <Nav.Link style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#ffb938', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: 'white', marginLeft: '300px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

            <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minWidth: '1500px' }}>
                <h1 style={{ color: '#0047AB', fontWeight: 'bold' }}>จำนวนภาระงาน</h1>


                <Limit setIsOpen={setIsOpen} />

                <StyledCreate
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="modal">
                    <CloseButton onClick={() => closeModal()} style={{ marginRight: '10px', marginTop: '5px' }} />
                    <center>
                        <h1 style={{ color: '#0047AB', fontWeight: 'bold' }}>จำกัดภาระงาน</h1>
                    </center>
                    <div style={{ marginLeft: '30%', marginBottom: '20px' }}>

                        <form onSubmit={formik.handleSubmit}>
                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="date">วันที่ :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                style={{ marginBottom: '10px' }}
                                id="date"
                                name="date"
                                type="date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.date}
                            />
                            {formik.touched.date && formik.errors.date ? (
                                <div className="error">{formik.errors.date}</div>
                            ) : null} <br />


                            <lable style={{ marginRight: '2%', fontWeight: 'bold', fontSize: '20px', marginLeft: '-30px' }}>เลือกช่วงเวลา : </lable>
                            <input
                                id="ช่วงเช้า"
                                type="radio"
                                value="ช่วงเช้า"
                                name='time'
                                onChange={formik.handleChange}
                                defaultChecked={formik.values.time === "ช่วงเช้า"}
                            />
                            &nbsp;&nbsp;&nbsp;
                            <label style={{ marginRight: '10%', fontSize: '18px' }}>ช่วงเช้า</label>


                            <input
                                id="ช่วงบ่าย"
                                type="radio"
                                value="ช่วงบ่าย"
                                name='time'
                                onChange={formik.handleChange}
                                defaultChecked={formik.values.time === "ช่วงบ่าย"}
                            />
                            &nbsp;&nbsp;&nbsp;
                            <label style={{ fontSize: '18px' }}>ช่วงบ่าย</label>

                            {formik.touched.time && formik.errors.time ? (
                                <div className="error">{formik.errors.time}</div>
                            ) : null}<br />


                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="od">OD :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="od"
                                name="od"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.od}
                            />
                            {formik.touched.od && formik.errors.od ? (
                                <div className="error">{formik.errors.od}</div>
                            ) : null} <br />


                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="tmd">TMD :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="tmd"
                                name="tmd"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.tmd}
                            />
                            {formik.touched.tmd && formik.errors.tmd ? (
                                <div className="error">{formik.errors.tmd}</div>
                            ) : null} <br />


                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="oper">OPER :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="oper"
                                name="oper"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.oper}
                            />
                            {formik.touched.oper && formik.errors.oper ? (
                                <div className="error">{formik.errors.oper}</div>
                            ) : null} <br />


                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="perio">PERIO :&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="perio"
                                name="perio"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.perio}
                            />
                            {formik.touched.perio && formik.errors.perio ? (
                                <div className="error">{formik.errors.perio}</div>
                            ) : null} <br />


                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="sur">SUR :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="sur"
                                name="sur"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.sur}
                            />
                            {formik.touched.sur && formik.errors.sur ? (
                                <div className="error">{formik.errors.sur}</div>
                            ) : null} <br />


                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="prosth">PROSTH :{" "}</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="prosth"
                                name="prosth"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.prosth}
                            />
                            {formik.touched.prosth && formik.errors.prosth ? (
                                <div className="error">{formik.errors.prosth}</div>
                            ) : null} <br />


                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="endo">ENDO :&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="endo"
                                name="endo"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.endo}
                            />
                            {formik.touched.endo && formik.errors.endo ? (
                                <div className="error">{formik.errors.endo}</div>
                            ) : null} <br />

                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="xray">X-ray :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="xray"
                                name="xray"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.xray}
                            />
                            {formik.touched.xray && formik.errors.xray ? (
                                <div className="error">{formik.errors.xray}</div>
                            ) : null} <br />


                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="om">OM :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="om"
                                name="om"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.om}
                            />
                            {formik.touched.om && formik.errors.om ? (
                                <div className="error">{formik.errors.om}</div>
                            ) : null} <br />

                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="ortho">ORTHO :&nbsp;&nbsp;</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="ortho"
                                name="ortho"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.ortho}
                            />
                            {formik.touched.ortho && formik.errors.ortho ? (
                                <div className="error">{formik.errors.ortho}</div>
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
                            <label style={{ marginRight: '10px', marginLeft: '-10px' }}>อัพโหลดโดย Excel : {" "}</label>
                            <input style={{ marginBottom: '10px' }} type="file" onChange={(e) => {
                                const file = e.target.files[0];
                                readExcel(file);
                            }} />

                            <br /><Button style={{ marginLeft: '80px', fontSize: '22px' }} className="But" type="submit">ยืนยัน</Button>
                        </form>
                    </div>
                </StyledCreate>
            </Container>
            {
                items.length != 0 ? (<div>
                    <ConfirmLimit excel={items} setLimit={setLimit} CloseReser={setIsOpen} /></div>) : (console.log("ยัง"))
            }


        </div>
    )
}
export default StudentAdminLimitCase;