import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useMusicContextValue } from '../../../helpers/AppContext';
import SpotifyWebApi from 'spotify-web-api-js';
import ArtistCard from '../../common/artists-card/view';

const spotify = new SpotifyWebApi();

const AddValue = () => {
  const [{ token }] = useMusicContextValue();

  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!token) return;
    spotify.setAccessToken(token);
  }, [token]);

  useEffect(() => {
    if (!inputValue) {
      setResults([]);
      return;
    }
    if (!token) return;
  }, [inputValue, token]);

  const handleSubmit = (e) => {
    e.preventDefault();

    spotify.searchArtists(inputValue).then((res) => {
      setResults(
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
        {results.map((result) => (
          <ArtistCard artist={result} key={result.id} />
        ))}
      </Row>
    </>
  );
};

export default AddValue;
