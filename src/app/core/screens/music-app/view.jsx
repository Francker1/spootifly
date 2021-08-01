import { useState, useEffect } from 'react';

import { getTokenFromUrl } from '../../config/spotify';

import { Container, Row } from 'react-bootstrap';
import Albums from '../../components/albums';
import Artists from '../../components/artists';
import NavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

import { StyledContent, StyledSidebar, StyledMainContent } from './styles';

const MusicPage = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      window.location.hash = '';
    }
  }, [token]);

  return (
    <Container fluid>
      <Row>
        <StyledSidebar md={2}>
          <Sidebar />
        </StyledSidebar>

        <StyledMainContent md={{ span: 10, offset: 2 }}>
          {token ? <p style={{ color: 'var(--white-color)' }}>Hola!</p> : <a href="/">login</a>}

          <StyledContent>
            <Artists />
            <Albums />
          </StyledContent>
        </StyledMainContent>
      </Row>
    </Container>
  );
};

export default MusicPage;
