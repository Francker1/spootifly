import { Row, Col } from 'react-bootstrap';

import { MainContainer, StyledColMsg, StyledColImg } from './styles';
import { StyledLink } from '../../../styles/theme';

const CoverView = () => {
  return (
    <MainContainer fluid>
      <Row>
        <StyledColMsg md={6}>
          <Col className="p-4">
            <h1 className="mb-4">Bienvenido a Spootifly</h1>
            <p>Más de 73 millones de canciones, podcast y playlists</p>
            <div className="col col-lg-6 | mx-auto mt-5">
              <StyledLink to="/app">Spootifly Free</StyledLink>
            </div>
          </Col>
        </StyledColMsg>
        <StyledColImg className="col d-sm-none d-md-block | p-0" md={6} />
      </Row>
    </MainContainer>
  );
};

export default CoverView;
