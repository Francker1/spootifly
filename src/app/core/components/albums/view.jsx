import { Row } from 'react-bootstrap';
import AlbumCard from '../common/album-card/view';

import { SectionTitle, SectionContainer } from '../../../styles/theme';

const AlbumView = ({ albumsRender }) => {
  const data =
    albumsRender &&
    albumsRender.map((album) => {
      return {
        name: album.name,
        id: album.id,
        images: album.images,
        artists: album.artists,
        uri: album.uri,
        href: album.href,
        release_date: album.release_date,
      };
    });

  return (
    <SectionContainer>
      <SectionTitle>
        <h4>Álbumes más escuchados</h4>
      </SectionTitle>

      <Row>{data && data.map((item) => <AlbumCard key={item?.id} {...item} />)}</Row>
    </SectionContainer>
  );
};

export default AlbumView;
