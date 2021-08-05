import styled, { css } from 'styled-components';
import { Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

export const SharedBtnStyles = css`
  align-items: center;
  background-color: var(--accent-color);
  border-radius: 40px;
  color: var(--white-color);
  display: inline-flex;
  font-size: 14px;
  height: 40px;
  justify-content: center;
  padding: 0px 32px;
`;

export const StyledLink = styled(Link)`
  ${SharedBtnStyles}

  &:hover {
    color: var(--white-color);
    background-color: var(--accent-color-dark);
  }
`;

export const SectionContainer = styled.div`
  margin-bottom: 32px;
`;

export const SectionTitle = styled.div`
  margin-bottom: 22px;
  color: var(--white-color);
`;

export const StyledContent = styled.div`
  padding: 32px;
`;

export const StyledSidebar = styled(Col)`
  height: 100%;
  left: 0;
  padding: 0px;
  position: fixed;
  top: 0;
  z-index: 100;
`;

export const StyledMainContent = styled(Col)`
  background: var(--black-color);
  min-height: 100vh;
`;

export const StyledHref = styled.a`
  ${SharedBtnStyles}

  &:hover {
    color: var(--white-color);
    background-color: var(--accent-color-dark);
  }
`;
