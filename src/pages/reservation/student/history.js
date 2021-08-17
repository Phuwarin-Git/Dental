import { Nav, Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
const StudentHistory = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/reservation">Reservation</Nav.Link>
                        <Nav.Link href="/history">History</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/">Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <h1>Student History</h1>
        </div>
    )
}
export default StudentHistory;