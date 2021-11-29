import React, { useContext, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../../App';
import axios from "axios";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { BsSearch } from "react-icons/bs";
import Pagination from 'react-bootstrap/Pagination'


const StudentLimt = ({ setIsOpen }) => {

    const { user } = useContext(AuthContext);
    const [limit, setLimit] = useState([]);
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

    useEffect(() => {
        console.log('details in this page :', page)
    }, [page])

    useEffect(() => {
        console.log('List page :', listPage)
    }, [listPage])

    useEffect(() => {
        console.log('list details :', page)
    }, [limit])


    const getDetails = () => {
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

    function openModal() {
        return setIsOpen(true);
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



    return (
        <div>
            <h1 style={{ color: '#198CFF', fontWeight: 'bold' }}>จำนวนภาระงาน</h1>
            <Row>
                <Col sm={10}>
                    <label style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px', marginLeft: '25%' }}>ค้นหาวันที่ : </label>
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
                    </button></Col>
                <Col sm={2}>
                    <Button onClick={() => openModal()} style={{ backgroundColor: '#198CFF', fontWeight: 'bold', marginLeft: '-30px', marginBottom: '-38px' }}>จองการทำงาน</Button>
                </Col>
            </Row>
            <Table
                striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%', marginTop: '20px' }}
            > <thead className='theadAdmin'>
                    <tr>
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
                {page?.map(item => {
                    return <tbody style={{ color: 'black' }}>
                        <tr>
                            <td className='tdStudent'>{item.date}</td>
                            <td className='tdStudent'>{item.time}</td>
                            <td className='tdStudent'>{item.od}</td>
                            <td className='tdStudent'>{item.tmd}</td>
                            <td className='tdStudent'>{item.oper}</td>
                            <td className='tdStudent'>{item.perio}</td>
                            <td className='tdStudent'>{item.sur}</td>
                            <td className='tdStudent'>{item.prosth}</td>
                            <td className='tdStudent'>{item.endo}</td>
                            <td className='tdStudent'>{item.pedo}</td>
                            <td className='tdStudent'>{item.xray}</td>
                            <td className='tdStudent'>{item.om}</td>
                            <td className='tdStudent'>{item.ortho}</td>
                        </tr>
                    </tbody>

                })}

            </Table>
            {firstPage === true ? <div style={{ marginLeft: '41%' }}>
                <Pagination>
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
            </div> : <div style={{ marginLeft: '41%' }}>
                <Pagination>
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
        </div >
    )
}
export default StudentLimt;