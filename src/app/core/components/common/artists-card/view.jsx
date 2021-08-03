import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { StyledArtistCard } from './styles';

const ArtistCard = ({ artist }) => {
  const { name, id, followers, images } = { ...artist };
  const artistImg = images[1]?.url;

  return (
    <Col sm={4} lg={2} className="mb-5" key={id}>
      <StyledArtistCard>
        <figure>
          <Card.Img variant="top" src={artistImg} />
        </figure>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{followers} fans</Card.Text>
        </Card.Body>
      </StyledArtistCard>
    </Col>
  );
};

ArtistCard.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default ArtistCard;
