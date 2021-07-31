import { Row, Col } from 'react-bootstrap';

import { MainContainer, StyledColMsg, StyledColImg } from './styles';

const CoverView = () => {
  return (
    <MainContainer fluid>
      <Row>
        <StyledColMsg md={6}>
          <Col className="p-4">
            <h1 className="mb-4">Welcome to Spootifly</h1>
            <p>Discover our list of phones with the latest market trends</p>
            <div className="col col-lg-6 | mx-auto mt-5">test</div>
          </Col>
        </StyledColMsg>
        <StyledColImg className="col d-sm-none d-md-block | p-0" md={6} />
      </Row>
    </MainContainer>
  );
};

export default CoverView;
