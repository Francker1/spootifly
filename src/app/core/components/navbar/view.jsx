import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarView = ({ user }) => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div>
              {user ? (
                <p style={{ color: 'white' }}>Howdy, {user?.display_name}</p>
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
