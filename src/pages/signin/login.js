import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../App";
import axios from "axios";
import './loginstyle.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../reservation/image/maefahluang1.jpg';
import image2 from '../reservation/image/maefahluang2.jpg';
import image3 from '../reservation/image/imagedetal3.jpg';
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
// import  image4  from '../reservation/image/imagedetal4.jpg';
//User ควรเป็น Email
//Password ควรเป็น ID

const Login = () => {
    const history = useHistory();
    const { user, setUser, setLoginStatus } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState([]);

    function usernameOnChange(e) {
        setUsername(e.target.value)

    } function passwordOnChange(e) {
        setPassword(e.target.value)
    }

    useEffect(() => {
        getDetails();
    }, [user])

    const getDetails = () => {
        axios.get("http://localhost:3000/name/find/all").then((item) => {
            // console.log("name :", item.data)
            return setAuth(item.data)
        });
    }

    function checkAuth(e) {
        e.preventDefault();
        const checkAu = auth.filter((item) => {
            return (item.email === username && item.student_id === password)
        })
        if (checkAu.length === 1) {
            alert("เข้าสู่ระบบสำเร็จ")
            console.log("Check :", checkAu)
            onSubmitForm(checkAu)
            // return console.log("Username :", username, " Password :", password)
        } else {
            return alert("E-mail หรือ รหัสผ่านผิด, กรุณากรอกใหม่อีกครั้ง")
        }

    }

    function onSubmitForm(details) {
        setLoginStatus(true)
        setUser(details[0])

        if (details[0].role === "student") {
            // console.log("Role :", details[0].role)
            return history.push('/StudentDashboard')
        } else if (details[0].role === "teacher") {
            // console.log("Role :", details[0].role)
            return history.push('/TeacherDashboard')
        } if (details[0].role === "studentadmin") {
            // console.log("Role :", details[0].role)
            return history.push('/StudentAdminDashboard')
        } if (details[0].role === "admin") {
            return history.push('/AdminUser')
        } if (details[0].role === "AdminTool") {
            return history.push('/Adminconfirm')
        }

    }

    return (

        <div style={{ background: '#198CFF' }}>
            
            <nav style={{ background: '#ffff' }}>
                <div style={{ color: '#ffff', paddingLeft: '50px', paddingTop: '10px', paddingBottom: '10px' }}>
                    <h1 class="text-justify">Mae Fah Luang University Dental Clinic</h1>
                </div>
            </nav>

        
            <Navbar style={{ background: '#198CFF', paddingBottom: '5%' }} >
            </Navbar>
                <Container>
                <h1 class="text-light" style={{paddingLeft:'50px'}}> MFU Dental Unit Reservation</h1>
                    <Row>
                        <Col xs={8} md={4} xl={6} style={{ maxWidth: '30%' }} >


                       

                            {/* <AliceCarousel autoPlay autoPlayInterval="2000" >
                                <p><img style={{ maxHeight: '600px' }} src={image1} classname="sliderimg" /></p>
                                <p><img style={{ maxHeight: '600px' }} src={image2} classname="sliderimg" /></p>
                                <p><img style={{ maxHeight: '600px' }} src={image3} classname="sliderimg" /></p>
                            </AliceCarousel> */}
                        </Col>
                        <Col xs={6} md={4} style={{ marginLeft: '6%', marginTop: '10%' }}>
                            <div class="content" style={{backgroundColor:'white'}} >
                                <form onSubmit={checkAuth}>
                                    <h4 style={{ fontWeight: 'bold', fontSize: '25px',marginBottom:'20px', marginRight:'190px' }}>Sign in</h4>
                                    <p style={{ fontSize: '15px', marginLeft:'5px', marginBottom:'35px' }}>Sign in to continue to our web application</p>
                                    <input style={{ fontSize: '20px',borderColor:'#198CFF',marginBottom:'30px',width:'300px',borderRadius:'5px' }} placeholder="username" onChange={usernameOnChange}></input><br />
                                    <input style={{ fontSize: '20px',borderColor:'#198CFF',width:'300px',borderRadius:'5px' }}  type="password"  placeholder="password" onChange={passwordOnChange}></input><br /><br />
                                    <button style={{ fontSize: '20px', width:'300px',marginTop:'20px', backgroundColor:'#198CFF',paddingTop:'10px',paddingBlock:'10px',borderColor:'white',borderRadius:'10px'}} type="submit" class="text-light">Login</button>
                                </form>
                            </div>
                            
                        </Col>
                    </Row>
                </Container> 
                <br/>   
                <br/>      
                <br/>   
                <br/>   
                <br/>    
            </div>
            
    )
}
export default Login;