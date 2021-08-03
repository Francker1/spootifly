import { Row, Col, CardDeck } from 'react-bootstrap';
import AlbumCard from '../common/album-card/view';

import { SectionTitle, SectionContainer } from '../../../styles/theme';

const AlbumView = ({ album }) => {
  //console.log(album);

  return (
    <SectionContainer>
      <SectionTitle>
        <h4>Álbumes más escuchados</h4>
      </SectionTitle>

      <Row>{album && album.map((item) => <AlbumCard key={item?.id} {...item} />)}</Row>
    </SectionContainer>
  );
};

export default AlbumView;
