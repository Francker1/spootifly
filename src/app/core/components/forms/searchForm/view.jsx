import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useMusicContextValue } from '../../../helpers/AppContext';
import SpotifyWebApi from 'spotify-web-api-js';
import ArtistCard from '../../common/artists-card/view';
import Albums from '../../../components/albums';
import TracksList from '../../../components/tracks';

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
      setResultsArtists(
        res.artists.items.map((artist) => {
          return {
            name: artist.name,
            id: artist.id,
            images: artist.images,
            uri: artist.uri,
            followers: artist.followers.total,
            href: artist.href,
          };
        }),
      );
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>

      <div>Results for "{inputValue}"</div>
      <Row>
        {resultsArtists.map((result) => (
          <ArtistCard artist={result} key={result.id} />
        ))}
      </Row>
      {!!resultsAlbums.length && (
        <Row>
          <Albums albums={resultsAlbums} />
        </Row>
      )}
      {!!resultsTracks.length && (
        <Row>
          <TracksList tracks={resultsTracks} />
        </Row>
      )}
    </>
  );
};

export default AddValue;
