import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
const StudentProfile = () => {

    const { user } = useContext(AuthContext);
    const [details, setDetials] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://selab.mfu.ac.th:8318/details/find/notnull").then((item) => {
            console.log("data :", item.data)
            return filterDetails(item.data);
        });
    }


    const filterDetails = (item) => {
        const res = item.filter((item) => {
            return (item.name === user)
        })
        setDetials(res);
        console.log("details :", res)
    }




    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/StudentDashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/StudentLimt">Limit</Nav.Link>
                        <Nav.Link as={Link} to="/StudentRes">Reservation</Nav.Link>
                        <Nav.Link as={Link} to="/StudentHistory">History</Nav.Link>
                        <Nav.Link as={Link} to="/StudentProfile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/ToothPage">Tooth</Nav.Link>
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        <Nav.Link style={{ color: '#32fcf6' }} as={Link}>Name : {user.first_name}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Student Profile</h1>
            {details.map((item) => {
                return <div key={item.id}>
                    <br />
                    <Card
                        style={{ width: '21rem', marginLeft: 'auto', marginRight: 'auto' }}
                        className="mb-2"
                    >
                        <Card.Header style={{ backgroundColor: '#d60000', color: 'white' }}> วันที่ : {item.date}</Card.Header>
                        <Card.Body style={{ backgroundColor: '#fa4141' }}>

                            <Card.Text>
                                <p style={{ color: 'yellow' }}>ต้องเปลี่ยน API เป็นของ name ของนี้ใช้ของ details </p>
                                <Card.Title>Name : {item.name} &nbsp;&nbsp; Year : {item.studentyear} </Card.Title>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            })}
        </div >
    )
}
export default StudentProfile;