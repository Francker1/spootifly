import { Container, Row, Col } from 'react-bootstrap';

const CoverView = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="cover-msg__container" md={6}>
          <Col className="p-4">
            <h1 className="mb-4">Welcome to Spootifly</h1>
            <p>Discover our list of phones with the latest market trends</p>
            <div className="col col-lg-6 | mx-auto mt-5">test</div>
          </Col>
        </Col>
        <Col className="col d-sm-none d-md-block | p-0" md={6}>
          <div className="cover-img" />
        </Col>
      </Row>
    </Container>
  );
};

export default CoverView;
