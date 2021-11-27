import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import ProgressBar from 'react-bootstrap/ProgressBar'
import axios from "axios";
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';


const TeacherDashboard = () => {
    const { user } = useContext(AuthContext);
    const [details, setDetails] = useState([]);
    const [year2, setYear2] = useState();
    const [year3, setYear3] = useState();
    const [year4, setYear4] = useState();
    const [year5, setYear5] = useState();


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
            return setDetails(item.data);
        });
    }


    function checkYear() {
        let a = details.filter((item) => {
            return (item.studentyear === "2")
        })
        console.log("a :", a)
        let b = details.filter((item) => {
            return (item.studentyear === "3")
        })
        console.log("b :", b)
        let c = details.filter((item) => {
            return (item.studentyear === "4")
        })
        console.log("c :", c)
        let d = details.filter((item) => {
            return (item.studentyear === "5")
        })
        console.log("d :", d)

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
                        <Nav.Link style={{ color: '#E05701', fontWeight: 'bold', fontSize: '20px' }} as={Link}>ชื่อผู้ใช้งาน : {user.first_name}</Nav.Link>
                        <Nav.Link style={{ borderRadius: '10px', color: '#0080ff', marginLeft: '350px', fontWeight: 'bold', fontSize: '18px' }} as={Link} to="/">ออกจากระบบ</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <Container style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px', minHeight: '700px', minWidth: '1500px' }}>
                <h1 style={{ color: '#198CFF' }}>จำนวนนักศึกษาที่รออนุมัติ</h1><br />
                <div style={{ width: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                    <label>นักศึกษาชั้นปีที่ 2 จำนวน {year2} คน</label>
                    <ProgressBar striped variant="success" now={year2 * 10} label={year2} /><br />
                    <label>นักศึกษาชั้นปีที่ 3 จำนวน {year3} คน</label>
                    <ProgressBar striped variant="info" now={year3 * 10} label={year3} /><br />
                    <label>นักศึกษาชั้นปีที่ 4 จำนวน {year4} คน</label>
                    <ProgressBar striped variant="warning" now={year4 * 10} label={year4} /><br />
                    <label>นักศึกษาชั้นปีที่ 5 จำนวน {year5} คน</label>
                    <ProgressBar striped variant="danger" now={year5 * 10} label={year5} />
                </div>
            </Container>

        </div >
    )
}
export default TeacherDashboard;