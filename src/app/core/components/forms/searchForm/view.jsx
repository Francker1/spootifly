import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useMusicContextValue } from '../../../helpers/AppContext';

import Artists from '../../../components/artists';
import Albums from '../../../components/albums';
import TracksList from '../../../components/tracks';

import { StyledFormContainer, StyledInfoSearched } from './styles';

const spotify = new SpotifyWebApi();

const AddValue = () => {
  const [{ token }] = useMusicContextValue();

  const [inputValue, setInputValue] = useState('');
  const [resultsArtists, setResultsArtists] = useState([]);
  const [resultsAlbums, setResultsAlbums] = useState([]);
  const [resultsTracks, setResultsTracks] = useState([]);

  useEffect(() => {
    if (!token) return;
    spotify.setAccessToken(token);
  }, [token]);

  useEffect(() => {
    if (!inputValue) {
      setResultsArtists([]);
      setResultsAlbums([]);
      setResultsTracks([]);
      return;
    }
    if (!token) return;
  }, [inputValue, token]);

  const handleSubmit = (e) => {
    e.preventDefault();

    spotify.searchArtists(inputValue, { limit: 10 }).then((res) => {
      setResultsArtists(res.artists.items);
    });

    spotify.searchAlbums(inputValue, { limit: 10 }).then((res) => {
      setResultsAlbums(res.albums.items);
    });

    spotify.searchTracks(inputValue, { limit: 10 }).then((res) => {
      setResultsTracks(res.tracks.items);
    });
  };

  return (
    <>
      <StyledFormContainer>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search artist, song, track..."
          />
          <button type="submit">Search</button>
        </form>
      </StyledFormContainer>

      <StyledInfoSearched>
        <span>Results for "{inputValue}"</span>
      </StyledInfoSearched>

      {!!resultsArtists.length && <Artists artists={resultsArtists} />}
      {!!resultsAlbums.length && <Albums albums={resultsAlbums} />}
      {!!resultsTracks.length && <TracksList tracks={resultsTracks} />}
    </>
  );
};

export default AddValue;
