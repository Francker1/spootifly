import { Row, CardDeck } from 'react-bootstrap';
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
            {/* <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard /> */}
          </CardDeck>
        </div>
      </Row>
    </SectionContainer>
  );
};

export default ArtistsView;
