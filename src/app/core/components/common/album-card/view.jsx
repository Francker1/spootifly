import { Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AlbumCard = ({ name, release_date, images, artists }) => {
  const albumImg = images[1]?.url;

  return (
    <Col sm={4} lg={3} className="mb-5">
      <Card>
        <Card.Img variant="top" src={albumImg} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div>
            {artists.map((artist) => (
              <span> {artist?.name}.</span>
            ))}
            <p>{release_date}</p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

AlbumCard.propTypes = {
  name: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  images: PropTypes.array,
};

export default AlbumCard;
