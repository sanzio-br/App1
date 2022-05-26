import { Container, Nav, Navbar } from 'react-bootstrap'
export default function Navigation() {
    return (
        <header>
            <Container>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/App1">App 1</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/App1">Home</Nav.Link>
                                <Nav.Link href="/App1/posts">Posts</Nav.Link>
                                <Nav.Link href="/">App 2</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </header>
    )
}