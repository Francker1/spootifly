const API_URL_SPOTIFY = `https://api.spotify.com/v1`;

const api = (token) => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  return {
    getNewReleases: async (limit) => {
      try {
        const url = `${API_URL_SPOTIFY}/browse/new-releases?limit=${limit}`;

        const resp = await fetch(url, requestOptions);
        const { albums } = await resp.json();
        return albums;
      } catch (e) {
        console.log(e);
      }
    },
    getTopArtists: async (idsArtists) => {
      try {
        const url = `${API_URL_SPOTIFY}/artists?ids=${idsArtists}`;
        const resp = await fetch(url, requestOptions);
        const { artists } = await resp.json();
        return artists;
      } catch (e) {
        console.log(e);
      }
    },
  };
};

export default api;
