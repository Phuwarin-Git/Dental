
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
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

const StudentAdminLimitCase = () => {
    const { user } = useContext(AuthContext);
    const history = useHistory();

    function submitForm(date, time, od, tmd, oper, perio, sur, prosth, endo, xray, om, ortho) {
        console.log("Limit :", date, time, od, tmd, oper, perio, sur, prosth, endo, xray, om, ortho);
        const ApiSet = ({ date: date, time: time, od: od, tmd: tmd, oper: oper, perio: perio, sur: sur, prosth: prosth, endo: endo, xray: xray, om: om, ortho: ortho })
        alert("Success")
        return axios.post("http://selab.mfu.ac.th:8318/limitcase/create", ApiSet).then((res) => {
            console.log("Res Limit :", res)
            return history.push('/StudentAdminDashboard')
        })
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
        <div>
            <Navbar style={{ backgroundColor: 'rgba(21, 101, 192)' }}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminReservation">เลือกที่นั่ง</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminLimitCase">การจำกัดงาน</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#32fcf6', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ backgroundColor: '#ff3b38', borderRadius: '10px', color: 'black', marginLeft: '300px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <Container>
                <Row>
                    <Col>
                        <Limit />
                    </Col>
                    <Col>
                        <h1>จำกัดภาระงาน</h1>
                        <form onSubmit={formik.handleSubmit}>
                            <label style={{ fontWeight: 'bold' }} htmlFor="date">วันที่ :{" "}</label>
                            <Input
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


                            <lable style={{ marginRight: '2%', fontWeight: 'bold' }}>เลือกช่วงเวลา : </lable>
                            <input
                                id="ช่วงเช้า"
                                type="radio"
                                value="ช่วงเช้า"
                                name='time'
                                onChange={formik.handleChange}
                                defaultChecked={formik.values.time === "ช่วงเช้า"}
                            />
                            &nbsp;&nbsp;&nbsp;
                            <label style={{ marginRight: '10%' }}>ช่วงเช้า</label>


                            <input
                                id="ช่วงบ่าย"
                                type="radio"
                                value="ช่วงบ่าย"
                                name='time'
                                onChange={formik.handleChange}
                                defaultChecked={formik.values.time === "ช่วงบ่าย"}
                            />
                            &nbsp;&nbsp;&nbsp;
                            <label>ช่วงบ่าย</label>

                            {formik.touched.time && formik.errors.time ? (
                                <div className="error">{formik.errors.time}</div>
                            ) : null}<br />


                            <label style={{ fontWeight: 'bold' }} htmlFor="od">OD :{" "}</label>
                            <Input
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


                            <label style={{ fontWeight: 'bold' }} htmlFor="tmd">TMD :{" "}</label>
                            <Input
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


                            <label style={{ fontWeight: 'bold' }} htmlFor="oper">OPER :{" "}</label>
                            <Input
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


                            <label style={{ fontWeight: 'bold' }} htmlFor="perio">PERIO :{" "}</label>
                            <Input
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


                            <label style={{ fontWeight: 'bold' }} htmlFor="sur">SUR :{" "}</label>
                            <Input
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


                            <label style={{ fontWeight: 'bold' }} htmlFor="prosth">PROSTH :{" "}</label>
                            <Input
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


                            <label style={{ fontWeight: 'bold' }} htmlFor="endo">ENDO :{" "}</label>
                            <Input
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

                            <label style={{ fontWeight: 'bold' }} htmlFor="xray">X-ray :{" "}</label>
                            <Input
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


                            <label style={{ fontWeight: 'bold' }} htmlFor="om">OM :{" "}</label>
                            <Input
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

                            <label style={{ fontWeight: 'bold' }} htmlFor="ortho">ORTHO :{" "}</label>
                            <Input
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

                            <br /><Button className="But" type="submit">Submit</Button>
                        </form>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
export default StudentAdminLimitCase;