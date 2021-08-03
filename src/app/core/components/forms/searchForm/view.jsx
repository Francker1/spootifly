import React, { useState, useEffect } from 'react';
import { useMusicContextValue } from '../../../helpers/AppContext';
import SpotifyWebApi from 'spotify-web-api-js';
import ArtistCard from '../../common/artists-card/view';

const spotify = new SpotifyWebApi();

const AddValue = () => {
  const [{ token }] = useMusicContextValue();

  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);
  console.log(results);

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
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();

    spotify.searchArtists(inputValue).then((res) => {
      setResults(
        res.artists.items.map((artist) => {
          return {
            name: artist.name,
            id: artist.id,
            images: artist.images,
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

      {results.map((result) => (
        <p key={result.id}>{result.name}</p>
      ))}
    </>
  );
};

export default AddValue;
