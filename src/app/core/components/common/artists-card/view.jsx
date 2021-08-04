import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { StyledArtistCard, StyledBody } from './styles';

const ArtistCard = ({ name, followers, images }) => {
  const artistImg = images[1]?.url;

  return (
    <Col sm={4} lg={2} className="mb-5">
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
  name: PropTypes.string.isRequired,
  followers: PropTypes.number,
  images: PropTypes.array,
};

export default ArtistCard;
