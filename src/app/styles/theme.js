import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const Colors = {
  mainColor: '#0E3150',
  accentMainColor: '#F14668',
  accentDarkColor: '#CC3A57',
  white: '#FEFEFE',
  black: '#191922',
};

const SharedBtnStyles = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  font-size: 14px;
  height: 40px;
  padding: 0px 32px;
  background-color: ${Colors.accentMainColor};
  color: ${Colors.white};
`;

export const StyledLink = styled(Link)`
  ${SharedBtnStyles}

  &:hover {
    color: ${Colors.white};
    background-color: ${Colors.accentDarkColor};
  }
`;
