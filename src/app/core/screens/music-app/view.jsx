import { Container, Col, Row } from 'react-bootstrap';
import Artists from '../../components/artists';
import NavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

import { StyledContent } from './styles';

const MusicPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} style={{ padding: '0' }}>
          <Sidebar />
        </Col>

        <Col md={10} style={{ background: 'var(--black-color)' }}>
          <NavBar />
          <StyledContent>
            <Artists />
          </StyledContent>
        </Col>
      </Row>
    </Container>
  );
};

export default MusicPage;
