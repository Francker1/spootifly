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
    getNewReleases: async () => {
      try {
        const url = `${API_URL_SPOTIFY}/browse/new-releases?limit=12`;

        const resp = await fetch(url, requestOptions);
        const { albums } = await resp.json();
        return albums;
      } catch (e) {
        console.log(e);
      }
    },
    getTopArtists: async () => {
      try {
        const url = `${API_URL_SPOTIFY}/artists?ids=4q3ewBCX7sLwd24euuV69X%2C3TVXtAsR1Inumwj472S9r4%2C64KEffDW9EtZ1y2vBYgq8T%2C6qqNVTkY8uBg9cP3Jd7DAH%2C246dkjvS1zLTtiykXe5h60%2C6M2wZ9GZgrQXHCFfjv46we`;
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
