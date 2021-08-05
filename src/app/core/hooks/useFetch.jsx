import { useState, useEffect } from 'react';
import api from '../helpers/methodsAPI';

export const useFetchData = (token, idsArtists = '', limit = '') => {
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
      .getNewReleases(limit)
      .then((items) => {
        setStateReleases({
          data: items,
          loading: false,
        });
      });

    api(token)
      .getTopArtists(idsArtists)
      .then((items) => {
        setStateTopArtists({
          data: items,
          loading: false,
        });
      });
  }, [token, idsArtists, limit]);

  return [stateReleases, stateTopArtists];
};
