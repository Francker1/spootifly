import { useState, useEffect } from 'react';
import api from '../helpers/methodsAPI';

export const useFetchData = (token) => {
  const [stateReleases, setStateReleases] = useState({
    data: [],
    loading: true,
  });
  const [stateTopArtists, setStateTopArtists] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    if (!token) return;

    api(token)
      .getNewReleases()
      .then((items) => {
        setStateReleases({
          data: items,
          loading: false,
        });
      });

    api(token)
      .getTopArtists()
      .then((items) => {
        setStateTopArtists({
          data: items,
          loading: false,
        });
      });
  }, [token]);

  return [stateReleases, stateTopArtists];
};
