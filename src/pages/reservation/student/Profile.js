import Navbar from 'react-bootstrap/Navbar'
import { Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
const StudentProfile = () => {

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
            <h1>Student Profile</h1>
        </div>
    )
}
export default StudentProfile;