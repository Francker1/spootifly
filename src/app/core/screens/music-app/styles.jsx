import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const StyledContent = styled.div`
  padding: 32px;
`;

export const StyledSidebar = styled(Col)`
  padding: 0px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100%;
`;

export const StyledMainContent = styled(Col)`
  background: var(--black-color);
`;
