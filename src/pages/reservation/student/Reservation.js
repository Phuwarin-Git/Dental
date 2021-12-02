import React, { useContext, useEffect, useState } from 'react';
import { useFormik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, CloseButton } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from "axios";
import { AuthContext } from '../../../App';
import ToolModal from './modal/tool';
import StudentLimt from './limit';
import But from './reservationCss/ButtonRes';
import Input from './reservationCss/InputRes'
import Selected from './reservationCss/SelectRes';
import StyledCreateStudent from './reservationCss/ModalCreateForStudent';

const StudentRes = () => {
    const { user, currentDate } = useContext(AuthContext);
    const [limit, setLimit] = useState([]);
    const [open, setOpen] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [getUnique, setUnique] = useState([])



    useEffect(() => {
        getDetails();
    }, [user])


    const getDetails = () => {
        axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            console.log("Limit :", item.data)
            return setLimit(item.data);
        });
    }

    function uniqueID() {
        console.log("Called")
        function chr4() {
            return Math.random().toString(16).slice(-4);
        }
        return chr4() + chr4() +
            '-' + chr4() +
            '-' + chr4() +
            '-' + chr4() +
            '-' + chr4() + chr4() + chr4();
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    function submitForm(date, time, clinic, type, patient, dn, hn) {

        const findDate = limit.filter((item) => {
            return ((item.date === date) && (item.time === time))
        })

        if (findDate.length === 1) {
            // alert("Success")
            let a = uniqueID()
            setUnique(a);
            console.log("Check Form :", user.first_name, user.student_year, date, time, clinic, type, patient, dn, hn);
            const ApiSet = ({ name: user.first_name, uniqueID: a, studentyear: user.student_year, date: date, time: time, clinic: clinic, worktype: type, patient: patient, dn: dn, hn: hn, toolStatus: "รอการเบิก" })

            if (clinic === "OD") {
                if (findDate[0].od === '0') {
                    return alert("ภาระงานเต็ม")
                } else {
                    console.log("FindDate :", findDate)
                    let limit_id = findDate[0].limit_id
                    let UpdateCase = { od: findDate[0].od - 1 }
                    console.log("limit ID :", limit_id)
                    console.log("OD = ", findDate[0].od)
                    console.log(" Case - 1 :", UpdateCase)
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, UpdateCase);
                    let coutingLimit = { odyOd: findDate[0].odyOd + 1 }
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, coutingLimit);
                }
            } else if (clinic === "TMD") {
                if (findDate[0].tmd === '0') {
                    return alert("ภาระงานเต็ม")
                } else {
                    console.log("FindDate :", findDate)
                    let limit_id = findDate[0].limit_id
                    let UpdateCase = { tmd: findDate[0].tmd - 1 }
                    console.log("limit ID :", limit_id)
                    console.log("findDateTMD = ", findDate[0].tmd)
                    console.log(" Case - 1 :", UpdateCase)
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, UpdateCase);
                    let coutingLimit = { odyTmd: findDate[0].odyTmd + 1 }
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, coutingLimit);
                }
            } else if (clinic === "OPER") {
                if (findDate[0].oper === '0') {
                    return alert("ภาระงานเต็ม")
                } else {
                    console.log("FindDate :", findDate)
                    let limit_id = findDate[0].limit_id
                    let UpdateCase = { oper: findDate[0].oper - 1 }
                    console.log("limit ID :", limit_id)
                    console.log("findDateOper = ", findDate[0].oper)
                    console.log(" Case - 1 :", UpdateCase)
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, UpdateCase);
                    let coutingLimit = { odyOper: findDate[0].odyOper + 1 }
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, coutingLimit);
                }
            } else if (clinic === "PERIO") {
                if (findDate[0].perio === '0') {
                    return alert("ภาระงานเต็ม")
                } else {
                    console.log("FindDate :", findDate)
                    let limit_id = findDate[0].limit_id
                    let UpdateCase = { perio: findDate[0].perio - 1 }
                    console.log("limit ID :", limit_id)
                    console.log("findDatePerio = ", findDate[0].perio)
                    console.log(" Case - 1 :", UpdateCase)
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, UpdateCase);
                    let coutingLimit = { odyPerio: findDate[0].odyPerio + 1 }
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, coutingLimit);
                }
            } else if (clinic === "SUR") {
                if (findDate[0].sur === '0') {
                    return alert("ภาระงานเต็ม")
                } else {
                    console.log("FindDate :", findDate)
                    let limit_id = findDate[0].limit_id
                    let UpdateCase = { sur: findDate[0].sur - 1 }
                    console.log("limit ID :", limit_id)
                    console.log("findDateSur = ", findDate[0].sur)
                    console.log(" Case - 1 :", UpdateCase)
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, UpdateCase);
                    let coutingLimit = { odySur: findDate[0].odySur + 1 }
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, coutingLimit);
                }
            } else if (clinic === "PROSTH") {
                if (findDate[0].prosth === '0') {
                    return alert("ภาระงานเต็ม")
                } else {
                    console.log("FindDate :", findDate)
                    let limit_id = findDate[0].limit_id
                    let UpdateCase = { prosth: findDate[0].prosth - 1 }
                    console.log("limit ID :", limit_id)
                    console.log("findDateProsth = ", findDate[0].prosth)
                    console.log(" Case - 1 :", UpdateCase)
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, UpdateCase);
                    let coutingLimit = { odyProsth: findDate[0].odyProsth + 1 }
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, coutingLimit);
                }
            } else if (clinic === "ENDO") {
                if (findDate[0].endo === '0') {
                    return alert("ภาระงานเต็ม")
                } else {
                    console.log("FindDate :", findDate)
                    let limit_id = findDate[0].limit_id
                    let UpdateCase = { endo: findDate[0].endo - 1 }
                    console.log("limit ID :", limit_id)
                    console.log("findDateEndo = ", findDate[0].endo)
                    console.log(" Case - 1 :", UpdateCase)
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, UpdateCase);
                    let coutingLimit = { odyEndo: findDate[0].odyEndo + 1 }
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, coutingLimit);
                }
            } else if (clinic === "PEDO") {
                if (findDate[0].pedo === '0') {
                    return alert("ภาระงานเต็ม")
                } else {
                    console.log("FindDate :", findDate)
                    let limit_id = findDate[0].limit_id
                    let UpdateCase = { pedo: findDate[0].pedo - 1 }
                    console.log("limit ID :", limit_id)
                    console.log("findDatePedo = ", findDate[0].pedo)
                    console.log(" Case - 1 :", UpdateCase)
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, UpdateCase);
                    let coutingLimit = { odyPedo: findDate[0].odyPedo + 1 }
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, coutingLimit);
                }
            } else if (clinic === "X-RAY") {
                if (findDate[0].xray === '0') {
                    return alert("ภาระงานเต็ม")
                } else {
                    console.log("FindDate :", findDate)
                    let limit_id = findDate[0].limit_id
                    let UpdateCase = { xray: findDate[0].xray - 1 }
                    console.log("limit ID :", limit_id)
                    console.log("findDateXray = ", findDate[0].xray)
                    console.log(" Case - 1 :", UpdateCase)
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, UpdateCase);
                    let coutingLimit = { odyXray: findDate[0].odyXray + 1 }
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, coutingLimit);
                }
            } else if (clinic === "OM") {
                if (findDate[0].om === '0') {
                    return alert("ภาระงานเต็ม")
                } else {
                    console.log("FindDate :", findDate)
                    let limit_id = findDate[0].limit_id
                    let UpdateCase = { om: findDate[0].om - 1 }
                    console.log("limit ID :", limit_id)
                    console.log("findDateOm = ", findDate[0].om)
                    console.log(" Case - 1 :", UpdateCase)
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, UpdateCase);
                    let coutingLimit = { odyOm: findDate[0].odyOm + 1 }
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, coutingLimit);
                }
            } else if (clinic === "ORTHO") {
                if (findDate[0].ortho === '0') {
                    return alert("ภาระงานเต็ม")
                } else {
                    console.log("FindDate :", findDate)
                    let limit_id = findDate[0].limit_id
                    let UpdateCase = { ortho: findDate[0].ortho - 1 }
                    console.log("limit ID :", limit_id)
                    console.log("findDateOrtho = ", findDate[0].ortho)
                    console.log(" Case - 1 :", UpdateCase)
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, UpdateCase);
                    let coutingLimit = { odyOrtho: findDate[0].odyOrtho + 1 }
                    axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, coutingLimit);
                }
            }


            return axios.post("http://localhost:3000/details/create", ApiSet).then((res) => {
                console.log("Res Create Details :", res)
                return setOpen(true);
                // closeModal();
                // return history.push('/StudentDashboard')
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
        <div style={{ backgroundColor: '#ededed', minHeight: '1080px' }}>
            <nav style={{ background: '#0080ff' }}>
                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>
                </div>
            </nav>
            <Navbar style={{ backgroundColor: 'white', boxShadow: '1px 1px 10px #d6d6d6' }}>
                {/* style={{ backgroundColor: 'rgba(21, 101, 192, 0.3)' }} */}
                <Container >
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentRes">จองการทำงาน</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentHistory">ประวัติ</Nav.Link>
                        {/* <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentProfile">บัญชี</Nav.Link> */}
                        <Nav.Link style={{ color: '#424242', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', marginLeft: '350px', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

            <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minHeight: '700px', minWidth: '1500px' }}>

                <StudentLimt setIsOpen={setIsOpen} />

                <StyledCreateStudent
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="modal">
                    <CloseButton onClick={() => closeModal()} style={{ marginRight: '10px', marginTop: '5px' }} />
                    <div style={{ padding: '30px' }}>
                        <center>
                            <h1 style={{ color: '#198CFF', fontWeight: 'bold' }}>จองการทำงาน</h1>
                        </center>
                        <form style={{ textAlign: 'left' }} onSubmit={formik.handleSubmit}>
                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="date">วันที่</label>

                            <Input
                                style={{ fontSize: '18px' }}
                                id="date"
                                name="date"
                                type="date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.date}
                                min={currentDate}
                            />
                            {formik.touched.date && formik.errors.date ? (
                                <div className="error">{formik.errors.date}</div>
                            ) : null} <br /><br />


                            <lable style={{ marginRight: '2%', fontWeight: 'bold', fontSize: '20px' }}>เลือกช่วงเวลา : </lable>
                            <input
                                style={{ fontSize: '18px' }}
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
                                style={{ fontSize: '18px' }}
                                id="ช่วงบ่าย"
                                type="radio"
                                value="ช่วงบ่าย"
                                name='time'
                                onChange={formik.handleChange}
                                defaultChecked={formik.values.time === "ช่วงบ่าย"}
                            />
                            &nbsp;&nbsp;&nbsp;
                            <label style={{ marginRight: '10%', fontSize: '18px' }}>ช่วงบ่าย</label>

                            {formik.touched.time && formik.errors.time ? (
                                <div className="error">{formik.errors.time}</div>
                            ) : null}<br />



                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="Clinic">คลินิก</label>
                            <Selected
                                style={{ fontSize: '18px' }}
                                id="clinic"
                                name="clinic"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.clinic}
                            >
                                <option value="" label="เลือกคลินิก" />
                                <option value="OD" label="OD" />
                                <option value="TMD" label="TMD" />
                                <option value="OPER" label="OPER" />
                                <option value="PERIO" label="PERIO" />
                                <option value="SUR" label="SUR" />
                                <option value="PROSTH" label="PROSTH" />
                                <option value="ENDO" label="ENDO" />
                                <option value="PEDO" label="PEDO" />
                                <option value="X-RAY" label="X-RAY" />
                                <option value="OM" label="OM" />
                                <option value="ORTHO" label="ORTHO" />
                            </Selected>
                            {formik.touched.clinic && formik.errors.clinic ? (
                                <div className="error">{formik.errors.clinic}</div>
                            ) : null}<br />

                            <label style={{ marginRight: '3%', fontWeight: 'bold', fontSize: '20px' }} htmlFor="type">ประเภทงาน : </label>
                            <input
                                style={{ fontSize: '18px' }}
                                id="ฟุ้งกระจาย"
                                type="radio"
                                value="ฟุ้งกระจาย"
                                name='type'
                                onChange={formik.handleChange}
                                defaultChecked={formik.values.type === "ฟุ้งกระจาย"}
                            />
                            &nbsp;&nbsp;&nbsp;
                            <label style={{ marginRight: '8%', fontSize: '18px' }}>ฟุ้งกระจาย</label>


                            <input
                                style={{ fontSize: '18px' }}
                                id="ไม่ฟุ้งกระจาย"
                                type="radio"
                                value="ไม่ฟุ้งกระจาย"
                                name='type'
                                onChange={formik.handleChange}
                                defaultChecked={formik.values.type === "ไม่ฟุ้งกระจาย"}
                            />
                            &nbsp;&nbsp;&nbsp;
                            <label style={{ marginRight: '8%', fontSize: '18px' }}>ไม่ฟุ้งกระจาย</label>

                            {formik.touched.type && formik.errors.type ? (
                                <div className="error">{formik.errors.type}</div>
                            ) : null}<br />

                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="patient">ชื่อคนไข้</label>
                            <Input
                                style={{ fontSize: '18px' }}
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

                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="dn">DN</label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="dn"
                                name="dn"
                                type="number"
                                min="0"
                                placeholder="DN ต้องเป็นตัวเลขเท่านั้น"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dn}
                            />
                            {formik.touched.dn && formik.errors.dn ? (
                                <div className="error">{formik.errors.dn}</div>
                            ) : null} <br />

                            <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="hn">HN </label>
                            <Input
                                style={{ fontSize: '18px' }}
                                id="hn"
                                name="hn"
                                type="number"
                                min="0"
                                placeholder="HN ต้องเป็นตัวเลขเท่านั้น"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.hn}
                            />
                            {formik.touched.hn && formik.errors.hn ? (
                                <div className="error">{formik.errors.hn}</div>
                            ) : null} <br />

                            <center>
                                <br /><But style={{ fontWeight: 'bold', fontSize: '22px', backgroundColor: '#198CFF' }} type="submit">ยืนยัน</But>
                            </center>
                            {open === true ? <ToolModal unique={getUnique} /> : console.log("Modal it's not open")}

                        </form>
                    </div>
                </StyledCreateStudent>
            </Container>
        </div >
    )
}
export default StudentRes;