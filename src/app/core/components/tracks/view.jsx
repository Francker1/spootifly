import { TableContainer, StyledTable } from './styles';

import { millisToMinutesAndSeconds } from '../../helpers/main';

const TracksView = ({ tracksRender }) => {
  const data =
    tracksRender &&
    tracksRender.map((track) => {
      return {
        name: track.name,
        id: track.id,
        artists: track.artists[0],
        duration_ms: track.duration_ms,
        preview_url: track.preview_url,
        album: track.album.name,
      };
    });

  return (
    <TableContainer>
      <div>
        <h4>Songs</h4>
      </div>
      <StyledTable>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th>D.</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item?.name}</td>
              <td>{item?.artists?.name}</td>
              <td>{item?.album}</td>
              <td>{millisToMinutesAndSeconds(item?.duration_ms)}</td>
              <td>
                <audio controls>
                  <source src={item.preview_url} type="audio/ogg" />
                </audio>
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default TracksView;
