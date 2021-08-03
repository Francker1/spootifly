import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { StyledArtistCard, StyledBody } from './styles';

const ArtistCard = ({ artist }) => {
  const { name, id, followers, images } = { ...artist };
  const artistImg = images[1]?.url;

  return (
    <Col sm={4} lg={2} className="mb-5" key={id}>
      <StyledArtistCard>
        <figure>
          <Card.Img variant="top" src={artistImg} />
        </figure>
        <StyledBody>
          <Card.Title className="artist_name">{name}</Card.Title>
          <div className="artist_info">
            <span>{followers} fans</span>
          </div>
        </StyledBody>
      </StyledArtistCard>
    </Col>
  );
};

ArtistCard.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default ArtistCard;
