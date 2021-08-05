import ArtistView from './view';

const Artists = ({ artists, title }) => {
  return <ArtistView artistsRender={artists} title={title} />;
};

export default Artists;
