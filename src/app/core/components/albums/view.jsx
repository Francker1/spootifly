import { Row, Col, CardDeck } from 'react-bootstrap';
import AlbumCard from '../common/album-card/view';

import { SectionTitle, SectionContainer } from '../../../styles/theme';

const AlbumView = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        <h4>Álbumes más escuchados</h4>
      </SectionTitle>

      <Row>
        <div>
          <CardDeck>
            <Col sm={4} lg={3} className="mb-5">
              <AlbumCard />
            </Col>

            <Col sm={4} lg={3} className="mb-5">
              <AlbumCard />
            </Col>

            <Col sm={4} lg={3} className="mb-5">
              <AlbumCard />
            </Col>

            <Col sm={4} lg={3} className="mb-5">
              <AlbumCard />
            </Col>
          </CardDeck>
        </div>
      </Row>
    </SectionContainer>
  );
};

export default AlbumView;
