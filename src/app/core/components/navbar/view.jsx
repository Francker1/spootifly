import { Container, Nav, Navbar } from 'react-bootstrap';

import { StyledUser } from './styles';

const NavbarView = ({ user }) => {
  return (
    <Navbar expand="md">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <StyledUser>
              {user ? (
                <p style={{ color: 'white' }}>Howdy, {user?.display_name}</p>
              ) : (
                <a href="/">Login</a>
              )}
            </StyledUser>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarView;
