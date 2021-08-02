import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useMusicContextValue } from '../../helpers/AppContext';

import { getTokenFromUrl } from '../../config/spotify';

import MusicPage from './view';

const spotify = new SpotifyWebApi();

const MusicScreen = () => {
  const [dispatch] = useMusicContextValue();
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
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
      spotify.getPlaylist('37i9dQZF1E34Ucml4HHx1w').then((playlist) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: playlist,
        });
      });
    }
  }, []);

  return <MusicPage />;
};

export default MusicScreen;
