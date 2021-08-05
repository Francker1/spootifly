import AlbumView from './view';

const Albums = ({ albums, title }) => {
  return <AlbumView albumsRender={albums} title={title} />;
};

export default Albums;
