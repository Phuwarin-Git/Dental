import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import ProgressBar from 'react-bootstrap/ProgressBar'
import axios from "axios";
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import { BsSearch } from "react-icons/bs";


const TeacherDashboard = () => {
    const { user, currentDate, currentMonth } = useContext(AuthContext);
    const [details, setDetails] = useState([]);
    const [searchDate, setSearchDate] = useState([]);
    const [detailsFordate, setDetailsForDate] = useState([]);
    const [year2, setYear2] = useState();
    const [year3, setYear3] = useState();
    const [year4, setYear4] = useState();
    const [year5, setYear5] = useState();
    const [year2details, setYear2details] = useState();
    const [year3details, setYear3details] = useState();
    const [year4details, setYear4details] = useState();
    const [year5details, setYear5details] = useState();


    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    useEffect(() => {
        checkYear();
        console.log("year 2 :", year2, " year 3 :", year3, " year 4 :", year4, " year 5 :", year5)
    }, [details])


    async function getDetails() {
        return await axios.get("http://localhost:3000/details/find/teachernull").then((item) => {
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
            return setDetails(filterMonth);
        });
    }

    async function onChangeSearch(e) {

        await axios.get("http://localhost:3000/details/find/teachernull").then((item) => {
            console.log("new Limit ==> :", item.data)
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
            return setDetailsForDate(filterMonth);
        });

        console.log("Change Date :", e.target.value)
        setSearchDate(e.target.value)
    }

    function Searching() {
        console.log("Searching :", searchDate)
        const checking = detailsFordate.filter((item) => {
            return item.date === searchDate
        })
        console.log("Filter Date", checking)
        setDetails(checking)
    }

    function eliminateDuplicates(arr) {
        console.log("Clinic List ==>", arr)
        var i,
            len = arr.length,
            out = [],
            obj = {};

        for (i = 0; i < len; i++) {
            obj[arr[i]] = 0;
        }
        for (i in obj) {
            out.push(i);
        }
        console.log("After sort :", out)
        return out;
    }

    function findClinic(data) {
        let Arr = [];
        for (let i = 0; i < data.length; i++) {
            let set = data[i].clinic
            Arr.push(set);
        }
        return Arr;
    }


    function checkYear() {
        let a = details.filter((item) => {
            return (item.studentyear === "2")
        })
        let arrA = findClinic(a)
        // console.log(arrA)
        setYear2details(eliminateDuplicates(arrA))

        let b = details.filter((item) => {
            return (item.studentyear === "3")
        })
        let arrB = findClinic(b)
        // console.log(arrB)
        setYear3details(eliminateDuplicates(arrB))


        let c = details.filter((item) => {
            return (item.studentyear === "4")
        })
        let arrC = findClinic(c)
        // console.log(arrC)
        setYear4details(eliminateDuplicates(arrC))


        let d = details.filter((item) => {
            return (item.studentyear === "5")
        })
        let arrD = findClinic(d)
        // console.log(arrD)
        setYear5details(eliminateDuplicates(arrD))


        let aa = a.length;
        let bb = b.length;
        let cc = c.length;
        let dd = d.length;

        setYear2(aa);
        setYear3(bb);
        setYear4(cc);
        setYear5(dd);
    }

    return (
        <div style={{ backgroundColor: '#ededed', minHeight: '1080px' }}>
            {console.log("rerender")}
            <nav style={{ background: '#0080ff' }}>
                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>
                </div>
            </nav>
            <Navbar style={{ backgroundColor: 'white' }}>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/TeacherDashboard">หน้าหลัก</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/TeacherSelectWork">การเลือกตรวจงาน</Nav.Link>
                        <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/TeacherHistory">ประวัติ</Nav.Link>
                        {/* <Nav.Link style={{ color: '#0080ff', fontWeight: 'bold', fontSize: '20px' }} as={Link} to="/TeacherProfile">บัญชี</Nav.Link> */}
                        <Nav.Link style={{ color: '#424242', fontWeight: 'bold', fontSize: '20px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', marginLeft: '350px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minHeight: '700px', minWidth: '1500px' }}>
                <h1 style={{ color: '#198CFF' }}>จำนวนนักศึกษาที่รออนุมัติ</h1>
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
                <div style={{ width: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <br />
                    <label style={{ fontSize: '18px' }}>นักศึกษาชั้นปีที่ 2 จำนวน {year2} คน</label>
                    <ProgressBar style={{ height: '30px', fontSize: '18px' }}>
                        {year2details?.map((item, index) => {
                            // return console.log("index :", item)
                            let a = ["primary", "secondary", "success", "warning", "danger", "info", "light", "dark"]
                            return <ProgressBar variant={a[index]} now={10} max={100} label={item} key={index} />
                        })}
                    </ProgressBar>
                    <label style={{ marginTop: '10px', fontSize: '18px' }}>นักศึกษาชั้นปีที่ 3 จำนวน {year3} คน</label>
                    <ProgressBar style={{ height: '30px', fontSize: '18px' }}>
                        {year3details?.map((item, index) => {
                            // return console.log("index :", item)
                            let a = ["primary", "secondary", "success", "warning", "danger", "info", "light", "dark"]
                            return <ProgressBar variant={a[index]} now={10} max={100} label={item} key={index} />
                        })}
                    </ProgressBar>
                    <label style={{ marginTop: '10px', fontSize: '18px' }}>นักศึกษาชั้นปีที่ 4 จำนวน {year4} คน</label>
                    <ProgressBar style={{ height: '30px', fontSize: '18px' }}>
                        {year4details?.map((item, index) => {
                            // return console.log("index :", item)
                            let a = ["primary", "secondary", "success", "warning", "danger", "info", "light", "dark"]
                            return <ProgressBar variant={a[index]} now={10} max={100} label={item} key={index} />
                        })}
                    </ProgressBar>
                    <label style={{ marginTop: '10px', fontSize: '18px' }}>นักศึกษาชั้นปีที่ 5 จำนวน {year5} คน</label>
                    <ProgressBar style={{ height: '30px', fontSize: '18px' }}>
                        {year5details?.map((item, index) => {
                            // return console.log("index :", item)
                            let a = ["primary", "secondary", "success", "warning", "danger", "info", "light", "dark"]
                            return <ProgressBar variant={a[index]} now={10} max={100} label={item} key={index} />
                        })}
                    </ProgressBar>
                </div>
            </Container >

        </div >
    )
}
export default TeacherDashboard;