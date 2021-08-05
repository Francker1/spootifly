import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { Container, Row } from 'react-bootstrap';

import { useFetchData } from '../../hooks/useFetch';
import { getTokenFromUrl } from '../../helpers/main';
import { useMusicContextValue } from '../../helpers/AppContext';
import Albums from '../../components/albums';
import Artists from '../../components/artists';
import NavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import { types } from '../../domain/actions/actionTypes';

import { StyledContent, StyledSidebar, StyledMainContent } from '../../../styles/theme';

const spotify = new SpotifyWebApi();

const MusicPage = () => {
  const [{ token }, dispatch] = useMusicContextValue();
  const [stateReleases, stateTopArtists] = useFetchData(token);

  const { data: releases, loading: loadReleases } = stateReleases;
  const { data: artists, loading: loadArtists } = stateTopArtists;

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: types.SET_TOKEN,
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: types.SET_USER,
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
            {loadReleases ? (
              <p>Loading new releases...</p>
            ) : (
              <Albums albums={releases?.items} title={'Álbumes más escuchados'} />
            )}
            {loadArtists ? (
              <p>Loading top artists...</p>
            ) : (
              <Artists artists={artists} title={'Artistas Top 2020'} />
            )}
          </StyledContent>
        </StyledMainContent>
      </Row>
    </Container>
  );
};

export default MusicPage;
