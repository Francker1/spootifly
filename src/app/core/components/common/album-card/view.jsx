import { Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { StyledAlbumCard, StyledBody } from './styles';

const AlbumCard = ({ name, release_date, images, artists }) => {
  const albumImg = images[1]?.url;

  return (
    <Col sm={4} lg={3} className="mb-5">
      <StyledAlbumCard>
        <figure>
          <Card.Img variant="top" src={albumImg} />
        </figure>
        <StyledBody>
          <Card.Title className="album_name">{name}</Card.Title>
          <div className="album_info">
            {artists.map((artist, index) => (
              <span key={index}> {artist?.name}.</span>
            ))}
            <p>Release: {release_date}</p>
          </div>
        </StyledBody>
      </StyledAlbumCard>
    </Col>
  );
};

AlbumCard.propTypes = {
  name: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  images: PropTypes.array,
};

export default AlbumCard;
