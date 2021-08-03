import { Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ArtistCard = ({ artist }) => {
  const { name, id, followers, images } = { ...artist };
  const artistImg = images[1]?.url;

  return (
    <Col sm={4} lg={2} className="mb-5" key={id}>
      <Card>
        <Card.Img variant="top" src={artistImg} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{followers} fans</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

ArtistCard.propTypes = {
  artist: PropTypes.object.isRequired,
};

export default ArtistCard;
