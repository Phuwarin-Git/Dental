import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { AuthContext } from '../../../App';
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsSearch } from "react-icons/bs";
import Pagination from 'react-bootstrap/Pagination'
import MaterialTable from "material-table";

// หา Sumary ของแต่ละ case ใน details ของแต่ละวันก่อน
//fillter details เพื่อใช้ดู date time แล้วก็ มาเทียบกับ limit case

const StudentAdminDashboard = () => {

    const { user, limit, setLimit, currentDate, currentMonth } = useContext(AuthContext);
    const [searchDate, setSearchDate] = useState([]);
    const [page, setPage] = useState([]);
    const [firstPage, setFirstPage] = useState(true);
    const [allPage, setAll] = useState([]);
    const [listPage, setList] = useState([]);
    const [current, setCurrent] = useState();

    const [data, setData] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    useEffect(() => {
        console.log("Sum page :", allPage)
        let a = [];
        for (let i = 1; i < allPage + 1; i++) {
            a.push(i)
        }
        return setList(a)
    }, [allPage])

    const getDetails = () => {
        axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            // console.log("Limit :", item.data)
            setCurrent(1)
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
            return setLimit(filterMonth);

        });
    }


    async function onChangeSearch(e) {
        await axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            console.log("new Limit ==> :", item.data)
            let findMonth = item.data;
            let filterMonth = findMonth.filter((item) => {
                let a = item.date;
                let thisDate = currentDate.slice(8)
                let digitRealDate = (a).slice(8)
                let digitData = (a).slice(5, 7)
                let parsed = parseInt(digitData)
                return (parsed >= currentMonth && digitRealDate >= thisDate)
            })
            return setPage([filterMonth[0], filterMonth[1], filterMonth[2], filterMonth[3], filterMonth[4], filterMonth[5], filterMonth[6], filterMonth[7], filterMonth[8], filterMonth[9]])
        });
        console.log("Change Date :", e.target.value)
        setSearchDate(e.target.value)
    }

    function Searching() {
        console.log("Searching :", searchDate)
        const checking = limit.filter((item) => {
            return item.date === searchDate
        })
        console.log("Filter Date", checking)
        setPage(checking)
    }

    async function gotoFirstPage() {
        setCurrent(1)
        setFirstPage(true)
        await axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            console.log("new Limit ==> :", item.data)
            let findMonth = item.data;
            let filterMonth = findMonth.filter((item) => {
                let a = item.date;
                let thisDate = currentDate.slice(8)
                let digitRealDate = (a).slice(8)
                let digitData = (a).slice(5, 7)
                let parsed = parseInt(digitData)
                return (parsed >= currentMonth && digitRealDate >= thisDate)
            })
            return setPage([filterMonth[0], filterMonth[1], filterMonth[2], filterMonth[3], filterMonth[4], filterMonth[5], filterMonth[6], filterMonth[7], filterMonth[8], filterMonth[9]])
        });
    }

    async function changePage(getpage) {
        setCurrent(getpage)
        console.log("Chage to :", getpage)
        let changeTo = (getpage - 1) * 10;
        setFirstPage(false)
        if (getpage === allPage) {
            await axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
                // let theData = item.data;
                let findMonth = item.data;
                let filterMonth = findMonth.filter((item) => {
                    let a = item.date;
                    let thisDate = currentDate.slice(8)
                    let digitRealDate = (a).slice(8)
                    let digitData = (a).slice(5, 7)
                    let parsed = parseInt(digitData)
                    return (parsed >= currentMonth && digitRealDate >= thisDate)
                })

                if (filterMonth.length % 10 === 0) {
                    return setPage([filterMonth[0 + changeTo], filterMonth[1 + changeTo], filterMonth[2 + changeTo], filterMonth[3 + changeTo], filterMonth[4 + changeTo], filterMonth[5 + changeTo], filterMonth[6 + changeTo], filterMonth[7 + changeTo], filterMonth[8 + changeTo], filterMonth[9 + changeTo]])
                } else {
                    let mod = filterMonth.length % 10
                    // console.log("mod :", mod)
                    let a = [];
                    for (let i = 1; i < mod + 1; i++) {
                        a.push(i + changeTo)
                    }
                    setPage([]);
                    let x = [];
                    for (let i = 0; i < mod; i++) {
                        x.push(filterMonth[a[i] - 1])
                    }
                    setPage(x)
                }
            });
        } else {
            axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
                console.log("new Limit ==> :", item.data)
                let findMonth = item.data;
                let filterMonth = findMonth.filter((item) => {
                    let a = item.date;
                    let thisDate = currentDate.slice(8)
                    let digitRealDate = (a).slice(8)
                    let digitData = (a).slice(5, 7)
                    let parsed = parseInt(digitData)
                    return (parsed >= currentMonth && digitRealDate >= thisDate)
                })
                return setPage([filterMonth[0 + changeTo], filterMonth[1 + changeTo], filterMonth[2 + changeTo], filterMonth[3 + changeTo], filterMonth[4 + changeTo], filterMonth[5 + changeTo], filterMonth[6 + changeTo], filterMonth[7 + changeTo], filterMonth[8 + changeTo], filterMonth[9 + changeTo]])
            });
        }

    }

    function nextPage(page) {
        if (page > allPage) {
            console.log("This is last page")
            return;
        } else {
            return changePage(page)
        }
    }

    function previousPage(page) {
        if (page === 0 || page === 1) {
            console.log("This is first page")
            return gotoFirstPage();
        } else {
            return changePage(page)
        }
    }


    function sum(a, b) {
        let c = parseInt(b)
        // console.log("a :", typeof a, "c :", typeof c)
        return a + c;
    }


    function checkColor(Reserved, Sumcase) {
        let all = (parseInt(Reserved) + parseInt(Sumcase))
        if (parseInt(Reserved) === all) {
            return "red"
        }
    }

    function checkFont(caselimit) {
        if (caselimit === "0") {
            return "bold"
        }
    }

    return (
        <div style={{ backgroundColor: '#ededed', minHeight: '1080px' }}>
            <nav style={{ background: '#0080ff' }}>
                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>
                </div>
            </nav>
            <Navbar style={{ backgroundColor: 'white' }}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminReservation">เลือกที่นั่ง</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminLimitCase">กำหนดภาระงาน</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminHistory">ประวัติ</Nav.Link>
                        <Nav.Link style={{ color: '#424242', fontWeight: 'bold', fontSize: '18px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', marginLeft: '300px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

            <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minHeight: '700px', minWidth: '1500px' }}>
                <Row>
                    <Col style={{ marginLeft: 'auto', marginRight: 'auto' }} sm={10}>
                        <h1 style={{ color: '#198CFF', fontWeight: 'bold' }}>จำนวนภาระงานทั้งหมด</h1>
                        <label style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px', }}>ค้นหาวันที่ : </label>

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
                        </button>
                    </Col>
                </Row>


                <MaterialTable
                    title="Mae Fah Luang University Dental Clinic"
                    columns={[
                        {
                            title: 'วันที่', field: 'date', cellStyle: {
                                minWidth: 140,
                            },
                        },
                        {
                            title: 'เวลา', field: 'time', cellStyle: {
                                minWidth: 125,
                            },
                        },
                        {
                            title: 'OD', field: 'od', render: rowData => rowData.odyOd + "/" + sum(rowData.odyOd, rowData.od),
                            cellStyle: (cellValue, rowData) => {
                                return { color: checkColor(rowData.odyOd, rowData.od), fontWeight: checkFont(rowData.od) }
                            }
                        },
                        {
                            title: 'TMD', field: 'tmd', render: rowData => rowData.odyTmd + "/" + sum(rowData.odyTmd, rowData.tmd),
                            cellStyle: (cellValue, rowData) => {
                                return { color: checkColor(rowData.odyTmd, rowData.tmd), fontWeight: checkFont(rowData.tmd) }
                            }
                        },
                        {
                            title: 'OPER', field: 'oper', render: rowData => rowData.odyOper + "/" + sum(rowData.odyOper, rowData.oper),
                            cellStyle: (cellValue, rowData) => {
                                return { color: checkColor(rowData.odyOper, rowData.oper), fontWeight: checkFont(rowData.oper) }
                            }
                        },
                        {
                            title: 'PERIO', field: 'perio', render: rowData => rowData.odyPerio + "/" + sum(rowData.odyPerio, rowData.perio),
                            cellStyle: (cellValue, rowData) => {
                                return { color: checkColor(rowData.odyPerio, rowData.perio), fontWeight: checkFont(rowData.perio) }
                            }
                        },
                        {
                            title: 'SUR', field: 'sur', render: rowData => rowData.odySur + "/" + sum(rowData.odySur, rowData.sur),
                            cellStyle: (cellValue, rowData) => {
                                return { color: checkColor(rowData.odySur, rowData.sur), fontWeight: checkFont(rowData.sur) }
                            }
                        },
                        {
                            title: 'PROSTH', field: 'prosth', render: rowData => rowData.odyProsth + "/" + sum(rowData.odyProsth, rowData.prosth),
                            cellStyle: (cellValue, rowData) => {
                                return { color: checkColor(rowData.odyProsth, rowData.prosth), fontWeight: checkFont(rowData.prosth) }
                            }
                        },
                        {
                            title: 'ENDO', field: 'endo', render: rowData => rowData.odyEndo + "/" + sum(rowData.odyEndo, rowData.endo),
                            cellStyle: (cellValue, rowData) => {
                                return { color: checkColor(rowData.odyEndo, rowData.endo), fontWeight: checkFont(rowData.endo) }
                            }
                        },
                        {
                            title: 'PEDO', field: 'pedo', render: rowData => rowData.odyPedo + "/" + sum(rowData.odyPedo, rowData.pedo),
                            cellStyle: (cellValue, rowData) => {
                                return { color: checkColor(rowData.odyPedo, rowData.pedo), fontWeight: checkFont(rowData.pedo) }
                            }
                        },
                        {
                            title: 'X-RAY', field: 'xray', render: rowData => rowData.odyXray + "/" + sum(rowData.odyXray, rowData.xray),
                            cellStyle: (cellValue, rowData) => {
                                return { color: checkColor(rowData.odyXray, rowData.xray), fontWeight: checkFont(rowData.xray) }
                            }
                        },
                        {
                            title: 'OM', field: 'om', render: rowData => rowData.odyOm + "/" + sum(rowData.odyOm, rowData.om),
                            cellStyle: (cellValue, rowData) => {
                                return { color: checkColor(rowData.odyOm, rowData.om), fontWeight: checkFont(rowData.om) }
                            }
                        },
                        {
                            title: 'ORTHO', field: 'ortho', render: rowData => rowData.odyOrtho + "/" + sum(rowData.odyOrtho, rowData.ortho),
                            cellStyle: (cellValue, rowData) => {
                                return { color: checkColor(rowData.odyOrtho, rowData.ortho), fontWeight: checkFont(rowData.ortho) }
                            }
                        },
                    ]}
                    data={data}
                    options={{
                        headerStyle: {
                            fontFamily: "Mitr",
                            fontWeight: 'bold',
                            fontSize: '18px',
                        }, tableLayout: 'auto'
                    }}
                    localization={{
                        body: {
                            emptyDataSourceMessage: 'ภาระงานไม่ได้ถูกกำหนดไว้',
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

                <Table striped bordered hover variant="" style={{ marginTop: '30px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}>
                    <thead className='theadAdmin'>
                        <tr style={{ fontSize: '18px' }}>
                            <th>วันที่</th>
                            <th>เวลา</th>
                            <th>OD</th>
                            <th>TMD</th>
                            <th>OPER</th>
                            <th>PERIO</th>
                            <th>SUR</th>
                            <th>PROSTH</th>
                            <th>ENDO</th>
                            <th>PEDO</th>
                            <th>X-RAY</th>
                            <th>OM</th>
                            <th>ORTHO</th>
                        </tr>
                    </thead>
                    {page.map(item => {
                        return <tbody key={item.limit_id}>
                            {console.log("-----rerender----")}
                            <tr>
                                <td className='tdStudent'>{item.date}</td>
                                <td className='tdStudent'>{item.time}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyOd, item.od), fontWeight: checkFont(item.od) }}>{item.odyOd}/{sum(item.odyOd, item.od)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyTmd, item.tmd), fontWeight: checkFont(item.tmd) }}>{item.odyTmd}/{sum(item.odyTmd, item.tmd)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyOper, item.oper), fontWeight: checkFont(item.oper) }}>{item.odyOper}/{sum(item.odyOper, item.oper)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyPerio, item.perio), fontWeight: checkFont(item.perio) }}>{item.odyPerio}/{sum(item.odyPerio, item.perio)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odySur, item.sur), fontWeight: checkFont(item.sur) }}>{item.odySur}/{sum(item.odySur, item.sur)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyProsth, item.prosth), fontWeight: checkFont(item.prosth) }}>{item.odyProsth}/{sum(item.odyProsth, item.prosth)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyEndo, item.endo), fontWeight: checkFont(item.endo) }}>{item.odyEndo}/{sum(item.odyEndo, item.endo)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyPedo, item.pedo), fontWeight: checkFont(item.pedo) }}>{item.odyPedo}/{sum(item.odyPedo, item.pedo)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyXray, item.xray), fontWeight: checkFont(item.xray) }}>{item.odyXray}/{sum(item.odyXray, item.xray)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyOm, item.om), fontWeight: checkFont(item.om) }}>{item.odyOm}/{sum(item.odyOm, item.om)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyOrtho, item.ortho), fontWeight: checkFont(item.ortho) }}>{item.odyOrtho}/{sum(item.odyOrtho, item.ortho)}</td>
                            </tr>
                        </tbody>
                    })}
                </Table>
                {firstPage === true ? <div >
                    <Pagination className="justify-content-center">
                        <Pagination.First disabled />
                        <Pagination.Prev disabled />
                        <Pagination.Item active>{1}</Pagination.Item>
                        {listPage.map(item => {
                            if (item !== 1) {
                                return <Pagination.Item onClick={() => changePage(item)}>{item}</Pagination.Item>
                            } else
                                return
                        })}
                        <Pagination.Next onClick={() => nextPage(current + 1)} />
                        <Pagination.Last onClick={() => changePage(allPage)} />
                    </Pagination>
                </div> : <div>
                    <Pagination className="justify-content-center">
                        <Pagination.First onClick={() => gotoFirstPage()} />
                        <Pagination.Prev onClick={() => previousPage(current - 1)} />
                        <Pagination.Item onClick={() => gotoFirstPage()}>{1}</Pagination.Item>
                        {listPage.map(item => {
                            if (item !== 1) {
                                if (item === current) {
                                    return <Pagination.Item onClick={() => changePage(item)} active>{item}</Pagination.Item>
                                } else {
                                    return <Pagination.Item onClick={() => changePage(item)}>{item}</Pagination.Item>
                                }

                            } else
                                return
                        })}
                        {/* <Pagination.Ellipsis /> */}
                        <Pagination.Next onClick={() => nextPage(current + 1)} />
                        <Pagination.Last onClick={() => changePage(allPage)} />
                    </Pagination>
                </div>}
            </Container>
        </div >
    )
}
export default StudentAdminDashboard;