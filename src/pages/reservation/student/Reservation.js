import React, { useContext, useEffect, useState } from 'react';
import { useFormik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from "axios";
import { AuthContext } from '../../../App';
import '../Yup.css'
import ToolModal from './modal/tool';
import StudentLimt from './limit';

const StudentRes = () => {
    const { user } = useContext(AuthContext);
    const [limit, setLimit] = useState([]);
    const [open, setOpen] = useState(false);
    const history = useHistory();


    useEffect(() => {
        getDetails();
    }, [user])

    const getDetails = () => {
        axios.get("http://selab.mfu.ac.th:8318/limitcase/find/all").then((item) => {
            console.log("Limit :", item.data)
            return setLimit(item.data);
        });
    }

    function submitForm(date, time, clinic, type, patient, dn, hn) {

        console.log("Hello :", user.first_name, user.student_year, date, time, clinic, type, patient, dn, hn);
        const ApiSet = ({ name: user.first_name, studentyear: user.student_year, date: date, time: time, clinic: clinic, worktype: type, patient: patient, dn: dn, hn: hn })

        const findDate = limit.filter((item) => {
            return ((item.date === date) && (item.time === time))
        })

        if (findDate.length === 1) {
            alert("Success")
            return axios.post("http://selab.mfu.ac.th:8318/details/create", ApiSet).then((res) => {
                console.log("Res Create Details :", res)
                // return setOpen(true);
                return history.push('/ToolModal')
            })
        } else {
            alert('ไม่มีรายละเอียดงานวันที่เลือก')
        }

    }

    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            clinic: '',
            type: '',
            patient: '',
            dn: '',
            hn: ''
        },
        validationSchema: Yup.object({
            date: Yup.string()
                .required('*จำเป็นต้องกรอกข้อมูล'),
            time: Yup.string()
                .required('*จำเป็นต้องกรอกข้อมูล'),
            clinic: Yup.string()
                .required('*จำเป็นต้องกรอกข้อมูล'),
            type: Yup.string()
                .required('*จำเป็นต้องกรอกข้อมูล'),
            patient: Yup.string()
                .required('*จำเป็นต้องกรอกข้อมูล'),
            dn: Yup.string()
                .required('*จำเป็นต้องกรอกข้อมูล'),
            hn: Yup.string()
                .required('*จำเป็นต้องกรอกข้อมูล'),
        }),
        onSubmit: values => {
            return submitForm(values.date, values.time, values.clinic, values.type, values.patient, values.dn, values.hn);
        },
    });

    return (
        <div>
            <Navbar style={{ backgroundColor: '#1565C0' }}>
                <Container >
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#FFFFFF' }} as={Link} to="/StudentDashboard">แดชบอร์ด</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF' }} as={Link} to="/StudentRes">จองการทำงาน</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF' }} as={Link} to="/StudentHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF' }} as={Link} to="/StudentProfile">บัญชี</Nav.Link>
                        <Nav.Link style={{ color: '#32fcf6' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', textAlign: 'right' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Student Reservation</h1>
            <Container>
                <Row>
                    <Col>
                        <StudentLimt />
                    </Col>

                    <Col>
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="date">วันที่ :{" "}</label>
                            <input
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


                            <lable>เลือกช่วงเวลา : </lable>
                            <input
                                id="ช่วงเช้า"
                                type="radio"
                                value="ช่วงเช้า"
                                name='time'
                                onChange={formik.handleChange}
                                defaultChecked={formik.values.time === "ช่วงเช้า"}
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="ช่วงเช้า"
                            >
                                &nbsp;&nbsp;ช่วงเช้า
                            </label>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input
                                id="ช่วงบ่าย"
                                type="radio"
                                value="ช่วงบ่าย"
                                name='time'
                                onChange={formik.handleChange}
                                defaultChecked={formik.values.time === "ช่วงบ่าย"}
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="ช่วงบ่าย"
                            >
                                &nbsp;&nbsp;ช่วงบ่าย
                            </label>
                            {formik.touched.time && formik.errors.time ? (
                                <div className="error">{formik.errors.time}</div>
                            ) : null}<br />


                            <label htmlFor="Clinic">คลินิก :{" "}</label>
                            <select
                                id="clinic"
                                name="clinic"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.clinic}
                            >
                                <option value="" label="เลือกคลินิก" />
                                <option value="od" label="OD" />
                                <option value="tmd" label="TMD" />
                                <option value="oper" label="OPER" />
                                <option value="perio" label="PERIO" />
                                <option value="sur" label="SUR" />
                                <option value="prosth" label="PROSTH" />
                                <option value="endo" label="ENDO" />
                                <option value="pedo" label="PEDO" />
                                <option value="xray" label="X-RAY" />
                                <option value="om" label="OM" />
                                <option value="ortho" label="Ortho" />
                            </select>
                            {formik.touched.clinic && formik.errors.clinic ? (
                                <div className="error">{formik.errors.clinic}</div>
                            ) : null}<br />

                            <label htmlFor="type">ประเภทงาน :{" "}</label>
                            <select
                                id="type"
                                name="type"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.type}
                            >
                                <option value="" label="เลือกประเภทงาน" />
                                <option value="ฟุ้งกระจาย" label="AGPs" />
                                <option value="ไม่ฟุ้งกระจาย" label="Non-AGPs" />
                            </select>
                            {formik.touched.type && formik.errors.type ? (
                                <div className="error">{formik.errors.type}</div>
                            ) : null}<br />

                            <label htmlFor="patient">คนไข้ :{" "}</label>
                            <input
                                id="patient"
                                name="patient"
                                type="text"
                                placeholder="ชื่อคนไข้"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.patient}
                            />
                            {formik.touched.patient && formik.errors.patient ? (
                                <div className="error">{formik.errors.patient}</div>
                            ) : null} <br />

                            <label htmlFor="dn">DN :{" "}</label>
                            <input
                                id="dn"
                                name="dn"
                                type="number"
                                placeholder="DN ต้องเป็นตัวเลขเท่านั้น"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dn}
                            />
                            {formik.touched.dn && formik.errors.dn ? (
                                <div className="error">{formik.errors.dn}</div>
                            ) : null} <br />

                            <label htmlFor="hn">HN :{" "}</label>
                            <input
                                id="hn"
                                name="hn"
                                type="number"
                                placeholder="HN ต้องเป็นตัวเลขเท่านั้น"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.hn}
                            />
                            {formik.touched.hn && formik.errors.hn ? (
                                <div className="error">{formik.errors.hn}</div>
                            ) : null} <br />


                            <br /><button className="But" type="submit">Submit</button>
                            {open === true ? <ToolModal /> : console.log("Modal it's not open")}
                        </form>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
export default StudentRes;