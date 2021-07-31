import { Container, Col, Row } from 'react-bootstrap';
import NavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

const MusicPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>

        <Col md={10}>
          <NavBar />
          <div>music!</div>
        </Col>
      </Row>
    </Container>
  );
};

export default MusicPage;
