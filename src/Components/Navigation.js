import {Navbar, Container, Nav, NavDropdown, Form, Button} from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" style={{top: "0"}}>
      <Container>
        <Navbar.Brand href="#">SMK INDONESIA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#home">Beranda</Nav.Link>
            <Nav.Link href="#about">Jurusan</Nav.Link>
            <Nav.Link href="#portfolio">Kegiatan</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="primary">Pencarian</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
