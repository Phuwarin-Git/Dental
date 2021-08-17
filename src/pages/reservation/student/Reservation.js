import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Nav, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

import '../Yup.css'

const StudentRes = () => {
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
                .required('Required'),
            time: Yup.string()
                .required('Required'),
            clinic: Yup.string()
                .required('Required'),
            type: Yup.string()
                .required('Required'),
            patient: Yup.string()
                .required('Required'),
            dn: Yup.string()
                .required('Required'),
            hn: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/reservation">Reservation</Nav.Link>
                        <Nav.Link href="/history">History</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/">Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
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
                    <option value="morning" label="morning" />
                    <option value="afternoon" label="afternoon" />
                </select>
                {formik.touched.time && formik.errors.time ? (
                    <div className="error">{formik.errors.time}</div>
                ) : null}<br />

                <label htmlFor="Clinic">Date :{" "}</label>
                <select
                    id="clinic"
                    name="clinic"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.clinic}
                >
                    <option value="" label="Select a clinic" />
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

                <label htmlFor="type">Type :{" "}</label>
                <select
                    id="type"
                    name="type"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.type}
                >
                    <option value="" label="Select the type" />
                    <option value="agps" label="AGPs" />
                    <option value="non" label="Non-AGPs" />
                </select>
                {formik.touched.type && formik.errors.type ? (
                    <div className="error">{formik.errors.type}</div>
                ) : null}<br />

                <label htmlFor="patient">Patient Name :{" "}</label>
                <input
                    id="patient"
                    name="patient"
                    type="text"
                    placeholder="Patient name"
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
                    placeholder="DN must be number"
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
                    placeholder="HN must be number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.hn}
                />
                {formik.touched.hn && formik.errors.hn ? (
                    <div className="error">{formik.errors.hn}</div>
                ) : null} <br />


                <br /><button className="But" type="submit">Submit 1</button>
            </form>

        </div>
    )
}
export default StudentRes;