
import React, { useContext, useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from 'react-bootstrap/Navbar'
import { CloseButton, Nav } from 'react-bootstrap';
import * as XLSX from "xlsx";
import Container from 'react-bootstrap/Container'
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../../../App';
import '../Yup.css'
import Input from './reservationCss/InputRes'
import Button from './reservationCss/ButtonRes'
import Limit from './limit';
import StyledCreate from './reservationCss/ModalCreate';
import ConfirmLimit from './confirmModal/modal';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MaterialTable from "material-table";

const StudentAdminLimitCase = () => {
    const { user, limit, setLimit, currentDate, currentMonth } = useContext(AuthContext);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [details, setDetials] = useState([]);
    const [items, setItems] = useState([]);

    const [data, setData] = useState([]);

    let history = useHistory();

    useEffect(() => {
        getDetails();
    }, [user])

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const getDetails = () => {
        axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            // console.log("Limit :", item.data)
            let findMonth = item.data;
            let filterMonth = findMonth.filter((item) => {
                let a = item.date;
                let thisDate = currentDate.slice(8)
                let digitRealDate = (a).slice(8)
                let digitData = (a).slice(5, 7)
                let parsed = parseInt(digitData)
                return (parsed >= currentMonth && digitRealDate >= thisDate)
            })

            console.log("Filter Month :", filterMonth)

            setData(filterMonth);
            return setDetials(filterMonth);

        });
    }


    async function submitForm(date, time, od, tmd, oper, perio, sur, prosth, endo, pedo, xray, om, ortho) {
        if (date === undefined || time === undefined || od === undefined || tmd === undefined || oper === undefined || perio === undefined || sur === undefined || prosth === undefined || endo === undefined || pedo === undefined || xray === undefined || om === undefined || ortho === undefined) {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน")
        } else {
            console.log("Limit :", date, time, od, tmd, oper, perio, sur, prosth, endo, pedo, xray, om, ortho);
            const ApiSet = ({ date: date, time: time, od: od, tmd: tmd, oper: oper, perio: perio, sur: sur, prosth: prosth, endo: endo, pedo: pedo, xray: xray, om: om, ortho: ortho, odyOd: 0, odyTmd: 0, odyOper: 0, odyPerio: 0, odySur: 0, odyProsth: 0, odyEndo: 0, odyPedo: 0, odyXray: 0, odyOm: 0, odyOrtho: 0 })

            const findCaseReserved = data.filter((item) => {
                return (item.date === date && item.time === time)
            })

            if (findCaseReserved.length !== 0) {
                return alert("ไม่สามารถกำหนดภาระงานในช่วงเวลาเดียวกันได้")
            } else {
                await axios.post("http://localhost:3000/limitcase/create", ApiSet).then((res) => {
                    return console.log("Res Limit :", res)
                })
                await axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
                    console.log("Limit :", item.data)

                    let findMonth = item.data;
                    let filterMonth = findMonth.filter((item) => {
                        let a = item.date;
                        let thisDate = currentDate.slice(8)
                        let digitRealDate = (a).slice(8)
                        // console.log("วันที่ทะไหย่ :", thisDatte)
                        let digitData = (a).slice(5, 7)
                        let parsed = parseInt(digitData)
                        return (parsed >= currentMonth && digitRealDate >= thisDate)
                    })
                    getDetails();
                    return setLimit(filterMonth);
                });
                closeModal();
                return history.push('/StudentAdminDashboard')
            }
        }
    }

    async function updateLimitCase(limit_id, od, tmd, oper, perio, sur, prosth, endo, pedo, xray, om, ortho) {
        if (od === NaN || tmd === NaN || oper === NaN || perio === NaN || sur === NaN || prosth === NaN || endo === NaN || pedo === NaN || xray === NaN || om === NaN || ortho === NaN) {
            alert("กรุณากรอกจำนวนภาระงาน");
        } else {
            let getOd = { od: od }
            let getTmd = { tmd: tmd }
            let getOper = { oper: oper }
            let getPerio = { perio: perio }
            let getProsth = { sur: sur }
            let getEndo = { prosth: prosth }
            let getPedo = { endo: endo }
            let getXray = { pedo: pedo }
            let getOm = { xray: xray }
            let getOrtho = { om: om }
            let getSur = { ortho: ortho }

            await axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, getOd);
            await axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, getTmd);
            await axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, getOper);
            await axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, getPerio);
            await axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, getSur);
            await axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, getProsth);
            await axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, getEndo);
            await axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, getPedo);
            await axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, getXray);
            await axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, getOm);
            await axios.put("http://localhost:3000/limitcase/updateClinicCase/" + limit_id, getOrtho);
            getDetails();
        }
    }

    async function deleteLimitCase(id) {
        console.log("Delete ID :", id)

        await axios.delete("http://localhost:3000/limitcase/delete/" + id);
        return axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            console.log("Limit :", item.data)

            let findMonth = item.data;
            let filterMonth = findMonth.filter((item) => {
                let a = item.date;
                let thisDate = currentDate.slice(8)
                let digitRealDate = (a).slice(8)
                // console.log("วันที่ทะไหย่ :", thisDatte)
                let digitData = (a).slice(5, 7)
                let parsed = parseInt(digitData)
                return (parsed >= currentMonth && digitRealDate >= thisDate)
            })
            // && digitRealDate=>
            getDetails();
            return setLimit(filterMonth);
        });
    }

    function checkColor(caselimit) {
        if (caselimit === "0") {
            return "red"
        }
    }

    function checkFont(caselimit) {
        if (caselimit === "0") {
            return "bold"
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
            pedo: '',
            xray: '',
            om: '',
            ortho: '',
        },
        validationSchema: Yup.object({
            date: Yup.string()
                .required('* กรุณากรอกข้อมูล'),
            time: Yup.string()
                .required('* กรุณากรอกข้อมูล'),
            od: Yup.string()
                .required('* กรุณากรอกข้อมูล'),
            tmd: Yup.string()
                .required('* กรุณากรอกข้อมูล'),
            oper: Yup.string()
                .required('* กรุณากรอกข้อมูล'),
            perio: Yup.string()
                .required('* กรุณากรอกข้อมูล'),
            sur: Yup.string()
                .required('* กรุณากรอกข้อมูล'),
            prosth: Yup.string()
                .required('* กรุณากรอกข้อมูล'),
            endo: Yup.string()
                .required('* กรุณากรอกข้อมูล'),
            pedo: Yup.string()
                .required('* กรุณากรอกข้อมูล'),
            xray: Yup.string()
                .required('* กรุณากรอกข้อมูล'),
            om: Yup.string()
                .required('* กรุณากรอกข้อมูล'),
            ortho: Yup.string()
                .required('* กรุณากรอกข้อมูล'),
        }),
        onSubmit: values => {
            return submitForm(values.date, values.time, values.od, values.tmd, values.oper, values.perio, values.sur, values.prosth, values.endo, values.pedo, values.xray, values.om, values.ortho);
        },
    });

    return (
        <div style={{ backgroundColor: '#ededed', minHeight: '1080px' }}>
            <nav style={{ background: '#0080ff' }}>
                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>
                </div>
            </nav>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'white' }}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ marginLeft: '80px' }} className="mr-auto">
                        <Nav.Link style={{ color: '#424242', fontSize: '23px' }} as={Link} to="/StudentAdminDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#424242', fontSize: '23px' }} as={Link} to="/StudentAdminReservation">เลือกที่นั่ง</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontSize: '23px' }} as={Link} to="/StudentAdminLimitCase">กำหนดภาระงาน</Nav.Link>
                        <Nav.Link style={{ color: '#424242', fontSize: '23px' }} as={Link} to="/StudentAdminHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#424242', fontSize: '23px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', fontSize: '23px', marginRight: '80px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br />

            <div className="PaddingDiv">
                <Container style={{ backgroundColor: '#ffff', padding: '15px', borderRadius: '10px', maxWidth: '1500px' }}>
                    <h1 style={{ color: '#198CFF', fontWeight: 'bold' }}>จำนวนภาระงานที่เหลือ</h1>


                    <MaterialTable
                        title="Mae Fah Luang University Dental Clinic"
                        columns={[
                            {
                                title: 'วันที่', field: 'date', type: 'date', cellStyle: {
                                    minWidth: 140,
                                },
                            },
                            {
                                title: 'เวลา', field: 'time'
                                , lookup: { ช่วงเช้า: 'ช่วงเช้า', ช่วงบ่าย: 'ช่วงบ่าย' }
                                , cellStyle: {
                                    minWidth: 60,
                                },
                            },
                            {
                                title: 'OD', field: 'od', type: "numeric", render: rowData => rowData?.od,
                                cellStyle: (cellValue, rowData) => {
                                    return { color: checkColor(rowData?.od), fontWeight: checkFont(rowData?.od) }
                                }
                            },
                            {
                                title: 'TMD', field: 'tmd', type: "numeric", render: rowData => rowData?.tmd,
                                cellStyle: (cellValue, rowData) => {
                                    return { color: checkColor(rowData?.tmd), fontWeight: checkFont(rowData?.tmd) }
                                }
                            },
                            {
                                title: 'OPER', field: 'oper', type: "numeric", render: rowData => rowData?.oper,
                                cellStyle: (cellValue, rowData) => {
                                    return { color: checkColor(rowData?.oper), fontWeight: checkFont(rowData?.oper) }
                                }
                            },
                            {
                                title: 'PERIO', field: 'perio', type: "numeric", render: rowData => rowData?.perio,
                                cellStyle: (cellValue, rowData) => {
                                    return { color: checkColor(rowData?.perio), fontWeight: checkFont(rowData?.perio) }
                                }
                            },
                            {
                                title: 'SUR', field: 'sur', type: "numeric", render: rowData => rowData?.sur,
                                cellStyle: (cellValue, rowData) => {
                                    return { color: checkColor(rowData?.sur), fontWeight: checkFont(rowData?.sur) }
                                }
                            },
                            {
                                title: 'PROSTH', field: 'prosth', type: "numeric", render: rowData => rowData?.prosth,
                                cellStyle: (cellValue, rowData) => {
                                    return { color: checkColor(rowData?.prosth), fontWeight: checkFont(rowData?.prosth) }
                                }
                            },
                            {
                                title: 'ENDO', field: 'endo', type: "numeric", render: rowData => rowData?.endo,
                                cellStyle: (cellValue, rowData) => {
                                    return { color: checkColor(rowData?.endo), fontWeight: checkFont(rowData?.endo) }
                                }
                            },
                            {
                                title: 'PEDO', field: 'pedo', type: "numeric", render: rowData => rowData?.pedo,
                                cellStyle: (cellValue, rowData) => {
                                    return { color: checkColor(rowData?.pedo), fontWeight: checkFont(rowData?.pedo) }
                                }
                            },
                            {
                                title: 'X-RAY', field: 'xray', type: "numeric", render: rowData => rowData?.xray,
                                cellStyle: (cellValue, rowData) => {
                                    return { color: checkColor(rowData?.xray), fontWeight: checkFont(rowData?.xray), minWidth: 114, }
                                }
                            },
                            {
                                title: 'OM', field: 'om', type: "numeric", render: rowData => rowData?.om,
                                cellStyle: (cellValue, rowData) => {
                                    return { color: checkColor(rowData?.om), fontWeight: checkFont(rowData?.om) }
                                }
                            },
                            {
                                title: 'ORTHO', field: 'ortho', type: "numeric", render: rowData => rowData?.ortho,
                                cellStyle: (cellValue, rowData) => {
                                    return { color: checkColor(rowData?.ortho), fontWeight: checkFont(rowData?.ortho) }
                                }
                            },
                        ]}
                        data={data}
                        options={{
                            actionsColumnIndex: -1,
                            headerStyle: {
                                fontFamily: "Mitr",
                                fontWeight: 'bold',
                                fontSize: '18px',
                            }, tableLayout: 'auto'
                        }}
                        localization={{
                            body: {
                                emptyDataSourceMessage: 'ไม่มีการจองที่อยู่ระหว่างการดำเนินการ',
                                addTooltip: 'เพิ่มรายชื่อผู้ใช้งาน',
                                deleteTooltip: 'Löschen',
                                editTooltip: 'Bearbeiten',
                                filterRow: {
                                    filterTooltip: 'Filter'
                                },
                                editRow: {
                                    deleteText: 'ต้องการลบรายชื่อนี้หรือไม่ ?',
                                    cancelTooltip: 'Abbrechen',
                                    saveTooltip: 'Speichern'
                                }
                            },
                            grouping: {
                                placeholder: 'Spalten ziehen ...',
                                groupedBy: 'Gruppiert nach:'
                            },
                            header: {
                                actions: 'แก้ไข'
                            },
                            pagination: {
                                labelDisplayedRows: '{from}-{to} จาก {count}',
                                labelRowsSelect: 'แถว',
                                labelRowsPerPage: 'Zeilen pro Seite:',
                                firstAriaLabel: 'Erste Seite',
                                firstTooltip: 'Erste Seite',
                                previousAriaLabel: 'Vorherige Seite',
                                previousTooltip: 'Vorherige Seite',
                                nextAriaLabel: 'Nächste Seite',
                                nextTooltip: 'Nächste Seite',
                                lastAriaLabel: 'Letzte Seite',
                                lastTooltip: 'Letzte Seite'
                            },
                            toolbar: {
                                addRemoveColumns: 'Spalten hinzufügen oder löschen',
                                nRowsSelected: '{0} Zeile(n) ausgewählt',
                                showColumnsTitle: 'Zeige Spalten',
                                showColumnsAriaLabel: 'Zeige Spalten',
                                exportTitle: 'Export',
                                exportAriaLabel: 'Export',
                                exportName: 'Export als CSV',
                                searchTooltip: 'ค้นหา',
                                searchPlaceholder: 'ค้นหา'
                            }
                        }}
                        editable={{
                            onRowAdd: newData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        console.log("newData :", newData)

                                        var dd = String(newData.date.getDate()).padStart(2, '0');
                                        var mm = String(newData.date.getMonth() + 1).padStart(2, '0');
                                        var yyyy = newData.date.getFullYear();

                                        let date = yyyy + '-' + mm + '-' + dd;
                                        let time = newData.time;
                                        let od = newData.od;
                                        let tmd = newData.tmd;
                                        let oper = newData.oper;
                                        let perio = newData.perio;
                                        let sur = newData.sur;
                                        let prosth = newData.prosth;
                                        let endo = newData.endo;
                                        let pedo = newData.pedo;
                                        let xray = newData.xray;
                                        let om = newData.om;
                                        let ortho = newData.ortho;
                                        submitForm(date, time, od, tmd, oper, perio, sur, prosth, endo, pedo, xray, om, ortho)
                                        resolve();
                                    }, 1000)
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        console.log("Update :", oldData.limit_id, newData.od, newData.tmd, newData.oper, newData.perio, newData.sur, newData.prosth, newData.endo, newData.pedo, newData.xray, newData.om, newData.ortho)
                                        updateLimitCase(oldData.limit_id, newData.od, newData.tmd, newData.oper, newData.perio, newData.sur, newData.prosth, newData.endo, newData.pedo, newData.xray, newData.om, newData.ortho)
                                        resolve();
                                    }, 1000)
                                }),
                            onRowDelete: oldData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        deleteLimitCase(oldData.id)
                                        resolve()
                                    }, 1000)
                                }),
                        }}
                    />
                    <Button onClick={() => openModal()} style={{ backgroundColor: '#198CFF', fontWeight: 'bold', width: '145px' }}>กำหนดภาระงาน</Button>


                    <StyledCreate
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="modal">
                        <CloseButton onClick={() => closeModal()} style={{ marginRight: '10px', marginTop: '5px' }} />
                        <center>
                            <h1 style={{ color: '#198CFF', fontWeight: 'bold', marginTop: '10px', marginLeft: '30px' }}>กำหนดภาระงาน</h1>
                        </center>
                        <div style={{ marginLeft: '30%', marginBottom: '20px' }}>

                            <form onSubmit={formik.handleSubmit}>
                                <Row>
                                    <Col xl={11}>
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
                                            min={currentDate}
                                        />
                                    </Col>
                                    <Col xl={1}>
                                        {formik.touched.date && formik.errors.date ? (
                                            <div style={{ marginLeft: '-150px', marginTop: '20px' }} className="error">{formik.errors.date}</div>
                                        ) : null} <br />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xl={11}>
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
                                    </Col>
                                    <Col xl={1}>
                                        {formik.touched.time && formik.errors.time ? (
                                            <div style={{ marginLeft: '-150px', marginTop: '5px' }} className="error">{formik.errors.time}</div>
                                        ) : null}<br />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xl={11}>
                                        <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="od">OD :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <Input
                                            style={{ fontSize: '18px' }}
                                            id="od"
                                            name="od"
                                            type="number"
                                            min="0"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.od}
                                        />
                                    </Col>
                                    <Col xl={1}>
                                        {formik.touched.od && formik.errors.od ? (
                                            <div style={{ marginLeft: '-150px', marginTop: '20px' }} className="error">{formik.errors.od}</div>
                                        ) : null} <br />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xl={11}>
                                        <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="tmd">TMD :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <Input
                                            style={{ fontSize: '18px' }}
                                            id="tmd"
                                            name="tmd"
                                            type="number"
                                            min="0"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.tmd}
                                        />
                                    </Col>
                                    <Col xl={1}>
                                        {formik.touched.tmd && formik.errors.tmd ? (
                                            <div style={{ marginLeft: '-150px', marginTop: '20px' }} className="error">{formik.errors.tmd}</div>
                                        ) : null} <br />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xl={11}>
                                        <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="oper">OPER :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <Input
                                            style={{ fontSize: '18px' }}
                                            id="oper"
                                            name="oper"
                                            type="number"
                                            min="0"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.oper}
                                        />
                                    </Col>
                                    <Col xl={1}>
                                        {formik.touched.oper && formik.errors.oper ? (
                                            <div style={{ marginLeft: '-150px', marginTop: '20px' }} className="error">{formik.errors.oper}</div>
                                        ) : null} <br />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xl={11}>
                                        <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="perio">PERIO :&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <Input
                                            style={{ fontSize: '18px' }}
                                            id="perio"
                                            name="perio"
                                            type="number"
                                            min="0"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.perio}
                                        />
                                    </Col>
                                    <Col xl={1}>
                                        {formik.touched.perio && formik.errors.perio ? (
                                            <div style={{ marginLeft: '-150px', marginTop: '20px' }} className="error">{formik.errors.perio}</div>
                                        ) : null} <br />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xl={11}>
                                        <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="sur">SUR :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <Input
                                            style={{ fontSize: '18px' }}
                                            id="sur"
                                            name="sur"
                                            type="number"
                                            min="0"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.sur}
                                        />
                                    </Col>
                                    <Col xl={1}>
                                        {formik.touched.sur && formik.errors.sur ? (
                                            <div style={{ marginLeft: '-150px', marginTop: '20px' }} className="error">{formik.errors.sur}</div>
                                        ) : null} <br />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xl={11}>
                                        <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="prosth">PROSTH :{" "}</label>
                                        <Input
                                            style={{ fontSize: '18px' }}
                                            id="prosth"
                                            name="prosth"
                                            type="number"
                                            min="0"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.prosth}
                                        />
                                    </Col>
                                    <Col xl={1}>
                                        {formik.touched.prosth && formik.errors.prosth ? (
                                            <div style={{ marginLeft: '-150px', marginTop: '20px' }} className="error">{formik.errors.prosth}</div>
                                        ) : null} <br />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xl={11}>
                                        <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="endo">ENDO :&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <Input
                                            style={{ fontSize: '18px' }}
                                            id="endo"
                                            name="endo"
                                            type="number"
                                            min="0"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.endo}
                                        />
                                    </Col>
                                    <Col xl={1}>
                                        {formik.touched.endo && formik.errors.endo ? (
                                            <div style={{ marginLeft: '-150px', marginTop: '20px' }} className="error">{formik.errors.endo}</div>
                                        ) : null} <br />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xl={11}>
                                        <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="pedo">PEDO :&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <Input
                                            style={{ fontSize: '18px' }}
                                            id="pedo"
                                            name="pedo"
                                            type="number"
                                            min="0"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.pedo}
                                        />
                                    </Col>
                                    <Col xl={1}>
                                        {formik.touched.pedo && formik.errors.pedo ? (
                                            <div style={{ marginLeft: '-150px', marginTop: '20px' }} className="error">{formik.errors.pedo}</div>
                                        ) : null} <br />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xl={11}>
                                        <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="xray">X-ray :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <Input
                                            style={{ fontSize: '18px' }}
                                            id="xray"
                                            name="xray"
                                            type="number"
                                            min="0"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.xray}
                                        />
                                    </Col>
                                    <Col xl={1}>
                                        {formik.touched.xray && formik.errors.xray ? (
                                            <div style={{ marginLeft: '-150px', marginTop: '20px' }} className="error">{formik.errors.xray}</div>
                                        ) : null} <br />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xl={11}>
                                        <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="om">OM :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <Input
                                            style={{ fontSize: '18px' }}
                                            id="om"
                                            name="om"
                                            type="number"
                                            min="0"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.om}
                                        />
                                    </Col>
                                    <Col xl={1}>
                                        {formik.touched.om && formik.errors.om ? (
                                            <div style={{ marginLeft: '-150px', marginTop: '20px' }} className="error">{formik.errors.om}</div>
                                        ) : null} <br />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col xl={11}>
                                        <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="ortho">ORTHO :&nbsp;&nbsp;</label>
                                        <Input
                                            style={{ fontSize: '18px' }}
                                            id="ortho"
                                            name="ortho"
                                            type="number"
                                            min="0"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.ortho}
                                        />
                                    </Col>
                                    <Col xl={1}>
                                        {formik.touched.ortho && formik.errors.ortho ? (
                                            <div style={{ marginLeft: '-150px', marginTop: '20px' }} className="error">{formik.errors.ortho}</div>
                                        ) : null} <br />
                                    </Col>
                                </Row>

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

                                <br />

                                <Button style={{ marginLeft: '100px', fontSize: '22px', backgroundColor: '#198CFF' }} className="But" type="submit">ยืนยัน</Button>
                            </form>
                        </div>
                    </StyledCreate>
                </Container>
            </div>
            {
                items.length != 0 ? (<div>
                    <ConfirmLimit excel={items} setLimit={setLimit} details={details} CloseReser={setIsOpen} /></div>) : (console.log("ยัง"))
            }


        </div>
    )
}
export default StudentAdminLimitCase;