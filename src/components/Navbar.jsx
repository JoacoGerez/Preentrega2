import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router';

function NavBar() {
  return (
    <> 
      <Navbar 
        bg="dark"
        data-bs-theme="dark"
        style={{
          position: 'fixed',    
          top: 0,               
          left: 0,              
          width: '100%',        
          zIndex: 1000,         
        }}
      >
        <Container>
          <Navbar.Brand to="/" as={Link}>Tienda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/beauty" as={Link}>beauty</Nav.Link>
            <Nav.Link to="/category/groceries" as={Link}>groceries</Nav.Link>
            <Nav.Link to="/category/fragrances" as={Link}>fragrances</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
