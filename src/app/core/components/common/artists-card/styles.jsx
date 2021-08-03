import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const { Body } = Card;

export const StyledArtistCard = styled(Card)`
  background: transparent;
  figure {
    border-radius: 50%;
    overflow: hidden;
    height: 170px;

    img {
      height: inherit;
    }
  }
`;

export const StyledBody = styled(Body)`
  padding: 0;
  text-align: center;
  color: var(--white-color);

  .artist_name {
    font-size: 16px;
  }

  .artist_info {
    color: var(--gray-color-light);
    font-size: 14px;
  }
`;
