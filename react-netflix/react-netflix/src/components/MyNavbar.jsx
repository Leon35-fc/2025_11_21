import {Container, Nav, Navbar, Row, Col} from 'react-bootstrap'
import logo from '../assets/logo.png'

function MyNavbar() {
  return (
     <Navbar data-bs-theme="dark">
        <Container className='mx-0 my-1' fluid>
        <Row className="align-items-center justify-content-start">
        <Col xs={1}>
          <Navbar.Brand href="#home"><img src={logo} width="80%" alt="Logo"/></Navbar.Brand>
        </Col>
        <Col xs={10}>
          <Nav className="me-auto fw-bold">
            <Nav.Link href="#home" active>Home</Nav.Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#recently">Recently Added</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
          </Nav>
        </Col>
        <Col xs={1}>
          <Nav className="ms-auto justify-content-end fw-bold">
            <Nav.Link href="#search"><i className="bi bi-search"></i></Nav.Link>
            <Nav.Link href="#kids">KIDS</Nav.Link>
            <Nav.Link href="#notification"><i className="bi bi-bell"></i></Nav.Link>
            <Nav.Link href="#user"><i className="bi bi-person-circle"></i></Nav.Link>
          </Nav>
        </Col>
        </Row>
        </Container>
      </Navbar>
  );
}

export default MyNavbar