import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import NavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

import { StyledContent, StyledSidebar, StyledMainContent } from '../../../styles/theme';
import SearchForm from '../../components/forms/searchForm';

const ScreePage = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <Container fluid>
      <Row>
        <StyledSidebar md={2}>
          <Sidebar />
        </StyledSidebar>

        <StyledMainContent md={{ span: 10, offset: 2 }}>
          <NavBar />
          <StyledContent>
            <SearchForm setCategories={setCategories} />
          </StyledContent>
        </StyledMainContent>
      </Row>
    </Container>
  );
};

export default ScreePage;
