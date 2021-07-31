import styled from 'styled-components';

import { Container, Col } from 'react-bootstrap';

import TestImg from '../../shared/img/funkofone-cover.jpg';
import { Colors } from '../../../styles/theme';

const { mainColor } = Colors;

export const MainContainer = styled(Container)`
  height: calc(100vh);
`;

export const StyledColMsg = styled(Col)`
  display: flex;
  align-items: center;
  text-align: center;

  h1 {
    color: ${mainColor};
  }
`;

export const StyledColImg = styled(Col)`
  background-image: url(${TestImg});
  background-position: initial;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh);
  width: 100%;
`;
