import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const { Body } = Card;

export const StyledArtistCard = styled(Card)`
  background: transparent;
  figure {
    border-radius: 50%;
    height: 170px;
    overflow: hidden;

    img {
      height: inherit;
    }
  }
`;

export const StyledBody = styled(Body)`
  color: var(--white-color);
  padding: 0;
  text-align: center;

  .artist_name {
    font-size: 16px;
  }

  .artist_info {
    color: var(--gray-color-light);
    font-size: 14px;
  }
`;
