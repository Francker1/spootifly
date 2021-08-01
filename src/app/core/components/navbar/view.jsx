import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarView = ({ user }) => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/search">Buscar</Nav.Link>
            <div>
              {user ? (
                <p style={{ color: 'white' }}>Hola {user?.display_name}</p>
              ) : (
                <a href="/">Login</a>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarView;
