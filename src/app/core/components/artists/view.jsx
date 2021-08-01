import { Row, Col, CardDeck } from 'react-bootstrap';
import ArtistCard from '../common/artists-card/view';

import { SectionTitle, SectionContainer } from '../../../styles/theme';

const ArtistsView = () => {
  return (
    <SectionContainer>
      <SectionTitle>
        <h4>Artistas del momento</h4>
      </SectionTitle>

      <Row>
        <div>
          <CardDeck>
            <Col sm={4} lg={3} className="mb-5">
              <ArtistCard />
            </Col>

            <Col sm={4} lg={3} className="mb-5">
              <ArtistCard />
            </Col>

            <Col sm={4} lg={3} className="mb-5">
              <ArtistCard />
            </Col>

            <Col sm={4} lg={3} className="mb-5">
              <ArtistCard />
            </Col>
          </CardDeck>
        </div>
      </Row>
    </SectionContainer>
  );
};

export default ArtistsView;
