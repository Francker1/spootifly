import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useMusicContextValue } from '../../../helpers/AppContext';
import SpotifyWebApi from 'spotify-web-api-js';
import ArtistCard from '../../common/artists-card/view';
import Albums from '../../../components/albums';

const spotify = new SpotifyWebApi();

const AddValue = () => {
  const [{ token }] = useMusicContextValue();

  const [inputValue, setInputValue] = useState('');
  const [resultsArtists, setResultsArtists] = useState([]);
  const [resultsAlbums, setResultsAlbums] = useState([]);

  useEffect(() => {
    if (!token) return;
    spotify.setAccessToken(token);
  }, [token]);

  useEffect(() => {
    if (!inputValue) {
      setResultsArtists([]);
      setResultsAlbums([]);
      return;
    }
    if (!token) return;
  }, [inputValue, token]);

  const handleSubmit = (e) => {
    e.preventDefault();

    spotify.searchArtists(inputValue).then((res) => {
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

    spotify.searchAlbums(inputValue, { limit: 15 }).then((res) => {
      setResultsAlbums(
        res.albums.items.map((album) => {
          return {
            name: album.name,
            id: album.id,
            images: album.images,
            artists: album.artists,
            uri: album.uri,
            href: album.href,
            release_date: album.release_date,
          };
        }),
      );
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
      {resultsAlbums && (
        <Row>
          <Albums albums={resultsAlbums} />
        </Row>
      )}
    </>
  );
};

export default AddValue;
