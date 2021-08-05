import { Container, Nav, Navbar } from 'react-bootstrap';

import { StyledHref } from '../../../styles/theme';
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
                <p style={{ color: 'white' }}>Hola, {user?.display_name}</p>
              ) : (
                <StyledHref href="/">Iniciar sesión</StyledHref>
              )}
            </StyledUser>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarView;
