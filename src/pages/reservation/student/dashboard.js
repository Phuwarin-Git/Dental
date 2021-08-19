import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
const StudentDashboard = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/reservation">Reservation</Nav.Link>
                        <Nav.Link as={Link} to="/history">History</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/">Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            <h1>Student dashboard</h1>
            <p>งานที่กำลังจะถึง</p>
            <Card
                style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto' }}
                className="mb-2"
            >
                <Card.Header style={{ backgroundColor: '#0067e6', color: 'white' }}>วันที่ : xxx</Card.Header>
                <Card.Body style={{ backgroundColor: '#1c82ff' }}>

                    <Card.Text>
                        <Card.Title>Clinic : xxx &nbsp;&nbsp; Unit : xxx </Card.Title>
                        <lable>ช่วงเวลา : xxx</lable>&nbsp;&nbsp;
                        <lable>ประเภทงาน : xxx</lable><br />
                        <lable>คนไข้ : xxx</lable><br />
                        <lable>อาจารย์ผู้ตรวจ : xxx</lable><br />


                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default StudentDashboard;