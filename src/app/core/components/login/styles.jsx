import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';

import TestImg from '../../shared/img/cover-img.jpg';

export const MainContainer = styled(Container)`
  height: calc(100vh);
`;

export const StyledColMsg = styled(Col)`
  align-items: center;
  display: flex;
  text-align: center;

  h1 {
    color: var(--main-color);
  }
`;

export const StyledColImg = styled(Col)`
  background-image: url(${TestImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh);
  width: 100%;
`;
