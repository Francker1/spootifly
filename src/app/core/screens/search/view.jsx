import { Container, Row } from 'react-bootstrap';

import NavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

import { StyledContent, StyledSidebar, StyledMainContent } from '../../../styles/theme';

const ScreePage = () => {
  return (
    <Container fluid>
      <Row>
        <StyledSidebar md={2}>
          <Sidebar />
        </StyledSidebar>

        <StyledMainContent md={{ span: 10, offset: 2 }}>
          <NavBar />
          <StyledContent>
            <p>Resultados!!!</p>
          </StyledContent>
        </StyledMainContent>
      </Row>
    </Container>
  );
};

export default ScreePage;
