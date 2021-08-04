import TracksView from './view';

const TracksList = ({ tracks }) => {
  return <TracksView tracksRender={tracks} />;
};

export default TracksList;
