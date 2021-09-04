
import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../../App';

import '../Yup.css'

const StudentAdminLimitCase = () => {
    const { user } = useContext(AuthContext);

    function submitForm(date, time, od, tmd, oper, perio, sur, prosth, endo, xray, om, ortho) {
        console.log("Limit :", date, time, od, tmd, oper, perio, sur, prosth, endo, xray, om, ortho);
        const ApiSet = ({ date: date, time: time, od: od, tmd: tmd, oper: oper, perio: perio, sur: sur, prosth: prosth, endo: endo, xray: xray, om: om, ortho: ortho })
        alert("Success")
        return axios.post("http://selab.mfu.ac.th:8318/limitcase/create", ApiSet).then((res) => {
            return console.log("Res Limit :", res)
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
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/StudentAdminDashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/StudentAdminReservation">Unit Selected</Nav.Link>
                        <Nav.Link as={Link} to="/StudentAdminLimitCase">Case Limit</Nav.Link>
                        <Nav.Link as={Link} to="/StudentAdminHistory">History</Nav.Link>
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        <Nav.Link style={{ color: '#3258fc' }} as={Link}>Name : {user.first_name}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Student Reservation</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="date">First Name :{" "}</label>
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


                <label htmlFor="time">Date :{" "}</label>
                <select
                    id="time"
                    name="time"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.time}
                >
                    <option value="" label="Select the time" />
                    <option value="ช่วงเช้า" label="morning" />
                    <option value="ช่วงบ่าย" label="afternoon" />
                </select>
                {formik.touched.time && formik.errors.time ? (
                    <div className="error">{formik.errors.time}</div>
                ) : null}<br />


                <label htmlFor="od">OD :{" "}</label>
                <input
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


                <label htmlFor="tmd">TMD :{" "}</label>
                <input
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


                <label htmlFor="oper">OPER :{" "}</label>
                <input
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


                <label htmlFor="perio">PERIO :{" "}</label>
                <input
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


                <label htmlFor="sur">SUR :{" "}</label>
                <input
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


                <label htmlFor="prosth">PROSTH :{" "}</label>
                <input
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


                <label htmlFor="endo">ENDO :{" "}</label>
                <input
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

                <label htmlFor="xray">X-ray :{" "}</label>
                <input
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


                <label htmlFor="om">OM :{" "}</label>
                <input
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

                <label htmlFor="ortho">ORTHO :{" "}</label>
                <input
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

                <br /><button className="But" type="submit">Submit</button>
            </form>

        </div>
    )
}
export default StudentAdminLimitCase;