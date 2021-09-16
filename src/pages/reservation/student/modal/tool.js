
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import '../../Yup.css'
import { Label } from 'semantic-ui-react';


const ToolModal = () => {


    // function submitForm(testkit_toolcc1) {
    //     console.log('test kit:', testkit_toolcc1)
    //     const ApiSet = ({ testkit_toolcc1: testkit_toolcc1 })
    //     console.log('test :', ApiSet)
    //     alert("Success")
    //     return axios.post("http://selab.mfu.ac.th:8318/Tool/create", ApiSet).then((res) => {
    //         return console.log("ApiSet :", res)
    //     })
    // }

    const formik = useFormik({
        initialValues: {
            testkit_toolcc1: ''
        },
        validationSchema: Yup.object({
            testkit_toolcc1: Yup.string().required('Required'),

        }),
        onSubmit: values => {
            const ApiSet = ({ testkit_toolcc1: values.testkit_toolcc1 })
            console.log("test API Set :", ApiSet)
            return axios.post("http://selab.mfu.ac.th:8318/details/create", ApiSet).then((res) => {
                return console.log("Api Set :", res)
            })
            // return submitForm(values.testkit_toolcc1);
        },
    });
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/StudentDashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/StudentLimt">Limit</Nav.Link>
                        <Nav.Link as={Link} to="/StudentRes">Reservation</Nav.Link>
                        <Nav.Link as={Link} to="/StudentHistory">History</Nav.Link>
                        <Nav.Link as={Link} to="/StudentProfile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/ToothPage">Tooth</Nav.Link>
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Student Reservation</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="testkit_toolcc1">วันที่ :{" "}</label>
                <input
                    id="testkit_toolcc1"
                    name="testkit_toolcc1"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.testkit_toolcc1}
                />
                {formik.touched.testkit_toolcc1 && formik.errors.testkit_toolcc1 ? (
                    <div className="error">{formik.errors.testkit_toolcc1}</div>
                ) : null} <br />

                <br /><button className="But" type="submit">Submit</button>
            </form>
        </div>
    )

}
export default ToolModal;