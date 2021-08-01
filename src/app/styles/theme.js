import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const SharedBtnStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  font-size: 14px;
  height: 40px;
  padding: 0px 32px;
  background-color: var(--accent-color);
  color: var(--white-color);
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
