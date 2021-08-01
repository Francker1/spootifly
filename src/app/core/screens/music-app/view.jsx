import { Container, Col, Row } from 'react-bootstrap';
import Albums from '../../components/albums';
import Artists from '../../components/artists';
import NavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

import { StyledContent, StyledSidebar, StyledMainContent } from './styles';

const MusicPage = () => {
  return (
    <Container fluid>
      <Row>
        <StyledSidebar md={2}>
          <Sidebar />
        </StyledSidebar>

        <StyledMainContent md={{ span: 10, offset: 2 }}>
          <NavBar />
          <StyledContent>
            <Artists />
            <Albums />
          </StyledContent>
        </StyledMainContent>
      </Row>
    </Container>
  );
};

export default MusicPage;
