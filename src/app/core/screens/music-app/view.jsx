import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import { getTokenFromUrl } from '../../config/spotify';
import { useMusicContextValue } from '../../helpers/AppContext';

import { Container, Row } from 'react-bootstrap';
import Albums from '../../components/albums';
import Artists from '../../components/artists';
import NavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

import { StyledContent, StyledSidebar, StyledMainContent } from '../../../styles/theme';

const spotify = new SpotifyWebApi();

const MusicPage = () => {
  const [, dispatch] = useMusicContextValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });
    }
  });

  return (
    <Container fluid>
      <Row>
        <StyledSidebar md={2}>
          <Sidebar />
        </StyledSidebar>

        <StyledMainContent md={{ span: 10, offset: 2 }}>
          <NavBar />
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
