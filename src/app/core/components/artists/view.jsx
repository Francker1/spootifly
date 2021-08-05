import { Row } from 'react-bootstrap';
import ArtistCard from '../common/artists-card/view';

import { SectionTitle, SectionContainer } from '../../../styles/theme';

const ArtistsView = ({ artistsRender, title = 'Artistas' }) => {
  const data =
    artistsRender &&
    artistsRender.map((artist) => {
      return {
        name: artist.name,
        id: artist.id,
        images: artist.images,
        uri: artist.uri,
        followers: artist.followers.total,
        href: artist.href,
      };
    });
  return (
    <SectionContainer>
      <SectionTitle>
        <h4>{title}</h4>
      </SectionTitle>

      <Row>{data && data.map((item) => <ArtistCard key={item?.id} {...item} />)}</Row>
    </SectionContainer>
  );
};

export default ArtistsView;
