import React, { useState, useContext, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
import Button from './reservationCss/ButtonRes'

import MaterialTable from "material-table";

const StudentAdminReservation = () => {

    const { user, currentDate, currentMonth } = useContext(AuthContext);
    const [allUnit, setAllUnit] = useState([]);
    const [details, setDetails] = useState([]);
    const [select, setSelect] = useState([]);
    const [searchDate, setSearchDate] = useState([]);
    const [unitNotnull, setNotnull] = useState([]);
    const [unitByFloor, setUnitByFloor] = useState([]);

    const [data, setData] = useState([]);


    useEffect(() => {
        getDetails();
        getUnit();
        // getUnitNotNull();
        // console.log("Unit จองแล้ว :", unitNotnull)
    }, [user])

    useEffect(() => {
        console.log("Seleted :", select)
    }, [select])


    const getDetails = () => {
        axios.get("http://localhost:3000/details/find/null").then((item) => {
            console.log("Null Unit :", item.data)

            for (let i in item.data) {
                let obj = {
                    ...item.data[i],
                    select: null
                }
                item.data[i] = obj
            }
            // console.log("Test ==>", item.data)

            let findMonth = item.data;
            let filterMonth = findMonth.filter((item) => {
                let a = item.date;
                let thisDate = currentDate.slice(8)
                let digitRealDate = (a).slice(8)
                let digitData = (a).slice(5, 7)
                let parsed = parseInt(digitData)
                return (parsed >= currentMonth && digitRealDate >= thisDate)
            })

            let filteredData = []
            filterMonth.map(item => {
                return filteredData.push({ id: item.id, uniqueID: item.uniqueID, name: item.name, year: item.studentyear, date: item.date, time: item.time, unit: item.unit, clinic: item.clinic, worktype: item.worktype, patient: item.patient, teacher: item.teacher, dn: item.dn, hn: item.hn, toolStatus: item.toolStatus })
            })
            setData(filteredData);

            return setDetails(filterMonth);
        });
    }

    const getUnit = () => {
        axios.get("http://localhost:3000/unit/find/all").then((item) => {
            // console.log("Unit lists:", item.data)
            // setUnitByFloor(item.data);
            return setAllUnit(item.data);
        });
    }

    // function getUnitNotNull() {
    //     axios.get("http://localhost:3000/details/find/notnull").then((item) => {
    //         console.log("Unit not null ==>", item.data)
    //         let findMonth = item.data;
    //         let filterMonth = findMonth.filter((item) => {
    //             let a = item.date;
    //             let thisDate = currentDate.slice(8)
    //             let digitRealDate = (a).slice(8)
    //             let digitData = (a).slice(5, 7)
    //             let parsed = parseInt(digitData)
    //             return (parsed >= currentMonth && digitRealDate >= thisDate)
    //         })
    //         return setNotnull(filterMonth);
    //     });
    // }


    //unit
    function handleOnChange(e) {
        console.log('Value :', e.target.value.split(" "))
        let first = e.target.value.split(" ")
        // console.log('id :', first[0])
        // console.log('unit :', first[1])
        setSelect([...select, { id: first[0], unit: first[1] }]);
    };



    async function submitApprove() {
        if (select.length === 0) {
            alert('กรุณาเลือก Unit')
        } else {
            let body = select;
            const confirmBox = window.confirm("ต้องการยืนยันการเลือกยูนิตหรือไม่")
            if (confirmBox == true) {
                console.log(confirmBox)
                await axios.put("http://localhost:3000/details/updateUnitSet/", body)
                console.log('Body data :', body)
                return await axios.get("http://localhost:3000/details/find/null").then((item) => {
                    console.log("Null Unit :", item.data)

                    for (let i in item.data) {
                        let obj = {
                            ...item.data[i],
                            select: null
                        }
                        item.data[i] = obj
                    }
                    let findMonth = item.data;
                    let filterMonth = findMonth.filter((item) => {
                        let a = item.date;
                        let thisDate = currentDate.slice(8)
                        let digitRealDate = (a).slice(8)
                        let digitData = (a).slice(5, 7)
                        let parsed = parseInt(digitData)
                        return (parsed >= currentMonth && digitRealDate >= thisDate)
                    })
                    setData(filterMonth)
                    return setDetails(filterMonth);
                });
            } else {
                console.log(confirmBox)
            }
        }
    }

    // async function onChangeSearch(e) {
    //     await axios.get("http://localhost:3000/details/find/null").then((item) => {
    //         console.log("new Limit ==> :", item.data)
    //         let findMonth = item.data;
    //         let filterMonth = findMonth.filter((item) => {
    //             let a = item.date;
    //             let thisDate = currentDate.slice(8)
    //             let digitRealDate = (a).slice(8)
    //             let digitData = (a).slice(5, 7)
    //             let parsed = parseInt(digitData)
    //             return (parsed >= currentMonth && digitRealDate >= thisDate)
    //         })
    //         return setDetails(filterMonth);
    //     });
    //     console.log("Change Date :", e.target.value)
    //     setSearchDate(e.target.value)
    // }

    // function Searching() {
    //     console.log("Searching :", searchDate)
    //     const checking = details.filter((item) => {
    //         return item.date === searchDate
    //     })
    //     console.log("Filter Date", checking)
    //     setDetails(checking)
    // }

    function filterUnit(date, time, unit) {
        // return console.log('Unit ==>', unit)
        let finding = unitNotnull?.filter((item) => { return (item.date === date && item.time === time) })
        let a = false;
        if (finding?.length != 0) {
            for (var i = 0; i < finding?.length; i++) {
                if (unit === finding[i]?.unit) {
                    // console.log("true :", finding[i].date, " Round", i, finding[i]?.unit)
                    a = true;

                } else {
                    // console.log("false :", finding[i].date, " Round", i, finding[i]?.unit)
                    a = false;

                }
                // console.log("Round", i, " date :", date, " length", finding?.length, " details :", finding[i]?.unit)
                return a;
            }
        } else {
            // console.log("else :", date, " ", finding.length)
            return a = false;
        }
    }




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
                        <Nav.Link style={{ color: '#0080ff', fontSize: '23px' }} as={Link} to="/StudentAdminReservation">เลือกที่นั่ง</Nav.Link>
                        <Nav.Link style={{ color: '#424242', fontSize: '23px' }} as={Link} to="/StudentAdminLimitCase">กำหนดภาระงาน</Nav.Link>
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
                <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minHeight: '700px', maxWidth: '1500px' }}>
                    <h1 style={{ color: '#198CFF', fontWeight: 'bold', marginBottom: '10px' }}>การเลือกที่นั่ง</h1>
                    {/* <label style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px', marginLeft: '20px' }}>ค้นหาวันที่ : </label>
                    <input
                        style={{ fontSize: '18px' }}
                        type="date"
                        min={currentDate}
                        class="searchTerm"
                        id="input_text"
                        placeholder="ค้นหาวันที่"
                        onChange={onChangeSearch}
                    >
                    </input>
                    <button onClick={() => Searching()} type="submit" class="searchButton">
                        <BsSearch />
                    </button> */}

                    <MaterialTable
                        title="Mae Fah Luang University Dental Clinic"
                        columns={[
                            {
                                title: 'วันที่', field: 'date', cellStyle: {
                                    minWidth: 140,
                                },
                            },
                            {
                                title: 'ช่วงเวลา', field: 'time', cellStyle: {
                                    minWidth: 125,
                                },
                            },
                            {
                                title: 'คลินิก', field: 'clinic', cellStyle: {
                                    minWidth: 30,
                                },
                            },
                            {
                                title: 'ประเภทงาน', field: 'worktype', cellStyle: {
                                    minWidth: 145,
                                },
                            },
                            {
                                title: 'คนไข้', field: 'patient', cellStyle: {
                                    minWidth: 220,
                                },
                            },
                            {
                                title: 'ชื่อนักศึกษา', field: 'name', cellStyle: {
                                    minWidth: 220,
                                },
                            },
                            {
                                title: 'Unit', field: 'selectionUnit', cellStyle: {
                                    minWidth: 50,
                                }, editable: false,
                                render: (rowData) =>
                                    rowData && (
                                        <select style={{ backgroundColor: '#198CFF', color: 'white', }} onChange={handleOnChange}>
                                            <option value="selected" selected="selected">เลือก Unit</option>
                                            {allUnit?.map(items => {
                                                if (items.unavailable_start_date === 'active') {
                                                    if (filterUnit(rowData.date, rowData.time, items.unit_code)) {
                                                        return <option
                                                            style={{ backgroundColor: '#c7c7c7', color: 'black' }}
                                                            value={rowData.id + " " + items.unit_code} disabled>
                                                            {items.unit_code}{" ถูกจองแล้ว"}
                                                        </option>
                                                    } else {
                                                        return <option
                                                            style={{ backgroundColor: 'white', color: 'black' }}
                                                            value={rowData.id + " " + items.unit_code} >
                                                            {items.unit_code}
                                                        </option>
                                                    }

                                                } else if (items.unavailable_start_date === 'inactive') {
                                                    return <option
                                                        style={{ backgroundColor: '#c7c7c7', color: 'black' }}
                                                        value={rowData.id + " " + rowData.unit_code} disabled>
                                                        {items.unit_code}{" ปิดใช้งาน"}
                                                    </option>
                                                }
                                            }
                                            )}
                                        </select>
                                    )
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
                                emptyDataSourceMessage: 'ไม่มีการจอง Unit',
                                addTooltip: 'Hinzufügen',
                                deleteTooltip: 'Löschen',
                                editTooltip: 'Bearbeiten',
                                filterRow: {
                                    filterTooltip: 'Filter'
                                },
                                editRow: {
                                    deleteText: 'Diese Zeile wirklich löschen?',
                                    cancelTooltip: 'Abbrechen',
                                    saveTooltip: 'Speichern'
                                }
                            },
                            grouping: {
                                placeholder: 'Spalten ziehen ...',
                                groupedBy: 'Gruppiert nach:'
                            },
                            header: {
                                actions: 'รายละเอียดการจอง'
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
                    />

                    <Button style={{ fontWeight: 'bold', backgroundColor: '#198CFF', marginTop: '10px' }} onClick={() => submitApprove()}>ยืนยัน</Button>
                </Container>
            </div>
        </div>
    )
}
export default StudentAdminReservation;