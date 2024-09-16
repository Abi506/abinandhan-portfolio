import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className='p-4'> 
      <Container>
        <Navbar.Brand href="#home" className='nav-brand-name'>ABI NANDHAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto d-flex flex-direction justify-content-between">
            <Nav.Link href="#home" className='mr-5'>Home</Nav.Link>
            <Nav.Link href="#about" className='mr-3'>About</Nav.Link> 
            <Nav.Link href="#projects" className='mr-3'>Projects</Nav.Link> 
            <Nav.Link href="#contact">Contact</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;