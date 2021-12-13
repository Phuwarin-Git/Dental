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
import Selected from './reservationCss/SelectRes'
import StyledCreate from './reservationCss/ModalCreate';

import MaterialTable from "material-table";

const AdminUnit = () => {

    const { user } = useContext(AuthContext);
    const [unit, setUnit] = useState([]);
    const [items, setItems] = useState([]);
    const [searchDate, setSearchDate] = useState([]);
    const [editingIndex, setEditingIndex] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);

    const [data, setData] = useState([]);

    const [columns, setColumns] = useState([
        { title: 'ชื่อยูนิต', field: 'unit_code' },
        {
            title: 'ชั้น',
            field: 'unit_floor',
            lookup: { 1: '1', 2: '2', 3: '3', 4: '4' },
        },
        {
            title: 'สถานะ',
            field: 'unavailable_start_date',
            lookup: { active: 'ปกติ', inactive: 'ปิดใช้งาน' },
        },
    ]);



    useEffect(() => {
        getDetails();
        console.log("UNIT :", unit)
    }, [user])


    const getDetails = () => {
        axios.get("http://localhost:3000/unit/find/all").then((item) => {
            console.log("Unit :", item.data)

            let res = item.data;
            let filteredData = []
            res.map(item => {
                return filteredData.push({ unit_id: item.unit_id, unit_code: item.unit_code, unit_floor: item.unit_floor, unavailable_start_date: item.unavailable_start_date })
            })

            setData(filteredData);
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

    function checkActive(status) {
        if (status === "active") {
            return true;
        } else {
            return false;
        }
    }

    async function updatetheUnit(unit_id, unitCode, unitFloor, active) {
        let Code = { unit_code: unitCode }
        let Floor = { unit_floor: unitFloor }
        let Active = { unavailable_start_date: active }

        console.log("id :", unit_id, " code :", Code, " floor :", Floor, " status :", Active)
        await axios.put("http://localhost:3000/unit/updateUnit/" + unit_id, Code);
        await axios.put("http://localhost:3000/unit/updateUnit/" + unit_id, Floor);
        await axios.put("http://localhost:3000/unit/updateUnit/" + unit_id, Active);

        return getDetails();
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


    async function deleteUnit(unit_id) {
        console.log("Delete ID :", unit_id)
        await axios.delete("http://localhost:3000/unit/realdelete/" + unit_id);
        await axios.get("http://localhost:3000/unit/find/all").then((item) => {
            console.log("new Limit ==> :", item.data)
            return setUnit(item.data);
        });
        getDetails();
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    async function submitForm(unit_code, unit_floor, unavailable_start_date) {
        if (unit_code === undefined || unit_floor === undefined || unavailable_start_date === undefined) {
            alert("กรุณากรอกข้อมูลให้ครบถ้วน")
        } else {
            console.log("Unit Form :", unit_code, unit_floor);
            const ApiSet = ({ unit_code: unit_code, unit_floor: unit_floor, unavailable_start_date: unavailable_start_date })

            await axios.post("http://localhost:3000/unit/create", ApiSet).then((res) => {
                return console.log("Res Limit :", res)
            })
            await axios.get("http://localhost:3000/unit/find/all").then((item) => {
                console.log("new Limit ==> :", item.data)
                return setUnit(item.data);
            });
            getDetails();
        }
    }

    const formik = useFormik({
        initialValues: {
            unit_code: '',
            unit_floor: '',
        },
        validationSchema: Yup.object({
            unit_code: Yup.string()
                .required('Required'),
            unit_floor: Yup.string()
                .required('Required'),

        }),
        onSubmit: values => {
            return submitForm(values.unit_code, values.unit_floor);
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
                        <Nav.Link style={{ color: '#424242', fontSize: '23px' }} as={Link} to="/AdminStudent">นักศึกษา</Nav.Link>
                        <Nav.Link style={{ color: '#424242', fontSize: '23px' }} as={Link} to="/AdminStudentAdmin">แอดมิน</Nav.Link>
                        <Nav.Link style={{ color: '#424242', fontSize: '23px' }} as={Link} to="/AdminTeacher">อาจารย์</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontSize: '23px' }} as={Link} to="/AdminUnit">เก้าอี้ทันตกรรม</Nav.Link>
                        <Nav.Link style={{ color: '#424242', fontSize: '23px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', fontSize: '23px', marginRight: '80px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br />

            <div className="PaddingDiv">
                <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', maxWidth: '1500px' }}>
                    <h1 style={{ color: '#0080ff', fontWeight: 'bold' }}>รายชื่อยูนิต</h1>

                    <Button style={{ marginBottom: '10px' }} onClick={() => openModal()}>เพิ่ม Unit</Button>

                    <MaterialTable
                        title="Mae Fah Luang University Dental Clinic"
                        columns={columns}
                        data={data}
                        options={{
                            exportButton: true,
                            pageSizeOptions: [5, 10, 20, 50, 100, 200],
                            actionsColumnIndex: -1,
                            headerStyle: {
                                fontFamily: "Mitr",
                                fontWeight: 'bold',
                                fontSize: '18px',
                            }, tableLayout: 'auto'
                        }}
                        localization={{
                            body: {
                                emptyDataSourceMessage: 'ไม่มีรายชื่อเก้าอี้',
                                addTooltip: 'เพิ่มเก้าอี้ทันตกรรม',
                                deleteTooltip: 'Löschen',
                                editTooltip: 'Bearbeiten',
                                filterRow: {
                                    filterTooltip: 'Filter'
                                },
                                editRow: {
                                    deleteText: 'ต้องการลบเก้าอี้ทันตกรรมนี้หรือไม่ ?',
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
                                        submitForm(newData.unit_code, newData.unit_floor, newData.unavailable_start_date)
                                        resolve();
                                    }, 1000)
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        console.log("newData :", newData)
                                        updatetheUnit(oldData.unit_id, newData.unit_code, newData.unit_floor, newData.unavailable_start_date)
                                        resolve();
                                    }, 1000)
                                }),
                            onRowDelete: oldData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        deleteUnit(oldData.unit_id)
                                        resolve()
                                    }, 1000)
                                }),
                        }}
                    />


                    {/* <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '80%' }}>
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

                    </Table> */}
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
                            <Selected
                                style={{ fontSize: '18px' }}
                                id="unit_floor"
                                name="unit_floor"
                                type="number"
                                min="0"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.unit_floor}
                            >
                                <option value="" label="เลือกชั้น" />
                                <option value="2" label="2" />
                                <option value="3" label="3" />
                                <option value="4" label="4" />
                            </Selected>
                            {formik.touched.unit_floor && formik.errors.unit_floor ? (
                                <div className="error">{formik.errors.unit_floor}</div>
                            ) : null} <br />


                            {/* <label style={{ fontWeight: 'bold', fontSize: '20px' }} htmlFor="tmd">ประเภท :&nbsp;&nbsp;&nbsp;&nbsp;</label>
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
                            ) : null} <br /> */}


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