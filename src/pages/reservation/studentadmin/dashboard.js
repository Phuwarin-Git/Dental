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

// หา Sumary ของแต่ละ case ใน details ของแต่ละวันก่อน
//fillter details เพื่อใช้ดู date time แล้วก็ มาเทียบกับ limit case

const StudentAdminDashboard = () => {

    const { user, limit, setLimit } = useContext(AuthContext);
    const [searchDate, setSearchDate] = useState([]);
    const [page, setPage] = useState([]);
    const [firstPage, setFirstPage] = useState(true);
    const [allPage, setAll] = useState([]);
    const [listPage, setList] = useState([]);
    const [current, setCurrent] = useState();


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
        // http://selab.mfu.ac.th:8318/limitcase/find/all
        axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            console.log("Limit :", item.data)
            setCurrent(1)
            if (item.data.length < 10) {
                setPage(item.data)
            } else {
                setPage([item.data[0], item.data[1], item.data[2], item.data[3], item.data[4], item.data[5], item.data[6], item.data[7], item.data[8], item.data[9]])
            }
            if ((item.data.length) % 10 !== 0) {
                let test = ((item.data.length) / 10)
                // console.log("test :", test)
                let realLength = Math.trunc(test) + 1;
                // console.log("test2 :", realLength)
                setAll(realLength)
            } else {
                setAll((item.data.length) / 10)
            }
            return setLimit(item.data);
        });
    }


    async function onChangeSearch(e) {
        await axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            console.log("new Limit ==> :", item.data)
            return setPage([item.data[0], item.data[1], item.data[2], item.data[3], item.data[4], item.data[5], item.data[6], item.data[7], item.data[8], item.data[9]])
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
        setFirstPage(true)
        await axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
            console.log("First limit ==> :", item.data)
            setCurrent(1)
            return setPage([item.data[0], item.data[1], item.data[2], item.data[3], item.data[4], item.data[5], item.data[6], item.data[7], item.data[8], item.data[9]])
        });
    }

    async function changePage(getpage) {
        setCurrent(getpage)
        console.log("Chage to :", getpage)
        let changeTo = (getpage - 1) * 10;
        setFirstPage(false)
        if (getpage === allPage) {
            await axios.get("http://localhost:3000/limitcase/find/all").then((item) => {

                if (item.data.length % 10 === 0) {
                    return setPage([item.data[0 + changeTo], item.data[1 + changeTo], item.data[2 + changeTo], item.data[3 + changeTo], item.data[4 + changeTo], item.data[5 + changeTo], item.data[6 + changeTo], item.data[7 + changeTo], item.data[8 + changeTo], item.data[9 + changeTo]])
                } else {
                    let mod = item.data.length % 10
                    console.log("mod :", mod)
                    let a = [];
                    for (let i = 1; i < mod + 1; i++) {
                        a.push(i + changeTo)
                    }
                    setPage([]);
                    let x = [];
                    for (let i = 0; i < mod; i++) {
                        x.push(item.data[a[i] - 1])
                    }
                    setPage(x)
                }
            });
        } else {
            axios.get("http://localhost:3000/limitcase/find/all").then((item) => {
                console.log("new Limit ==> :", item.data)
                return setPage([item.data[0 + changeTo], item.data[1 + changeTo], item.data[2 + changeTo], item.data[3 + changeTo], item.data[4 + changeTo], item.data[5 + changeTo], item.data[6 + changeTo], item.data[7 + changeTo], item.data[8 + changeTo], item.data[9 + changeTo]])
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
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/StudentAdminLimitCase">การจำกัดงาน</Nav.Link>
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
                        <label style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px', }}>ค้นหาวันที่ : </label>

                        <input
                            style={{ fontSize: '18px' }}
                            type="date"
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
                                <td className='tdStudent' style={{ color: checkColor(item.odyOd, item.od) }}>{item.odyOd}/{sum(item.odyOd, item.od)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyTmd, item.tmd) }}>{item.odyTmd}/{sum(item.odyTmd, item.tmd)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyOper, item.oper) }}>{item.odyOper}/{sum(item.odyOper, item.oper)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyPerio, item.perio) }}>{item.odyPerio}/{sum(item.odyPerio, item.perio)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odySur, item.sur) }}>{item.odySur}/{sum(item.odySur, item.sur)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyProsth, item.prosth) }}>{item.odyProsth}/{sum(item.odyProsth, item.prosth)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyEndo, item.endo) }}>{item.odyEndo}/{sum(item.odyEndo, item.endo)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyPedo, item.pedo) }}>{item.odyPedo}/{sum(item.odyPedo, item.pedo)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyXray, item.xray) }}>{item.odyXray}/{sum(item.odyXray, item.xray)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyOm, item.om) }}>{item.odyOm}/{sum(item.odyOm, item.om)}</td>
                                <td className='tdStudent' style={{ color: checkColor(item.odyOrtho, item.ortho) }}>{item.odyOrtho}/{sum(item.odyOrtho, item.ortho)}</td>
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