import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";
import { AuthContext } from '../../../App';
import axios from "axios";
const StudentLimt = () => {

    const { user } = useContext(AuthContext);
    const [limit, setLimit] = useState([]);

    useEffect(() => {
        getDetails();
        console.log("User :", user)
    }, [user])

    const getDetails = () => {
        axios.get("http://selab.mfu.ac.th:8318/limitcase/find/all").then((item) => {
            console.log("Limit :", item.data)
            return setLimit(item.data);
        });
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
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                        <Nav.Link style={{ color: '#32fcf6' }} as={Link}>Name : {user.first_name}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Student Limit</h1>
            <Table striped bordered hover variant="dark" style={{ marginLeft: 'auto', marginRight: 'auto', color: 'pink', maxWidth: '97%' }}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>OD</th>
                        <th>TMD</th>
                        <th>OPER</th>
                        <th>PERIO</th>
                        <th>SUR</th>
                        <th>RPOSTH</th>
                        <th>ENDO</th>
                        <th>X-RAY</th>
                        <th>OM</th>
                        <th>ORTHO</th>
                    </tr>
                </thead>
                {limit.map(item => {
                    return <tbody >
                        <tr>
                            <td style={{ color: 'white' }}>{item.date}</td>
                            <td style={{ color: 'white' }}>{item.time}</td>
                            <td style={{ color: 'white' }}>{item.od}</td>
                            <td style={{ color: 'white' }}>{item.tmd}</td>
                            <td style={{ color: 'white' }}>{item.oper}</td>
                            <td style={{ color: 'white' }}>{item.perio}</td>
                            <td style={{ color: 'white' }}>{item.sur}</td>
                            <td style={{ color: 'white' }}>{item.prosth}</td>
                            <td style={{ color: 'white' }}>{item.endo}</td>
                            <td style={{ color: 'white' }}>{item.xray}</td>
                            <td style={{ color: 'white' }}>{item.om}</td>
                            <td style={{ color: 'white' }}>{item.ortho}</td>
                        </tr>
                    </tbody>

                })}

            </Table>
        </div >
    )
}
export default StudentLimt;