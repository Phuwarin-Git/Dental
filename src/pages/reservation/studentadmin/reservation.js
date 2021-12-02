import React, { useState, useContext, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
import Button from './reservationCss/ButtonRes'
import { BsSearch } from "react-icons/bs";
const StudentAdminReservation = () => {

    const { user } = useContext(AuthContext);
    const [allUnit, setAllUnit] = useState([]);
    const [details, setDetails] = useState([]);
    const [select, setSelect] = useState([]);
    const [searchDate, setSearchDate] = useState([]);
    const [unitNotnull, setNotnull] = useState([]);
    const [unitByFloor, setUnitByFloor] = useState([]);

    useEffect(() => {
        getDetails();
        getUnit();
        getUnitNotNull();
        // console.log("Unit จองแล้ว :", unitNotnull)
    }, [user])


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
            return setDetails(item.data);
        });
    }

    const getUnit = () => {
        axios.get("http://localhost:3000/unit/find/all").then((item) => {
            // console.log("Unit lists:", item.data)
            setUnitByFloor(item.data);
            return setAllUnit(item.data);
        });
    }

    function getUnitNotNull() {
        axios.get("http://localhost:3000/details/find/notnull").then((item) => {
            console.log("Unit not null ==>", item.data)
            return setNotnull(item.data);
        });
    }


    function handleOnChange(e) {
        console.log('Value :', e.target.value.split(" "))
        let first = e.target.value.split(" ")
        // console.log('id :', first[0])
        // console.log('unit :', first[1])
        setSelect([...select, { id: first[0], unit: first[1] }]);
        console.log('Seleted :', select)
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
                    // console.log("Test ==>", item.data)
                    return setDetails(item.data);
                });
            } else {
                console.log(confirmBox)
            }
        }
    }

    async function onChangeSearch(e) {
        await axios.get("http://localhost:3000/details/find/null").then((item) => {
            console.log("new Limit ==> :", item.data)
            return setDetails(item.data);
        });
        console.log("Change Date :", e.target.value)
        setSearchDate(e.target.value)
    }

    function Searching() {
        console.log("Searching :", searchDate)
        const checking = details.filter((item) => {
            return item.date === searchDate
        })
        console.log("Filter Date", checking)
        setDetails(checking)
    }

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
                <h1 style={{ color: '#198CFF', fontWeight: 'bold' }}>การเลือกที่นั่ง</h1>
                <label style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px', marginLeft: '20px' }}>ค้นหาวันที่ : </label>
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

                <Table striped bordered hover variant="" style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '97%', marginTop: '20px' }}>
                    <thead className='theadAdmin'>
                        <tr>
                            <th>วันที่</th>
                            <th>ช่วงเวลา</th>
                            <th>คลินิก</th>
                            <th>ประเภทงาน</th>
                            <th>ชื่อผู้ป่วย</th>
                            <th>ชื่อนักศึกษา</th>
                            <th>Unit ชั้นที่</th>
                            <th>Unit</th>
                        </tr>
                    </thead>
                    {details.map(item => {
                        {
                            let realFloor = allUnit;
                            function filterFloor(e) {
                                let floor = e.target.value;
                                // console.log(typeof floor, " floor :", floor)
                                let getFloor = allUnit?.filter((item) => { return (item.unit_floor === floor) })
                                console.log(getFloor)
                                setUnitByFloor(getFloor)
                                return realFloor = getFloor;
                            }

                            return <tbody key={item.id}>
                                <tr>
                                    <td className='tdStudent'>{item.date}</td>
                                    <td className='tdStudent'>{item.time}</td>
                                    <td className='tdStudent'>{item.clinic}</td>
                                    <td className='tdStudent'>{item.worktype}</td>
                                    <td className='tdStudent'>{item.patient}</td>
                                    <td className='tdStudent'>{item.name}</td>
                                    <td className='tdStudent' ><select style={{ backgroundColor: '#198CFF', color: 'white' }} onChange={filterFloor}>
                                        <option value="selected" selected="selected">เลือกชั้น</option>
                                        <option style={{ backgroundColor: 'white', color: 'black' }} value={"1"}>ชั้นที่ 1</option>
                                        <option style={{ backgroundColor: 'white', color: 'black' }} value={"2"}>ชั้นที่ 2</option>
                                        <option style={{ backgroundColor: 'white', color: 'black' }} value={"3"}>ชั้นที่ 3</option>
                                        <option style={{ backgroundColor: 'white', color: 'black' }} value={"4"}>ชั้นที่ 4</option>
                                    </select></td>
                                    <td className='tdStudent'>
                                        <select style={{ backgroundColor: '#198CFF', color: 'white' }} onChange={handleOnChange}>
                                            <option value="selected" selected="selected">เลือก Unit</option>
                                            {unitByFloor?.map(items => {
                                                if (items.unavailable_start_date === 'active') {
                                                    if (filterUnit(item.date, item.time, items.unit_code)) {
                                                        return <option
                                                            style={{ backgroundColor: '#c7c7c7', color: 'black' }}
                                                            value={item.id + " " + items.unit_code} disabled>
                                                            {items.unit_code}{" ถูกจองแล้ว"}
                                                        </option>
                                                    } else {
                                                        return <option
                                                            style={{ backgroundColor: 'white', color: 'black' }}
                                                            value={item.id + " " + items.unit_code} >
                                                            {items.unit_code}
                                                        </option>
                                                    }

                                                } else if (items.unavailable_start_date === 'inactive') {
                                                    return <option
                                                        style={{ backgroundColor: '#c7c7c7', color: 'black' }}
                                                        value={item.id + " " + items.unit_code} disabled>
                                                        {items.unit_code}{" ปิดใช้งาน"}
                                                    </option>
                                                }
                                            }
                                            )
                                            }
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        }
                    })}
                </Table>
                <Button style={{ fontWeight: 'bold', backgroundColor: '#198CFF' }} onClick={() => submitApprove()}>ยืนยัน</Button>
            </Container>
        </div>
    )
}
export default StudentAdminReservation;